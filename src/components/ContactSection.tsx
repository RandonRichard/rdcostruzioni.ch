import { Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contatti" className="section-padding">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-8">
            {[
              { icon: Phone, title: "Natel", text: "076 682 05 84" },
              { icon: Phone, title: "Ufficio", text: "091 224 80 12" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-md">
                  <item.icon size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-lg">{item.title}</p>
                  <p className="text-muted-foreground font-body">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sedi */}
          <div className="space-y-8">
            <div>
              <p className="font-display font-semibold text-lg mb-1">Ufficio</p>
              <p className="text-muted-foreground font-body">Via Ripari Tondi 10</p>
              <p className="text-muted-foreground font-body">6500 Bellinzona</p>
            </div>
            <div>
              <p className="font-display font-semibold text-lg mb-1">Magazzino</p>
              <p className="text-muted-foreground font-body">Via Pedemonte 21</p>
              <p className="text-muted-foreground font-body">6710 Biasca</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
