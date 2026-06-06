"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026",
    company: "GITAM University",
    role: "Head of Marketing — Shore Fest 2026",
    bullets: [
      "Led cross-functional teams across Design, Media, PR & Outreach, and Tech for GITAM's largest cultural & sports festival.",
      "Drove <strong>11,000+ student attendees</strong> — a 40% YoY increase through multi-channel campaigns.",
      "Managed 5+ brand partnerships, influencer collaborations, and zero-downtime website ops during peak event periods.",
    ],
    tag: "Events",
  },
  {
    year: "Ongoing",
    company: "Self-founded",
    role: "Founder & Digital Marketing Lead — ScaleUp Marketing",
    bullets: [
      "Founded and operate a digital marketing agency serving <strong>6+ local businesses</strong> across Visakhapatnam.",
      "Consistently achieving <strong>3×–5× ROAS</strong> for clients via Meta Ads and end-to-end content strategy.",
      "Generating approx. <strong>₹1 lakh/month</strong> in client revenue; avg 2,000+ follower growth per client per month.",
    ],
    tag: "Founder",
  },
  {
    year: "2023–Now",
    company: "GITAM University",
    role: "B.Tech — Electronics & Communication Engineering",
    bullets: [
      "Shipped 4 full-stack AI-powered products solo during coursework.",
      "Applying ECE fundamentals to embedded systems, signal processing, and hardware-software integration.",
    ],
    tag: "Education",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "7rem 4rem",
        background: "var(--surface)",
        position: "relative", zIndex: 2,
      }}
    >
      <div className="section-tag">Where I&apos;ve worked</div>
      <h2 style={{
        fontFamily: "var(--font-sans, sans-serif)",
        fontSize: "clamp(2rem, 4vw, 3.2rem)",
        fontWeight: 700, lineHeight: 1.05,
        letterSpacing: "-0.02em",
        marginBottom: "4rem",
      }}>
        Experience &amp;<br />
        <span style={{
          background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>Ventures</span>
      </h2>

      <div>
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{
              display: "grid",
              gridTemplateColumns: "180px 1fr",
              gap: "3rem",
              padding: "2.5rem 0",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div>
              <div style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "0.75rem", color: "var(--accent2)", letterSpacing: "0.12em",
              }}>
                {exp.year}
              </div>
              <div style={{
                fontFamily: "var(--font-sans, sans-serif)",
                fontSize: "0.85rem", fontWeight: 600, color: "var(--muted)",
                marginTop: "0.4rem",
              }}>
                {exp.company}
              </div>
              <span style={{
                display: "inline-block",
                marginTop: "0.6rem",
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "0.6rem", letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.2rem 0.6rem",
                border: "1px solid var(--border)",
                color: "var(--accent2)",
                borderRadius: "2px",
              }}>
                {exp.tag}
              </span>
            </div>

            <div>
              <h3 style={{
                fontFamily: "var(--font-sans, sans-serif)",
                fontSize: "1.25rem", fontWeight: 600,
                marginBottom: "1.2rem",
              }}>
                {exp.role}
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{
                    fontSize: "0.95rem", lineHeight: 1.75,
                    color: "var(--muted)", paddingLeft: "1.2rem",
                    position: "relative", marginBottom: "0.6rem",
                  }}>
                    <span style={{
                      position: "absolute", left: 0,
                      color: "var(--accent)", fontSize: "0.8rem",
                    }}>→</span>
                    <span dangerouslySetInnerHTML={{ __html: b.replace(/<strong>/g, '<strong style="color:var(--text);font-weight:500">') }} />
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
