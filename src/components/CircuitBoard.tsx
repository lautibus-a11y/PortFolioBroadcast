import { useEffect, useRef } from "react";

export default function CircuitBoard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const tracks: Track[] = [];
    const trackCount = 15;

    class Track {
      x: number;
      y: number;
      points: { x: number; y: number }[];
      pulses: number[];
      speed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.points = [{ x: this.x, y: this.y }];
        this.generatePath();
        this.pulses = [0];
        this.speed = 0.005 + Math.random() * 0.01;
      }

      generatePath() {
        let curX = this.x;
        let curY = this.y;
        for (let i = 0; i < 4; i++) {
          const dir = Math.floor(Math.random() * 4);
          const len = 30 + Math.random() * 60;
          if (dir === 0) curX += len;
          else if (dir === 1) curX -= len;
          else if (dir === 2) curY += len;
          else curY -= len;
          this.points.push({ x: curX, y: curY });
        }
      }

      update() {
        for (let i = 0; i < this.pulses.length; i++) {
          this.pulses[i] += this.speed;
          if (this.pulses[i] > 1) this.pulses[i] = 0;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(160, 255, 195, 0.15)";
        ctx.lineWidth = 1;
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < this.points.length; i++) {
          ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.stroke();

        // Draw nodes
        ctx.fillStyle = "rgba(160, 255, 195, 0.4)";
        this.points.forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        });

        // Draw pulses
        this.pulses.forEach(t => {
          const pointDist = 1 / (this.points.length - 1);
          const segmentIndex = Math.floor(t / pointDist);
          const segmentT = (t % pointDist) / pointDist;

          if (segmentIndex < this.points.length - 1) {
            const p1 = this.points[segmentIndex];
            const p2 = this.points[segmentIndex + 1];
            const px = p1.x + (p2.x - p1.x) * segmentT;
            const py = p1.y + (p2.y - p1.y) * segmentT;

            ctx.beginPath();
            const grad = ctx.createRadialGradient(px, py, 0, px, py, 15);
            grad.addColorStop(0, "rgba(160, 255, 195, 0.8)");
            grad.addColorStop(1, "rgba(160, 255, 195, 0)");
            ctx.fillStyle = grad;
            ctx.arc(px, py, 10, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.beginPath();
            ctx.fillStyle = "#a0ffc3";
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      }
    }

    for (let i = 0; i < trackCount; i++) {
      tracks.push(new Track());
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      tracks.forEach(track => {
        track.update();
        track.draw(ctx);
      });
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
    />
  );
}
