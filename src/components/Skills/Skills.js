import React from "react";
import "./Skills.css";
import logo from "../../assets/logo.png"; // replace with real icons later

export default function Skills() {
  const skills = [
    {
      name: "html5",
      type: "plain",
    },
    {
      name: "css3",
      type: "plain",
    },
    {
      name: "javascript",
      type: "plain",
    },
    {
      name: "react",
      type: "original",
    },
    {
      name: "tailwindcss",
      type: "original",
    },
    {
      name: "nodejs",
      type: "plain",
    },
    {
      name: "express",
      type: "original",
    },
    {
      name: "mysql",
      type: "original-wordmark",
    },
    {
      name: "cplusplus",
      type: "plain",
    },
  ];

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.name}/${skill.name}-${skill.type}.svg`}
              alt={skill.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
