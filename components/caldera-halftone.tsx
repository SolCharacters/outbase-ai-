"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Sparkles, Zap, ShieldCheck } from "lucide-react";

export function CalderaHalftone({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;
    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      targetMouseX = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      targetMouseY = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    };

    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      time += 0.028;
      // Smooth lerp mouse
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Deep volcanic plasma gradient
      const grad = ctx.createRadialGradient(
        width * (0.85 + Math.sin(time * 0.3) * 0.06),
        height * (0.15 + Math.cos(time * 0.4) * 0.06),
        width * 0.05,
        width * 0.5,
        height * 0.5,
        width * 0.9
      );
      grad.addColorStop(0, "#fc5000"); // Hot Ember
      grad.addColorStop(0.35, "#8237e8"); // Violet midtone
      grad.addColorStop(0.8, "#524ae9"); // Deep Plasma
      grad.addColorStop(1, "#362ec4");

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // High-density Halftone Dot Lattice
      const gridSize = Math.max(14, width / 32);
      const rows = Math.ceil(height / gridSize) + 1;
      const cols = Math.ceil(width / gridSize) + 1;

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const x = c * gridSize;
          const y = r * gridSize;

          const nx = x / width;
          const ny = y / height;

          // Multi-frequency wave pattern
          const w1 = Math.sin(nx * 8 + time * 1.2) * 0.5 + 0.5;
          const w2 = Math.cos(ny * 8 - time * 0.9) * 0.5 + 0.5;
          const w3 = Math.sin((nx + ny) * 6 + time * 1.5) * 0.5 + 0.5;

          const dist = Math.sqrt((nx - mouseX) ** 2 + (ny - mouseY) ** 2);
          const mouseRipple = Math.max(0, 1 - dist * 2.8);

          // Dot scale based on heat position & wave
          const heatProximity = Math.max(0, 1 - Math.sqrt((nx - 0.85) ** 2 + (ny - 0.15) ** 2) * 1.4);
          const dotFraction = (w1 * 0.3 + w2 * 0.3 + w3 * 0.4) * (0.4 + heatProximity * 0.6) + mouseRipple * 0.45;

          const dotRadius = Math.max(1.2, (gridSize * 0.42) * Math.min(1.1, dotFraction));

          // Color gradient for the dots: Ember (#fc5000) -> Sulfur (#f5f28e) in the hot corner
          if (heatProximity > 0.45 || mouseRipple > 0.4) {
            ctx.fillStyle = "#f5f28e";
            ctx.globalAlpha = 0.9;
          } else if (heatProximity > 0.2) {
            ctx.fillStyle = "#fc5000";
            ctx.globalAlpha = 0.85;
          } else {
            ctx.fillStyle = "#fc5000";
            ctx.globalAlpha = 0.65 + dotFraction * 0.25;
          }

          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-[480px] w-full max-w-[580px] overflow-hidden rounded-[40px] p-8 border border-ash/40 transition duration-300 hover:scale-[1.01]",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full rounded-[40px]"
      />

      {/* Embedded Floating Caldera Status Chips */}
      <div className="relative z-10 flex h-full flex-col justify-between pointer-events-none">
        <div className="flex items-center justify-between">
          <span className="mono-label rounded-[800px] bg-sulfur px-4 py-1.5 text-obsidian font-bold text-[11px] shadow-sm flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-ember animate-ping" />
            REGISTRY ONLINE
          </span>
          <span className="mono-label rounded-[800px] bg-chalk px-4 py-1.5 text-obsidian font-bold text-[11px] shadow-sm">
            BASE L2 USDC
          </span>
        </div>

        <div className="rounded-[32px] bg-obsidian/95 p-7 backdrop-blur-md text-chalk border border-chalk/10">
          <div className="flex items-center justify-between">
            <span className="mono-label text-sulfur text-[11px] font-bold">AUTONOMOUS DISCOVERY</span>
            <span className="font-mono text-[14px] font-bold text-ember">0.02 USDC</span>
          </div>
          <div className="mt-2 font-display text-[34px] leading-[0.95] text-chalk">
            MACHINE COMMERCE
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4 font-mono text-[12px] text-chalk/70 border-t border-chalk/10 pt-3">
            <span className="text-sulfur font-bold">99.4% VERIFIED</span>
            <span>·</span>
            <span>&lt; 1.8S LATENCY</span>
            <span>·</span>
            <span>X402 PROTOCOL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CalderaHalftone as HeroGraphic };
