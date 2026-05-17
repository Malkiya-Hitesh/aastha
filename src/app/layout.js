import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ── Site-wide constants ──────────────────────────────────────
const SITE_URL = "https://www.aasthaschool.com"; // 🔁 Replace with your real domain
const SITE_NAME = "Shree Aastha school jasdan";
const SITE_LOGO = "https://cdn.jsdelivr.net/gh/Malkiya-Hitesh/Aastha-image@main/image/logo.png";
const OG_IMAGE = "https://cdn.jsdelivr.net/gh/Malkiya-Hitesh/Aastha-image@main/image/4.webp"; // 🔁 Replace with a 1200×630 OG image

// ── Root metadata (inherited by all pages unless overridden) ──
export const metadata = {
  // ── Core ────────────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shree Aastha school jasdan | Jasdan Public School | Yashoda Girls School",
    template: "%s | Shree Aastha school jasdan",
  },
  description:
    "Shree Aastha school  Jasdan — GSEB & CBSE school offering LKG to Std 12 in Gujarati & English medium. Science, Commerce and Arts streams. Admissions open 2025–26.",

  // ── Keywords (still useful for some crawlers) ────────────────
  keywords: [
    "Aastha school Jasdan",
    "Jasdan Public School",
    "Yashoda Girls School",
    "GSEB school Jasdan",
    "CBSE school Jasdan",
    "school admission Jasdan 2025",
    "Gujarati medium school Jasdan",
    "English medium school Jasdan Gujarat",
    "best school Jasdan",
    "LKG to 12 school Jasdan",
    "science commerce arts school Gujarat",
    "Shree Aastha school jasdan",
  ],

  // ── Canonical & Authors ──────────────────────────────────────
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Shree Aastha school jasdan", url: SITE_URL }],
  creator: "Shree Aastha school jasdan",
  publisher: "Shree Aastha school jasdan",

  // ── Open Graph ───────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Shree Aastha school jasdan | Jasdan Public School | Yashoda Girls School",
    description:
      "GSEB & CBSE school in Jasdan, Gujarat. LKG to Std 12, Gujarati & English medium. Science, Commerce, Arts. Admissions open 2025–26.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Shree Aastha school jasdan — Jasdan, Gujarat",
        type: "image/webp",
      },
    ],
  },

  // ── Twitter / X Cards ────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Shree Aastha school jasdan | Best School in Jasdan",
    description:
      "GSEB & CBSE school in Jasdan, Gujarat. LKG to Std 12. Gujarati & English medium. Admissions open 2025–26.",
    images: [OG_IMAGE],
    creator: "@aasthaschool", // 🔁 Replace with your real Twitter handle (or remove)
  },

  // ── Icons / Favicon ──────────────────────────────────────────
  icons: {
    icon: [
      { url: SITE_LOGO, type: "image/png" },
      // 🔁 Ideally add proper favicon sizes:
      // { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      // { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: SITE_LOGO,
    apple: SITE_LOGO, // 🔁 Replace with /apple-touch-icon.png (180×180) for best results
    other: [
      {
        rel: "mask-icon",
        url: SITE_LOGO,
        color: "#1061d2",
      },
    ],
  },

  // ── Web App Manifest ─────────────────────────────────────────
  manifest: "/manifest.json", // we create this below

  // ── Robots / Indexing ─────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Verification (add your codes from Search Console / Bing) ──
  verification: {
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
    // bing:   "YOUR_BING_WEBMASTER_VERIFICATION_CODE",
  },

  // ── App-specific (PWA feel on mobile) ────────────────────────
  applicationName: SITE_NAME,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Aastha School",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  // ── Category ─────────────────────────────────────────────────
  category: "education",
};

// ── JSON-LD Structured Data ───────────────────────────────────
// Helps Google show rich results (Knowledge Panel, Local Business)
function SchoolStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // ── School (primary) ──────────────────────────────────────
      {
        "@type": "School",
        "@id": `${SITE_URL}/#school`,
        name: "Shree Aastha school jasdan",
        alternateName: [
          "Jasdan Public School",
          "Yashoda Girls School",
          "Aastha School Jasdan",
        ],
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: SITE_LOGO,
        },
        image: OG_IMAGE,
        description:
          "Shree Aastha school jasdan is a GSEB and CBSE affiliated school in Jasdan, Gujarat, offering education from LKG to Std 12 in Gujarati and English medium across Science, Commerce and Arts streams.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Chitaliya Road",
          addressLocality: "Jasdan",
          addressRegion: "Gujarat",
          postalCode: "360050", // 🔁 Replace with correct PIN
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          // 🔁 Replace with your school's exact lat/lng from Google Maps
          latitude: "22.0000",
          longitude: "71.0000",
        },
        telephone: [
          "+919512028511",
          "+919313024124",
          "+919737187102",
        ],
        email: "info@aastha.school", // 🔁 Replace with real email
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "07:30",
            closes: "14:30",
          },
        ],
        foundingDate: "1998", // 🔁 Replace with actual founding year if different
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          value: 60,
        },
        sameAs: [
          // 🔁 Add your actual social media URLs
          // "https://www.facebook.com/aasthaschool",
          // "https://www.instagram.com/aasthaschool",
          // "https://www.youtube.com/@aasthaschool",
        ],
        hasMap: "https://maps.google.com", // 🔁 Replace with your Google Maps link
        currenciesAccepted: "INR",
        priceRange: "₹₹",
      },

      // ── Website entity ─────────────────────────────────────────
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: "Official website of Shree Aastha school  Jasdan",
        publisher: { "@id": `${SITE_URL}/#school` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
        inLanguage: ["en-IN", "gu-IN"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <SchoolStructuredData />

        {/* ── Extra meta tags not covered by Next.js metadata API ── */}

        {/* Geo tags — help local search engines */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Jasdan, Gujarat, India" />
        {/* 🔁 Replace with exact coordinates from Google Maps */}
        <meta name="geo.position" content="22.0000;71.0000" />
        <meta name="ICBM" content="22.0000, 71.0000" />

        {/* Language */}
        <meta httpEquiv="content-language" content="en-IN" />

        {/* Theme color — matches --color-blue from globals.css */}
        <meta name="theme-color" content="#1061d2" />
        <meta name="msapplication-TileColor" content="#1061d2" />
        <meta name="msapplication-TileImage" content={SITE_LOGO} />

        {/* Referrer policy */}
        <meta name="referrer" content="origin-when-cross-origin" />

        {/* Prevent phone number detection on desktop */}
        <meta name="format-detection" content="telephone=yes, email=yes" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}