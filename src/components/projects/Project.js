import React, { useState } from "react";
import "./Project.css";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Portfolio Website",
    description: "A simple personal portfolio built with HTML & CSS.",
    category: "Web",
    tech: ["HTML", "CSS"],
    demo: "https://saaad-ahmad.github.io/Portfolio/",
    github: "https://github.com/Saaad-Ahmad/Portfolio",
  },
  {
    title: "Tic Tac Toe Game",
    description: "A fun and interactive Tic Tac Toe game built with JavaScript.",
    category: "Web",
    tech: ["JavaScript", "HTML", "CSS"],
    demo: "https://saaad-ahmad.github.io/Tic-Tac-Toe/",
    github: "https://github.com/Saaad-Ahmad/Tic-Tac-Toe",
  },
   {
    title: "Rock Paper Scissors Game",
    description: "A fun and interactive Rock Paper Scissors game built with JavaScript.",
    category: "Web",
    tech: ["JavaScript", "HTML", "CSS"],
    demo: "https://saaad-ahmad.github.io/RockPaperScissors/",
    github: "https://github.com/Saaad-Ahmad/RockPaperScissors",
  },
  {
    title: "To-Do-List App",
    description: "A simple and efficient To-Do List application built with JavaScript.",
    category: "Web",
    tech: ["JavaScript", "HTML", "CSS"],
    demo: "https://saaad-ahmad.github.io/To-Do-List/",
    github: "https://github.com/Saaad-Ahmad/To-Do-List",
  }, 
   {
    title: "Random Paassword Generator",
    description: "A simple and efficient Random Password Generator application built with JavaScript.",
    category: "Web",
    tech: ["JavaScript", "HTML", "CSS"],
    demo: "https://saaad-ahmad.github.io/RandomPasswordGenrator/",
    github: "https://github.com/Saaad-Ahmad/RandomPasswordGenrator",
  }, 
  {
    title: "Text to Speech Converter",
    description: "A web application that converts text to speech using JavaScript.",
    category: "Web",
    tech: ["JavaScript", "HTML", "CSS"],
    demo: "https://saaad-ahmad.github.io/Text-to-Speech/",
    github: "https://github.com/Saaad-Ahmad/Text-to-Speech",
  },
   {
    title: "QR Code Generator",
    description: "A web application that generates QR codes from user input.",
    category: "Web",
    tech: ["JavaScript", "HTML", "CSS"],
    demo: "https://saaad-ahmad.github.io/QR-Code-Generator/",
    github: "https://github.com/Saaad-Ahmad/QR-Code-Generator",
  },
  
];

const categories = ["All", "Web"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects">
      <h2>My Projects</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="project-title">{project.title}</p>
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
