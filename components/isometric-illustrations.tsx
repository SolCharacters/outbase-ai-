"use client";

import { cn } from "@/lib/utils";

export function IsometricRollupEngine({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full h-full min-h-[300px] overflow-hidden rounded-[40px] bg-plasma-violet flex items-center justify-center p-6", className)}>
      {/* Halftone grid background */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(#fc5000 22%, transparent 24%)",
          backgroundSize: "16px 16px",
        }}
      />
      
      {/* High-Precision Isometric Assembly Machine Illustration */}
      <svg
        viewBox="0 0 540 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full max-h-[340px]"
      >
        {/* Isometric Grid Floor Track */}
        <g stroke="#070607" strokeWidth="2.5" strokeOpacity="0.4">
          <path d="M60 220 L270 340 L480 220 L270 100 Z" fill="none" />
          <path d="M120 220 L270 300 L420 220 L270 140 Z" fill="none" strokeDasharray="6 6" />
        </g>

        {/* Diagonal Conveyor Belt Left-to-Right */}
        <path
          d="M40 180 L220 280 L500 120 L320 20 Z"
          fill="#070607"
          stroke="#ffffff"
          strokeWidth="3"
        />
        <path
          d="M40 180 L40 205 L220 305 L500 145 L500 120 L220 280 Z"
          fill="#1c1b1a"
          stroke="#ffffff"
          strokeWidth="3"
        />

        {/* Conveyor grid marks */}
        <g stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.6">
          <line x1="100" y1="213" x2="160" y2="180" />
          <line x1="160" y1="247" x2="220" y2="213" />
          <line x1="280" y1="247" x2="340" y2="213" />
          <line x1="380" y1="190" x2="440" y2="157" />
        </g>

        {/* Central Isometric Hub Machine */}
        <g>
          {/* Machine base */}
          <path
            d="M230 110 L370 185 L370 295 L230 220 Z"
            fill="#070607"
            stroke="#ffffff"
            strokeWidth="3.5"
          />
          <path
            d="M370 185 L470 130 L470 240 L370 295 Z"
            fill="#1c1b1a"
            stroke="#ffffff"
            strokeWidth="3.5"
          />
          <path
            d="M230 110 L330 55 L470 130 L370 185 Z"
            fill="#2c2b2a"
            stroke="#ffffff"
            strokeWidth="3.5"
          />

          {/* Glowing Machine Portal / Screen */}
          <path
            d="M250 140 L350 195 L350 265 L250 210 Z"
            fill="#070607"
            stroke="#fc5000"
            strokeWidth="2.5"
          />
          
          {/* Cross Star Glyph on screen */}
          <g transform="translate(290, 195) scale(0.9)">
            <circle cx="10" cy="0" r="3" fill="#ffffff" />
            <circle cx="-10" cy="0" r="3" fill="#ffffff" />
            <circle cx="0" cy="10" r="3" fill="#ffffff" />
            <circle cx="0" cy="-10" r="3" fill="#ffffff" />
            <circle cx="0" cy="0" r="4.5" fill="#f5f28e" />
          </g>

          {/* Loader bar on machine */}
          <line x1="265" y1="235" x2="335" y2="272" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="265" y1="235" x2="305" y2="256" stroke="#fc5000" strokeWidth="4" strokeLinecap="round" />

          {/* Cooling Vents */}
          <g stroke="#ffffff" strokeWidth="2" strokeLinecap="round">
            <line x1="280" y1="85" x2="300" y2="75" />
            <line x1="290" y1="90" x2="310" y2="80" />
            <line x1="300" y1="95" x2="320" y2="85" />
          </g>
        </g>

        {/* Processing Node / Pod emerging from machine with Glowing Star */}
        <g transform="translate(360, 160)">
          {/* Floating Pod */}
          <path
            d="M0 40 L45 15 L90 40 L45 65 Z"
            fill="#ffffff"
            stroke="#070607"
            strokeWidth="3"
          />
          <path
            d="M0 40 L0 55 L45 80 L90 55 L90 40 L45 65 Z"
            fill="#e2e2df"
            stroke="#070607"
            strokeWidth="3"
          />
          {/* Molten 4-point Star Token */}
          <path
            d="M45 10 C45 25 35 35 20 35 C35 35 45 45 45 60 C45 45 55 35 70 35 C55 35 45 25 45 10 Z"
            fill="#fc5000"
            stroke="#070607"
            strokeWidth="2.5"
          />
        </g>

        {/* Incoming Raw Task Box */}
        <g transform="translate(130, 210)">
          <path d="M0 30 L35 10 L70 30 L35 50 Z" fill="#ffffff" stroke="#070607" strokeWidth="2.5" />
          <path d="M0 30 L0 55 L35 75 L70 55 L70 30 L35 50 Z" fill="#e2e2df" stroke="#070607" strokeWidth="2.5" />
          <circle cx="35" cy="30" r="4" fill="#fc5000" />
        </g>

        {/* Output Executed Pod on Right */}
        <g transform="translate(420, 110)">
          <path d="M0 35 L40 12 L80 35 L40 58 Z" fill="#ffffff" stroke="#070607" strokeWidth="3" />
          <path d="M0 35 L0 50 L40 73 L80 50 L80 35 L40 58 Z" fill="#e2e2df" stroke="#070607" strokeWidth="3" />
          {/* Star Token */}
          <path
            d="M40 10 C40 22 32 30 20 30 C32 30 40 38 40 50 C40 38 48 30 60 30 C48 30 40 22 40 10 Z"
            fill="#fc5000"
            stroke="#070607"
            strokeWidth="2.5"
          />
        </g>

        {/* Indicator Cable & Switch Pedestal */}
        <g transform="translate(140, 240)">
          <path d="M60 20 C10 40 20 80 80 90" fill="none" stroke="#070607" strokeWidth="3" />
          <ellipse cx="80" cy="90" rx="30" ry="18" fill="#070607" stroke="#ffffff" strokeWidth="2.5" />
          <path d="M65 85 L95 90 L80 100 Z" fill="#ffffff" />
          <line x1="80" y1="108" x2="80" y2="150" stroke="#070607" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

export function IsometricSettlementEngine({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full h-full min-h-[300px] overflow-hidden rounded-[40px] bg-ember flex items-center justify-center p-6", className)}>
      {/* Halftone dot pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#ffffff 22%, transparent 24%)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Isometric Settlement Hub Illustration */}
      <svg
        viewBox="0 0 540 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full max-h-[340px]"
      >
        {/* Layered Hexagonal Base Plates */}
        <g transform="translate(180, 100)">
          {/* Bottom Plate */}
          <path
            d="M90 20 L170 65 L170 155 L90 200 L10 155 L10 65 Z"
            fill="#070607"
            stroke="#ffffff"
            strokeWidth="3.5"
          />
          <path
            d="M10 155 L90 200 L90 225 L10 180 Z"
            fill="#1c1b1a"
            stroke="#ffffff"
            strokeWidth="3"
          />
          <path
            d="M90 200 L170 155 L170 180 L90 225 Z"
            fill="#2c2b2a"
            stroke="#ffffff"
            strokeWidth="3"
          />

          {/* Middle Stepped Plate */}
          <path
            d="M90 0 L155 38 L155 118 L90 155 L25 118 L25 38 Z"
            fill="#070607"
            stroke="#ffffff"
            strokeWidth="3.5"
          />

          {/* Stamped Settlement Core Seal with Dot Cluster */}
          <g transform="translate(90, 80)">
            <circle cx="0" cy="0" r="18" fill="#070607" stroke="#ffffff" strokeWidth="3" />
            <circle cx="0" cy="0" r="5" fill="#f5f28e" />
            <circle cx="0" cy="-11" r="2.5" fill="#ffffff" />
            <circle cx="0" cy="11" r="2.5" fill="#ffffff" />
            <circle cx="-11" cy="0" r="2.5" fill="#ffffff" />
            <circle cx="11" cy="0" r="2.5" fill="#ffffff" />
            <circle cx="-8" cy="-8" r="2" fill="#f5f28e" />
            <circle cx="8" cy="-8" r="2" fill="#f5f28e" />
            <circle cx="-8" cy="8" r="2" fill="#f5f28e" />
            <circle cx="8" cy="8" r="2" fill="#f5f28e" />
          </g>
        </g>

        {/* Orbiting Channel Pods */}
        <g transform="translate(70, 180)">
          <path d="M0 25 L35 5 L70 25 L35 45 Z" fill="#ffffff" stroke="#070607" strokeWidth="2.5" />
          <path d="M0 25 L0 45 L35 65 L70 45 L70 25 L35 45 Z" fill="#e2e2df" stroke="#070607" strokeWidth="2.5" />
          <circle cx="35" cy="25" r="4" fill="#fc5000" />
        </g>

        <g transform="translate(390, 190)">
          <path d="M0 25 L35 5 L70 25 L35 45 Z" fill="#ffffff" stroke="#070607" strokeWidth="2.5" />
          <path d="M0 25 L0 45 L35 65 L70 45 L70 25 L35 45 Z" fill="#e2e2df" stroke="#070607" strokeWidth="2.5" />
          <circle cx="35" cy="25" r="4" fill="#fc5000" />
        </g>
      </svg>
    </div>
  );
}
