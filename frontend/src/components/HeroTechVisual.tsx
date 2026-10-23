import { motion } from "motion/react";
import developerWorkspace from "@/assets/developer-workspace.jpg";

export function HeroTechVisual() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full"
    >
      <img
        src={developerWorkspace}
        alt="Software developer working at a bright desk with code and analytics on screen"
        width={1408}
        height={1120}
        className="w-full object-contain [mask-image:linear-gradient(to_right,transparent_0%,var(--foreground)_10%,var(--foreground)_90%,transparent_100%),linear-gradient(to_bottom,transparent_0%,var(--foreground)_8%,var(--foreground)_92%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,var(--foreground)_10%,var(--foreground)_90%,transparent_100%),linear-gradient(to_bottom,transparent_0%,var(--foreground)_8%,var(--foreground)_92%,transparent_100%)] [mask-composite:intersect] [-webkit-mask-composite:source-in]"
      />
    </motion.div>
  );
}