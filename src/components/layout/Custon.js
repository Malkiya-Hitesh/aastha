"use client";

import { FaWhatsapp } from "react-icons/fa";

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
    logo: null,
    type: "text",
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
    logo: "JPS",
    type: "logo",
    logoColors: ["#e53e3e", "#22c55e", "#6366f1"],
    logoSub: ["JASDAN", "PUBLIC", "SCHOOL"],
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
    logo: null,
    type: "text",
  },
];

const contactNumbers = [
  "99252 00182",
  "98242 21798",
  "98259 74040",
  "99245 30733",
];

function JPSLogo() {
  const letters = [
    { char: "J", bg: "#dc2626" },
    { char: "P", bg: "#16a34a" },
    { char: "S", bg: "#4f46e5" },
  ];
  const subs = ["JASDAN", "PUBLIC", "SCHOOL"];
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-4">
        {letters.map(({ char, bg }, i) => (
          <div
            key={i}
            className="w-10 h-14 flex items-center  justify-center rounded"
            style={{ backgroundColor: bg }}
          >
            <span
              className="text-white font-black text-4xl  font-[100] "
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {char}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-1 mt-0.5">
        {subs.map((s, i) => (
          <span
            key={i}
            className="text-[10px] font-bold tracking-wider text-gray-700 w-14 text-center"
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
      className="flex flex-col items-center justify-between border-2 border-dashed rounded-lg p-4 flex-1 min-h-[220px] bg-white"
      style={{ borderColor: school.border }}
    >
      {/* Top Section */}
      <div className="flex flex-col items-center gap-2 text-center">
        {school.type === "logo" ? (
          <JPSLogo />
        ) : (
          <h2
            className="text-3xl font-[1000] leading-tight"
            style={{ color: school.accent, fontFamily: "'Georgia', serif" }}
          >
            {school.name}
          </h2>
        )}

        <p
          className="font-semibold text-sm"
          style={{
            color: school.type === "logo" ? "#00aaff" : school.accent,
          }}
        >
          {school.medium}
        </p>

        <div className="text-sm text-gray-700 font-medium leading-snug">
          {school.details.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-1 mt-3 text-gray-800 font-bold text-sm">
        {school.whatsapp && (
          <FaWhatsapp className="text-green-500 text-lg shrink-0" />
        )}
        <span>Mo. {school.phone}</span>
      </div>
    </div>
  );
}

export default function TeamAasthaAd() {
  return (
    <div className="w-full max-w-3xl mx-auto font-sans shadow-xl overflow-hidden rounded-xl border border-gray-200">
      {/* School Cards Row */}
      <div className="flex gap-3 p-4 bg-white">
        {schools.map((school) => (
          <SchoolCard key={school.id} school={school} />
        ))}
      </div>

      {/* Contact Numbers Bar */}
      <div className="bg-white px-4 pb-3 pt-1 text-center">
        <p className="text-gray-900 font-extrabold text-base tracking-wide">
          Mo.{" "}
          {contactNumbers.map((num, i) => (
            <span key={i}>
              {num}
              {i < contactNumbers.length - 1 && (
                <span className="text-gray-400"> / </span>
              )}
            </span>
          ))}
        </p>
      </div>

 
      
    </div>
  );
}