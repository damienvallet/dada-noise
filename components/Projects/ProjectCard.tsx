import styles from "./Projects.module.css";
import { Project } from "@/lib/projects";

type Props = {
  project: Project;
  featured: boolean;
};

export default function ProjectCard({ project, featured }: Props) {
  if (featured) {
    return (
      <div className={`${styles.card} ${featured ? styles.featuredCard : ""} `}>
        <div className={styles.thumb}>
          <div className={styles.scan} />
          <div className={styles.waveform}></div>
        </div>
        <div className={styles.wideRight}>
          <div className={styles.cardBody}>
            <div className={styles.cardMeta}>
              <span className={styles.cardTag}>{project.type}</span>
              <span className={styles.cardYear}>{project.year}</span>
            </div>
            <div className={styles.cardTitle}>{project.name}</div>
            <div className={styles.description}>{project.description}</div>
            <div className={styles.embedBar}></div>
          </div>
          <div className={styles.footer}>
            <div className={styles.tools}>
              {project.tools.map((tool) => {
                return (
                  <div key={tool} className={styles.toolTag}>
                    {tool}
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

  return (
    <div className={styles.card}>
      <div className={styles.cardThumb}>
        <div className={styles.scan} />
        <span className={styles.cardTag}>{project.type}</span>
        <span className={styles.cardYear}>{project.year}</span>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>{project.name} </div>
        <div className={styles.description}>{project.sub}</div>
        {project.certification && (
          <div className={styles.cardCert}>{project.certification}</div>
        )}
      </div>
      <div className={styles.footer}>
        <div className={styles.tools}>
          {project.tools.map((tool) => (
            <span key={tool} className={styles.toolTag}>
              {tool}
            </span>
          ))}
        </div>
        <span className={styles.cardArrow}>→</span>
      </div>
    </div>
  );
}
