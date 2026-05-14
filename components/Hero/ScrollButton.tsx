"use client";
import styles from "./Hero.module.css";

export default function ScrollButton() {
  const handleScroll = () => {
    document.getElementById("featured")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button className={styles.ctaGhost} onClick={handleScroll}>
      ↓ Scroll
    </button>
  );
}
