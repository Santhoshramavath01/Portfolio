export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: [{ name: "C++" }, { name: "Python" }, { name: "JavaScript" }],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MERN Stack" },
    ],
  },
  {
    title: "Database",
    skills: [{ name: "PostgreSQL" }, { name: "SQL" }, { name: "DBMS" }],
  },
  {
    title: "Tools",
    skills: [{ name: "Git" }, { name: "GitHub" }, { name: "Docker" }],
  },
  {
    title: "Cloud / DevOps",
    skills: [{ name: "AWS" }, { name: "CI/CD" }],
  },
  {
    title: "Core Computer Science",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "OOPs" },
      { name: "DBMS" },
      { name: "Computer Networks" },
    ],
  },
];
