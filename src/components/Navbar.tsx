import { motion, AnimatePresence } from "motion/react";
import { Globe, Moon, Instagram, Send, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 px-4 sm:px-6 pt-6 pointer-events-none">
      <nav className="max-w-[1440px] mx-auto liquid-glass rounded-2xl flex items-center h-16 pointer-events-auto shadow-2xl overflow-hidden backdrop-blur-3xl">
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="px-6 sm:px-8 h-full flex items-center border-r border-white/10"
        >
          <div className="text-lg sm:text-xl font-black tracking-tighter text-white font-headline uppercase">BroadCast</div>
        </motion.div>
        
        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex flex-1 h-full items-center px-8 gap-8">
          {["Sobre mi", "Servicios", "Proyectos", "Contacto"].map((item, i) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`}
              className="font-headline tracking-tight text-sm text-gray-400 font-medium hover:text-white transition-colors flex items-center gap-2"
            >
              {item === "Proyectos" && (
                <span className="bg-white/10 text-[10px] px-1.5 py-0.5 rounded-md text-primary font-bold">24</span>
              )}
              {item}
              {i > 0 && item !== "Contacto" && <ChevronDown className="w-3 h-3 opacity-50" />}
            </motion.a>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center h-full ml-auto lg:ml-0">
          {/* CTA Button - Desktop/Tablet */}
          <div className="hidden sm:flex px-6 border-l border-white/10 h-full items-center">
            <a href="https://wa.me/5491172023171" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2 rounded-lg font-headline text-xs font-bold transition-all flex items-center gap-2"
              >
                Contacto
                <Send className="w-3 h-3 text-primary" />
              </motion.button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex lg:hidden px-6 border-l border-white/10 h-full items-center text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Instagram Icon - Desktop */}
          <div className="hidden md:flex px-6 border-l border-white/10 h-full items-center text-gray-400 hover:text-white transition-colors cursor-pointer">
            <Instagram className="w-4 h-4" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="lg:hidden absolute top-24 left-4 right-4 liquid-glass rounded-[2rem] p-8 pointer-events-auto border border-white/10 shadow-3xl"
          >
            <div className="flex flex-col gap-6">
              {["Sobre mi", "Servicios", "Proyectos", "Contacto"].map((item, i) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-headline font-black text-white italic hover:text-primary transition-colors flex items-center justify-between group"
                >
                  {item}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">→</span>
                </a>
              ))}
              <div className="h-px w-full bg-white/10 my-4"></div>
              <a href="https://wa.me/5491172023171" target="_blank" rel="noopener noreferrer" className="flex justify-center">
                <button className="w-fit bg-primary text-on-primary py-4 px-8 rounded-2xl font-headline font-black uppercase tracking-[0.2em] text-[10px]">
                  Agendá una llamada
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
