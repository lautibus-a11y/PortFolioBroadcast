import { useState } from "react";
import { motion } from "motion/react";
import { Code, User, GraduationCap } from "lucide-react";

// --- Animated SVG Icons (all white palette) ---
const ReactIcon = () => (
  <motion.svg viewBox="0 0 100 100" className="w-12 h-12 overflow-visible">
    <motion.ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="#ffffff" strokeWidth="3"
      initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeInOut" }} />
    <motion.ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="3"
      style={{ transform: "rotate(60deg)", transformOrigin: "50px 50px" }}
      initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 1.2, ease: "easeInOut" }} />
    <motion.ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3"
      style={{ transform: "rotate(120deg)", transformOrigin: "50px 50px" }}
      initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }} />
    <motion.circle cx="50" cy="50" r="6" fill="#ffffff"
      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.9, duration: 0.4 }} />
  </motion.svg>
);

const UiIcon = () => (
  <motion.svg viewBox="0 0 100 100" className="w-12 h-12 overflow-visible">
    <motion.rect x="15" y="20" width="70" height="55" rx="8" fill="none" stroke="#ffffff" strokeWidth="3"
      initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }}
      transition={{ duration: 1.2 }} />
    <motion.path d="M 15,35 L 85,35" stroke="rgba(255,255,255,0.4)" strokeWidth="2"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }} />
    <motion.circle cx="24" cy="27.5" r="3" fill="rgba(255,255,255,0.6)"
      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} />
    <motion.circle cx="33" cy="27.5" r="3" fill="rgba(255,255,255,0.35)"
      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }} />
    <motion.path d="M 30,55 L 45,45 L 55,58 L 65,48 L 78,60"
      fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 1 }} />
  </motion.svg>
);

const WooIcon = () => (
  <motion.svg viewBox="0 0 100 100" className="w-12 h-12 overflow-visible">
    <motion.path d="M 20,40 L 50,20 L 80,40 L 80,75 L 20,75 Z" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }}
      transition={{ duration: 1.3, ease: "easeInOut" }} />
    <motion.path d="M 38,75 L 38,55 L 62,55 L 62,75" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="3"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.8 }} />
    <motion.circle cx="50" cy="36" r="5" fill="#ffffff"
      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }} />
  </motion.svg>
);

const WpIcon = () => (
  <motion.svg viewBox="0 0 100 100" className="w-12 h-12 overflow-visible">
    <motion.circle cx="50" cy="50" r="35" fill="none" stroke="#ffffff" strokeWidth="3"
      initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }}
      transition={{ duration: 1.2 }} />
    <motion.path d="M 25,50 Q 35,30 50,50 Q 65,70 75,50"
      fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 1 }} />
    <motion.line x1="50" y1="15" x2="50" y2="85" stroke="rgba(255,255,255,0.2)" strokeWidth="2"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.6 }} />
  </motion.svg>
);

const CssIcon = () => (
  <motion.svg viewBox="0 0 100 100" className="w-12 h-12 overflow-visible">
    <motion.path d="M 28,20 L 72,20 L 65,80 L 50,85 L 35,80 Z" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }}
      transition={{ duration: 1.3 }} />
    <motion.path d="M 38,35 L 62,35 M 40,50 L 60,50 M 43,65 L 50,68 L 57,65"
      stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.9 }} />
  </motion.svg>
);

const skills = [
  { CustomSvg: ReactIcon, title: "React", category: "Desarrollo", level: 90 },
  { CustomSvg: UiIcon, title: "UI/UX", category: "Diseño Visual", level: 95 },
  { CustomSvg: WooIcon, title: "WooCommerce", category: "E-commerce", level: 85 },
  { CustomSvg: WpIcon, title: "WordPress", category: "CMS Pro", level: 95 },
  { CustomSvg: CssIcon, title: "Clean CSS", category: "Front-end", level: 95 },
];

const formation = [
  { title: "Tecnico Informatico", desc: "Formación integral en sistemas, redes y arquitectura de hardware." },
  { title: "Diseño y desarrollo con WordPress", desc: "Especialización en creación de ecosistemas digitales escalables y optimizados." },
  { title: "Diseño UX UI", desc: "Creación de interfaces intuitivas y experiencias centradas en el usuario final." },
  { title: "Master en Ingeniería y Arquitectura de Software", desc: "Estrategias avanzadas de desarrollo, patrones de diseño y escalabilidad global." },
  { title: "Especialista en Desarrollo y Diseño con IA", desc: "Liderando la integración de inteligencia artificial en flujos creativos y técnicos." },
];

export default function About() {
  const [tab, setTab] = useState<"about" | "formation">("about");

  return (
    <section className="py-20 md:py-32 px-4 md:px-12 max-w-[1440px] mx-auto" id="sobre-mi">

      {/* CSS Animations */}
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes spin-slash { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .cursor-blink { display: inline-block; width: 2px; height: 1.1em; background: #a0ffc3; vertical-align: middle; margin-right: 4px; animation: blink 0.8s steps(2) infinite; }
        .spin-slash { display: inline-block; margin-left: 8px; color: #a0ffc3; font-weight: bold; animation: spin-slash 2s linear infinite; transform-origin: center; }
      `}</style>

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/[0.02] mb-8 md:mb-12">
          <User className="w-4 h-4 text-primary" />
          <span className="text-[11px] font-black tracking-[0.3em] uppercase text-white/90">Sobre mí</span>
        </div>
        <h2 className="font-headline text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-6 md:mb-8 leading-[1.1] sm:leading-[0.9]">
          <span className="text-white inline-block mr-3">Mi Historia</span>
          <span className="font-light text-white/20">y Experiencia</span>
        </h2>
      </div>

      <div className="flex flex-col gap-12 md:gap-20">

        {/* VS Code Editor */}
        <div style={{ maxWidth: 896, margin: "0 auto", width: "100%", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 25px 60px rgba(0,0,0,0.5)", background: "rgba(0,0,0,0.85)", backdropFilter: "blur(20px)" }}>

          <div className="flex flex-col bg-white/[0.03] border-b border-white/5">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest leading-none">
                {tab === "about" ? "sobre_mi.js" : "formacion.json"}
              </div>
              <div className="w-10" />
            </div>

            {/* Tab bar */}
            <div className="flex px-4 pt-2 gap-1 overflow-x-auto no-scrollbar">
              {(["about", "formation"] as const).map((t) => (
                <div
                  key={t}
                  onMouseDown={() => setTab(t)}
                  className={`flex items-center gap-2 px-6 py-3 text-[11px] font-mono uppercase tracking-widest rounded-t-xl transition-all whitespace-nowrap cursor-pointer select-none ${
                    tab === t 
                    ? "bg-white/5 border-t border-x border-white/10 text-primary" 
                    : "text-white/40 hover:text-white"
                  }`}
                >
                  {t === "about" ? <Code className="w-3.5 h-3.5" /> : <GraduationCap className="w-3.5 h-3.5" />}
                  {t === "about" ? "Sobre mi" : "Mi Formación"}
                </div>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6 sm:p-12 font-mono text-sm sm:text-lg leading-relaxed min-h-[320px] text-white">
            {tab === "about" && (
              <span>
                <span className="cursor-blink" />
                Soy diseñador y desarrollador web. Creo páginas, aplicaciones y soluciones digitales pensadas para verse bien, funcionar mejor y generar resultados.
                <br /><br />
                Trabajo con desarrollo a medida, e-commerce y automatización con IA para optimizar procesos y llevar proyectos al siguiente nivel.
                <span className="spin-slash">/</span>
              </span>
            )}

            {tab === "formation" && (
              <div style={{ borderLeft: "1px solid rgba(255,255,255,0.1)", paddingLeft: "2rem" }}>
                {formation.map((item, i) => (
                  <div key={i} style={{ position: "relative", marginBottom: i < formation.length - 1 ? "2.5rem" : 0 }}>
                    <div style={{
                      position: "absolute", left: -33, top: 6,
                      width: 14, height: 14, borderRadius: "50%",
                      border: "2px solid #a0ffc3", background: "#0e0e0e",
                      boxShadow: "0 0 10px rgba(160,255,195,0.4)"
                    }} />
                    <div style={{ color: "#a0ffc3", fontWeight: 700, marginBottom: 4 }}>{item.title}</div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group p-8 glass-card rounded-[2.5rem] relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.35)] transition-all duration-700">
                  <skill.CustomSvg />
                </div>
                <h4 className="font-headline font-bold text-xl mb-1">{skill.title}</h4>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-8">{skill.category}</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black text-primary tracking-[0.2em] uppercase">Expertise</span>
                    <span className="text-sm font-black text-white">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-lg overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full bg-primary relative"
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/10 blur-[50px] rounded-full group-hover:bg-primary/20 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
