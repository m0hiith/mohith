"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["About", "Experience", "Projects", "GitHub", "Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: "1.2rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(2,8,23,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(30,58,95,0.6)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <div style={{
          fontFamily: "var(--font-mono, monospace)",
          fontWeight: 600,
          fontSize: "1.05rem",
          letterSpacing: "0.12em",
          background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          MOHITH
        </div>

        {/* Desktop links */}
        <ul style={{
          display: "flex", gap: "2.5rem", listStyle: "none",
          margin: 0, padding: 0,
        }} className="hidden-mobile">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "0.72rem", letterSpacing: "0.14em",
                  textTransform: "uppercase", color: "var(--muted)",
                  transition: "color 0.2s",
                  padding: 0,
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent2)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <a
            href="https://github.com/m0hiith"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden-mobile"
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "0.7rem", letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.55rem 1.2rem",
              border: "1px solid var(--accent)",
              color: "var(--accent2)",
              textDecoration: "none",
              borderRadius: "2px",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--accent2)";
            }}
          >
            GitHub ↗
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              flexDirection: "column",
              gap: "5px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px",
            }}
          >
            <span style={{
              display: "block", width: "22px", height: "2px",
              background: menuOpen ? "var(--accent2)" : "var(--text)",
              borderRadius: "2px",
              transition: "transform 0.3s, opacity 0.3s",
              transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none",
            }} />
            <span style={{
              display: "block", width: "22px", height: "2px",
              background: menuOpen ? "var(--accent2)" : "var(--text)",
              borderRadius: "2px",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.3s",
            }} />
            <span style={{
              display: "block", width: "22px", height: "2px",
              background: menuOpen ? "var(--accent2)" : "var(--text)",
              borderRadius: "2px",
              transition: "transform 0.3s, opacity 0.3s",
              transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none",
            }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            style={{
              position: "fixed",
              top: "60px", left: 0, right: 0,
              zIndex: 99,
              background: "rgba(2,8,23,0.97)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid var(--border)",
              padding: "0.5rem 1.5rem 1rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                style={{
                  background: "none", border: "none",
                  borderBottom: "1px solid var(--border)",
                  cursor: "pointer",
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "0.85rem", letterSpacing: "0.14em",
                  textTransform: "uppercase", color: "var(--text)",
                  padding: "1.1rem 0",
                  textAlign: "left",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent2)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text)")}
              >
                {l}
              </button>
            ))}
            <a
              href="https://github.com/m0hiith"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "0.85rem", letterSpacing: "0.14em",
                textTransform: "uppercase", color: "var(--accent2)",
                padding: "1.1rem 0",
                textDecoration: "none",
              }}
            >
              GitHub ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
