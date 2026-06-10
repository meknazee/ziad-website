import { Link } from "react-router-dom";

export const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-secondary/30 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-display text-lg">Coach Z Tennis</div>
          <p className="text-sm text-muted-foreground mt-2 max-w-xs">
            Pass Academy coach Ziad — private tennis and junior development at Tuckahoe Recreation Club, serving the DC–Virginia area.
          </p>
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
            <li>Washington DC · Arlington · Northern Virginia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="uppercase tracking-wider">Other projects</span>
            <a href="/bitcoin-resources" className="hover:text-foreground">bitcoin resources</a>
            <a href="/podcast" className="hover:text-foreground">podcast &amp; blog</a>
          </div>
          <div>© {new Date().getFullYear()} Coach Z. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};
