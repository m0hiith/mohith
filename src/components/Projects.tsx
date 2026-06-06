"use client";

import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    category: "FINTECH",
    name: "CryptoBot CLI",
    desc: "Binance Futures algorithmic trading bot with 4-layer architecture, HMAC-signed REST calls, news sentiment analysis via VADER & FinBERT, and ~78% directional accuracy on backtested signals.",
    tags: ["Python", "Flask", "React", "FinBERT", "Binance API"],
    link: "https://github.com/m0hiith/my-ai-trader",
    accent: "#3b82f6",
  },
  {
    num: "02",
    category: "AI PRODUCT",
    name: "TalentSia",
    desc: "AI career platform with ATS resume builder, skill gap analysis, interest-based career matching, and a job recommendation engine. Reduced avg job-search time by ~35%. 100+ active users.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind", "Gemini"],
    link: "https://github.com/m0hiith/TalentSia",
    accent: "#06b6d4",
  },
  {
    num: "03",
    category: "SOCIAL PLATFORM",
    name: "AI Prompt Gallery",
    desc: "Pinterest-inspired social platform for discovering and sharing AI image prompts. Masonry grid, community content, Twitter-algorithm-inspired recommendation engine. 50+ beta users in week 1.",
    tags: ["React", "TypeScript", "Firebase", "Vite"],
    link: "https://github.com/m0hiith/prompt-gallery",
    accent: "#8b5cf6",
  },
  {
    num: "04",
    category: "LLM RESEARCH",
    name: "LLM Fine-Tuning & RAG",
    desc: "Fine-tuned Llama 2 (7B) & Mistral (7B) using QLoRA (4-bit quantization). Built RAG pipelines with LangChain + FAISS. ~22% F1 improvement, ~30% reduction in hallucination rate.",
    tags: ["Llama 2", "Mistral", "QLoRA", "LangChain", "FAISS"],
    link: "https://github.com/m0hiith",
    accent: "#3b82f6",
  },
  {
    num: "05",
    category: "GAME / TYPESCRIPT",
    name: "Solo Levelling",
    desc: "A Solo Levelling-inspired TypeScript project — anime fan project with game mechanics and immersive UI inspired by the manhwa series.",
    tags: ["TypeScript", "React"],
    link: "https://github.com/m0hiith/solo-levelling-",
    accent: "#06b6d4",
  },
  {
    num: "06",
    category: "AI HEDGE FUND",
    name: "Nova Hedge Fund",
    desc: "AI-powered hedge fund simulation with multi-agent trading strategies, market analysis, and portfolio management using Python and machine learning models.",
    tags: ["Python", "AI Agents", "Finance", "ML"],
    link: "https://github.com/m0hiith/nova-hedge-fund",
    accent: "#8b5cf6",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "7rem 4rem", position: "relative", zIndex: 2 }}>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(59,130,246,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="section-tag">What I&apos;ve built</div>
        <h2 style={{
          fontFamily: "var(--font-sans, sans-serif)",
          fontSize: "clamp(2rem, 4vw, 3.2rem)",
          fontWeight: 700, lineHeight: 1.05,
          letterSpacing: "-0.02em",
          marginBottom: "4rem",
        }}>
          Featured<br />
          <span style={{
            background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>Projects</span>
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "1px",
          background: "var(--border)",
        }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              style={{
                background: "var(--surface)",
                padding: "2.2rem",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "background 0.25s",
              }}
              whileHover={{ backgroundColor: "#0f1e36" }}
              onClick={() => window.open(p.link, "_blank")}
            >
              {/* Top accent line */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "1px",
                background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)`,
              }} />

              <div style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "0.65rem", letterSpacing: "0.15em",
                color: "var(--border)",
                marginBottom: "1.5rem",
              }}>
                {p.num} / {p.category}
              </div>

              <h3 style={{
                fontFamily: "var(--font-sans, sans-serif)",
                fontSize: "1.15rem", fontWeight: 600,
                marginBottom: "0.8rem", color: "var(--text)",
              }}>
                {p.name}
              </h3>

              <p style={{
                fontSize: "0.88rem", lineHeight: 1.7,
                color: "var(--muted)", marginBottom: "1.5rem",
              }}>
                {p.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                {p.tags.map(t => (
                  <span key={t} style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "0.6rem", letterSpacing: "0.1em",
                    padding: "0.25rem 0.6rem",
                    border: `1px solid ${p.accent}40`,
                    color: p.accent,
                    textTransform: "uppercase",
                    borderRadius: "2px",
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              <span style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "0.7rem", letterSpacing: "0.12em",
                color: p.accent, textTransform: "uppercase",
                display: "flex", alignItems: "center", gap: "0.4rem",
              }}>
                View on GitHub →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
