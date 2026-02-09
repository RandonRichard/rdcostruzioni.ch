import logo from "@/assets/logo-rd.png";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-10 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logo} alt="RD Costruzioni" className="h-8 w-auto" />
        <p className="text-muted-foreground text-sm font-body">
          © {new Date().getFullYear()} RD Impresa Costruzioni SAGL — Tutti i diritti riservati
        </p>
      </div>
    </footer>
  );
};

export default Footer;
