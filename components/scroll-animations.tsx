"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollAnimations() {
  useEffect(() => {
    const heroes = document.querySelectorAll("[data-hero-reveal]");
    if (heroes.length) {
      gsap.fromTo(
        heroes,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: "power3.out", stagger: 0.12, delay: 0.2 }
      );
    }

    // Section reveals
    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Marketing pages: auto-reveal every top-level child of main[data-marketing]
    gsap.utils.toArray<HTMLElement>("[data-marketing] > section, [data-marketing] > div").forEach((el, i) => {
      if (i === 0) return; // skip hero, handled separately
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Staggered children inside reveal containers
    gsap.utils.toArray<HTMLElement>("[data-reveal-children]").forEach((parent) => {
      const children = parent.children;
      gsap.fromTo(
        children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: parent,
            start: "top 80%",
          },
        }
      );
    });

    // Parallax subtle float on elements marked [data-parallax]
    gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
      const speed = Number(el.dataset.parallax || 0.1);
      gsap.to(el, {
        y: () => window.innerHeight * speed * -1,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
