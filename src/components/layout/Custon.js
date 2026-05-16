"use client";

import { useEffect, useRef, useState } from "react";

// ── Fixed design width (desktop reference) ──────────────────────────────────
const DESIGN_WIDTH = 768;

const schools = [
  {
    id: 1,
    name: "શ્રી આસ્થા શૈક્ષણિક સંકુલ",
    medium: "(ગુજરાતી માધ્યમ)",
    details: ["L.K.G., H.K.G.  ધો. ૧ થી ૧૨", "(સાયન્સ, કોર્મસ, આર્ટસ)"],
    phone: "63547 71871",
    whatsapp: true,
    accent: "#e53e3e",
    border: "#e53e3e",
    type: "text",
    link: "https://www.aekschool.com/",
  },
  {
    id: 2,
    name: null,
    medium: "English Medium",
    details: ["K.G. to 12 (Commerce)"],
    phone: "93130 24124",
    whatsapp: true,
    accent: "#00aaff",
    border: "#00aaff",
    type: "logo",
    link: "https://www.jasdanpublicschool.com/",
  },
  {
    id: 3,
    name: "યશોદા ગર્લ્સ સ્કૂલ",
    medium: "(ગુજરાતી માધ્યમ)",
    details: ["K.G. to ૧૨  (કોર્મસ)"],
    phone: "97371 87101 / 02",
    whatsapp: false,
    accent: "#1a56db",
    border: "#1a56db",
    type: "text",
    link: "https://www.yashodagirlsschool.com/",
  },
];

function JPSLogo() {
  const letters = [
    { char: "J", bg: "#dc2626" },
    { char: "P", bg: "#16a34a" },
    { char: "S", bg: "#4f46e5" },
  ];
  const subs = ["JASDAN", "PUBLIC", "SCHOOL"];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      <div style={{ display: "flex", gap: 16 }}>
        {letters.map(({ char, bg }, i) => (
          <div
            key={i}
            style={{
              width: 40,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 4,
              backgroundColor: bg,
              flexShrink: 0,
            }}
          >
            <span style={{ color: "#fff", fontWeight: 900, fontSize: 34, fontFamily: "Georgia, serif", lineHeight: 1 }}>
              {char}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        {subs.map((s, i) => (
          <span
            key={i}
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: "#374151",
              width: 56,
              textAlign: "center",
              display: "block",
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function SchoolCard({ school }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: `2px dashed ${school.border}`,
        borderRadius: 10,
        padding: "16px 12px",
        flex: 1,
        minHeight: 220,
        backgroundColor: "#ffffff",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center" }}>
        {school.type === "logo" ? (
          <JPSLogo />
        ) : (
          <h2
            style={{
              color: school.accent,
              fontFamily: "Georgia, serif",
              fontSize: 28,
              fontWeight: 900,
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            {school.name}
          </h2>
        )}

        <p
          style={{
            fontWeight: 600,
            fontSize: 13,
            color: school.type === "logo" ? "#00aaff" : school.accent,
            margin: 0,
          }}
        >
          {school.medium}
        </p>

        <div style={{ fontSize: 13, color: "#374151", fontWeight: 500, lineHeight: 1.5 }}>
          {school.details.map((d, i) => (
            <p key={i} style={{ margin: 0 }}>{d}</p>
          ))}
        </div>
        {school.link && (
          <a
            href={school.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 16,
              color: school.accent,
              textDecoration: "underline",
              fontWeight: 600,
            }}
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
}

export default function TeamAasthaAd() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function recalc() {
      if (!outerRef.current) return;

      const parent = outerRef.current.parentElement;
      const available = parent
        ? parent.getBoundingClientRect().width
        : window.innerWidth;

      const newScale = Math.min(available / DESIGN_WIDTH, 1);
      setScale(newScale);

      // Sync outer wrapper height so the page doesn't leave a gap
      if (innerRef.current) {
        const naturalH = innerRef.current.getBoundingClientRect().height / newScale;
        outerRef.current.style.height = `${naturalH * newScale}px`;
      }
    }

    recalc();

    const ro = new ResizeObserver(recalc);
    const parent = outerRef.current?.parentElement;
    if (parent) ro.observe(parent);
    window.addEventListener("resize", recalc);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", recalc);
    };
  }, []);

  return (
    // Outer shell shrinks to scaled width, height patched by effect
    <div
      ref={outerRef}
      style={{
        width: DESIGN_WIDTH * scale,
        marginLeft: "auto",
        marginRight: "auto",
        overflow: "hidden",
      }}
    >
      {/* Inner canvas — always 768 px wide, scaled down visually */}
      <div
        ref={innerRef}
        style={{
          width: DESIGN_WIDTH,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: "#ffffff",
            borderRadius: 14,
            border: "1px solid #e5e7eb",
            boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
            overflow: "hidden",
            fontFamily: "sans-serif",
          }}
        >
          {/* 3-card row — gridTemplateColumns locks it to exactly 3 forever */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 20,
              padding: 24,
            }}
          >
            {schools.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}