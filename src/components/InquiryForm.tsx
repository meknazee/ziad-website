import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Loader2, Send, X } from "lucide-react";

const SERVICE_LABELS: Record<string, string> = {
  "private-1-1": "private 1:1",
  "semi-private": "semi-private (2)",
  "junior-development": "junior development",
  "strength-conditioning": "strength & conditioning",
};

const schema = z.object({
  name: z.string().trim().min(1, "name is required").max(120),
  email: z.string().trim().email("valid email required").max(254),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  player_level: z.enum(["beginner", "intermediate", "advanced", "junior"]).optional().or(z.literal("")),
  goals: z.string().trim().max(1000).optional().or(z.literal("")),
  message: z.string().trim().min(1, "tell me a bit about what you're looking for").max(2000),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  player_level: "",
  goals: "",
  message: "",
};

export const InquiryForm = () => {
  const [values, setValues] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [services, setServices] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const raw = searchParams.get("services");
    if (!raw) return;
    const slugs = raw.split(",").map((s) => s.trim()).filter((s) => SERVICE_LABELS[s]);
    if (slugs.length) setServices(Array.from(new Set(slugs)));
  }, [searchParams]);

  const removeService = (slug: string) => {
    const next = services.filter((s) => s !== slug);
    setServices(next);
    const params = new URLSearchParams(searchParams);
    if (next.length) params.set("services", next.join(","));
    else params.delete("services");
    setSearchParams(params, { replace: true });
  };

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setValues((s) => ({ ...s, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      toast({
        title: "check the form",
        description: parsed.error.issues[0]?.message ?? "please review your entries",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    const servicesLine = services.length
      ? `interested in: ${services.map((s) => SERVICE_LABELS[s]).join(", ")}\n\n`
      : "";
    const { error } = await supabase.from("inquiries").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      player_level: parsed.data.player_level || null,
      goals: parsed.data.goals || null,
      message: `${servicesLine}${parsed.data.message}`.slice(0, 2000),
    });
    setSubmitting(false);
    if (error) {
      toast({ title: "something went wrong", description: error.message, variant: "destructive" });
      return;
    }
    setSent(true);
    setValues(initial);
    setServices([]);
    toast({ title: "message sent", description: "coach z will get back to you shortly." });
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8">
        <div className="text-xs uppercase tracking-widest text-accent font-semibold">received</div>
        <h3 className="mt-3 font-display text-2xl">thanks for reaching out.</h3>
        <p className="mt-3 text-muted-foreground">
          coach z will follow up by email within a day. want to lock in a time now?
        </p>
        <a
          href="https://calendly.com/coach-ziad"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-background text-sm font-medium hover:bg-foreground/90"
        >
          book a session
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-5"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="name">
          <input
            required
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputCls}
          />
        </Field>
        <Field label="email">
          <input
            required
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputCls}
          />
        </Field>
        <Field label="phone (optional)">
          <input
            type="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputCls}
          />
        </Field>
        <Field label="player level">
          <select
            value={values.player_level}
            onChange={(e) => update("player_level", e.target.value as FormState["player_level"])}
            className={inputCls}
          >
            <option value="">select…</option>
            <option value="beginner">beginner</option>
            <option value="intermediate">intermediate</option>
            <option value="advanced">advanced</option>
            <option value="junior">junior</option>
          </select>
        </Field>
      </div>
      <Field label="goals (optional)">
        <textarea
          rows={2}
          value={values.goals}
          onChange={(e) => update("goals", e.target.value)}
          className={inputCls}
          placeholder="e.g. sharpen my serve, prep for utr events…"
        />
      </Field>
      <Field label="message">
        <textarea
          required
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className={inputCls}
          placeholder="what are you looking for?"
        />
      </Field>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-background font-medium hover:bg-foreground/90 transition disabled:opacity-70"
      >
        {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        send message
      </button>
    </form>
  );
};

const inputCls =
  "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
    <div className="mt-1.5">{children}</div>
  </label>
);
