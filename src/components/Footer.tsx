export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 pt-20 pb-12 bg-[#0e0e0e]">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="text-xl font-black tracking-tighter text-white mb-8 md:mb-0 uppercase italic font-headline underline decoration-primary decoration-4 underline-offset-8">BroadCast</div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12 md:mb-0">
          {["LinkedIn", "GitHub", "Instagram", "Dribbble"].map((social) => (
            <a 
              key={social}
              href="#" 
              className="font-body text-xs tracking-widest uppercase text-gray-500 hover:text-primary transition-colors duration-300"
            >
              {social}
            </a>
          ))}
        </div>

        <div className="font-body text-[10px] tracking-widest uppercase text-gray-500">
          © 2024 THE NEON CURATOR. TODOS LOS DERECHOS RESERVADOS.
        </div>
      </div>
    </footer>
  );
}
