import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CalendarCheck } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/coach-ziad";

export const FloatingBookCta = () => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hidden = pathname.startsWith("/book") || pathname.startsWith("/auth");
  if (hidden) return null;

  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="book a session"
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-accent-foreground text-sm font-medium shadow-lg transition-all duration-300 hover:opacity-95 hover:-translate-y-0.5 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <CalendarCheck className="h-4 w-4" />
      book a session
    </a>
  );
};
