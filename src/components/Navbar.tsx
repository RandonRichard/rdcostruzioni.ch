import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-rd.png";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Servizi", href: "#servizi" },
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Contatti", href: "#contatti" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:px-12">
        <button onClick={() => scrollTo("#hero")} className="flex items-center gap-3">
          <img src={logo} alt="RD Costruzioni" className="h-12 w-auto" />
          <span className="hidden sm:block font-display text-sm font-bold leading-tight tracking-wide text-foreground">
            RD IMPRESA COSTRUZIONI SAGL<br />
            <span className="text-xs font-medium text-muted-foreground tracking-widest">TICINO</span>
          </span>
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollTo(item.href)}
                className="text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo("#contatti")}
              className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-medium hover:brightness-110 transition-all"
            >
              Richiedi Preventivo
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6 animate-fade-in-slow">
          <ul className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollTo(item.href)}
                  className="text-foreground font-body text-base"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => scrollTo("#contatti")}
                className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-medium w-full"
              >
                Richiedi Preventivo
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
