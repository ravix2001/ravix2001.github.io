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
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="text-center lg animate-slide-up">
                <h1 className="text-gray-900 dark:text-white mb-6">
                  Computer Engineer & <br />
                  Java Developer
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 animate-slide-up animation-delay-200">
                  Passionate about building scalable Java applications and
                  intelligent systems using machine learning and natural language
                  processing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animation-delay-400">
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

              {/* Profile Photo */}
              <div className="flex justify-center lg:justify-end animate-slide-up animation-delay-300">
                <div className="relative">
                  {/* Decorative background circles */}
                  <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  
                  {/* Profile Image Container */}
                  <div className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl hover:scale-105 transition-transform duration-300">
                    <img
                      src="/assets/ravi-pandit-profile.png"
                      alt="Ravi Pandit - Computer Engineer & Java Developer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image doesn't load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 hidden items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-4xl text-gray-600 dark:text-gray-300">R</span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Profile Photo</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-10 right-10 w-6 h-6 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-20 left-10 w-4 h-4 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
                  <div className="absolute top-32 left-0 w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;