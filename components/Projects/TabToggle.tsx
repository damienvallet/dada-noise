"use client";

import { useState } from "react";
import { Project } from "@/lib/projects";
import ProjectsGrid from "./ProjectsGrid";
import styles from "./Projects.module.css";

type Props = {
  initialTab: "sound" | "dev";
  soundProjects: Project[];
  devProjects: Project[];
};

export default function TabToggle({
  initialTab,
  soundProjects,
  devProjects,
}: Props) {
  const [activeTab, setActiveTab] = useState<"sound" | "dev">(initialTab);
  const currentProjects = activeTab === "sound" ? soundProjects : devProjects;

  return (
    <>
      <div className={styles.toggleBar}>
        <button
          className={`${styles.toggleBtn} ${activeTab === "sound" ? styles.toggleActive : ""}`}
          onClick={() => setActiveTab("sound")}
        >
          Sound Design
          <span className={styles.togglePill}>
            {String(soundProjects.length).padStart(2, "0")}
          </span>
        </button>
        <button
          className={`${styles.toggleBtn} ${activeTab === "dev" ? styles.toggleActive : ""}`}
          onClick={() => setActiveTab("dev")}
        >
          Development
          <span className={styles.togglePill}>
            {String(devProjects.length).padStart(2, "0")}
          </span>
        </button>
        <div className={styles.toggleSpacer} />
        <div className={styles.filterLabel}>Filter by discipline</div>
      </div>

      <ProjectsGrid projects={currentProjects} />
    </>
  );
}
