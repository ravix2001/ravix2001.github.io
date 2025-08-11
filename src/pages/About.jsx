import React from "react";
import { Github, Linkedin } from "lucide-react";
import { Award, Code, Brain, BookOpen } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      {/* About Section */}
      <section id="about" className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center text-gray-900 dark:text-white mb-12 animate-fade-in-up">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I'm a passionate computer engineer with expertise in Java
                  development and artificial intelligence. My journey in
                  technology spans from building robust backend systems to
                  developing intelligent solutions using machine learning and
                  natural language processing.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  With a strong foundation in software engineering principles
                  and a keen interest in AI/ML, I enjoy solving complex problems
                  and creating innovative solutions that make a real impact.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/ravix2001"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/ravipandit2001"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="space-y-4 animate-fade-in-right">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Computer Engineering Degree
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  <span className="text-gray-700 dark:text-gray-300">
                    2+ Years Java Development
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  <span className="text-gray-700 dark:text-gray-300">
                    AI/ML Enthusiast
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  <span className="text-gray-700 dark:text-gray-300">
                    NLP Practitioner
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
