"use client";

import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";

const Hero3D = lazy(() => import("./Hero3D"));

const phrases = [
  "AI/ML Engineer",
  "Full-Stack Builder",
  "LLM Fine-tuner",
  "Algo Trader",
  "Founder",
];

function TypedText() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout: NodeJS.Timeout;

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
      } else {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % phrases.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIdx]);

  return (
    <span style={{ color: "var(--accent2)", fontFamily: "var(--font-mono, monospace)", fontSize: "1rem" }}>
      {displayed}
      <span style={{ animation: "blink 1s step-end infinite", color: "var(--accent)" }}>|</span>
    </span>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* 3D Canvas Background */}
      <Suspense fallback={null}>
        <Hero3D />
      </Suspense>

      {/* Blue radial glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 1,
      }} />

      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        pointerEvents: "none", zIndex: 1,
      }} />

      {/* Left: Content */}
      <div style={{
        position: "relative", zIndex: 2,
        padding: "8rem 4rem 4rem",
        maxWidth: "900px",
        flex: 1,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="section-tag" style={{ marginBottom: "1.5rem" }}>
            Available for opportunities
          </div>

          <h1 style={{
            fontFamily: "var(--font-sans, sans-serif)",
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
          }}>
            MOHITH<br />
            <span style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              PINNINTI
            </span>
          </h1>

          <p style={{
            color: "var(--muted)", fontSize: "1.1rem",
            marginBottom: "0.8rem",
          }}>
            B.Tech ECE · GITAM University, Visakhapatnam
          </p>

          <div style={{ marginBottom: "3rem" }}>
            <TypedText />
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "0.9rem 2.2rem",
                background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                color: "#fff",
                textDecoration: "none",
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "0.78rem", letterSpacing: "0.12em",
                textTransform: "uppercase",
                borderRadius: "4px",
                boxShadow: "0 0 32px rgba(59,130,246,0.35)",
                display: "inline-block",
              }}
              onClick={e => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects →
            </motion.a>
            <motion.a
              href="mailto:mohith4pinninti@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "0.9rem 2.2rem",
                background: "transparent",
                color: "var(--text)",
                textDecoration: "none",
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "0.78rem", letterSpacing: "0.12em",
                textTransform: "uppercase",
                borderRadius: "4px",
                border: "1px solid var(--border)",
                display: "inline-block",
              }}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            display: "flex", gap: "3rem", flexWrap: "wrap",
            marginTop: "4rem", paddingTop: "3rem",
            borderTop: "1px solid var(--border)",
          }}
        >
          {[
            { num: "4+", label: "AI Products Shipped" },
            { num: "11K+", label: "Event Attendees Led" },
            { num: "6+", label: "ScaleUp Clients" },
            { num: "22%", label: "F1 Score Improvement" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{
                fontFamily: "var(--font-sans, sans-serif)",
                fontSize: "2.2rem", fontWeight: 700,
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>{s.num}</div>
              <div style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "0.65rem", letterSpacing: "0.15em",
                color: "var(--muted)", textTransform: "uppercase",
                marginTop: "0.3rem",
              }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right: Character Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          right: "4rem",
          bottom: 0,
          zIndex: 3,
          height: "85vh",
          display: "flex",
          alignItems: "flex-end",
          pointerEvents: "none",
        }}
      >
        {/* Blue glow behind character */}
        <div style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "280px", height: "280px",
          background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          zIndex: 0,
        }} />
        <img
          src="/mohith-avatar.png"
          alt="Mohith Pinninti"
          style={{
            height: "100%",
            maxHeight: "720px",
            width: "auto",
            objectFit: "contain",
            objectPosition: "bottom",
            position: "relative",
            zIndex: 1,
            filter: "drop-shadow(0 0 40px rgba(59,130,246,0.3))",
          }}
        />
      </motion.div>

      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
        @media (max-width: 900px) {
          .hero-avatar { display: none; }
        }
      `}</style>
    </section>
  );
}
