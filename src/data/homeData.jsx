import profileImg from "../assets/avatar.jpg";

const homeData = {
  title: "Hi, I’m Le Ngoc Hung 👋",
  typingTexts: ["Frontend Developer", "React Enthusiast"],
  description:
    "I build modern, responsive web apps with clean UI and smooth UX  blending design and code to create experiences that feel intuitive, fast, and delightful to use.",

  img: profileImg,
  buttons: [
    {
      label: "Download My CV",
      href: "https://drive.google.com/file/d/12Gqsurp4i4Rak9EvwYFmELnsSjTSopLg/view?usp=sharing",
      type: "secondary",
    },
  ],
  floatingIcons: [
    { icon: "bx bxl-html5", color: "#e34c26", label: "HTML" },
    { icon: "bx bxl-css3", color: "#264de4", label: "CSS" },
    { icon: "bx bxl-javascript", color: "#f0db4f", label: "JavaScript" },
    { icon: "bx bxl-react", color: "#61dbfb", label: "React" },
  ],
  socialMedia: [
    {
      label: "GitHub",
      href: "https://github.com/hung0306",
      icon: "bx bxl-github",
      description: "Explore my code & projects",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/lnh20",
      icon: "bx bxl-facebook",
      description: "Connect with me on Facebook",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: "bx bxl-instagram",
      description: "Follow me on Instagram",
    },
  ],

  // Front-end skills to display as badges in the hero section
  skills: [
    "HTML5",
    "CSS3",
    "SCSS",
    "JavaScript (ES6+)",
    "TypeScript",
    "ReactJS",
    "Redux",
    "Ant Design",
    "Bootstrap",
  ],
};

export default homeData;
