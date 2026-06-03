import { Project } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

type Props = {
  projects: Project[];
  gridType: "sound" | "dev";
};

export default function ProjectsGrid({ projects, gridType }: Props) {
  return (
    <div className={gridType === "sound" ? styles.soundGrid : styles.devGrid}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          featured={gridType === "sound" && index === 0}
        />
      ))}
    </div>
  );
}
