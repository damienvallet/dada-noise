import Link from "next/link";
import style from "./Featured.module.css";
import SoundIcon from "../common/icons/Sound";
import CodeIcon from "../common/icons/Code";
import CircleIcon from "../common/icons/Circle";

type ProjectType = "sound" | "code";

type Project = {
  id: number;
  name: string;
  type: ProjectType;
  year: string;
  sub: string;
  href: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "UVI - Orchestral Suite 2",
    type: "sound",
    year: "2026",
    sub: "Sound Design - Scripting",
    href: "/projects",
  },
  {
    id: 2,
    name: "AFUP Ice Breaker Game",
    type: "code",
    year: "2025",
    sub: "Web - React",
    href: "/projects",
  },

  {
    id: 3,
    name: "UVI - Augmented Choirs",
    type: "sound",
    year: "2025",
    sub: "Sound Design - Scripting",
    href: "/projects",
  },
];

export default function Featured() {
  return (
    <section id="featured" className={style.featured}>
      <div className={style.header}>
        <span className={style.featTitle}>Selected work</span>
        <Link className={style.featLink} href={"/projects"}>
          All projects →
        </Link>
      </div>
      <div className={style.projRow}>
        {projects.map((project, index) => {
          const ProjectIcon =
            index === 0 && project.type === "sound"
              ? SoundIcon
              : project.type === "code"
                ? CodeIcon
                : CircleIcon;

          return (
            <Link key={project.id} href={project.href} className={style.proj}>
              <div className={style.projTop}>
                <span className={style.projTag}>{project.type}</span>
                <span className={style.projYear}>{project.year}</span>
              </div>
              <div className={style.projVis}>
                <ProjectIcon />
              </div>
              <div>
                <div className={style.projName}>{project.name}</div>
                <div className={style.projSub}>{project.sub}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
