import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: "senior-java",
      title: "Senior Java Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description:
        "Lead development of microservices architecture using Spring Boot. Implemented ML models for data processing and NLP solutions for customer service automation.",
      technologies: ["Java", "Spring Boot", "Python", "ML", "NLP"],
    },
    {
      id: "software-engineer",
      title: "Software Engineer",
      company: "Previous Company",
      period: "2020 - 2022",
      description:
        "Developed enterprise applications and worked on AI/ML projects for data analysis and predictive modeling.",
      technologies: ["Java", "Python", "TensorFlow", "SQL"],
    },
  ];

  return (
    <>
      <Navbar />
      {/* Experience Section */}
      <section
        id="experience"
        className="section-padding bg-white dark:bg-gray-800"
      >
        <div className="container-custom">
          <h2 className="text-center text-gray-900 dark:text-white mb-12 animate-fade-in-up">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="card-dark animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Experience;
