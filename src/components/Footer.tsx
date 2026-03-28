import logo from "@/assets/logo-rd.png";

const Footer = () => {
  return (
    <footer className="bg-foreground border-t border-white/10 px-6 py-10 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="RD Costruzioni" className="h-9 w-auto opacity-80" />
          <span className="font-display text-xs font-bold leading-tight tracking-wide text-white/60">
            RD IMPRESA COSTRUZIONI SAGL
            <br />
            <span className="text-[10px] font-medium text-white/25 tracking-widest">
              TICINO
            </span>
          </span>
        </div>

        <p className="text-white/25 text-xs font-body text-center md:text-right leading-relaxed">
          © {new Date().getFullYear()} RD Impresa Costruzioni SAGL — Tutti i diritti riservati
          <br />
          Sviluppato da{" "}
          <a
            href="https://studio.grueninger-randon.ch/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/50 transition-colors"
          >
            RRG Web Studio
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
