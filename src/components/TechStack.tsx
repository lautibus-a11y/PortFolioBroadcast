import { motion } from "motion/react";
import { Cpu, Globe, Database, Code2, Cloud, Zap } from "lucide-react";

const icons = [Cpu, Globe, Database, Code2, Cloud, Zap];

export default function TechStack() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto border-y border-outline-variant/10">
      <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {icons.map((Icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <Icon className="w-12 h-12" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
