import React from "react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ textAlign: "center", fontSize: "32px;", marginBottom: "40px" }}>
        My Projects
      </h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "30px"
      }}>
        {projects.map((project) => (
          <div key={project.id} style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              <h2 style={{ fontSize: "font-size: 32px;", marginBottom: "10px" }}>{project.title}</h2>
              <p style={{ marginBottom: "15px", color: "#555" }}>{project.description}</p>
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  display: "inline-block",
                  padding: "10px 15px",
                  backgroundColor: "#0070f3",
                  color: "#fff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "bold"
                }}
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
