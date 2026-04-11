import { motion } from "motion/react";
import { Layers, Code2, Store, Search, Briefcase, Lightbulb, PenTool, Terminal, Rocket, Phone, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import Button from "./Button";

const services = [
  {
    icon: Layers,
    title: "Diseño Web",
    description: "Interfaces cinematográficas enfocadas en la conversión que cuentan la historia de tu marca a través del movimiento y el espacio."
  },
  {
    icon: Code2,
    title: "Desarrollo Web",
    description: "Rendimiento ultrarrápido usando stacks modernos como React, Next.js y arquitecturas robustas de WordPress."
  },
  {
    icon: Store,
    title: "E-commerce",
    description: "Tiendas digitales escalables que maximizan tu ticket promedio y ofrecen checkouts sin fricciones."
  },
  {
    icon: Search,
    title: "SEO",
    description: "Optimización basada en datos para asegurar que tu presencia digital domine los rankings de búsqueda."
  }
];

const steps = [
  { icon: Lightbulb, title: "Idea", desc: "Conceptualización y estrategia inicial." },
  { icon: PenTool, title: "Diseño", desc: "Creación de la interfaz visual y UX." },
  { icon: Terminal, title: "Desarrollo", desc: "Programación y arquitectura técnica." },
  { icon: Rocket, title: "Entrega", desc: "Lanzamiento y optimización final." },
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
            <div className="group flex flex-col md:flex-row md:items-center py-10 md:py-16 border-b border-white/10 hover:bg-white/[0.01] transition-all duration-500 px-4 sm:px-8 gap-6 md:gap-12">
              {/* Number */}
              <div className="font-headline text-white/5 group-hover:text-primary/20 transition-colors duration-500 text-6xl md:text-8xl font-black italic tracking-tighter w-24 leading-none">
                0{i + 1}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="font-headline text-3xl md:text-5xl font-black mb-4 group-hover:text-primary transition-colors duration-500 uppercase italic tracking-tighter">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant text-base md:text-lg max-w-2xl leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Icon */}
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500 shrink-0">
                <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white/30 group-hover:text-primary transition-colors" />
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

        <div className="flex flex-col gap-4 max-w-3xl mx-auto px-4 sm:px-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial="closed"
              whileInView="open"
              viewport={{ margin: "-25% 0px -25% 0px", amount: 0.3 }}
              variants={{
                open: { backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(160,255,195,0.2)", scale: 1.02 },
                closed: { backgroundColor: "rgba(255,255,255,0.01)", borderColor: "rgba(255,255,255,0.05)", scale: 1 }
              }}
              className="border rounded-3xl p-6 sm:p-8 transition-all duration-500 overflow-hidden flex flex-col justify-center"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <step.icon className="w-6 h-6 sm:w-8 sm:h-8" />
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
