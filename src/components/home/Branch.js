"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { H2, P } from "../ui";
import TeamAasthaAd from "../layout/Custon";

const ARROW_COLORS = ["#e53e3e", "#00aaff", "#1a56db"];

export default function Branch() {
  const containerRef = useRef(null);
  const logoRef      = useRef(null);
  const [lines, setLines]   = useState([]);

  useLayoutEffect(() => {
    function measure() {
      if (!containerRef.current || !logoRef.current) return;

      const cards = containerRef.current.querySelectorAll(".school-card");
      if (cards.length < 3) return;

      const base = containerRef.current.getBoundingClientRect();
      const logo = logoRef.current.getBoundingClientRect();

      // Arrow starts from bottom-center of logo
      const lx = logo.left + logo.width  / 2 - base.left;
      const ly = logo.top  + logo.height - base.top;        // bottom edge of logo

      const newLines = Array.from(cards).map((card) => {
        const c  = card.getBoundingClientRect();

        // Arrow ends at top-center of each card
        const ex = c.left + c.width / 2 - base.left;
        const ey = c.top - base.top;                        // top edge of card

        return { x1: lx, y1: ly, x2: ex, y2: ey };
      });

      setLines(newLines);
    }

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(containerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
      <div ref={containerRef} className="relative flex flex-col  py-14 md:py-20 lg:py-24 xl:py-30  ">
 
      <H2 className="text-center">Gujarat Group</H2>
      <P className="text-center">Every child  special</P>
 
      {/* Logo — responsive size via Tailwind */}
      <div className="flex justify-center mt-4 mb-12  sm:mb-14 md:mb-16 lg:mb-20">
        <div
          ref={logoRef}
          className="
            w-16 h-16
            sm:w-20 sm:h-20
            md:w-24 md:h-24
            lg:w-28 lg:h-28
            rounded-full overflow-hidden
            border-4 border-purple-500
            ring-4 ring-purple-100
            shadow-lg shadow-purple-200
          "
        >
          <img
            src="/image/logo2.png"
            alt="Gujarat Group"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
 
      {/* SVG arrows — always full container size, re-drawn on resize */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 10 }}
      >
        <defs>
          <marker id="arr-0" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#e53e3e" />
          </marker>
          <marker id="arr-1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#00aaff" />
          </marker>
          <marker id="arr-2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#1a56db" />
          </marker>
        </defs>
 
        {lines.map((line, i) =>
          line ? (
            <line
              key={i}
              x1={line.x1} y1={line.y1}
              x2={line.x2} y2={line.y2}
              stroke={ARROW_COLORS[i]}
              strokeWidth="2.5"
              strokeDasharray="6 3"
              markerEnd={`url(#arr-${i})`}
            />
          ) : null
        )}
      </svg>
 
      <TeamAasthaAd />
    </div>
  );
}