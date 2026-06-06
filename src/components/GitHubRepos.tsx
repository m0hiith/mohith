"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Repo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

function langColor(lang: string | null) {
  const map: Record<string, string> = {
    Python: "#3572A5",
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    HTML: "#e34c26",
    CSS: "#563d7c",
  };
  return lang ? (map[lang] ?? "#60a5fa") : "#60a5fa";
}

export default function GitHubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/m0hiith/repos?sort=updated&per_page=9")
      .then(r => r.ok ? r.json() : Promise.reject())
      .then((data: Repo[]) => {
        setRepos(data.filter(r => !r.name.includes("m0hiith.github.io") || true));
        setLoading(false);
      })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  return (
    <section
      id="github"
      style={{ padding: "7rem 4rem", background: "var(--surface)", position: "relative", zIndex: 2 }}
    >
      <div className="section-tag">Live from GitHub</div>
      <h2 style={{
        fontFamily: "var(--font-sans, sans-serif)",
        fontSize: "clamp(2rem, 4vw, 3.2rem)",
        fontWeight: 700, lineHeight: 1.05,
        letterSpacing: "-0.02em",
        marginBottom: "0.8rem",
      }}>
        Public<br />
        <span style={{
          background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>Repositories</span>
      </h2>
      <p style={{
        color: "var(--muted)",
        fontFamily: "var(--font-mono, monospace)",
        fontSize: "0.75rem", letterSpacing: "0.08em",
        marginBottom: "3rem",
      }}>
        → <a href="https://github.com/m0hiith" target="_blank" rel="noopener noreferrer"
          style={{ color: "var(--accent2)", textDecoration: "none" }}>
          github.com/m0hiith
        </a>
      </p>

      {loading && (
        <div style={{
          display: "flex", alignItems: "center", gap: "0.8rem",
          fontFamily: "var(--font-mono, monospace)", fontSize: "0.85rem", color: "var(--muted)",
        }}>
          <div style={{
            width: 16, height: 16,
            border: "2px solid var(--border)", borderTopColor: "var(--accent)",
            borderRadius: "50%", animation: "spin 0.8s linear infinite",
          }} />
          Fetching repositories…
        </div>
      )}

      {error && (
        <div style={{ fontFamily: "var(--font-mono, monospace)", color: "#f87171" }}>
          Could not load live repos. Visit{" "}
          <a href="https://github.com/m0hiith" target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--accent2)" }}>
            github.com/m0hiith
          </a>
        </div>
      )}

      {!loading && !error && (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1px",
          background: "var(--border)",
        }}>
          {repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              whileHover={{ backgroundColor: "#0f1e36" }}
              style={{
                display: "block",
                background: "var(--bg)",
                padding: "1.8rem",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
            >
              <div style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "0.82rem", color: "var(--accent2)", marginBottom: "0.6rem",
                fontWeight: 500,
              }}>
                {repo.name}
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.55, minHeight: "2.5rem" }}>
                {repo.description ?? "No description provided."}
              </div>
              <div style={{
                display: "flex", gap: "1.2rem", marginTop: "1.2rem",
                fontFamily: "var(--font-mono, monospace)", fontSize: "0.68rem", color: "var(--muted)",
              }}>
                {repo.language && (
                  <span style={{ color: langColor(repo.language) }}>
                    ● {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && <span>★ {repo.stargazers_count}</span>}
                {repo.forks_count > 0 && <span>⑂ {repo.forks_count}</span>}
                <span>
                  {new Date(repo.updated_at).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      )}

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
