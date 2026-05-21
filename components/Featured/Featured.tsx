import Link from "next/link";
import style from "./Featured.module.css";
import SoundIcon from "../common/icons/Sound";
import CodeIcon from "../common/icons/Code";
import CircleIcon from "../common/icons/Circle";
import { projects } from "@/lib/projects";

const featuredProjects = projects.filter((p) => p.featured);

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
        {featuredProjects.map((project, index) => {
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
                {project.certification && (
                  <div className={style.projCert}>
                    ⬡ {project.certification}
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
