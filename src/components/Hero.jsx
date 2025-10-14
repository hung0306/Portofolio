import { useState, useEffect, useRef } from "react";
import homeData from "../data/homeData.jsx";
import aboutData from "../data/aboutData.jsx";
import Tippy from "@tippyjs/react";

const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const titles = homeData.typingTexts;
    const currentTitle = titles[currentIndex];

    const typeSpeed = isDeleting ? 100 : 150;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentTitle.length) {
          setCurrentText(currentTitle.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  // Re-trigger slide-in when navigating to Home (e.g., via hash change)
  const imageWrapperRef = useRef(null);
  const playSlideIn = () => {
    const el = imageWrapperRef.current;
    if (!el) return;
    el.classList.remove("animate-slide-in-right");
    void el.offsetWidth; // reflow to restart animation
    el.classList.add("animate-slide-in-right");
  };

  useEffect(() => {
    // initial play on mount
    playSlideIn();

    const onHashChange = () => {
      if (window.location.hash === "#home" || window.location.hash === "") {
        playSlideIn();
      }
    };
    window.addEventListener("hashchange", onHashChange);

    // also observe when section becomes visible
    const sectionEl = document.getElementById("home");
    let observer;
    if (sectionEl) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              playSlideIn();
            }
          });
        },
        { threshold: 0.6 }
      );
      observer.observe(sectionEl);
    }

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      if (observer) observer.disconnect();
    };
  }, []);

  const fullName =
    aboutData?.biodata?.find((b) => b.label === "Name")?.value || "Your Name";
  const nameParts = fullName.split(" ");
  const lastName = nameParts.pop();
  const firstNames = nameParts.join(" ");

  return (
    <section
      id="home"
      className="min-h-screen pt-20 overflow-hidden bg-gray-900"
      data-aos-duration="1000"
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-12">
          <div className="space-y-8 text-gray-100">
            <div className="space-y-4">
              <p
                className="uppercase tracking-wider text-sm text-gray-400"
                data-aos="fade-down"
              >
                Hello, my name is
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-7xl font-extrabold"
                data-aos-dely="600"
                data-aos="fade-down"
              >
                {firstNames} <span className="text-cyan-400">{lastName}</span>
              </h1>
              <h2
                className="text-xl sm:text-2xl lg:text-3xl font-semibold flex items-center"
                data-aos-delay="600"
                data-aos="fade-right"
              >
                I'm a&nbsp;
                <span className="typing-text text-cyan-400">
                  {currentText}
                  <span
                    className={`cursor ${
                      showCursor ? "opacity-100" : "opacity-0"
                    } transition-all duration-200`}
                  >
                    |
                  </span>
                </span>
              </h2>
            </div>

            <p
              className="text-lg text-gray-800 dark:text-white leading-relaxed max-w-lg"
              data-aos-delay="600"
              data-aos="fade-left"
            >
              {homeData.description}
            </p>

            <div
              className="flex items-center space-x-4"
              data-aos-delay="600"
              data-aos="fade-down"
            >
              <span className="text-gray-300 font-medium">Follow me on:</span>
              <div className="flex space-x-3">
                {homeData.socialMedia.map((social, index) => (
                  <Tippy content={social.platform} key={index} placement="top">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center text-cyan-400 border border-cyan-400/40 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      aria-label={`Visit ${social.platform}`}
                    >
                      <i className={`${social.icon} text-lg`}></i>
                    </a>
                  </Tippy>
                ))}
              </div>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4"
              data-aos-delay="600"
              data-aos="fade-down"
            >
              {aboutData?.resume?.href ? (
                <a
                  href={aboutData.resume.href}
                  className="inline-flex items-center justify-center px-8 py-3 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-gray-900 bg-cyan-400 hover:bg-cyan-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bx-download mr-2" />
                  DOWNLOAD CV
                </a>
              ) : null}
            </div>

            {/* Skills Badges */}
            {Array.isArray(homeData.skills) && homeData.skills.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-3 max-w-3xl">
                {homeData.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="relative inline-flex rounded-full p-[1px] bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:from-cyan-300 hover:to-fuchsia-300 transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-900 text-gray-100 text-sm">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      {skill}
                    </span>
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <div
            className="relative flex justify-center items-center"
            data-aos-delay="600"
            data-aos="fade-up"
          >
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-[3rem] bg-cyan-400/30 blur-2xl translate-x-6 -translate-y-6" />
            <div
              ref={imageWrapperRef}
              className="relative z-10 animate-slide-in-right"
            >
              <img
                src={homeData.img}
                alt="Profile"
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-[2.5rem] shadow-2xl border-8 border-gray-800 animate-float"
              />
            </div>
          </div>
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-12px); }
            }
            .animate-float { animation: float 3.2s ease-in-out infinite; }
            @keyframes slide-in-right {
              0% { opacity: 0; transform: translateX(60px); }
              100% { opacity: 1; transform: translateX(0); }
            }
            .animate-slide-in-right { animation: slide-in-right 0.8s ease-out 0s 1 both; }
          `}</style>
        </div>

        <style>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .shadow-3xl {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
          }
          .dark .shadow-3xl {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.5);
          }
          .typing-text {
            display: inline-block;
          }
          .cursor {
            font-weight: 600;
            color: #1f2937;
          }
          .dark .cursor {
            color: #d1d5db;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Home;
