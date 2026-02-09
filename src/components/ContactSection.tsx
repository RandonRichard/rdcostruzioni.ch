import { Phone, Smartphone, MapPin, Warehouse } from "lucide-react";

const contactCards = [
  {
    icon: Smartphone,
    title: "Cellulare",
    text: "076 682 05 84",
    href: "tel:+41766820584",
  },
  {
    icon: Phone,
    title: "Ufficio",
    text: "091 224 80 12",
    href: "tel:+41912248012",
  },
  {
    icon: MapPin,
    title: "Ufficio",
    text: "Via Ripari Tondi 10\n6500 Bellinzona",
    href: "https://maps.google.com/?q=Via+Ripari+Tondi+10,+6500+Bellinzona",
  },
  {
    icon: Warehouse,
    title: "Magazzino",
    text: "Via Pedemonte 21\n6710 Biasca",
    href: "https://maps.google.com/?q=Via+Pedemonte+21,+6710+Biasca",
  },
];

const ContactSection = () => {
  return (
    <section id="contatti" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {contactCards.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card-glass rounded-lg p-6 flex items-start gap-4 hover:border-primary/40 transition-colors group"
            >
              <div className="bg-primary/10 p-3 rounded-md group-hover:bg-primary/20 transition-colors">
                <item.icon size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-display font-semibold text-lg">{item.title}</p>
                {item.text.split("\n").map((line, j) => (
                  <p key={j} className="text-muted-foreground font-body">{line}</p>
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
