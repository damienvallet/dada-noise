import styles from "./Projects.module.css";
import { Project } from "@/lib/projects";

type Props = {
  project: Project;
  featured: boolean;
};

export default function ProjectCard({ project, featured }: Props) {
  return (
    <div className={`${styles.card} ${featured} ? ${styles.featuredCard} : ""`}>
      <div className={styles.thumb}>
        <div className={styles.scan}></div>
        <div className={styles.waveform}></div>
      </div>
      <div className={styles.wideRight}>
        <div className={styles.cardBody}>
          <div className={styles.cardMeta}>
            <span className={styles.cardTag}>{project.sub}</span>
            <span className={styles.cardYear}>{project.year}</span>
          </div>
          <div className={styles.title}>{project.name}</div>
          <div className={styles.description}>{project.description}</div>
          <div className={styles.embedBar}></div>
        </div>
        <div className={styles.footer}>
          <div className={styles.tools}>
            {project.tools.map((val: string, index: number) => {
              return (
                <div key={index} className={styles.toolTag}>
                  {val}
                </div>
              );
            })}
          </div>
          <span className={styles.cardArrow}>→</span>
        </div>
      </div>
    </div>
  );
}
