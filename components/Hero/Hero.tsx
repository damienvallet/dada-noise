import styles from "./Hero.module.css";
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
      <div className={styles.hero_right}></div>
    </section>
  );
}
