import { useState, useEffect } from "react";
import logo from "@/assets/logo-rd.png";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1800);
    const remove = setTimeout(onComplete, 2300);
    return () => {
      clearTimeout(timer);
      clearTimeout(remove);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-foreground transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <img
          src={logo}
          alt="RD Costruzioni"
          className="h-24 w-auto animate-[loaderPulse_1.4s_ease-in-out_infinite] opacity-90"
        />
        <div className="w-32 h-px bg-white/10 overflow-hidden">
          <div className="h-full bg-primary animate-[loaderBar_1.8s_ease-in-out_forwards]" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
