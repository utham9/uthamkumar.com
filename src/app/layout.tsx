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

export const metadata: Metadata = {
  title: "Utham Kumar — Lead Architect, Quality Engineering",
  description:
    "Quality Engineering leader with 14+ years architecting scalable, AI-augmented test-automation platforms — LangGraph multi-agent systems, RAG agents and self-healing automation.",
  metadataBase: new URL("https://uthamkumar.com"),
  openGraph: {
    title: "Utham Kumar — Lead Architect, Quality Engineering",
    description:
      "Building AI-augmented, agentic quality ecosystems — LangGraph, RAG and self-healing automation.",
    url: "https://uthamkumar.com",
    siteName: site.domain,
    type: "website",
  },
};

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
        <div className="shell">
          <LeftRail />
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
