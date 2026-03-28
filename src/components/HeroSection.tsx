import heroImage from "@/assets/hero-construction.jpg";
import { ArrowDown, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cantiere RD Costruzioni Ticino"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/70 to-foreground/45" />
      </div>

      {/* Giant decorative "RD" */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-bold leading-none block"
          style={{ fontSize: "38vw", color: "rgba(212, 160, 23, 0.055)" }}
        >
          RD
        </span>
      </div>

      {/* Vertical side text */}
      <div
        className="absolute right-10 top-0 bottom-0 hidden lg:flex flex-col items-center justify-center gap-6 pointer-events-none"
        aria-hidden="true"
      >
        <span className="writing-vertical text-white/20 text-[9px] tracking-[0.7em] uppercase font-body">
          Canton Ticino — Svizzera
        </span>
        <div className="w-px h-20 bg-primary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 pb-36 pt-40">
        <p
          className="text-primary font-body text-[10px] tracking-[0.6em] uppercase mb-10 animate-slide-up"
        >
          RD Impresa Costruzioni SAGL — Ticino, Svizzera
        </p>

        <h1
          className="font-display font-bold leading-[0.88] text-white mb-14 animate-slide-up"
          style={{
            fontSize: "clamp(3.5rem, 10.5vw, 9.5rem)",
            animationDelay: "0.1s",
          }}
        >
          Precisione
          <br />
          <em className="not-italic text-gradient-gold">ed</em>
          <br />
          Affidabilità.
        </h1>

        <div
          className="flex flex-col sm:flex-row gap-5 animate-slide-up"
          style={{ animationDelay: "0.22s" }}
        >
          <button
            onClick={() => scrollTo("#contatti")}
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 text-[11px] font-body font-medium tracking-[0.25em] uppercase hover:bg-amber-600 transition-colors self-start"
          >
            Richiedi Preventivo <ArrowRight size={12} />
          </button>
          <button
            onClick={() => scrollTo("#servizi")}
            className="inline-flex items-center gap-3 text-white/45 text-[11px] font-body tracking-[0.25em] uppercase hover:text-primary transition-colors py-4 self-start"
          >
            Scopri i Servizi <ArrowDown size={12} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
