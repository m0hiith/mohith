"use client";

import { motion } from "framer-motion";

const socials = [
  { label: "GitHub", href: "https://github.com/m0hiith" },
  { label: "Email", href: "mailto:mohith4pinninti@gmail.com" },
  { label: "+91 70321 16746", href: "tel:+917032116746" },
  { label: "Visakhapatnam, IN", href: "#" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "8rem 4rem",
        background: "var(--surface)",
        textAlign: "center",
        position: "relative",
        zIndex: 2,
        overflow: "hidden",
      }}
    >
      {/* Blue glow backdrop */}
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: "600px", height: "300px",
        background: "radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="section-tag" style={{ justifyContent: "center" }}>Let&apos;s connect</div>

        <h2 style={{
          fontFamily: "var(--font-sans, sans-serif)",
          fontSize: "clamp(2rem, 5vw, 4rem)",
          fontWeight: 700, lineHeight: 1.05,
          letterSpacing: "-0.03em",
          marginBottom: "1rem",
        }}>
          Got an idea?<br />
          <span style={{
            background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>Let&apos;s build it.</span>
        </h2>

        <p style={{
          color: "var(--muted)", fontSize: "1.05rem", maxWidth: "480px",
          margin: "0 auto 3rem",
          lineHeight: 1.7,
        }}>
          I&apos;m open to internships, freelance projects, and building cool things. Reach out anytime.
        </p>

        <motion.a
          href="mailto:mohith4pinninti@gmail.com"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "inline-block",
            fontFamily: "var(--font-sans, sans-serif)",
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            fontWeight: 600,
            color: "var(--text)",
            textDecoration: "none",
            marginBottom: "3rem",
            padding: "1rem 2rem",
            border: "1px solid var(--border)",
            borderRadius: "6px",
            transition: "border-color 0.2s, color 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
            (e.currentTarget as HTMLElement).style.color = "var(--accent2)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(59,130,246,0.2)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
            (e.currentTarget as HTMLElement).style.color = "var(--text)";
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          mohith4pinninti@gmail.com
        </motion.a>

        <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem", flexWrap: "wrap" }}>
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "0.75rem", letterSpacing: "0.12em",
                textTransform: "uppercase", color: "var(--muted)",
                textDecoration: "none", transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent2)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
