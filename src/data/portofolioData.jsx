import project1 from "../assets/imgproject1.jfif";
import project2 from "../assets/imgproject2.png";
import project3 from "../assets/imgproject3.png";

export const portfolioData = {
  sectionTitle: {
    title: "My Projects",
    subtitle: "Explore my works and the technologies I use — all in one place.",
  },

  tabs: {
    projects: [
      {
        id: 1,
        img: project1,
        title: "E-commerce Website",
        desc: "A user-friendly e‑commerce site that supports browsing, cart and checkout, account management, and an admin dashboard for products, categories, users, orders, and inventory.",
        code: "https://github.com/hung0306/Ecommerce-website",
        tags: [
          "ReactJS",
          "React Router",
          "SCSS",
          "Ant Design",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "Authentication",
          "Validation",
          "Cloudinary",
        ],
      },
      {
        id: 2,
        img: project2,
        title: "Quizz Website",
        desc: "An interactive quiz platform with sign up/in, topic and category selection, real‑time scoring, and progress history for users.",
        code: "https://github.com/hung0306/Quizz-website",
        tags: [
          "ReactJS",
          "React Router",
          "Redux",
          "SCSS",
          "Ant Design",
          "TypeScript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
        ],
      },
      {
        id: 3,
        img: project3,
        title: "Recruitment Website",
        desc: "An online recruitment platform connecting employers and candidates: post jobs, manage profiles and applications, search with filters, recruiter dashboard, and company information management.",
        code: "https://github.com/hung0306/Recruitment-website",
        tags: [
          "ReactJS",
          "SCSS",
          "React Router",
          "Redux",
          "Ant Design",
          "JSON Server",
          "Ant Design Charts",
        ],
      },
    ],

    // certificates removed

    techStacks: [
      {
        id: 1,
        icon: "bx bxl-react",
        label: "ReactJS",
        color: "#61DAFB",
      },
      {
        id: 2,
        icon: "bx bxl-tailwind-css",
        label: "Tailwind CSS",
        color: "#38BDF8",
      },
      {
        id: 3,
        icon: "bx bx-layout",
        label: "Ant Design",
        color: "#1890FF",
      },
      {
        id: 4,
        icon: "bx bxl-javascript",
        label: "JavaScript",
        color: "#F7DF1E",
      },
      {
        id: 5,
        icon: "bx bxl-redux",
        label: "Redux",
        color: "#3178C6",
      },
      {
        id: 6,
        icon: "bx bxl-git",
        label: "Git/GitHub",
        color: "#F05032",
      },
    ],
  },
};
