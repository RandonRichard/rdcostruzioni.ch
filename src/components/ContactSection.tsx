import { Smartphone, MapPin, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const contactCards = [
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
    text: "Via Campagnora 23\n6532 Castione",
    href: "https://maps.google.com/?q=Via+Campagnora+23,+6532+Castione",
  },
];

const ContactSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.2);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal(0.1);

  return (
    <section id="contatti" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div ref={headerRef} className={`text-center mb-16 section-reveal ${headerVisible ? "visible" : ""}`} style={{ transformOrigin: "center" }}>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Contatti
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Parliamo del tuo{" "}
            <span className="text-gradient-gold">progetto</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
            Contattaci per un preventivo gratuito o per discutere delle tue esigenze.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {contactCards.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`card-glass rounded-lg aspect-square flex flex-col items-center justify-center text-center gap-4 hover:border-primary/40 transition-colors group card-reveal reveal-delay-${i + 1} ${cardsVisible ? "visible" : ""}`}
            >
              <div className="bg-primary/10 p-4 rounded-md group-hover:bg-primary/20 transition-colors">
                <item.icon size={28} className="text-primary" />
              </div>
              <div>
                <p className="font-display font-semibold text-lg">{item.title}</p>
                {item.text.split("\n").map((line, j) => (
                  <p key={j} className="text-muted-foreground font-body text-sm">{line}</p>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
