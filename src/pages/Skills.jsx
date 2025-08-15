import React from "react";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Code,
  Brain,
  BookOpen,
  Database,
  Leaf,
  Atom,
  Package,
  Coffee,
  GitMerge,
  Box,
  Calculator,
  Grid,
  BarChart3,
  Zap,
  TrendingUp,
  Globe,
  Layers,
  FileCode2,
  Palette,
  Shield,
  LineChart,
  FlaskConical,
  Sparkles,
} from "lucide-react";

const Skills = () => {
  const [skillsInView, setSkillsInView] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsInView(true); // animate all skills at once
          observer.disconnect(); // stop observing after first trigger
        }
      },
      { threshold: 0.1 } // triggers earlier
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    // Core Programming & Frameworks
    {
      name: "Java",
      icon: Coffee,
      level: 80,
      id: "java",
      category: "development",
    },
    {
      name: "Spring Boot",
      icon: Leaf,
      level: 80,
      id: "spring",
      category: "development",
    },
    {
      name: "Python",
      icon: FileCode2,
      level: 80,
      id: "python",
      category: "development",
    },
    {
      name: "JavaScript",
      icon: Code,
      level: 70,
      id: "javascript",
      category: "development",
    },
    {
      name: "React",
      icon: Atom,
      level: 70,
      id: "react",
      category: "development",
    },
    {
      name: "SQL/NoSQL",
      icon: Database,
      level: 80,
      id: "sql",
      category: "development",
    },

    // Web & API Development
    {
      name: "RESTful APIs",
      icon: Globe,
      level: 80,
      id: "restapi",
      category: "development",
    },
    {
      name: "Tailwind CSS",
      icon: Palette,
      level: 75,
      id: "tailwind",
      category: "development",
    },
    {
      name: "JUnit",
      icon: Shield,
      level: 70,
      id: "junit",
      category: "development",
    },
    {
      name: "Maven",
      icon: Package,
      level: 75,
      id: "maven",
      category: "development",
    },

    // AI/ML & Data Science
    {
      name: "Machine Learning",
      icon: Brain,
      level: 80,
      id: "ml",
      category: "ai-ml",
    },
    {
      name: "Natural Language Processing",
      icon: BookOpen,
      level: 80,
      id: "nlp",
      category: "ai-ml",
    },
    {
      name: "Deep Learning",
      icon: Layers,
      level: 70,
      id: "deeplearning",
      category: "ai-ml",
    },
    {
      name: "Transformers",
      icon: Sparkles,
      level: 75,
      id: "transformers",
      category: "ai-ml",
    },
    { name: "PyTorch", icon: Zap, level: 60, id: "pytorch", category: "ai-ml" },
    {
      name: "Scikit-learn",
      icon: FlaskConical,
      level: 80,
      id: "sklearn",
      category: "ai-ml",
    },
    {
      name: "NumPy",
      icon: Calculator,
      level: 85,
      id: "numpy",
      category: "ai-ml",
    },
    { name: "Pandas", icon: Grid, level: 85, id: "pandas", category: "ai-ml" },
    {
      name: "Matplotlib",
      icon: LineChart,
      level: 80,
      id: "matplotlib",
      category: "ai-ml",
    },
    {
      name: "Data Visualization",
      icon: BarChart3,
      level: 80,
      id: "dataviz",
      category: "ai-ml",
    },
    {
      name: "Statistical Analysis",
      icon: TrendingUp,
      level: 75,
      id: "stats",
      category: "ai-ml",
    },

    // DevOps & Tools
    {
      name: "Git & GitHub",
      icon: GitMerge,
      level: 85,
      id: "git",
      category: "development",
    },
    {
      name: "Docker",
      icon: Box,
      level: 70,
      id: "docker",
      category: "development",
    },
  ];

  const categories = [
    { id: "all", name: "All Skills", count: skills.length },
    {
      id: "development",
      name: "Development",
      count: skills.filter((s) => s.category === "development").length,
    },
    {
      id: "ai-ml",
      name: "AI/ML",
      count: skills.filter((s) => s.category === "ai-ml").length,
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <>
      <Navbar />
      {/* Skills Section */}
      <section
        id="skills"
        className="section-padding bg-gray-50 dark:bg-gray-900"
        ref={skillsRef}
      >
        <div className="container-custom">
          <h2 className="text-center text-gray-900 dark:text-white mb-8 animate-fade-in-up">
            Skills & Technologies
          </h2>

          {/* Category Filter Buttons */}
          <div
            className="flex justify-center mb-12 animate-fade-in-up px-4"
            style={{ animationDelay: "200ms" }}
          >
            <div className="inline-flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg border border-gray-200 dark:border-gray-700 max-w-full overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 sm:px-6 py-3 rounded-md font-medium text-xs sm:text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    activeCategory === category.id
                      ? "bg-gray-800 dark:bg-gray-600 text-white shadow-md"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {category.name}
                  <span className="ml-1 sm:ml-2 text-xs opacity-75">
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {filteredSkills.map((skill, index) => (
                <div
                  key={skill.id}
                  className="card-dark animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-3">
                    <skill.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 mr-3" />
                    <h4 className="text-gray-900 dark:text-white">
                      {skill.name}
                    </h4>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gray-800 dark:bg-gray-400 h-2 rounded-full transition-all duration-2000 ease-out"
                      style={{
                        width: skillsInView ? `${skill.level}%` : "0%",
                      }}
                    />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {skill.level}%
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

export default Skills;
