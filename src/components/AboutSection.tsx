import { CheckCircle2 } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";

const values = [
  "Qualità dei materiali e delle lavorazioni",
  "Rispetto dei tempi di consegna",
  "Trasparenza e comunicazione continua",
  "Sostenibilità e rispetto ambientale",
];

const stats = [
  { value: 150, suffix: "+", label: "Progetti Completati" },
  { value: 15, suffix: "+", label: "Anni di Esperienza" },
  { value: 100, suffix: "%", label: "Clienti Soddisfatti" },
];

const StatCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="card-glass rounded-lg p-8 text-center hover-lift">
      <p className="text-4xl md:text-5xl font-display font-bold text-gradient-gold mb-2">
        {count}{suffix}
      </p>
      <p className="text-muted-foreground text-sm font-body">{label}</p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="chi-siamo" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Chi Siamo
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Un'impresa che costruisce{" "}
            <span className="text-gradient-gold">fiducia</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body leading-relaxed mb-8">
            RD Impresa Costruzioni SAGL è un'impresa ticinese giovane e dinamica
            che fa della precisione e dell'affidabilità i suoi punti di forza.
            Operiamo su tutto il territorio del Canton Ticino con passione e
            competenza.
          </p>
          <ul className="space-y-4">
            {values.map((v, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                <span className="text-foreground font-body">{v}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
