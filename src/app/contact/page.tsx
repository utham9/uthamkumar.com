import type { Metadata } from "next";
import { ContactTerminal } from "@/components/ContactTerminal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Utham Kumar — email uthamkmr@gmail.com, or reach out via LinkedIn and GitHub. Interactive terminal included.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactTerminal />;
}
