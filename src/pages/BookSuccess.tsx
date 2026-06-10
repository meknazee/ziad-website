import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { format } from "date-fns";
import { Check, Loader2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import { CONTACT_EMAIL } from "@/lib/booking-config";

type Booking = {
  id: string;
  meeting_type_title: string;
  duration_minutes: number;
  location: string;
  starts_at: string;
  ends_at: string;
  client_email: string;
};

const BookSuccess = () => {
  const [params] = useSearchParams();
  const id = params.get("id");
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    supabase
      .from("bookings")
      .select("id, meeting_type_title, duration_minutes, location, starts_at, ends_at, client_email")
      .eq("id", id)
      .maybeSingle()
      .then(({ data }) => {
        setBooking(data);
        setLoading(false);
      });
  }, [id]);

  return (
    <Layout>
      <section className="mx-auto max-w-lg px-6 py-20">
        {loading ? (
          <div className="flex items-center justify-center py-20 text-muted-foreground">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        ) : !booking ? (
          <div className="text-center">
            <h1 className="font-display text-3xl">We couldn't find that booking.</h1>
            <Link to="/book" className="mt-6 inline-block underline">Back to booking</Link>
          </div>
        ) : (
          <div className="rounded-2xl border bg-card p-10 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Check className="h-7 w-7" />
            </div>
            <h1 className="font-display text-3xl">You're on the list.</h1>
            <p className="mt-3 text-muted-foreground">
              {format(new Date(booking.starts_at), "EEEE, MMMM d 'at' h:mm a")}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {booking.meeting_type_title} · {booking.duration_minutes} min
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{booking.location}</p>

            <div className="mt-8 rounded-lg border border-dashed bg-secondary/40 p-4 text-sm text-muted-foreground">
              Coach Z will confirm by email within 24 hours. Watch for a reply at
              <span className="font-medium text-foreground"> {booking.client_email}</span>.
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 text-sm">
              <Link to="/" className="underline underline-offset-4">Back home</Link>
              <span className="text-muted-foreground">·</span>
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4">
                Email Coach Z
              </a>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default BookSuccess;
