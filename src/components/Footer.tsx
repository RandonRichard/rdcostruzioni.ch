import logo from "@/assets/logo-rd.png";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-10 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="RD Costruzioni" className="h-10 w-auto" />
          <span className="font-display text-sm font-bold leading-tight tracking-wide text-foreground">
            RD IMPRESA COSTRUZIONI SAGL<br />
            <span className="text-xs font-medium text-muted-foreground tracking-widest">TICINO</span>
          </span>
        </div>

        <p className="text-muted-foreground text-sm font-body text-center md:text-right">
          © {new Date().getFullYear()} RD Impresa Costruzioni SAGL — Tutti i diritti riservati
          <br />
          Developed by{" "}
          <a
            href="https://studio.grueninger-randon.ch/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            RRG Web Studio
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
