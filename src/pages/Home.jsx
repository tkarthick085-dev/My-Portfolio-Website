import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* Avatar */}
        <div className="avatar">
          <img src="/avatar.png" alt="Karthick" />
        </div>

        {/* Name */}
        <h1 className="hero-title">
          Hi, I'm <span>Karthick</span>
        </h1>

        {/* Role */}
        <h2 className="hero-role">
          Frontend Developer
        </h2>

        {/* Description */}
        <p className="hero-text">
          I build fast, responsive and modern web applications using React. 
          Focused on clean UI and great user experience.
        </p>

        {/* Buttons */}
        <div className="button-group">
          <a href="/resume.pdf" download target="_blank">
  <button className="primary-btn">Download Resume</button>
</a>


          <Link to="/contact">
            <button className="secondary-btn">Contact Me</button>
          </Link>
        </div>

        

      </div>
    </section>
  );
};

export default Home;
