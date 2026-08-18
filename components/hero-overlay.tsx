"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

function Firefly({ color, delay, x, y }: { color: string; delay: number; x: string; y: string }) {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!el.current) return;
    const tl = gsap.timeline({ repeat: -1, yoyo: true, delay });
    tl.to(el.current, {
      x: `random(-120, 120)`,
      y: `random(-100, 100)`,
      rotation: `random(-45, 45)`,
      scale: `random(0.8, 1.3)`,
      duration: `random(8, 14)`,
      ease: "sine.inOut",
    });
    return () => { tl.kill(); };
  }, [delay]);

  return (
    <div
      ref={el}
      className="absolute w-8 h-8 pointer-events-none"
      style={{ left: x, top: y }}
    >
      <svg viewBox="0 0 32 32" fill="none" className="h-full w-full opacity-80">
        <ellipse cx="10" cy="16" rx="8" ry="11" fill={color} transform="rotate(-20 10 16)" />
        <ellipse cx="22" cy="16" rx="8" ry="11" fill={color} transform="rotate(20 22 16)" />
        <circle cx="16" cy="16" r="3" fill="#000000" />
      </svg>
    </div>
  );
}

function Constellation() {
  const svg = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svg.current) return;
    const dots = svg.current.querySelectorAll("circle");
    const lines = svg.current.querySelectorAll("line");
    gsap.fromTo(
      dots,
      { opacity: 0, r: 0 },
      { opacity: 1, r: 3, duration: 1.2, stagger: 0.08, ease: "power2.out" }
    );
    gsap.fromTo(
      lines,
      { strokeDashoffset: 200 },
      {
        strokeDashoffset: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power2.inOut",
        delay: 0.3,
      }
    );
    gsap.to(dots, {
      y: -8,
      duration: 2.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: { amount: 1, from: "random" },
    });
  }, []);

  return (
    <svg
      ref={svg}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="#979797" strokeWidth="1" strokeDasharray="4 4">
        <line x1="60" y1="80" x2="140" y2="130" />
        <line x1="140" y1="130" x2="260" y2="90" />
        <line x1="260" y1="90" x2="340" y2="160" />
        <line x1="80" y1="220" x2="180" y2="260" />
        <line x1="180" y1="260" x2="320" y2="240" />
        <line x1="140" y1="130" x2="180" y2="260" />
        <line x1="260" y1="90" x2="320" y2="240" />
        <line x1="60" y1="80" x2="80" y2="220" />
      </g>
      <g fill="#000000">
        <circle cx="60" cy="80" r="3" />
        <circle cx="140" cy="130" r="3" />
        <circle cx="260" cy="90" r="3" />
        <circle cx="340" cy="160" r="3" />
        <circle cx="80" cy="220" r="3" />
        <circle cx="180" cy="260" r="3" />
        <circle cx="320" cy="240" r="3" />
      </g>
    </svg>
  );
}

export function HeroOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <Constellation />
      <Firefly color="#d1ffca" delay={0} x="10%" y="20%" />
      <Firefly color="#fff100" delay={1.2} x="80%" y="15%" />
      <Firefly color="#d1ffca" delay={2.4} x="75%" y="70%" />
      <Firefly color="#fff100" delay={0.8} x="15%" y="65%" />
      <Firefly color="#ffffff" delay={1.8} x="50%" y="80%" />
    </div>
  );
}
