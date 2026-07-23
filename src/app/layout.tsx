import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Fira_Code } from "next/font/google";
import "./globals.css";
import { LeftRail } from "@/components/LeftRail";
import { site } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-display",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-mono",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-ui",
  display: "swap",
});

const SITE_URL = "https://uthamkumar.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Utham Kumar — Lead Architect, Quality Engineering",
    template: "%s — Utham Kumar",
  },
  description:
    "Utham Kumar N S is a Quality Engineering leader with 14+ years architecting scalable, AI-augmented test-automation platforms — LangGraph multi-agent systems, RAG agents and self-healing automation.",
  keywords: [
    "Utham Kumar",
    "Utham Kumar N S",
    "Quality Engineering",
    "Test Automation",
    "Agentic AI",
    "LangGraph",
    "RAG",
    "Test Architect",
    "AI-augmented testing",
    "Hyderabad",
  ],
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Utham Kumar",
    title: "Utham Kumar — Lead Architect, Quality Engineering",
    description:
      "Building AI-augmented, agentic quality ecosystems — LangGraph multi-agent systems, RAG agents and self-healing automation.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Utham Kumar — Lead Architect, Quality Engineering",
    description:
      "Quality Engineering leader — agentic, AI-augmented test automation.",
  },
};

// Structured data: tells Google this site is the canonical page for the
// person "Utham Kumar". Employer name intentionally omitted (privacy).
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    alternateName: ["Utham Kumar", "Utham Kumar NS"],
    url: SITE_URL,
    jobTitle: "Vice President, Quality Engineering",
    description:
      "Quality Engineering leader with 14+ years architecting scalable, AI-augmented test-automation platforms.",
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressCountry: "IN",
    },
    sameAs: [site.linkedin, site.github],
    knowsAbout: [
      "Quality Engineering",
      "Test Automation",
      "Agentic AI",
      "LangGraph",
      "RAG architectures",
      "Prompt engineering",
      "CI/CD",
      "Service virtualization",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Utham Kumar",
    url: SITE_URL,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} ${firaCode.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="shell">
          <LeftRail />
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
