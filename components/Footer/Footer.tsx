import Link from "next/link";
import styles from "./Footer.module.css";

const socialLinks = [
  { href: "https://linked.com/in/yourname", label: "LinkedIn" },
  { href: "https://github.com/damienvallet", label: "GitHub" },
  // {href:"", label:"SOUNDCLOUD"},
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.cell}>
        <span className={styles.dot} />
        <span className={styles.tagline}> Creation & Technology </span>
      </div>

      <div className={styles.cell}>
        <span className={styles.location}>Based in Nantes, France</span>
      </div>

      <div className={styles.cell}>
        <ul className={styles.links}>
          {socialLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
