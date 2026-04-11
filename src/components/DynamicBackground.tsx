import { motion } from "motion/react";

export default function DynamicBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-surface overflow-hidden pointer-events-none">
      {/* Animated Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 150, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-primary/5 blur-[150px] rounded-full"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          x: [0, -200, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-primary/10 blur-[180px] rounded-full"
      />

      {/* Animated Grid */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(160, 255, 195, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(160, 255, 195, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      >
        <motion.div
          animate={{
            y: [0, 60],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface opacity-50"
        />
      </div>

      {/* Radial Mask */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0e0e0e_80%)]"></div>

      {/* Noise/Grain Overlay (already handled by GrainOverlay component, but adding a subtle layer here too) */}
      <div className="absolute inset-0 mix-blend-overlay opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}
