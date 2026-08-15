import type { LucideIcon } from "lucide-react";
import { Code2, Layers, BrainCircuit, Cloud } from "lucide-react";

export interface BuildArea {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const buildAreas: BuildArea[] = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building responsive and interactive web applications using modern frontend and backend technologies.",
  },
  {
    icon: Layers,
    title: "Full-Stack Applications",
    description:
      "Building applications across frontend, backend, APIs, and databases.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Exploring AI technologies and learning how intelligent systems can be integrated into useful applications.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Learning AWS, deployment, CI/CD, and cloud infrastructure.",
  },
];
