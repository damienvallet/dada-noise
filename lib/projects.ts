export type ProjectType = "sound" | "code";

export type Project = {
  id: number;
  name: string;
  type: ProjectType;
  year: string;
  sub: string;
  href: string;
  certification?: string;
  featured?: boolean;
  description: string;
  tools: string[];
  mediaType?: "audio" | "video" | "image";
  mediaUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "UVI - Orchestral Suite 2",
    type: "sound",
    year: "2026",
    sub: "Sound Design - Scripting",
    href: "/projects",
    featured: true,
    description: "Premium orchestral instruments and composer tools",
    tools: ["PM", "Editing", "Scripting"],
    mediaType: "video",
    mediaUrl: "https://www.uvi.net/orchestral-suite-2",
  },
  {
    id: 2,
    name: "AFUP Ice Breaker Game",
    type: "code",
    year: "2025",
    sub: "Web - React",
    href: "/projects",
    featured: true,
    description: "",
    tools: ["React", "Symfony"],
    mediaType: "image",
  },

  {
    id: 3,
    name: "MC Solaar - Les Mirabelles",
    type: "sound",
    year: "2018",
    sub: "Music Production · Guitar",
    certification: "Platinum Album — SNEP certified",
    href: "/projects",
    featured: true,
    description: "",
    tools: ["Protools", "Slate Drums"],
    mediaType: "video",
    mediaUrl: "https://youtu.be/x4JVg3drMms?si=3H9_YQObKP7XPLP_",
  },

  {
    id: 4,
    name: "UVI - Glass Orchestra",
    type: "sound",
    year: "2025",
    sub: "Sound Design - Scripting",
    href: "/projects",
    featured: true,
    description: "extraordinary collection of 14 glass instruments",
    tools: ["PM", "Editing", "Scripting"],
    mediaType: "image",
  },
];
