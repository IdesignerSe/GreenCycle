import { FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function SocialIcons() {
  const style = {
    color: "var(--green)",
    marginRight: "12px",
    cursor: "pointer",
    transition: "0.2s"
  };

  return (
    <div>
      <FaInstagram style={style} />
      <FaFacebook style={style} />
      <FaTiktok style={style} />
      <FaYoutube style={style} />
      <FaLinkedin style={style} />
    </div>
  );
}
