export const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-muted border-t border-primary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground mb-2">other projects</p>
            <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-4">
              <a href="/bitcoin-resources" className="text-primary hover:underline text-sm">bitcoin resources</a>
              <a href="/podcast" className="text-primary hover:underline text-sm">podcast & blog</a>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">© 2025. built with patience and coffee.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};