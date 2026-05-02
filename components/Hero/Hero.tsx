import styles from "./Hero.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_left}>
        <div>
          <div className={styles.hero_index}>001 - Portofolio 2026</div>
          <h1 className={styles.hero_title}>
            <span className={styles.outline}>Sound</span>
            <br></br>&<span className={styles.violet}>Code</span>
          </h1>
          <p className={styles.tagline}>
            Building tools with precision. Shaping sound with intention. Two
            disciplines, one point of view.
          </p>
        </div>
      </div>
      <div className={styles.hero_right}>
        <div className={styles.avatar}>
          {/* <Image src={null} alt="a pic of Damien Vallet"></Image> */}
          <div className={styles.avatar_meta}>
            <span>Damien Vallet - 2026</span>
          </div>
        </div>
        <div className={styles.cta}>
          <Link className={styles.cta_primary} href={"./Projects"}>
            View Projects
          </Link>
          <Link className={styles.cta_ghost} href={"./Projects"}>
            ↓ Scroll
          </Link>
        </div>
      </div>
    </section>
  );
}
