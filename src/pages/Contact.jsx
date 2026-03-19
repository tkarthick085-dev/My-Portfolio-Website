import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-card">
        <h1>Contact Me</h1>

        <div className="contact-links">
          
          <a href="tel:+919361812646">
            <FaPhone />
            <span>+91 9361812646</span>
          </a>

          <a href="mailto:tkarthick085@gmail.com">
            <FaEnvelope />
            <span>tkarthick085@gmail.com</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/karthick-t-5972a42a4" 
            target="_blank" 
            rel="noreferrer"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          <a 
            href="https://github.com/tkarthick085-dev" 
            target="_blank" 
            rel="noreferrer"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;
