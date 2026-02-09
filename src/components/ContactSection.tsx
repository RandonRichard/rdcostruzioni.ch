import { MapPin, Phone, Mail } from "lucide-react";

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
              { icon: MapPin, title: "Indirizzo", text: "Canton Ticino, Svizzera" },
              { icon: Phone, title: "Telefono", text: "+41 XX XXX XX XX" },
              { icon: Mail, title: "Email", text: "info@rdcostruzioni.ch" },
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

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="card-glass rounded-lg p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Nome"
                className="bg-secondary/50 border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="text"
                placeholder="Cognome"
                className="bg-secondary/50 border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="tel"
              placeholder="Telefono"
              className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <textarea
              rows={4}
              placeholder="Descrivi il tuo progetto..."
              className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-md font-medium hover:brightness-110 transition-all"
            >
              Invia Richiesta
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
