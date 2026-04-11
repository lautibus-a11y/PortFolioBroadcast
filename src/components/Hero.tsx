import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, ArrowUpRight, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Button from "./Button";

const VisualFrame = ({ isMobile }: { isMobile?: boolean }) => (
  <div className={`relative w-full flex justify-center group ${isMobile ? "max-w-[220px]" : "max-w-[340px] md:max-w-[420px]"}`}>
    {/* Solid Glassmorphism Frame (Optimized for performance) */}
    <motion.div
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{ willChange: "transform" }}
      className={`relative z-20 w-full aspect-square rounded-[2rem] p-4 sm:p-6 bg-white/5 border border-white/20 shadow-2xl flex flex-col ${isMobile ? "backdrop-blur-md" : "backdrop-blur-xl"}`}
    >
      {/* Container for Full Width Image */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#080808]">
        <img 
          src="/assets/hero/hero-main.png" 
          alt="Brand Logo" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
          onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/elite/800/800" }}
        />
        
        {/* Subtle glass reflection superimposed on the image */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none mix-blend-overlay"></div>
      </div>
    </motion.div>

    {/* Secondary Glow Behind (Static to prevent heavy repaint lag on mobile) */}
    <div 
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20 rounded-full w-[100%] h-[100%] -z-10 opacity-50 ${isMobile ? "blur-[40px]" : "blur-[60px]"}`} 
    />
  </div>
);

export default function Hero() {
  const words = ["Diseño", "Desarrollo", "Código"];
  const [index, setIndex] = useState(0);
  const [isHighlighted, setIsHighlighted] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Start highlight
      setIsHighlighted(true);
      
      // Wait for highlight to cover text, then change word
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        // Remove highlight
        setTimeout(() => {
          setIsHighlighted(false);
        }, 300);
      }, 600);
      
    }, 4000); // Total cycle time
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] pt-32 pb-20 px-6 md:px-12 overflow-hidden flex items-center" 
             style={{ 
               background: "radial-gradient(circle at 50% -20%, #1a2a1f 0%, #0e0e0e 70%)"
             }}>
      {/* Subtle Grid Overlay for Hero */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
      </div>
      
      <div className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-center lg:text-left relative z-10">
          <ScrollReveal direction="down" delay={0.1} distance={20} blur={true}>
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl px-3 py-1.5 rounded-xl mb-8 border border-white/10 shadow-xl overflow-hidden min-w-[160px] justify-center lg:justify-start">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
              </span>
              <span className="font-label text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-on-surface font-black whitespace-nowrap">
                IMPACTO DIGITAL
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} distance={30} blur={true}>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter mb-8 uppercase italic flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1">
              <span className="relative inline-block overflow-hidden py-1 px-2 -mx-2">
                <motion.span
                  animate={{ 
                    color: isHighlighted ? "#000000" : "#a0ffc3" 
                  }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  {words[index]}
                </motion.span>
                
                {/* Selection Highlight Box */}
                <motion.span
                  initial={{ left: "-105%" }}
                  animate={{ 
                    left: isHighlighted ? "0%" : "105%"
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.65, 0, 0.35, 1] 
                  }}
                  className="absolute inset-0 bg-white z-0"
                  style={{ width: "100%" }}
                />
              </span>
              <span>y</span>
              <span className="font-light text-white/20 w-full text-center lg:text-left">Arquitectura Digital</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3} distance={30} blur={true}>
            <div className="relative max-w-lg mx-auto lg:mx-0 mt-4 mb-10 group">
              {/* Opening quote - green border ring, white fill icon */}
              <motion.div 
                animate={{ y: [-3, 3, -3], rotate: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-4 sm:-left-8 transition-opacity duration-500"
              >
                <div className="w-9 h-9 rounded-full border-2 border-primary flex items-center justify-center bg-primary/5 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  <Quote size={16} className="text-white transform rotate-180" />
                </div>
              </motion.div>
              
              <p className="block text-center lg:text-left text-on-surface-variant text-base sm:text-lg font-body font-medium leading-[1.6] tracking-tight opacity-90 relative z-10 px-6 sm:px-0">
                Transformo marcas emergentes en referentes de la industria a través de interfaces minimalistas y experiencias digitales diseñadas para generar impacto y resultados reales.
              </p>
              
              {/* Closing quote - green border ring, white fill icon */}
              <motion.div 
                animate={{ y: [3, -3, 3], rotate: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-4 sm:-right-8 transition-opacity duration-500"
              >
                <div className="w-9 h-9 rounded-full border-2 border-primary flex items-center justify-center bg-primary/5 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  <Quote size={16} className="text-white" />
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4} distance={30} blur={true}>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-12 w-full">
              <a href="https://wa.me/5491172023171" target="_blank" rel="noopener noreferrer" className="w-full sm:w-fit">
                <Button icon={Phone} variant="primary" className="w-full justify-center">Agendá una llamada</Button>
              </a>
              <a href="#proyectos" className="w-full sm:w-fit">
                <Button icon={ArrowUpRight} variant="secondary" className="w-full justify-center">Mirá mi laburo</Button>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.5} distance={10}>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border-2 sm:border-4 border-surface overflow-hidden hover:scale-110 transition-transform cursor-pointer relative z-[i]">
                    <img
                      alt="Cliente"
                      className="w-full h-full object-cover"
                      src={`/assets/hero/client-${i}.jpg`}
                      onError={(e) => { e.currentTarget.src = `https://picsum.photos/seed/client${i}/100/100` }}
                    />
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <p className="text-white font-black text-lg sm:text-xl tracking-tight leading-none">+20 Clientes</p>
                <p className="text-on-surface-variant font-black text-[8px] sm:text-[9px] tracking-[0.2em] uppercase">Startups globales</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Visual Frame Section */}
        <ScrollReveal direction="none" delay={0.3} scale={true} blur={true}>
          <div className="hidden lg:flex flex-1 w-full relative z-20 mt-8 lg:mt-0 justify-center">
            <VisualFrame isMobile={false} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
