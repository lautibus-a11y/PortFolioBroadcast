import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Briefcase, ChevronDown, X, ExternalLink, MessageCircle } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import Button from "./Button";

interface Project {
  title: string;
  year: string;
  category: string;
  image: string;
  link: string;
  className?: string;
}

const mainProjects: Project[] = [
  {
    title: "WEB + APP EDUCATIVA",
    year: "2024",
    category: "Full Stack Development",
    image: "/assets/projects/web-app-educativa.png",
    link: "https://web-sistema-de-gestion-educativo-ns.vercel.app/"
  },
  {
    title: "WEB AUTOPARTES",
    year: "2024",
    category: "E-commerce & Database",
    image: "/assets/projects/WEB Autopartes.png",
    link: "https://autoelite-parts.vercel.app/"
  },
  {
    title: "APP INMOBILIARIA",
    year: "2023",
    category: "Modern UI/UX App",
    image: "/assets/projects/APP para Inmobiliarias.png",
    link: "https://inmobiliaria-eta-ten.vercel.app/"
  }
];

const otherProjects: Project[] = [
  {
    title: "SALÓN DE FIESTAS",
    year: "2024",
    category: "Reserva / Turnero",
    image: "/assets/projects/WEB Salon de fiestas Con sistems de turnos.png",
    link: "https://salondeffiestasturnero.vercel.app"
  },
  {
    title: "INVITACIÓN XV",
    year: "2024",
    category: "Interactive Design",
    image: "/assets/projects/Invitacion de XV interactiva.png",
    link: "https://invitacion-xv-pied.vercel.app/"
  },
  {
    title: "MENÚ PARA PARRILLA",
    year: "2024",
    category: "Digital Menu / QR",
    image: "/assets/projects/Menu para Parrilla.png",
    link: "https://parrilla-menu.vercel.app/"
  },
  {
    title: "TIENDA ONLINE",
    year: "2023",
    category: "E-commerce Ready",
    image: "/assets/projects/Tienda Online.png",
    link: "https://beacon-catalogo-j8nk.vercel.app/"
  },
  {
    title: "SISTEMA DE GESTIÓN",
    year: "2024",
    category: "SAAS / Business",
    image: "/assets/projects/Sistema de Gestion de Comercios.png",
    link: "https://sistemadegestion-six.vercel.app/"
  },
  {
    title: "MENÚ PARA PIZZERÍA",
    year: "2023",
    category: "Digital Experience",
    image: "/assets/projects/Menu para Pizzeria.png",
    link: "https://pizzeria-menu-xi.vercel.app/"
  }
];

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const renderProject = (project: Project, i: number) => (
    <ScrollReveal 
      key={project.title} 
      delay={i * 0.1} 
      direction={i % 2 === 0 ? "left" : "right"} 
      distance={50}
    >
      <div className={`group relative ${project.className || ""}`}>
        <div 
          onClick={() => setSelectedProject(project)}
          className="relative p-3 glass-card rounded-[3rem] mb-10 overflow-hidden hover:border-primary/50 transition-all duration-700 cursor-zoom-in group"
        >
          <div className="overflow-hidden rounded-[2.2rem] relative border border-white/5 bg-black/40">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              alt={project.title}
              className="w-full h-auto block transition-all duration-700"
              src={project.image}
              onError={(e) => { e.currentTarget.src = `https://picsum.photos/seed/${project.title}/800/1000` }}
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex flex-col items-center justify-center gap-4">
               <div className="bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full border border-white/10 font-headline font-black text-[10px] uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-all">Ampliar Vista</div>
               <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-primary text-black px-6 py-2 rounded-full font-headline font-black text-[10px] uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-all delay-75 flex items-center gap-2 hover:scale-110 active:scale-95"
               >
                 Ver Demo <ExternalLink className="w-3 h-3" />
               </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start px-6">
          <div className="flex-1">
            <h3 className="font-headline text-2xl sm:text-4xl font-black mb-3 tracking-tighter group-hover:text-primary transition-colors uppercase italic leading-none">{project.title}</h3>
            <div className="flex gap-4">
              <span className="font-label text-[9px] tracking-[0.3em] uppercase text-on-surface-variant font-black">{project.year}</span>
              <span className="font-label text-[9px] tracking-[0.3em] uppercase text-primary font-black">{project.category}</span>
            </div>
          </div>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 group-hover:rotate-12 shrink-0 ml-4 hover:scale-110"
          >
            <ExternalLink className="w-6 h-6 text-on-surface-variant group-hover:text-on-primary transition-colors" />
          </a>
        </div>
      </div>
    </ScrollReveal>
  );

  return (
    <section className="py-20 md:py-40 px-6 md:px-12 max-w-[1440px] mx-auto" id="proyectos">
      <div className="mb-16 md:mb-32">
        <ScrollReveal direction="down">
          <SectionHeader 
            badgeIcon={Briefcase} 
            badgeText="Portfolio" 
            titleBold="Mi Trabajo" 
            titleThin="seleccionado"
            description="Explorá mis soluciones digitales más recientes, desde plataformas educativas hasta ecosistemas de e-commerce de alto rendimiento."
          />
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 mb-20">
        {mainProjects.map((p, i) => renderProject(p, i))}
      </div>

      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 pb-20">
              {otherProjects.map((p, i) => renderProject(p, i + 3))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollReveal direction="none" distance={0}>
        <div 
          onClick={() => setShowAll(!showAll)}
          className="flex flex-col sm:flex-row justify-between items-center gap-8 glass-card p-8 sm:p-12 rounded-[2.5rem] sm:px-16 group hover:border-primary/50 cursor-pointer transition-all text-center sm:text-left"
        >
          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="font-headline text-2xl sm:text-3xl font-black tracking-tighter uppercase italic">
              {showAll ? "Ver menos proyectos" : "Ver todos los proyectos"}
            </span>
            <p className="text-on-surface-variant text-xs font-medium uppercase tracking-widest opacity-60">
              {showAll ? "Cerrar catálogo" : `Descubrí ${otherProjects.length} proyectos adicionales`}
            </p>
          </div>
          <div className={`bg-primary text-black w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-black text-xl sm:text-2xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-all duration-500 ${showAll ? "rotate-180 bg-white/10 text-white" : ""}`}>
            <ChevronDown className="w-8 h-8" />
          </div>
        </div>
      </ScrollReveal>

      {/* Modern Glassmorphic Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl w-full max-h-full glass-card p-2 sm:p-4 rounded-[2.5rem] overflow-hidden border-white/20 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header inside Modal */}
              <div className="flex items-center justify-between p-6 sm:px-10 border-b border-white/10">
                <div>
                  <h4 className="font-headline font-black text-xl sm:text-2xl tracking-tighter uppercase italic">{selectedProject.title}</h4>
                  <p className="text-[10px] text-primary font-black uppercase tracking-widest">{selectedProject.category}</p>
                </div>
                <div className="flex items-center gap-2">
                   <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary text-black px-4 sm:px-6 py-2 rounded-full font-headline font-black text-[10px] uppercase tracking-widest hover:bg-primary/80 transition-all"
                   >
                     Visitar <ExternalLink className="w-3 h-3" />
                   </a>
                   <a 
                    href="https://wa.me/5491172023171" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-2 rounded-full font-headline font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all"
                   >
                     Consultar <MessageCircle className="w-3 h-3" />
                   </a>
                   <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/50 transition-all"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-auto no-scrollbar rounded-b-[2.2rem] bg-black/20">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-auto block"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
