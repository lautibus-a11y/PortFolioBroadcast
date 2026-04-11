import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  badgeIcon: LucideIcon;
  badgeText: string;
  titleBold: string;
  titleThin: string;
  description?: string;
}

export default function SectionHeader({ 
  badgeIcon: Icon, 
  badgeText, 
  titleBold, 
  titleThin,
  description 
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center mb-16">
      {/* Badge from Image */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/[0.02] mb-12 hover:border-white/30 hover:bg-white/[0.04] transition-all duration-500"
      >
        <Icon className="w-4 h-4 text-primary" />
        <span className="text-[11px] font-black tracking-[0.3em] uppercase text-white/90">
          {badgeText}
        </span>
      </motion.div>

      {/* Title from Image */}
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="font-headline text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1] sm:leading-[0.9]"
      >
        <span className="text-white inline-block mr-3" style={{ textShadow: "0 0 30px rgba(255,255,255,0.25)" }}>{titleBold}</span>
        <span className="font-light text-on-surface-variant/40">{titleThin}</span>
      </motion.h2>

      {description && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl text-on-surface-variant text-base sm:text-xl font-medium leading-relaxed px-4"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
