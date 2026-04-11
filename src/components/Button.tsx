import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  icon: Icon, 
  variant = "primary", 
  onClick,
  className = ""
}: ButtonProps) {
  const isPrimary = variant === "primary";
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        group flex items-center p-1 rounded-2xl transition-all duration-300
        ${isPrimary 
          ? "bg-primary text-black hover:shadow-[0_0_30px_rgba(160,255,195,0.4)]" 
          : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
        }
        ${className}
      `}
    >
      <span className="px-4 sm:px-6 py-2.5 sm:py-3 font-headline font-black uppercase tracking-widest text-[10px] sm:text-xs">
        {children}
      </span>
      {Icon && (
        <div className={`
          w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl border
          ${isPrimary 
            ? "border-black/20 group-hover:border-black/40" 
            : "border-white/10 group-hover:border-white/20"
          }
        `}>
          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      )}
    </motion.button>
  );
}
