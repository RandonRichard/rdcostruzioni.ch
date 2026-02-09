import heroImage from "@/assets/hero-construction.jpg";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToServices = () => {
    document.querySelector("#servizi")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cantiere di costruzione moderno in Svizzera"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-slide-up">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6">
          RD Impresa Costruzioni SAGL — Ticino
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 text-white">
          Precisione ed{" "}
          <span className="text-gradient-gold">Affidabilità</span>
        </h1>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body">
          Un'impresa ticinese giovane e dinamica, specializzata in costruzioni
          sopra e sotto struttura, scavi e riattazioni.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.querySelector("#contatti")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-medium text-base hover:brightness-110 transition-all"
          >
            Richiedi Preventivo
          </button>
          <button
            onClick={scrollToServices}
            className="border border-white/30 text-white px-8 py-3.5 rounded-md font-medium text-base hover:bg-white/10 transition-all"
          >
            I Nostri Servizi
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
