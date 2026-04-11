import { motion } from "motion/react";
import { ReactNode } from "react";

interface PaintedTextProps {
  children: ReactNode;
  className?: string;
}

export default function PaintedText({ children, className = "" }: PaintedTextProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <motion.span
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 text-primary z-10"
      >
        {children}
      </motion.span>
      <span className="text-white opacity-20">
        {children}
      </span>
    </div>
  );
}
