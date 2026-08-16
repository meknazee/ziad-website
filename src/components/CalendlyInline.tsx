import { useEffect, useRef } from "react";
import { CALENDLY_URL, loadCalendly } from "@/lib/calendly";

export const CalendlyInline = ({
  url = CALENDLY_URL,
  height = 700,
}: {
  url?: string;
  height?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    loadCalendly()
      .then(() => {
        if (cancelled || !ref.current) return;
        const calendly = (window as any).Calendly;
        if (!calendly?.initInlineWidget) return;
        ref.current.innerHTML = "";
        calendly.initInlineWidget({ url, parentElement: ref.current });
      })
      .catch(() => {
        /* fallback link stays visible below */
      });
    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <div ref={ref} style={{ minWidth: 320, height }} />
      <div className="border-t border-border px-6 py-4 text-sm text-muted-foreground">
        calendar not loading?{" "}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 decoration-accent/40 hover:decoration-accent text-foreground"
        >
          open it in a new tab
        </a>
        .
      </div>
    </div>
  );
};
