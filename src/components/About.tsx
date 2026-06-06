"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "AI / ML Engineering", pct: 92, color: "#3b82f6" },
  { name: "Full-Stack Development", pct: 88, color: "#60a5fa" },
  { name: "LLM Fine-tuning", pct: 85, color: "#8b5cf6" },
  { name: "Algorithmic Trading", pct: 82, color: "#06b6d4" },
  { name: "Digital Marketing", pct: 90, color: "#3b82f6" },
  { name: "Cloud & DevOps", pct: 75, color: "#60a5fa" },
];

const techStack = [
  "Python", "TypeScript", "React", "Next.js",
  "LangChain", "PyTorch", "FAISS", "Supabase",
  "Flask", "Tailwind", "Three.js", "AWS",
  "Gemini API", "Meta Ads", "n8n", "Docker",
];

function SkillBar({ name, pct, color, delay }: { name: string; pct: number; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ marginBottom: "1.4rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
        <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text)" }}>
          {name}
        </span>
        <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.72rem", color }}>
          {pct}%
        </span>
      </div>
      <div style={{ height: "2px", background: "var(--border)", borderRadius: "1px", overflow: "hidden" }}>
        <div style={{
          height: "100%",
          background: `linear-gradient(90deg, ${color}, #06b6d4)`,
          borderRadius: "1px",
          width: animated ? `${pct}%` : "0%",
          transition: `width 1.2s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
          boxShadow: animated ? `0 0 8px ${color}60` : "none",
        }} />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ padding: "7rem 4rem", position: "relative", zIndex: 2 }}>
      {/* Faint grid bg */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="section-tag">Who I am</div>
        <h2 style={{
          fontFamily: "var(--font-sans, sans-serif)",
          fontSize: "clamp(2rem, 4vw, 3.2rem)",
          fontWeight: 700, lineHeight: 1.05,
          letterSpacing: "-0.02em",
          marginBottom: "4rem",
        }}>
          Builder by nature,<br />
          <span style={{
            background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>engineer by training.</span>
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "start",
        }}>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p style={{ color: "var(--muted)", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.4rem" }}>
              I&apos;m a 3rd-year ECE student at GITAM University, Visakhapatnam, building at the intersection of AI engineering, full-stack development, and entrepreneurship. I don&apos;t just learn — I ship.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.4rem" }}>
              From fine-tuning LLMs with LoRA/QLoRA on Llama 2 & Mistral, to building RAG pipelines, algorithmic trading bots, and leading the marketing for an 11,000-student festival — I operate across domains simultaneously.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "2.5rem" }}>
              I founded <span style={{ color: "var(--accent2)", fontWeight: 500 }}>ScaleUp Marketing</span> to solve a real problem: local businesses in Vizag struggling to go digital. Today it generates ₹1L+/month in client revenue.
            </p>

            {/* Tech stack chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {techStack.map(t => (
                <span key={t} style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "0.65rem", letterSpacing: "0.1em",
                  padding: "0.3rem 0.75rem",
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  borderRadius: "2px",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.color = "var(--accent2)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {skills.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 100} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
