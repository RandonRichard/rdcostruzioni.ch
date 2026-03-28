import serviceSopra from "@/assets/service-soprastruttura-new.jpg";
import serviceSotto from "@/assets/service-sottostruttura-new.jpg";
import serviceScavi from "@/assets/service-scavi-new.jpg";
import serviceRiattazioni from "@/assets/service-riattazioni.jpg";
import { Building2, Layers, Shovel, Hammer } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    icon: Building2,
    title: "Costruzioni di Sovrastruttura",
    description:
      "Realizzazione di elementi costruttivi al di sopra di strutture esistenti, garantendo solidità, precisione e rispetto delle normative vigenti.",
    image: serviceSopra,
  },
  {
    icon: Layers,
    title: "Costruzioni di Sottostruttura",
    description:
      "Esecuzione di opere interrate come tubazioni per l'alloggio di cavi elettrici e telefonici, reti per l'acqua potabile e canalizzazioni.",
    image: serviceSotto,
  },
  {
    icon: Shovel,
    title: "Scavi e Movimenti Terra",
    description:
      "Lavori di scavo, sbancamento e livellamento del terreno per la realizzazione di costruzioni interrate o altre esigenze edilizie.",
    image: serviceScavi,
  },
  {
    icon: Hammer,
    title: "Riattazioni e Ristrutturazioni",
    description:
      "Interventi di riattazione e ristrutturazione per modernizzare edifici esistenti, migliorare funzionalità, estetica e comfort.",
    image: serviceRiattazioni,
  },
];

const ServiceStrip = ({
  service,
  index,
  reversed,
}: {
  service: (typeof services)[0];
  index: number;
  reversed: boolean;
}) => {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <div
      ref={ref}
      className={`group flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} border-b border-border/40 last:border-0 card-reveal ${isVisible ? "visible" : ""}`}
    >
      {/* Image */}
      <div
        className="w-full md:w-[58%] relative overflow-hidden bg-foreground"
        style={{ minHeight: "360px" }}
      >
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-75 group-hover:opacity-90"
          loading="lazy"
        />
        {/* Big number watermark */}
        <span
          className={`absolute ${reversed ? "right-5 text-right" : "left-5"} bottom-4 font-display font-bold text-white/10 leading-none pointer-events-none select-none`}
          aria-hidden="true"
          style={{ fontSize: "clamp(4rem, 9vw, 8rem)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Text */}
      <div className="w-full md:w-[42%] bg-background flex flex-col justify-center px-8 py-12 md:px-12 lg:px-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-primary/60 text-[10px] font-body uppercase tracking-[0.5em]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="h-px flex-1 bg-border/60" />
        </div>

        <div className="text-primary mb-5">
          <service.icon size={20} strokeWidth={1.5} />
        </div>

        <h3
          className="font-display font-bold leading-tight mb-5 text-foreground"
          style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}
        >
          {service.title}
        </h3>

        <p className="text-muted-foreground font-body text-sm leading-relaxed">
          {service.description}
        </p>

      </div>
    </div>
  );
};

const ServicesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.2);

  return (
    <section id="servizi" className="overflow-hidden bg-background">
      {/* Header */}
      <div
        ref={headerRef}
        className={`max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 section-reveal ${headerVisible ? "visible" : ""}`}
      >
        <p className="text-primary font-body text-[10px] tracking-[0.6em] uppercase mb-5">
          Cosa Facciamo
        </p>
        <h2
          className="font-display font-bold leading-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          I Nostri{" "}
          <span className="text-gradient-gold">Servizi</span>
        </h2>
      </div>

      {/* Strips */}
      <div className="flex flex-col border-t border-border/40">
        {services.map((service, i) => (
          <ServiceStrip
            key={i}
            service={service}
            index={i}
            reversed={i % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
