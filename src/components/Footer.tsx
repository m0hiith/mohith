export default function Footer() {
  return (
    <footer style={{
      padding: "2rem 4rem",
      borderTop: "1px solid var(--border)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "1rem",
      position: "relative", zIndex: 2,
      background: "var(--bg)",
    }}>
      <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.72rem", color: "var(--muted)", letterSpacing: "0.08em" }}>
        © 2026 Mohith Pinninti
      </span>
      <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.72rem", color: "var(--muted)", letterSpacing: "0.08em" }}>
        ECE · GITAM University · Visakhapatnam
      </span>
      <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.72rem", color: "var(--muted)", letterSpacing: "0.08em" }}>
        Built with{" "}
        <span style={{ color: "var(--accent)" }}>♥</span>
        {" "}& Next.js + Three.js
      </span>
    </footer>
  );
}
