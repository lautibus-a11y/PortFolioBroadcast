export default function DynamicBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-surface overflow-hidden pointer-events-none">
      {/* Static Green Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-primary/5 blur-[100px] md:blur-[150px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-primary/10 blur-[120px] md:blur-[180px] rounded-full" />

      {/* White accent washes — organic, edge-based, not dots */}
      {/* Top-right corner bleed */}
      <div className="absolute top-0 right-0 w-[40%] h-[30%] bg-white/[0.025] blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4" />
      {/* Left mid bleed */}
      <div className="absolute top-[35%] left-[-5%] w-[25%] h-[40%] bg-white/[0.018] blur-[100px] rounded-full" />
      {/* Bottom-center subtle wash */}
      <div className="absolute bottom-[5%] left-[30%] w-[40%] h-[25%] bg-white/[0.015] blur-[140px] rounded-full" />
      {/* Far right mid wash */}
      <div className="absolute top-[60%] right-[-8%] w-[30%] h-[35%] bg-white/[0.02] blur-[110px] rounded-full" />

      {/* Static Grid */}
      <div 
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(160, 255, 195, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(160, 255, 195, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface opacity-80" />
      </div>

      {/* Radial Mask for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0e0e0e_80%)]"></div>
    </div>
  );
}
