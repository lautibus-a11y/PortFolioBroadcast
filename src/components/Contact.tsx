import React, { useState } from "react";
import { Mail, MessageCircle, ArrowUpRight, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const WHATSAPP_NUMBER = "5491172023171"; // Argentina country code 54 + number

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola! Soy ${name || "alguien"} y me contacto desde tu portfolio.\n\n${message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-20 md:py-40 px-6 md:px-12 max-w-[1440px] mx-auto" id="contacto">

      {/* Header */}
      <div className="text-center mb-20 md:mb-32">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white mb-10 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <MessageCircle className="w-4 h-4 text-[#0e0e0e]" />
          <span className="text-[11px] font-black tracking-[0.3em] uppercase text-[#0e0e0e]">Contacto</span>
        </div>
        <h2 className="font-headline text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
          <span className="text-white">Hablemos de </span>
          <span className="font-light text-white/20">tu proyecto</span>
        </h2>
        <p className="text-on-surface-variant text-base sm:text-lg max-w-xl mx-auto">
          Estoy disponible para nuevos proyectos. Escribime y te respondo a la brevedad.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-5xl mx-auto">

        {/* Left — Contact Info */}
        <ScrollReveal direction="left">
          <div className="space-y-8">

            {/* Email */}
            <a
              href="mailto:Lautibus@icloud.com"
              className="group flex items-center gap-6 p-6 glass-card rounded-2xl hover:border-primary/40 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 shrink-0">
                <Mail className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
              </div>
              <div>
                <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.25em] mb-1">Email directo</p>
                <p className="font-headline font-black text-lg tracking-tight group-hover:text-primary transition-colors">
                  Lautibus@icloud.com
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-all ml-auto group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-6 p-6 glass-card rounded-2xl hover:border-primary/40 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 shrink-0">
                <MessageCircle className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
              </div>
              <div>
                <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.25em] mb-1">WhatsApp</p>
                <p className="font-headline font-black text-lg tracking-tight group-hover:text-primary transition-colors">
                  +54 11 7202-3171
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-all ml-auto group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* Availability Tag */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-primary/5 border border-primary/20 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[11px] font-black text-primary tracking-[0.2em] uppercase">Disponible para proyectos</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Right — WhatsApp Form */}
        <ScrollReveal direction="right" delay={0.2}>
          <div className="glass-card p-8 sm:p-10 rounded-[2rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="relative z-10">
              <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.25em] mb-8">
                Enviar mensaje por WhatsApp
              </p>

              <form onSubmit={handleWhatsApp} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.25em]">
                    Tu nombre
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Juan Pérez"
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary transition-all text-lg font-medium tracking-tight placeholder:text-white/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.25em]">
                    Tu mensaje
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Contame sobre tu proyecto..."
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary transition-all text-lg font-medium tracking-tight resize-none placeholder:text-white/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-fit mx-auto flex items-center justify-between gap-8 bg-primary text-black font-headline font-black text-sm uppercase tracking-[0.15em] px-8 py-4 rounded-xl hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 group"
                >
                  Enviar por WhatsApp
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
