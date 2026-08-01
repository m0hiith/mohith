"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "May–Jun 2026",
    company: "Robocoupler Industries",
    role: "AI/ML Intern — Embedded Systems & Robotics",
    bullets: [
      "Built image-processing and computer-vision pipelines for <strong>real-time hand-gesture recognition</strong>, translating detected gestures into control commands for robotic systems.",
      "Owned the perception stack end to end — frame capture, preprocessing, hand detection, gesture classification — tuning confidence thresholds against live video rather than recorded clips.",
      "Integrated the vision layer with the robot's embedded control path so recognised gestures triggered <strong>physical actuator behaviour on hardware</strong>, debugging latency and false-trigger issues that surfaced only once perception met real hardware.",
      "Bench-tested recognition across varying lighting, hand distance and orientation to characterise failure modes, and contributed to build systems and integration workflow for the robotics team.",
    ],
    tag: "Robotics",
  },
  {
    year: "Oct 2025–Mar 2026",
    company: "Shore Fest, GITAM",
    role: "Lead of Marketing — Shore Fest",
    bullets: [
      "Led a cross-functional team across Design, Media, PR & Outreach and Tech for one of the university's largest cultural & sports festivals.",
      "Planned and executed multi-channel campaigns — performance marketing, social, email, on-ground — that drove over <strong>11,000 student attendees</strong>.",
      "Managed the official Shore Fest website via a dedicated tech team, ensuring real-time updates and reliable uptime during peak event traffic.",
      "Coordinated PR outreach, brand partnerships and influencer collaborations to maximise event visibility.",
    ],
    tag: "Leadership",
  },
  {
    year: "Jun 2025",
    company: "BSNL India",
    role: "Optical Engineer Intern",
    bullets: [
      "Hands-on exposure to <strong>optical fibre communication</strong> and live telecom infrastructure at a national carrier's Visakhapatnam operations.",
      "Worked alongside field engineers on fibre splicing, cable laying and network maintenance procedures on deployed links.",
      "Observed fault-isolation and link-verification practice on production optical networks, connecting classroom communication theory to physical-layer reality.",
    ],
    tag: "Telecom",
  },
  {
    year: "Dec 2024–Now",
    company: "Self-employed",
    role: "Founder — ScaleUp Marketing",
    bullets: [
      "Founded and independently operate a digital agency serving local businesses across Visakhapatnam — owning client delivery, timelines and reporting end to end.",
      "Built and managed websites, e-commerce pages and social handles for multiple clients, handling content creation, distribution and Meta Ads campaigns.",
    ],
    tag: "Founder",
  },
  {
    year: "2023–2027",
    company: "GITAM University",
    role: "B.Tech — Electronics & Communication Engineering (AI & ML)",
    bullets: [
      "Coursework in VLSI Design (CMOS fabrication, NMOS/PMOS operation, dynamic logic), Digital Electronics, and Embedded Systems & Microcontrollers.",
      "Plus Signals & Systems, Analog & Digital Communication, Communication Networks, and Antenna & Wave Propagation.",
    ],
    tag: "Education",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-pad-surface"
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
            className="exp-row"
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
