import React from "react";

function Projects() {
  const projects = [
    { title: "E-Commerce Site", image: "/images/project1.jpg" },
    { title: "Portfolio Website", image: "/images/project2.jpg" },
    { title: "Chat App", image: "/images/project3.jpg" },
  ];

  return (
    <div className="page">
      <h1>Projects</h1>
      <div className="project-grid">
        {projects.map((p, index) => (
          <div className="project-card" key={index}>
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
