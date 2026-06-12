import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer style={{ padding: "24px", background: "var(--offwhite)" }}>
      <SocialIcons />
      <p style={{ marginTop: "12px", color: "var(--gray-700)" }}>
        © 2026 GreenCycle
      </p>
    </footer>
  );
}
