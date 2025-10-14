const aboutData = {
  title: "About Me",
  subtitle: "Discover my journey, passions, and the story behind my work",

  biodata: [
    { label: "Name", value: "Le Ngoc Hung", icon: "bx bx-id-card" },
    { label: "Date of Birth", value: "June,03-2003", icon: "bx bx-calendar" },
    { label: "Email", value: "hungln.0306@gmail.com", icon: "bx bx-envelope" },
    { label: "Phone", value: "0987636056", icon: "bx bx-phone" },
    {
      label: "Education",
      value: "University of Transport Technology / Information System",
      icon: "bx bx-book",
    },
    { label: "GPA", value: "3.18 / 4.00", icon: "bx bx-award" },
  ],

  resume: {
    label: "Download My Resume",
    href: "https://drive.google.com/file/d/1xEt06GHu2_SyoKNLIBgjvYW53vgEEtZW/view?usp=sharing",
    icon: "bx bx-download",
  },

  aboutNarrative: {
    // replaced in UI by certificate
    whoAmI: {
      text: `I'm a frontend developer who crafts responsive, interactive, and clean UIs. With a background in Informatics Engineering, I blend design sense with technical logic.`,
      icon: "bx-info-circle",
    },
    approach: {
      text: `I focus on user-centered design, performance, and accessibility   always evolving with modern tech to deliver seamless digital experiences.`,
      icon: "bx-bulb",
    },
  },

  certificate: {
    title: "TOEIC Certificate – 640/990",
    issued: "Issued by IIG Vietnam, June 2025",
    icon: "bx-award",
  },

  experience: [
    {
      id: 1,
      company: "BZCOM Co., Ltd",
      role: "Frontend Intern",
      period: "02/2025 – 05/2025",
      details: [
        "Built responsive UIs with React and Tailwind CSS",
        "Improved UI/UX and collaborated via Git/GitHub.",
        "Applied modern UI libraries and strengthened problem-solving skills.",
      ],
    },
  ],
};

export default aboutData;
