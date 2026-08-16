import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";

const socials = [
  { icon: Instagram, label: "instagram" },
  { icon: Youtube, label: "youtube" },
];

export const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-secondary/30 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-display text-lg">coach ziad&nbsp;</div>
          <div className="mt-4 flex items-center gap-3">
            {socials.map(({ icon: Icon, label }) => (
              <span
                key={label}
                title={`${label} — coming soon`}
                aria-label={`${label} — coming soon`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground/60"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
            <span className="text-xs text-muted-foreground">coming soon</span>
          </div>
        </div>
        <div className="text-sm">
          <div className="font-medium mb-3">Explore</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/working-athlete" className="hover:text-foreground">The Library</Link></li>
            <li><Link to="/book" className="hover:text-foreground">Book a session</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-medium mb-3">Contact</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="mailto:contactme@coachziad.com" className="hover:text-foreground">contactme@coachziad.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Coach Z. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
