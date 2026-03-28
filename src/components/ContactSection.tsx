import { Smartphone, MapPin, Mail, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const contactItems = [
  {
    icon: Smartphone,
    title: "Cellulare",
    text: "076 682 05 84",
    href: "tel:+41766820584",
  },
  {
    icon: Mail,
    title: "Email",
    text: "info@rdcostruzioni.ch",
    href: "mailto:info@rdcostruzioni.ch",
  },
  {
    icon: MapPin,
    title: "Sede",
    text: "Via Campagnora 23, 6532 Castione",
    href: "https://maps.google.com/?q=Via+Campagnora+23,+6532+Castione",
  },
];

const ContactLine = ({
  item,
  index,
}: {
  item: (typeof contactItems)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <a
      ref={ref}
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group flex items-center justify-between py-7 border-b border-white/10 last:border-0 hover:pl-3 transition-all duration-300 card-reveal reveal-delay-${index + 1} ${isVisible ? "visible" : ""}`}
    >
      <div className="flex items-start gap-6 md:gap-10">
        <span className="text-white/20 text-[10px] font-body uppercase tracking-[0.4em] pt-1 shrink-0 hidden sm:block">
          0{index + 1}
        </span>
        <div>
          <p className="text-white/30 text-[10px] font-body uppercase tracking-[0.4em] mb-2">
            {item.title}
          </p>
          <p
            className="font-display font-bold text-white group-hover:text-primary transition-colors duration-300 leading-tight"
            style={{ fontSize: "clamp(1.25rem, 3.5vw, 2.6rem)" }}
          >
            {item.text}
          </p>
        </div>
      </div>
      <div className="text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 shrink-0 ml-4">
        <ArrowRight size={18} />
      </div>
    </a>
  );
};

const ContactSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.15);

  return (
    <section id="contatti" className="bg-foreground text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-28">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-16 section-reveal ${headerVisible ? "visible" : ""}`}
        >
          <p className="text-primary font-body text-[10px] tracking-[0.6em] uppercase mb-12">
            Contatti
          </p>
          <h2
            className="font-display font-bold leading-[0.92] text-white"
            style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
          >
            Parliamo del tuo{" "}
            <em className="not-italic text-gradient-gold">progetto</em>.
          </h2>
        </div>

        {/* Contact lines */}
        <div className="border-t border-white/10">
          {contactItems.map((item, i) => (
            <ContactLine key={i} item={item} index={i} />
          ))}
        </div>

        <p className="mt-14 text-white/25 font-body text-sm leading-relaxed max-w-sm">
          Disponibili in tutto il Canton Ticino. Preventivo gratuito e senza
          impegno.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
