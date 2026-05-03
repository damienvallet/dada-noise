import styles from "./Disciplines.module.css";

export default function Disciplines() {
  return (
    <div className={styles.disciplines}>
      <div className={styles.disc}>
        <div className={styles.discNum}>01</div>
        <div className={styles.discBody}>
          <div className={styles.discCat}>sound design</div>
          <div className={styles.discTitle}>Making things souns alive</div>
          <div className={styles.discText}>
            Designing sounds and instruments for musicians — sample libraries,
            software instruments, and sonic tools built at the intersection of
            music and technology.
          </div>
          <div className={styles.discArrow}>→</div>
        </div>
      </div>
      <div className={styles.disc}>
        <div className={styles.discNum}>02</div>
        <div className={styles.discBody}>
          <div className={styles.discCat}>Technology</div>
          <div className={styles.discTitle}>Building tools I used</div>
          <div className={styles.discText}>
            Interfaces, tools and systems built with passion and a
            craftsman&apos;s attention to detail. Code as creative material.
          </div>
          <div className={styles.discArrow}>→</div>
        </div>
      </div>
    </div>
  );
}
