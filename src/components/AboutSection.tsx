import React from "react";
import { useCountUp } from "@/hooks/use-count-up";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  { value: 150, suffix: "+", label: "Progetti Completati" },
  { value: 15, suffix: "+", label: "Anni di Esperienza" },
  { value: 100, suffix: "%", label: "Clienti Soddisfatti" },
];

const values = [
  "Qualità dei materiali",
  "Rispetto dei tempi",
  "Trasparenza totale",
  "Sostenibilità",
  "Precisione svizzera",
  "Affidabilità",
];

const StatItem = ({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) => {
  const { count, ref: countRef } = useCountUp(value);
  const { ref: revealRef, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={(el) => {
        (revealRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
        (countRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      className={`px-0 md:px-8 border-r border-border/50 last:border-0 first:pl-0 card-reveal reveal-delay-${index + 1} ${isVisible ? "visible" : ""}`}
    >
      <p
        className="font-display font-bold text-gradient-gold leading-none mb-3"
        style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)" }}
      >
        {count}
        {suffix}
      </p>
      <p className="text-muted-foreground text-[10px] font-body uppercase tracking-[0.4em]">
        {label}
      </p>
    </div>
  );
};

const AboutSection = () => {
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollReveal(0.15);

  return (
    <section id="chi-siamo" className="bg-background">
      {/* Manifesto */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
        <p className="text-primary font-body text-[10px] tracking-[0.6em] uppercase mb-14">
          Chi Siamo
        </p>
        <blockquote
          ref={quoteRef}
          className={`font-display text-2xl md:text-4xl lg:text-[2.8rem] font-bold leading-[1.15] max-w-4xl mb-24 text-foreground section-reveal ${quoteVisible ? "visible" : ""}`}
        >
          Un'impresa ticinese dove{" "}
          <em className="not-italic text-gradient-gold">precisione</em> e
          affidabilità non sono parole, sono il fondamento di ogni progetto che
          realizziamo.
        </blockquote>

        {/* Stats row */}
        <div className="grid grid-cols-3 border-t border-border/50 pt-16 gap-y-10">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} index={i} />
          ))}
        </div>
      </div>

      {/* Values marquee — dark strip */}
      <div className="bg-foreground py-5 overflow-hidden">
        <div className="flex gap-14 animate-marquee whitespace-nowrap">
          {[...values, ...values, ...values, ...values].map((v, i) => (
            <span
              key={i}
              className="text-white/25 text-[10px] font-body uppercase tracking-[0.5em] flex items-center gap-5 shrink-0"
            >
              <span className="text-primary/50">◆</span> {v}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
