import aboutData from "../data/aboutData.jsx";
import { useState } from "react";
import Tippy from "@tippyjs/react";
import Swal from "sweetalert2";
import { portfolioData } from "../data/portofolioData.jsx";

const About = () => {
  const resumeButtonClasses = `inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
    aboutData.resume.type === "primary"
      ? "bg-gray-800 dark:bg-white text-white dark:text-gray-800 hover:bg-gray-800 dark:hover:bg-gray-100"
      : "border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800"
  }`;

  return (
    <section
      id="about"
      className="min-h-screen pt-20 overflow-hidden bg-gradient-to-b from-white via-fuchsia-50/50 to-white dark:from-gray-900 dark:via-gray-900/50 dark:to-gray-900"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header
          className="text-center text-gray-800 dark:text-white mb-12"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <h2 className="text-5xl font-bold mb-2">{aboutData.title}</h2>
          <p className="text-lg text-gray-800 dark:text-white">
            {aboutData.subtitle}
          </p>
        </header>

        {/* Tabs */}
        <Tabs />
      </div>
    </section>
  );
};

const Tabs = () => {
  const [active, setActive] = useState("information");
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      {/* Tab headers */}
      <div
        className="flex justify-center gap-3 mb-6 flex-wrap"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {[
          { id: "information", label: "Information", icon: "bx bx-id-card" },
          { id: "tech", label: "Tech", icon: "bx bx-code-alt" },
          { id: "experience", label: "Experience", icon: "bx bx-briefcase" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md ${
              active === t.id
                ? "text-gray-900 bg-gradient-to-r from-cyan-400 to-fuchsia-400"
                : "text-gray-200 border border-cyan-400/30 hover:border-cyan-400/60"
            }`}
          >
            <i className={t.icon} />
            {t.label}
          </button>
        ))}
      </div>

      {active === "tech" && <TechTab />}
      {active === "information" && <InformationTab />}
      {active === "experience" && <ExperienceTab />}
    </div>
  );
};

const TechTab = () => (
  <div
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    data-aos="fade-up"
    data-aos-delay="600"
  >
    {portfolioData.tabs.techStacks.map((tech, index) => (
      <div
        key={tech.id}
        className="bg-gray-800/40 border border-cyan-400/20 rounded-lg p-6 shadow-lg flex flex-col items-center justify-center gap-4"
        data-aos="fade-up"
        data-aos-delay={`${800 + index * 100}`}
      >
        <i
          className={`${tech.icon} text-5xl`}
          style={{ color: tech.color }}
        ></i>
        <span className="text-lg font-medium text-gray-100">{tech.label}</span>
      </div>
    ))}
  </div>
);

const InformationTab = () => {
  const leftInfo = aboutData.biodata.slice(0, 3);
  const rightInfo = aboutData.biodata.slice(3, 6);
  return (
    <div
      className="text-gray-800 dark:text-white"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left column: narrative cards */}
        <div className="grid grid-cols-1 gap-6">
          <div
            className="flex flex-col gap-3 bg-gray-800/40 border border-cyan-400/20 rounded-xl p-6 shadow-lg"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800 p-4 dark:bg-white dark:text-gray-800 text-white">
                <i
                  className={`bx ${aboutData.aboutNarrative.approach.icon} text-xl`}
                ></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                My Approach
              </h3>
            </div>
            <p className="text-gray-300">
              {aboutData.aboutNarrative.approach.text}
            </p>
          </div>

          <div
            className="flex flex-col gap-3 bg-gray-800/40 border border-cyan-400/20 rounded-xl p-6 shadow-lg"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 p-4 flex items-center justify-center rounded-lg bg-gray-800 dark:bg-white dark:text-gray-800 text-white">
                <i className={`bx ${aboutData.certificate.icon} text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Certificate
              </h3>
            </div>
            <p className="text-gray-100 font-semibold">
              {aboutData.certificate.title}
            </p>
            <p className="text-gray-300">{aboutData.certificate.issued}</p>
          </div>
        </div>

        {/* Right column: Personal info card with 2 columns x 3 items */}
        <div
          className="bg-gray-800/40 border border-cyan-400/20 rounded-xl p-6 shadow-lg"
          data-aos="fade-left"
          data-aos-delay="800"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ul className="grid grid-cols-1 gap-4">
              {leftInfo.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 bg-gray-800/60 rounded-lg p-4"
                  data-aos="fade-up"
                  data-aos-delay={`${1000 + index * 100}`}
                >
                  <div className="flex items-center justify-center w-12 h-12 p-4 rounded-lg bg-gray-800 dark:bg-white dark:text-gray-800 text-white">
                    <i
                      className={`${item.icon} text-xl`}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-gray-100">
                      {item.label}:
                    </span>
                    <span className="text-sm text-gray-300"> {item.value}</span>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="grid grid-cols-1 gap-4">
              {rightInfo.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 bg-gray-800/60 rounded-lg p-4"
                  data-aos="fade-up"
                  data-aos-delay={`${1000 + (index + 3) * 100}`}
                >
                  <div className="flex items-center justify-center w-12 h-12 p-4 rounded-lg bg-gray-800 dark:bg-white dark:text-gray-800 text-white">
                    <i
                      className={`${item.icon} text-xl`}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-gray-100">
                      {item.label}:
                    </span>
                    <span className="text-sm text-gray-300"> {item.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceTab = () => (
  <div
    className="grid grid-cols-1 gap-4"
    data-aos="fade-up"
    data-aos-delay="600"
  >
    {aboutData.experience.map((exp, index) => (
      <div
        key={exp.id}
        className="bg-gray-800/40 border border-cyan-400/20 rounded-xl p-6 shadow-lg text-gray-100"
        data-aos="fade-up"
        data-aos-delay={`${800 + index * 200}`}
      >
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-semibold">
            {exp.role} • {exp.company}
          </h4>
          <span className="text-sm text-gray-300">{exp.period}</span>
        </div>
        <ul className="list-disc pl-5 text-sm text-gray-300">
          {exp.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default About;
