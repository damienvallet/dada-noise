import { projects } from "@/lib/projects";
import ProjectsHeader from "@/components/Projects/ProjectsHeader";
import TabToggle from "@/components/Projects/TabToggle";

type Props = {
  searchParams: { tab?: string };
};

export default function ProjectPage({ searchParams }: Props) {
  const initialTab = searchParams.tab === "dev" ? "dev" : "sound";
  const soundProjects = projects.filter((p) => p.type === "sound");
  const devProjects = projects.filter((p) => p.type === "code");

  return (
    <main>
      <ProjectsHeader
        soundCount={soundProjects.length}
        devCount={devProjects.length}
      />
      <TabToggle
        initialTab={initialTab}
        soundProjects={soundProjects}
        devProjects={devProjects}
      />
    </main>
  );
}
