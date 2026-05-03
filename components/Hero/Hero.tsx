import styles from "./Hero.module.css";
import Link from "next/link";
import GeometricPortrait from "../common/GeometricPortrait";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <div>
          <div className={styles.heroIndex}>001 - Portofolio 2026</div>
          <h1 className={styles.heroTitle}>
            <span className={styles.outline}>Sound</span>
            <br />&<span className={styles.violet}>Code</span>
          </h1>
          <p className={styles.tagline}>
            Building tools with precision. Shaping sound with intention. Two
            disciplines, one point of view.
          </p>
        </div>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.avatar}>
          <GeometricPortrait variant={"complete"} />
          <div className={styles.avatarMeta}>
            <span>Damien Vallet - 2026</span>
          </div>
        </div>
        <div className={styles.cta}>
          <Link className={styles.ctaPrimary} href="./projects">
            View Projects
          </Link>
          <button className={styles.ctaGhost}>↓ Scroll</button>
        </div>
      </div>
    </section>
  );
}
