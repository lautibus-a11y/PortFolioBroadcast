export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-10 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-[1440px] mx-auto gap-8 md:gap-0">
        <div className="text-xl font-black tracking-tighter text-[#0e0e0e] uppercase italic font-headline underline decoration-primary decoration-4 underline-offset-8">BroadCast</div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {["LinkedIn", "GitHub", "Instagram", "Dribbble"].map((social) => (
            <a 
              key={social}
              href="#" 
              className="font-body text-xs tracking-widest uppercase text-[#0e0e0e]/40 hover:text-[#0e0e0e] transition-colors duration-300"
            >
              {social}
            </a>
          ))}
        </div>

        <div className="font-body text-[10px] tracking-widest uppercase text-[#0e0e0e]/40">
          © 2024 THE NEON CURATOR. TODOS LOS DERECHOS RESERVADOS.
        </div>
      </div>
    </footer>
  );
}
