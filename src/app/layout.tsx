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
  title: "Mohith Pinninti — AI Engineer & Builder",
  description:
    "Portfolio of Mohith Pinninti — ECE student at GITAM, AI/ML engineer, full-stack builder, and founder of ScaleUp Marketing.",
  openGraph: {
    title: "Mohith Pinninti — AI Engineer & Builder",
    description: "ECE · AI/ML · Full-Stack · Founder",
    url: "https://m0hiith.github.io",
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
