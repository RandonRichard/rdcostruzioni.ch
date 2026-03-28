import { Smartphone, MapPin, Mail, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

type ContactItem = {
  icon: React.ComponentType<{ size?: number }> | (() => JSX.Element);
  title: string;
  text: string;
  href: string;
  isWhatsApp?: boolean;
};

const contactItems: ContactItem[] = [
  {
    icon: Smartphone,
    title: "Cellulare",
    text: "076 682 05 84",
    href: "tel:+41766820584",
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    text: "Scrivici su WhatsApp",
    href: "https://wa.me/41766820584",
    isWhatsApp: true,
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
  item: ContactItem;
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
          <p className="text-white/30 text-[10px] font-body uppercase tracking-[0.4em] mb-2 flex items-center gap-2">
            {item.isWhatsApp && <item.icon />}
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

        <div className="border-t border-white/10">
          {contactItems.map((item, i) => (
            <ContactLine key={i} item={item} index={i} />
          ))}
        </div>

        <p className="mt-14 text-white/25 font-body text-sm leading-relaxed max-w-sm">
          Disponibili in tutto il Canton Ticino. Preventivo gratuito e senza impegno.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
