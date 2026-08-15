export interface Project {
  slug: string;
  name: string;
  description: string;
  features: string[];
  technologies: string[];
  github: string;
  demoVideo?: string;
  liveDemo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    slug: "finova-bank-management-system",

    name: "Finova — Web-Based Bank Management System",

    description:
      "A web-based banking management system developed using PHP, MySQL, HTML, CSS, Bootstrap, and JavaScript.",

    features: [
      "User authentication",
      "Session management",
      "Database integration",
      "Transaction processing",
      "UPI PIN management",
      "PDF statement generation",
      "Fund transfers",
      "UPI bill payments",
      "Debit/credit card management",
      "Loan services",
      "Transaction history",
    ],

    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "PHP",
      "MySQL",
    ],

    github:
      "https://github.com/Santhoshramavath01/Bank-Management-System",

    demoVideo:
      "https://www.youtube.com/watch?feature=shared&v=8jf0ha0mUjU",

    // Image inside /public
    image: "/dashboard_finova.jpeg",
  },

  {
    slug: "smart-campus-management-system",

    name: "Smart Campus Management System",

    description:
      "A full-stack smart campus management system built using modern web technologies.",

    features: [
      "Authentication",
      "Role-based authorization",
      "User management",
      "Event management",
      "Resource reservations",
      "Scheduling",
      "Notifications",
      "Real-time communication",
      "Real-time messaging",
      "Typing indicators",
      "Read receipts",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Redux Toolkit",
      "Material UI",
    ],

    github:
      "https://github.com/Santhoshramavath01/smart-campus-management-system",

    // Add the second project's image later if you have one.
    // image: "/smart-campus.png",
  },
];