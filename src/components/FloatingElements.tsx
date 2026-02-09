import { Cog, Wrench, HardHat, Ruler } from "lucide-react";

const floatingItems = [
  { Icon: Cog, size: 40, top: "12%", left: "5%", duration: "20s", delay: "0s", opacity: 0.06 },
  { Icon: Cog, size: 64, top: "30%", right: "3%", duration: "25s", delay: "-5s", opacity: 0.05 },
  { Icon: Wrench, size: 32, top: "55%", left: "8%", duration: "18s", delay: "-3s", opacity: 0.05 },
  { Icon: HardHat, size: 36, top: "75%", right: "6%", duration: "22s", delay: "-8s", opacity: 0.04 },
  { Icon: Cog, size: 80, top: "85%", left: "2%", duration: "30s", delay: "-12s", opacity: 0.04 },
  { Icon: Ruler, size: 28, top: "20%", right: "12%", duration: "16s", delay: "-2s", opacity: 0.05 },
  { Icon: Cog, size: 48, top: "45%", right: "10%", duration: "28s", delay: "-7s", opacity: 0.04 },
  { Icon: Wrench, size: 24, top: "65%", left: "15%", duration: "19s", delay: "-10s", opacity: 0.06 },
];

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingItems.map((item, i) => {
        const style: React.CSSProperties = {
          position: "absolute",
          top: item.top,
          left: item.left,
          right: item.right,
          opacity: item.opacity,
          animation: `float-${i % 3} ${item.duration} ease-in-out infinite`,
          animationDelay: item.delay,
        };

        return (
          <div key={i} style={style}>
            <item.Icon
              size={item.size}
              className="text-primary"
              strokeWidth={1}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingElements;
