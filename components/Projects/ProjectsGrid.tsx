import { Project } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

type Props = {
  projects: Project[];
};

export default function ProjectsGrid({ projects }: Props) {
  return (
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          featured={index === 0}
        />
      ))}
    </div>
  );
}
