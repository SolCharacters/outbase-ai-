"use client";

import { useEffect, useRef } from "react";
import { CtaLink } from "@/components/ui";

export function CalderaHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    let time = 0;
    let mouseX = 0.72;
    let mouseY = 0.28;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = (e.clientY - rect.top) / rect.height;
    };

    if (!reduced) window.addEventListener("mousemove", onMouseMove);

    const paint = (animate: boolean) => {
      if (animate) time += 0.018;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#524ae9";
      ctx.fillRect(0, 0, width, height);

      const grad = ctx.createRadialGradient(
        width * 0.78,
        height * 0.22,
        width * 0.04,
        width * 0.62,
        height * 0.42,
        width * 0.85
      );
      grad.addColorStop(0, "rgba(252, 80, 0, 0.95)");
      grad.addColorStop(0.38, "rgba(120, 52, 229, 0.85)");
      grad.addColorStop(1, "#524ae9");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      const gridSize = Math.max(18, width / 36);
      const rows = Math.ceil(height / gridSize) + 1;
      const cols = Math.ceil(width / gridSize) + 1;

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const x = c * gridSize;
          const y = r * gridSize;
          const nx = x / width;
          const ny = y / height;
          const dist = Math.sqrt((nx - mouseX) ** 2 + (ny - mouseY) ** 2);
          const mouseRipple = Math.max(0, 1 - dist * 3.2);
          const wave = animate
            ? Math.sin(nx * 9 - time * 1.1) * Math.cos(ny * 7 + time * 0.9) * 0.5 + 0.5
            : 0.45;
          const heatDist = Math.sqrt((nx - 0.74) ** 2 + (ny - 0.24) ** 2);
          const heatProximity = Math.max(0, 1 - heatDist * 1.55);
          const dotRadius = Math.max(1.1, gridSize * 0.38 * (wave * 0.28 + heatProximity * 0.7 + mouseRipple * 0.22));

          ctx.fillStyle = "#fc5000";
          ctx.globalAlpha = 0.28 + heatProximity * 0.45 + wave * 0.12;
          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
    };

    if (reduced) {
      paint(false);
      return () => window.removeEventListener("resize", resize);
    }

    const draw = () => {
      paint(true);
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
    <section className="relative w-full overflow-hidden bg-pumice px-4 pt-4 pb-4 sm:px-6 md:pb-6">
      <div className="mx-auto max-w-[1280px]">
        <div className="relative min-h-[520px] overflow-hidden rounded-[40px] md:min-h-[580px] md:rounded-[48px] lg:min-h-[640px]">
          <div className="bg-halftone-plasma absolute inset-0" aria-hidden />
          <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />

          <div className="relative z-10 flex h-full min-h-[520px] flex-col justify-between p-5 sm:p-10 md:min-h-[580px] lg:min-h-[640px] lg:p-12">
            <div data-hero-reveal className="inline-block max-w-[720px] self-start rounded-[28px] bg-pumice p-5 sm:rounded-[36px] sm:p-8 lg:p-10">
              <h1 className="font-display text-[48px] leading-[0.9] tracking-tight text-obsidian uppercase sm:text-[76px] lg:text-[104px]">
                The Network
                <br />
                For AI Agents
              </h1>
            </div>

            <div data-hero-reveal className="mt-8 w-full max-w-[460px] self-end rounded-[32px] bg-limestone p-6 sm:rounded-[36px] sm:p-8">
              <p className="text-[16px] font-medium leading-relaxed text-obsidian/85 sm:text-[17px]">
                Discover specialists, delegate work, and settle every run in USDC on Base.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <CtaLink href="/agents" className="w-full sm:w-auto sm:min-w-[184px]">
                  Explore Agents
                </CtaLink>
                <CtaLink href="/docs" variant="secondary" className="w-full sm:w-auto sm:min-w-[164px]">
                  View Docs
                </CtaLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
