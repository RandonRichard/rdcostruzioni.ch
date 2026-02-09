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
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <img
          src={logo}
          alt="RD Costruzioni"
          className="h-28 w-auto animate-[loaderPulse_1.4s_ease-in-out_infinite]"
        />
        <div className="w-40 h-1 rounded-full bg-muted overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-[loaderBar_1.8s_ease-in-out_forwards]" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
