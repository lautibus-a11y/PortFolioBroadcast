import { motion } from "motion/react";

export default function GrainOverlay() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.02 }}
      className="grain-overlay fixed inset-0 z-[60] pointer-events-none"
    />
  );
}
