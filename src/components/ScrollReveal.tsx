import { motion } from "motion/react";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  blur?: boolean;
  scale?: boolean;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 30,
  blur = true,
  scale = true,
}: ScrollRevealProps) {
  const getInitialX = () => {
    if (direction === "left") return -distance;
    if (direction === "right") return distance;
    return 0;
  };

  const getInitialY = () => {
    if (direction === "up") return distance;
    if (direction === "down") return -distance;
    return 0;
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: getInitialX(),
        y: getInitialY(),
        filter: blur ? "blur(4px)" : "none",
        scale: scale ? 0.98 : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
