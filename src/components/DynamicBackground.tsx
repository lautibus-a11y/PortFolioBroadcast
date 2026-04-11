export default function DynamicBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-surface overflow-hidden pointer-events-none">
      {/* Static Gradients (Optimized replacing heavy continuous motion blurs) */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-primary/5 blur-[100px] md:blur-[150px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-primary/10 blur-[120px] md:blur-[180px] rounded-full" />

      {/* Static Grid (Optimized repaints) */}
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
