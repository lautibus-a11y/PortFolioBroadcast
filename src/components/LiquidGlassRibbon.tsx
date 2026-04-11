import { motion } from "motion/react";

const items = [
  "Páginas web",
  "Aplicaciones web",
  "Software a medida",
  "Chatbots",
  "Automatización con IA"
];

export default function LiquidGlassRibbon() {
  return (
    <div className="w-full overflow-hidden bg-white/5 backdrop-blur-md border-y border-white/10 py-6 relative z-10">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap gap-12 items-center"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span 
            key={i} 
            className="text-primary font-headline font-bold text-lg uppercase tracking-widest flex items-center gap-4"
          >
            <span className="w-2 h-2 bg-primary rounded-full" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
