import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Mohith Pinninti — Embedded Systems, Robotics & AI/ML",
  description:
    "Portfolio of Mohith Pinninti — final-year B.Tech ECE (AI & ML) at GITAM. Embedded firmware, computer vision for robotic control, and Python-based test automation.",
  openGraph: {
    title: "Mohith Pinninti — Embedded Systems, Robotics & AI/ML",
    description: "ECE (AI & ML) · Embedded · Computer Vision · Robotics",
    url: "https://mohith.site",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body style={{ background: "var(--bg)", color: "var(--text)" }}>
        {children}
      </body>
    </html>
  );
}
