import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { addDays, startOfDay, endOfDay, format } from "date-fns";
import { ArrowLeft, Clock, MapPin, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { getMeetingType } from "@/lib/booking-config";
import { computeSlots, isDateAvailable, type Slot } from "@/lib/booking-availability";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const BookMeetingType = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const meetingType = getMeetingType(slug);

  const [selectedDate, setSelectedDate] = useState<Date>(() =>
    addDays(startOfDay(new Date()), 1),
  );
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!user) return;
    const meta = (user.user_metadata ?? {}) as Record<string, string>;
    setName((n) => n || meta.display_name || meta.full_name || meta.name || "");
  }, [user]);

  // Fetch bookings overlapping selected date so we know which slots are taken.
  const dateKey = format(selectedDate, "yyyy-MM-dd");
  const bookingsQuery = useQuery({
    queryKey: ["bookings-on-date", dateKey],
    queryFn: async () => {
      const dayStart = startOfDay(selectedDate).toISOString();
      const dayEnd = endOfDay(selectedDate).toISOString();
      const { data, error } = await supabase
        .from("bookings")
        .select("starts_at, ends_at, status")
        .neq("status", "cancelled")
        .gte("starts_at", dayStart)
        .lte("starts_at", dayEnd);
      if (error) throw error;
      return data ?? [];
    },
    enabled: !!user, // RLS requires auth to read bookings
  });

  const slots = useMemo(() => {
    if (!meetingType) return [];
    return computeSlots(
      selectedDate,
      meetingType.duration_minutes,
      bookingsQuery.data ?? [],
    );
  }, [meetingType, selectedDate, bookingsQuery.data]);

  const createBooking = useMutation({
    mutationFn: async (slot: Slot) => {
      if (!user) throw new Error("Not signed in");
      if (!meetingType) throw new Error("Unknown meeting type");
      const { data, error } = await supabase
        .from("bookings")
        .insert({
          client_id: user.id,
          meeting_type_slug: meetingType.slug,
          meeting_type_title: meetingType.title,
          duration_minutes: meetingType.duration_minutes,
          location: meetingType.location,
          starts_at: slot.start.toISOString(),
          ends_at: slot.end.toISOString(),
          client_name: name.trim() || (user.email ?? ""),
          client_email: user.email ?? "",
          client_notes: notes.trim(),
          status: "pending_confirmation",
        })
        .select()
        .single();
      if (error) throw error;
      // TODO(google-calendar): events.insert + save google_event_id
      // TODO(resend): student confirmation + coach notification email
      return data;
    },
    onSuccess: (row) => {
      navigate(`/book/success?id=${row.id}`);
    },
    onError: (err) => {
      toast.error(err instanceof Error ? err.message : "Could not create booking");
      bookingsQuery.refetch();
      setSelectedSlot(null);
    },
  });

  if (!meetingType) {
    return (
      <Layout>
        <section className="mx-auto max-w-md px-6 py-24 text-center">
          <h1 className="font-display text-3xl">Session type not found</h1>
          <p className="mt-3 text-muted-foreground">That link may have changed.</p>
          <Link to="/book" className="mt-6 inline-block underline">Back to booking</Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6 py-10">
        <Link
          to="/book"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All sessions
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_2fr]">
          <aside className="space-y-3">
            <div className="text-sm uppercase tracking-[0.2em] text-accent">Coach Z</div>
            <h1 className="font-display text-3xl tracking-tight">{meetingType.title}</h1>
            <p className="text-sm text-muted-foreground">{meetingType.description}</p>
            <div className="space-y-2 pt-2 text-sm text-muted-foreground">
              <div className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" /> {meetingType.duration_minutes} minutes
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" /> {meetingType.location}
              </div>
            </div>
          </aside>

          <div className="rounded-xl border bg-card p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="mb-3 text-sm font-medium">Pick a date</h2>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(d) => {
                    if (d) {
                      setSelectedDate(d);
                      setSelectedSlot(null);
                    }
                  }}
                  disabled={(d) =>
                    d < startOfDay(new Date()) || !isDateAvailable(d)
                  }
                  className={cn("p-0 pointer-events-auto")}
                />
              </div>
              <div>
                <h2 className="mb-3 text-sm font-medium">
                  {format(selectedDate, "EEEE, MMMM d")}
                </h2>
                {!user ? (
                  <div className="rounded-lg border border-dashed bg-muted/40 p-5 text-sm text-muted-foreground">
                    Sign in to see open times and book this session.
                    <Button
                      type="button"
                      onClick={() =>
                        navigate(
                          `/auth?redirect=${encodeURIComponent(`/book/${slug}`)}`,
                        )
                      }
                      className="mt-4 w-full"
                    >
                      Sign in / create account
                    </Button>
                  </div>
                ) : bookingsQuery.isLoading ? (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" /> Loading times…
                  </div>
                ) : slots.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    No times available — try another day.
                  </p>
                ) : (
                  <div className="grid max-h-[420px] grid-cols-2 gap-2 overflow-y-auto pr-1">
                    {slots.map((s) => {
                      const active = selectedSlot?.iso === s.iso;
                      return (
                        <button
                          key={s.iso}
                          onClick={() => setSelectedSlot(s)}
                          className={cn(
                            "rounded-lg border px-3 py-2 text-sm transition",
                            active
                              ? "border-foreground bg-foreground text-background"
                              : "border-border bg-background hover:border-accent/60",
                          )}
                        >
                          {s.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {selectedSlot && user && (
              <form
                className="mt-6 space-y-4 border-t pt-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!name.trim()) {
                    toast.error("Please enter your name");
                    return;
                  }
                  createBooking.mutate(selectedSlot);
                }}
              >
                <div className="text-sm">
                  <span className="text-muted-foreground">Selected: </span>
                  <span className="font-medium">
                    {format(selectedSlot.start, "EEE, MMM d · h:mm a")}
                  </span>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name">Your name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" value={user.email ?? ""} disabled />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="notes">
                    Anything to share?{" "}
                    <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    maxLength={2000}
                    placeholder="Level, goals, anything I should know…"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={createBooking.isPending || authLoading}
                  className="w-full"
                >
                  {createBooking.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Booking…
                    </>
                  ) : (
                    "Request this slot"
                  )}
                </Button>
                <p className="text-xs text-muted-foreground">
                  Coach Z will confirm by email within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookMeetingType;
