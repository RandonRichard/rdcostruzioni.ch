import serviceSopra from "@/assets/service-soprastruttura.jpg";
import serviceSotto from "@/assets/service-sottostruttura.jpg";
import serviceScavi from "@/assets/service-scavi.jpg";
import { Building2, Layers, Shovel } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Costruzioni Sopra Struttura",
    description:
      "Realizziamo edifici residenziali, commerciali e industriali con tecniche all'avanguardia e materiali di prima qualità.",
    image: serviceSopra,
  },
  {
    icon: Layers,
    title: "Costruzioni Sotto Struttura",
    description:
      "Fondazioni, muri di sostegno e lavori interrati eseguiti con la massima cura per garantire solidità e durabilità.",
    image: serviceSotto,
  },
  {
    icon: Shovel,
    title: "Scavi e Riattazioni",
    description:
      "Movimenti terra, scavi di ogni genere e riattazioni complete per dare nuova vita agli edifici esistenti.",
    image: serviceScavi,
  },
];

const ServicesSection = () => {
  return (
    <section id="servizi" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Cosa Facciamo
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            I Nostri <span className="text-gradient-gold">Servizi</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl font-body">
            Offriamo una gamma completa di servizi edili, dalla progettazione alla realizzazione.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group card-glass rounded-lg overflow-hidden hover-lift"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-500" />
                <div className="absolute top-4 left-4 bg-primary/90 p-2.5 rounded-md">
                  <service.icon size={20} className="text-primary-foreground" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
