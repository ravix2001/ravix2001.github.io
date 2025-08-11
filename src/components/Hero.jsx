import React from "react";
import { Mail, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 md:pt-32 md:pb-24 animate-fade-in"
      >
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-gray-900 dark:text-white mb-6 animate-slide-up">
              Computer Engineer & <br />
              Java Developer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-200">
              Passionate about building scalable Java applications and
              intelligent systems using machine learning and natural language
              processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center rounded-md bg-gray-900 dark:bg-gray-100 px-6 py-3 text-sm font-medium text-white dark:text-gray-900 shadow-sm transition-colors hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-gray-400"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </button>
              <a
                href="/assets/Ravi_Pandit_Resume.pdf"
                download="Ravi_Pandit_Resume.pdf"
                className="btn-secondary-dark"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
