import { useState } from "react";
import contactData from "../data/contactData.jsx";
import Tippy from "@tippyjs/react";
import Swal from "sweetalert2";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <section
      id="contact"
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
          <h2 className="text-5xl font-bold mb-2">{contactData.title}</h2>
          <p className="text-lg text-gray-400">{contactData.subtitle}</p>
        </div>

        {/* Tabs Menu */}
        <div
          className="flex justify-center mb-8 gap-4 flex-wrap"
          data-aos-delay="600"
          data-aos="fade-down"
        >
          {[
            { value: "contact", label: "Contact Me", icon: "bx bx-envelope" },
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
          {activeTab === "contact" && (
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              data-aos-delay="600"
              data-aos="fade-down"
            >
              {/* Left Side: Social Links */}
              <div className="grid gap-4 max-w-xl mx-auto lg:mx-0">
                {contactData.socials.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 px-7 w-full  py-7 rounded-lg shadow-lg bg-gray-800/40 border border-cyan-400/20 text-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all"
                    aria-label={item.label}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-gray-800 text-white dark:bg-white dark:text-gray-800 shrink-0">
                        <i className={`${item.icon} text-xl`} />
                      </div>
                      <div className="flex flex-col overflow-hidden">
                        <span className="font-semibold text-2xl leading-tight">
                          {item.label}
                        </span>
                        <span className="text-sm text-gray-800 dark:text-white leading-snug">
                          {item.description}
                        </span>
                      </div>
                    </div>
                    <i className="bx bx-chevron-right text-2xl text-gray-300" />
                  </a>
                ))}
              </div>

              {/* Right Side: Contact Form */}
              <div className="rounded-lg py-12 px-7 shadow-lg border h-fit border-cyan-400/20 bg-gray-800/40 max-w-xl w-full mx-auto lg:mx-0">
                <h3 className="text-xl font-semibold mb-6 text-gray-100 flex items-center gap-2">
                  <i className="bx bx-envelope text-lg" />
                  Send Me a Message
                </h3>
                <form className="grid gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 rounded-lg border border-gray-700 bg-gray-900 text-sm text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="p-3 rounded-lg border border-gray-700 bg-gray-900 text-sm text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                  />
                  <textarea
                    placeholder="Your Message"
                    className="p-3 rounded-lg border border-gray-700 bg-gray-900 text-sm text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                    rows="5"
                  />
                  <Tippy content="Send your message" placement="top">
                    <button
                      type="button"
                      onClick={() => {
                        Swal.fire({
                          title: "Message Sent! ✉️",
                          text: "Thank you for reaching out. I’ll get back to you soon!",
                          icon: "success",
                          confirmButtonColor: "#1F2937",
                          confirmButtonText: "Cool 😎",
                        });
                      }}
                      className="px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 text-gray-900 bg-gradient-to-r from-cyan-400 to-fuchsia-400"
                    >
                      Send
                      <i className="bx bx-send text-[1.2rem] translate-y-[1px]" />
                    </button>
                  </Tippy>
                </form>
              </div>
            </div>
          )}

          {/* Support tab removed */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
