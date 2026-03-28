import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-rd.png";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Servizi", href: "#servizi" },
  { label: "Contatti", href: "#contatti" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-foreground/95 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 md:px-12">
        <button onClick={() => scrollTo("#hero")}>
          <img src={logo} alt="RD Costruzioni" className="h-10 w-auto" />
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollTo(item.href)}
                className="text-[11px] font-body tracking-[0.25em] uppercase text-white/60 hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo("#contatti")}
              className="border border-primary/60 text-primary px-5 py-2.5 text-[11px] font-body tracking-[0.25em] uppercase hover:bg-primary hover:text-white transition-all duration-300"
            >
              Preventivo
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-foreground border-t border-white/10 px-6 pb-8 animate-fade-in-slow">
          <ul className="flex flex-col gap-6 pt-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollTo(item.href)}
                  className="text-white/60 font-body text-sm tracking-[0.25em] uppercase hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => scrollTo("#contatti")}
                className="bg-primary text-white px-6 py-3 text-[11px] font-body tracking-[0.25em] uppercase w-full hover:bg-amber-600 transition-colors"
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
