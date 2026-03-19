const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-container">

        <h2>About Me</h2>

        <p className="about-intro">
          I'm <span>Karthick T</span>, a frontend developer focused on building 
          clean, responsive and user-friendly web applications using React.
        </p>

        <p className="about-desc">
          I don’t just write code — I focus on performance, usability and modern UI design. 
          I enjoy turning ideas into real-world applications and continuously improving my skills.
        </p>

        {/* Skills highlight */}
        <div className="about-skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Bootstrap</span>
          <span>React JS</span>
          <span>Responsive Design</span>
        </div>

      </div>

    </section>
  );
};

export default About;
