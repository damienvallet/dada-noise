import styles from "./Projects.module.css";
import { Project } from "@/lib/projects";
import CardThumb from "./CardThumb";

type Props = {
  project: Project;
  featured: boolean;
};

export default function ProjectCard({ project, featured }: Props) {
  if (featured) {
    return (
      <div className={`${styles.card} ${styles.cardFeatured} `}>
        <div className={styles.cardThumb}>
          <div className={styles.cardScan} />
          <div className={styles.cardWaveform}>
            {[
              6, 14, 9, 22, 7, 30, 16, 24, 10, 20, 12, 26, 8, 18, 11, 5, 17, 13,
              22, 9,
            ].map((h, i) => (
              <div
                key={i}
                className={styles.wavBar}
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        </div>
        <div className={styles.wideRight}>
          <div className={styles.cardBody}>
            <div className={styles.cardMeta}>
              <span className={styles.cardTag}>{project.type}</span>
              <span className={styles.cardYear}>{project.year}</span>
            </div>
            <div className={styles.cardTitle}>{project.name}</div>
            <div className={styles.cardDescription}>{project.description}</div>
            <div className={styles.embedBar}></div>
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.cardTools}>
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
      <CardThumb type={project.type} />
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span className={styles.cardTag}>{project.type}</span>
          <span className={styles.cardYear}>{project.year}</span>
        </div>
        <div className={styles.cardTitle}>{project.name} </div>
        <div className={styles.cardDescription}>{project.sub}</div>
        {project.certification && (
          <div className={styles.cardCert}>{project.certification}</div>
        )}
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.cardTools}>
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
