import { Twitter, Instagram, Github } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center">
          <span className="text-primary font-bold">c</span>
        </div>
        <span className="font-semibold">Cartifi.ai</span>
        <span className="text-sm text-muted-foreground ml-3">Same groceries. Lower total.</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="mailto:hello@cartifi.ai" className="text-sm text-muted-foreground hover:text-foreground transition-colors">hello@cartifi.ai</a>
        <div className="flex items-center gap-3 text-muted-foreground">
          <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter className="w-4 h-4" /></a>
          <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram className="w-4 h-4" /></a>
          <a href="#" aria-label="Github" className="hover:text-primary transition-colors"><Github className="w-4 h-4" /></a>
        </div>
        <div className="flex text-xs text-muted-foreground rounded-full border border-border px-3 py-1.5">
          <button className="font-medium text-foreground">EN</button>
          <span className="mx-2 opacity-40">/</span>
          <button className="hover:text-foreground transition-colors">CZ</button>
        </div>
      </div>
    </div>
  </footer>
);
