import { motion } from "motion/react";
import { Briefcase, Phone, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import Button from "./Button";

const DesignIcon = () => (
  <motion.svg viewBox="0 0 100 100" className="w-16 h-16 md:w-28 md:h-28 overflow-visible drop-shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:drop-shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-700">
    <motion.path
      d="M 20,50 C 20,20 80,20 80,50 C 80,80 20,80 20,50"
      fill="none"
      stroke="#22d3ee"
      strokeWidth="3"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    <motion.circle cx="50" cy="50" r="15" fill="none" stroke="#22d3ee" strokeWidth="3" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8, type: "spring" }} />
    <motion.circle cx="50" cy="50" r="6" fill="#22d3ee" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1, duration: 0.4 }} />
  </motion.svg>
);

const DevIcon = () => (
  <motion.svg viewBox="0 0 100 100" className="w-16 h-16 md:w-28 md:h-28 overflow-visible drop-shadow-[0_0_15px_rgba(160,255,195,0.2)] group-hover:drop-shadow-[0_0_25px_rgba(160,255,195,0.6)] transition-all duration-700">
    <motion.path
      d="M 35,30 L 15,50 L 35,70 M 65,30 L 85,50 L 65,70 M 55,20 L 45,80"
      fill="none"
      stroke="#a0ffc3"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    <motion.circle cx="15" cy="50" r="4" fill="#a0ffc3" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1, duration: 0.4 }} />
    <motion.circle cx="85" cy="50" r="4" fill="#a0ffc3" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.2, duration: 0.4 }} />
  </motion.svg>
);

const EcomIcon = () => (
  <motion.svg viewBox="0 0 100 100" className="w-16 h-16 md:w-28 md:h-28 overflow-visible drop-shadow-[0_0_15px_rgba(232,121,249,0.2)] group-hover:drop-shadow-[0_0_25px_rgba(232,121,249,0.6)] transition-all duration-700">
    <motion.path
      d="M 20,35 L 80,35 L 70,80 L 30,80 Z"
      fill="none"
      stroke="#e879f9"
      strokeWidth="4"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    <motion.path
      d="M 35,35 C 35,15 65,15 65,35"
      fill="none"
      stroke="#e879f9"
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
    />
    <motion.circle cx="50" cy="55" r="5" fill="#e879f9" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.2, duration: 0.4 }} />
  </motion.svg>
);

const SeoIcon = () => (
  <motion.svg viewBox="0 0 100 100" className="w-16 h-16 md:w-28 md:h-28 overflow-visible drop-shadow-[0_0_15px_rgba(251,191,36,0.2)] group-hover:drop-shadow-[0_0_25px_rgba(251,191,36,0.6)] transition-all duration-700">
    <motion.path
      d="M 20,80 L 40,60 L 60,70 L 90,30"
      fill="none"
      stroke="#fbbf24"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    <motion.circle cx="90" cy="30" r="6" fill="#fbbf24" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.2, duration: 0.4 }} />
    <motion.path
      d="M 75,30 L 90,30 L 90,45"
      fill="none"
      stroke="#fbbf24"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    />
  </motion.svg>
);

const services = [
  {
    CustomSvg: DesignIcon,
    themeColor: "group-hover:text-[#22d3ee]",
    bgHover: "bg-[#22d3ee]/10",
    title: "Diseño Web",
    description: "Interfaces cinematográficas enfocadas en la conversión que cuentan la historia de tu marca a través del movimiento y el espacio."
  },
  {
    CustomSvg: DevIcon,
    themeColor: "group-hover:text-[#a0ffc3]",
    bgHover: "bg-[#a0ffc3]/10",
    title: "Desarrollo Web",
    description: "Rendimiento ultrarrápido usando stacks modernos como React, Next.js y arquitecturas robustas de WordPress."
  },
  {
    CustomSvg: EcomIcon,
    themeColor: "group-hover:text-[#e879f9]",
    bgHover: "bg-[#e879f9]/10",
    title: "E-commerce",
    description: "Tiendas digitales escalables que maximizan tu ticket promedio y ofrecen checkouts sin fricciones."
  },
  {
    CustomSvg: SeoIcon,
    themeColor: "group-hover:text-[#fbbf24]",
    bgHover: "bg-[#fbbf24]/10",
    title: "SEO",
    description: "Optimización basada en datos para asegurar que tu presencia digital domine los rankings de búsqueda."
  }
];

// --- Process step SVGs: 2 color variations ---
const IdeaIcon = () => (
  <motion.svg viewBox="0 0 100 100" className="w-8 h-8 overflow-visible">
    <motion.circle cx="50" cy="42" r="22" fill="none" stroke="#a0ffc3" strokeWidth="4"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
      transition={{ duration: 1 }} />
    <motion.path d="M 40,64 L 40,72 L 60,72 L 60,64" fill="none" stroke="#a0ffc3" strokeWidth="3" strokeLinejoin="round"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.6 }} />
    <motion.line x1="50" y1="20" x2="50" y2="14" stroke="rgba(160,255,195,0.5)" strokeWidth="3" strokeLinecap="round"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9 }} />
    <motion.line x1="68" y1="24" x2="72" y2="20" stroke="rgba(160,255,195,0.5)" strokeWidth="3" strokeLinecap="round"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 }} />
    <motion.line x1="32" y1="24" x2="28" y2="20" stroke="rgba(160,255,195,0.5)" strokeWidth="3" strokeLinecap="round"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.1 }} />
    <motion.circle cx="50" cy="42" r="5" fill="#a0ffc3" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} />
  </motion.svg>
);

const DesignStepIcon = () => (
  <motion.svg viewBox="0 0 100 100" className="w-8 h-8 overflow-visible">
    <motion.circle cx="50" cy="50" r="30" fill="none" stroke="#ffffff" strokeWidth="4"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
      transition={{ duration: 1 }} />
    <motion.path d="M 35,50 L 47,62 L 65,38" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.7 }} />
  </motion.svg>
);

const DevStepIcon = () => (
  <motion.svg viewBox="0 0 100 100" className="w-8 h-8 overflow-visible">
    <motion.path d="M 30,35 L 15,50 L 30,65 M 70,35 L 85,50 L 70,65 M 58,25 L 42,75"
      fill="none" stroke="#a0ffc3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
      transition={{ duration: 1.3 }} />
  </motion.svg>
);

const LaunchIcon = () => (
  <motion.svg viewBox="0 0 100 100" className="w-8 h-8 overflow-visible">
    <motion.path d="M 50,80 L 50,30 M 50,30 C 50,30 65,45 80,40 C 65,55 50,50 50,50"
      fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
      transition={{ duration: 1.2 }} />
    <motion.path d="M 50,30 C 50,30 35,45 20,40 C 35,55 50,50 50,50"
      fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.8 }} />
    <motion.circle cx="50" cy="80" r="6" fill="rgba(255,255,255,0.3)"
      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1 }} />
  </motion.svg>
);

const steps = [
  { CustomSvg: IdeaIcon, color: "rgba(160,255,195,0.2)", title: "Idea", desc: "Conceptualización y estrategia inicial." },
  { CustomSvg: DesignStepIcon, color: "rgba(255,255,255,0.15)", title: "Diseño", desc: "Creación de la interfaz visual y UX." },
  { CustomSvg: DevStepIcon, color: "rgba(160,255,195,0.2)", title: "Desarrollo", desc: "Programación y arquitectura técnica." },
  { CustomSvg: LaunchIcon, color: "rgba(255,255,255,0.15)", title: "Entrega", desc: "Lanzamiento y optimización final." },
];

export default function Services() {
  return (
    <section className="py-20 md:py-40 px-6 md:px-12 max-w-[1440px] mx-auto" id="servicios">
      <SectionHeader 
        badgeIcon={Briefcase}
        badgeText="Servicios"
        titleBold="Soluciones"
        titleThin="para generar impacto"
      />

      <div className="flex flex-col border-t border-white/10 mb-24 md:mb-40">
        {services.map((service, i) => (
          <ScrollReveal key={service.title} delay={i * 0.1} direction="up" distance={20}>
            <div className="group flex flex-col md:flex-row md:items-center py-10 md:py-16 border-b border-white/10 hover:bg-white/[0.01] transition-all duration-500 px-4 sm:px-8 gap-6 md:gap-12 relative overflow-hidden">
              {/* Highlight gradient on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-[100px] ${service.bgHover}`} />

              {/* Number */}
              <div className={`font-headline text-white/5 ${service.themeColor} transition-colors duration-500 text-6xl md:text-8xl font-black italic tracking-tighter w-24 leading-none relative z-10`}>
                0{i + 1}
              </div>
              
              {/* Content */}
              <div className="flex-1 relative z-10">
                <h3 className={`font-headline text-3xl md:text-5xl font-black mb-4 text-white ${service.themeColor} transition-colors duration-500 uppercase italic tracking-tighter`}>
                  {service.title}
                </h3>
                <p className="text-on-surface-variant text-base md:text-lg max-w-2xl leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Custom Animated Full SVG Element */}
              <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-700 shrink-0 relative z-10 pr-4">
                <service.CustomSvg />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Scroll Accordion Process */}
      <div className="mb-24 md:mb-40">
        <ScrollReveal direction="up">
          <div className="text-center mb-16 md:mb-20">
            <h3 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">Mi <span className="text-primary">Proceso</span></h3>
            <p className="text-on-surface-variant max-w-xl mx-auto font-medium text-sm sm:text-base">Un camino estructurado desde el concepto hasta la realidad.</p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-0 relative" style={{ gap: 0 }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial="closed"
              whileInView="open"
              viewport={{ margin: "-25% 0px -25% 0px", amount: 0.3 }}
              variants={{
                open: { 
                  backgroundColor: "rgba(255,255,255,0.06)", 
                  borderColor: step.color, 
                  scale: 1,
                  y: 0,
                  zIndex: 10,
                  boxShadow: "0 -20px 60px rgba(0,0,0,0.5)"
                },
                closed: { 
                  backgroundColor: "rgba(255,255,255,0.01)", 
                  borderColor: "rgba(255,255,255,0.05)", 
                  scale: 0.97,
                  y: i === 0 ? 0 : -16,
                  zIndex: i,
                  boxShadow: "none"
                }
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="border rounded-3xl p-6 sm:p-8 overflow-hidden flex flex-col justify-center relative"
              style={{ marginTop: i === 0 ? 0 : "-12px" }}
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-white/[0.05] flex items-center justify-center shrink-0">
                  <step.CustomSvg />
                </div>
                <h4 className="font-headline text-xl sm:text-3xl font-black uppercase italic tracking-wider">
                  0{i + 1}. {step.title}
                </h4>
              </div>
              <motion.div 
                variants={{
                  open: { height: "auto", opacity: 1, marginTop: "1rem" },
                  closed: { height: 0, opacity: 0, marginTop: 0 }
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <p className="text-on-surface-variant text-sm sm:text-base font-body pl-[4.5rem] sm:pl-[5.5rem]">
                  {step.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <ScrollReveal direction="none" distance={0} scale={true} blur={true}>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 bg-white/[0.03] backdrop-blur-3xl p-8 sm:p-12 md:p-16 rounded-[2.5rem] sm:rounded-[4rem] border border-white/10 relative overflow-hidden group text-center lg:text-left">
          <div className="relative z-10 max-w-xl">
            <h3 className="font-headline text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-[0.9] uppercase italic tracking-tighter">
              ¿Listo para <br/> elevar tu <br/> <span className="text-primary">negocio</span>?
            </h3>
            <p className="text-on-surface-variant text-base sm:text-lg font-medium">Hagamos que tu visión digital se convierta en una realidad de alto impacto.</p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-fit mx-auto lg:w-auto lg:mx-0">
            <a href="https://wa.me/5491172023171" target="_blank" rel="noopener noreferrer" className="w-fit">
              <Button icon={Phone} variant="primary">Reservar Llamada</Button>
            </a>
            <a href="#proyectos" className="w-fit">
              <Button icon={ArrowUpRight} variant="secondary">Ver Proyectos</Button>
            </a>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full group-hover:bg-primary/20 transition-colors duration-1000"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full"></div>
        </div>
      </ScrollReveal>
    </section>
  );
}
