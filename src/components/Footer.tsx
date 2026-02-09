const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-10 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-bold">
          <span className="text-gradient-gold">RD</span> Costruzioni
        </p>
        <p className="text-muted-foreground text-sm font-body">
          © {new Date().getFullYear()} RD Impresa Costruzioni SAGL — Tutti i diritti riservati
        </p>
      </div>
    </footer>
  );
};

export default Footer;
