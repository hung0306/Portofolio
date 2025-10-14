import { useState } from "react";
import { portfolioData } from "../data/portofolioData.jsx";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section
      id="portofolio"
      className="min-h-screen pb-20 bg-gray-900 pt-20"
      data-aos-duration="1000"
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Subtitle */}
        <div
          className="text-center mb-12 text-gray-100"
          data-aos-delay="600"
          data-aos="fade-down"
        >
          <h2 className="text-5xl font-bold mb-2">
            {portfolioData.sectionTitle.title}
          </h2>
          <p className="text-lg text-gray-400">
            {portfolioData.sectionTitle.subtitle}
          </p>
        </div>

        {/* Tabs Menu */}
        <div
          className="flex justify-center mb-8 gap-4 flex-wrap"
          data-aos-delay="600"
          data-aos="fade-down"
        >
          {[
            { value: "projects", label: "Projects", icon: "bx bx-briefcase" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full shadow-lg text-sm font-medium transition-all ${
                activeTab === tab.value
                  ? "text-gray-900 bg-gradient-to-r from-cyan-400 to-fuchsia-400"
                  : "text-gray-200 border border-cyan-400/30 hover:border-cyan-400/60"
              }`}
            >
              <i className={tab.icon}></i>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        <div>
          {/* Projects Tab */}
          {activeTab === "projects" && (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              data-aos-delay="600"
              data-aos="fade-down"
            >
              {portfolioData.tabs.projects.map((project) => (
                <div
                  key={project.id}
                  className="h-full flex flex-col bg-gray-800/40 border border-cyan-400/20 rounded-lg p-6 shadow-lg hover:-translate-y-1 transition-transform"
                >
                  {project.img ? (
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  ) : null}
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-100 mb-4 min-h-[64px]">
                    {project.desc}
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.code ? (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-full font-medium transition-all hover:-translate-y-0.5 text-gray-900 bg-gradient-to-r from-cyan-400 to-fuchsia-400 shadow-md hover:shadow-lg"
                      >
                        <i className="bx bxl-github text-lg" />
                        <span className="relative">
                          <span className="opacity-100 group-hover:opacity-0 transition-opacity duration-200">
                            GitHub
                          </span>
                          <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            View Code
                          </span>
                        </span>
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certificates Tab removed */}

          {/* Tech Stack moved to About */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
