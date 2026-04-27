import { Button } from "@/components/ui/button";

export const Nav = () => (
  <header className="fixed top-0 inset-x-0 z-50">
    <div className="container flex items-center justify-between py-4">
      <a href="#top" className="flex items-center gap-2 group">
        <div className="w-9 h-9 rounded-2xl bg-primary/15 flex items-center justify-center shadow-soft">
          <span className="text-primary font-bold text-lg">c</span>
        </div>
        <span className="font-semibold tracking-tight text-lg">Cartifi<span className="text-primary">.ai</span></span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
        <a href="#demo" className="hover:text-foreground transition-colors">Try it</a>
        <a href="#proof" className="hover:text-foreground transition-colors">Savings</a>
      </nav>
      <div className="flex items-center gap-2">
        <div className="hidden sm:flex text-xs text-muted-foreground rounded-full border border-border px-3 py-1.5">
          <button className="font-medium text-foreground">EN</button>
          <span className="mx-2 opacity-40">/</span>
          <button className="hover:text-foreground transition-colors">CZ</button>
        </div>
        <Button variant="cta" size="sm" asChild>
          <a href="#demo">Check savings</a>
        </Button>
      </div>
    </div>
  </header>
);
