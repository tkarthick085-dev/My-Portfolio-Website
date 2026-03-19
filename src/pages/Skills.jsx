import { 
  FaReact, FaJs, FaCss3Alt, FaHtml5, FaBootstrap, FaPython 
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";
import { SiPycharm } from "react-icons/si";



function Skills() {

  const frontend = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React JS", icon: <FaReact /> },
  ];

  const backend = [
    { name: "Python", icon: <FaPython /> },
  ];

  const tools = [
    { name: "VS Code", icon: <VscVscode /> },
{ name: "PyCharm", icon: <SiPycharm /> }

  ];

  return (
    <section className="skills-section">

      <h2>My Skills</h2>

      {/* Frontend */}
      <div className="skills-group">
        <h3>Frontend</h3>
        <div className="skills-grid">
          {frontend.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Backend */}
      <div className="skills-group">
        <h3>Backend</h3>
        <div className="skills-grid">
          {backend.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="skills-group">
        <h3>Tools & IDE's</h3>
        <div className="skills-grid">
          {tools.map((tool, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{tool.icon}</div>
              <p>{tool.name}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Skills;
