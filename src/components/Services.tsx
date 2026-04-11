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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-24 md:mb-40">
        {services.map((service, i) => (
          <ScrollReveal key={service.title} delay={i * 0.1} direction="up" distance={40}>
            <div className="glass-card p-8 sm:p-10 rounded-[2.5rem] h-full group">
              <motion.div 
                whileHover={{ rotateY: 180, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-primary transition-colors"
              >
                <service.icon className="text-primary group-hover:text-black w-6 h-6 sm:w-7 sm:h-7 transition-colors" />
              </motion.div>
              <h3 className="font-headline text-xl sm:text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">{service.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Story Timeline */}
      <div className="mb-24 md:mb-40">
        <ScrollReveal direction="up">
          <div className="text-center mb-16 md:mb-20">
            <h3 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">Nuestro <span className="text-primary">Proceso</span></h3>
            <p className="text-on-surface-variant max-w-xl mx-auto font-medium text-sm sm:text-base">Un camino estructurado desde el concepto hasta la realidad.</p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden lg:block -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.2} direction="up">
                <div className="group text-center px-4">
                  <div className="relative mb-6 sm:mb-8 flex justify-center">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2, duration: 0.8 }}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl glass-card flex items-center justify-center border-primary/20 group-hover:border-primary transition-all duration-500 bg-surface/80"
                    >
                      <step.icon className="text-primary w-6 h-6 sm:w-8 sm:h-8" />
                    </motion.div>
                    {i < steps.length - 1 && (
                      <div className="absolute top-1/2 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-px bg-primary/20 hidden lg:block"></div>
                    )}
                  </div>
                  <h4 className="font-headline text-lg sm:text-xl font-bold mb-2 uppercase italic tracking-wider">{step.title}</h4>
                  <p className="text-on-surface-variant text-[10px] sm:text-xs font-medium px-2 sm:px-4">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
