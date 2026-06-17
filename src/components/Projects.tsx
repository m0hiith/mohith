"use client";

import { motion } from "framer-motion";

const GitHubIcon = () => (
  <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const HuggingFaceIcon = () => (
  <svg height="16" width="16" viewBox="0 0 95 88" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M47.5 0C21.3 0 0 19.7 0 44s21.3 44 47.5 44S95 68.3 95 44 73.7 0 47.5 0zm0 80C25.7 80 8 63.8 8 44S25.7 8 47.5 8 87 24.2 87 44 69.3 80 47.5 80z"/>
    <path d="M30 38c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zm23 0c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zm-11.5 18c-7 0-13-4-15.6-9.8-.5-1.1.3-2.2 1.5-2.2h28.2c1.2 0 2 1.1 1.5 2.2C54.5 52 48.5 56 41.5 56z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg height="12" width="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

type LinkType = "github" | "huggingface" | "website";

const projects: {
  num: string;
  category: string;
  name: string;
  desc: string;
  tags: string[];
  link: string;
  linkType: LinkType;
  accent: string;
}[] = [
  {
    num: "01",
    category: "AI / ML",
    name: "Red Rob Ranker",
    desc: "A ranking model published on Hugging Face — leverages machine learning to score and rank items with high precision.",
    tags: ["Python", "Transformers", "HuggingFace", "ML"],
    link: "https://huggingface.co/spaces/m0hiith/redrob-ranker-sandbox",
    linkType: "huggingface",
    accent: "#f59e0b",
  },
  {
    num: "02",
    category: "AI PRODUCT",
    name: "TalentSia",
    desc: "AI career platform with ATS resume builder, skill gap analysis, interest-based career matching, and a job recommendation engine. Reduced avg job-search time by ~35%. 100+ active users.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind", "Gemini"],
    link: "https://talentsia.in",
    linkType: "website",
    accent: "#06b6d4",
  },
  {
    num: "03",
    category: "AI / LEGAL",
    name: "AI Legal Taxer",
    desc: "AI-powered legal and tax assistant that simplifies complex legal documents and tax filings, making professional guidance accessible to everyone.",
    tags: ["React", "TypeScript", "AI", "Legal Tech"],
    link: "https://github.com/m0hiith/ai-legal-taxer",
    linkType: "github",
    accent: "#3b82f6",
  },
  {
    num: "04",
    category: "DEV TOOLS",
    name: "My Claude Workspace",
    desc: "A curated Claude Code workspace with 233+ skills, 60 specialized agents, 75 slash commands, and 20 guardrail rules — a battle-tested AI-assisted development environment.",
    tags: ["Claude Code", "AI Agents", "DevTools", "Automation"],
    link: "https://github.com/m0hiith/my-claude-workspace",
    linkType: "github",
    accent: "#8b5cf6",
  },
  {
    num: "05",
    category: "GAME / TYPESCRIPT",
    name: "Solo Levelling",
    desc: "A Solo Levelling-inspired TypeScript project — anime fan project with game mechanics and immersive UI inspired by the manhwa series.",
    tags: ["TypeScript", "React"],
    link: "https://solo-levelling-sigma.vercel.app",
    linkType: "website",
    accent: "#06b6d4",
  },
];

function LinkButton({ link, linkType, accent }: { link: string; linkType: LinkType; accent: string }) {
  if (linkType === "github") {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={e => e.stopPropagation()}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.45rem",
          padding: "0.35rem 0.85rem",
          borderRadius: "6px",
          border: "1px solid #30363d",
          background: "#21262d",
          color: "#c9d1d9",
          fontSize: "0.75rem",
          fontWeight: 500,
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          textDecoration: "none",
          transition: "background 0.15s, border-color 0.15s",
          cursor: "pointer",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.background = "#30363d";
          (e.currentTarget as HTMLAnchorElement).style.borderColor = "#8b949e";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.background = "#21262d";
          (e.currentTarget as HTMLAnchorElement).style.borderColor = "#30363d";
        }}
      >
        <GitHubIcon />
        View on GitHub
      </a>
    );
  }

  if (linkType === "huggingface") {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={e => e.stopPropagation()}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.45rem",
          padding: "0.35rem 0.85rem",
          borderRadius: "6px",
          border: `1px solid ${accent}60`,
          background: `${accent}15`,
          color: accent,
          fontSize: "0.75rem",
          fontWeight: 500,
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          textDecoration: "none",
          transition: "background 0.15s",
          cursor: "pointer",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = `${accent}25`; }}
        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = `${accent}15`; }}
      >
        <HuggingFaceIcon />
        View on Hugging Face
      </a>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => e.stopPropagation()}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.45rem",
        padding: "0.35rem 0.85rem",
        borderRadius: "6px",
        border: `1px solid ${accent}60`,
        background: `${accent}15`,
        color: accent,
        fontSize: "0.75rem",
        fontWeight: 500,
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        textDecoration: "none",
        transition: "background 0.15s",
        cursor: "pointer",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = `${accent}25`; }}
      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = `${accent}15`; }}
    >
      <ExternalLinkIcon />
      Visit Website
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad" style={{ padding: "7rem 4rem", position: "relative", zIndex: 2 }}>
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
          gridTemplateColumns: "repeat(auto-fill, minmax(min(340px, 100%), 1fr))",
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

              <LinkButton link={p.link} linkType={p.linkType} accent={p.accent} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
