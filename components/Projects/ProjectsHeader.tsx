import styles from "./Projects.module.css";

type Props = {
  soundCount: number;
  devCount: number;
};

export default function ProjectsHeader({ soundCount, devCount }: Props) {
  const totalCount = soundCount + devCount;
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.pageIndex}>002 - Selected Work</div>
        <h1 className={styles.pageTitle}>
          Pro
          <span>jects</span>
        </h1>
      </div>
      <div className={styles.headerRight}>
        <p className={styles.headerDesc}>
          A selection of work across sound design and development — each project
          a different problem, the same obsession with craft.
        </p>
        <div className={styles.count}>
          <span id="projCount">{totalCount}</span>
          projects
        </div>
      </div>
    </div>
  );
}
