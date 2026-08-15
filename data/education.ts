export interface EducationEntry {
  institution: string;
  program: string;
  duration: string;
  location: string;
  current: boolean;
  meta: { label: string; value: string }[];
}

export const education: EducationEntry[] = [
  {
    institution: "Indian Institute of Information Technology Vadodara",
    program: "B.Tech in Computer Science and Engineering",
    duration: "Aug 2024 — May 2028",
    location: "Gandhinagar, Gujarat, India",
    current: true,
    meta: [
      { label: "Year", value: "3rd Year" },
     
    ],
  },
  {
    institution: "New Master Minds Junior College",
    program: "Class XII (Higher Secondary) — TSBIE",
    duration: "Apr 2022 — Mar 2024",
    location: "Rangareddy, Telangana",
    current: false,
    meta: [{ label: "Percentage", value: "97.20%" }],
  },
  {
    institution: "Sree Aditya Concept School",
    program: "Class X (Secondary) — SSC",
    duration: "Apr 2021 — May 2022",
    location: "Rangareddy, Telangana",
    current: false,
    meta: [{ label: "Percentage", value: "95.00%" }],
  },
];
