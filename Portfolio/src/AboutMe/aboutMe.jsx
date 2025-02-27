import "./aboutMe.css";

function AboutMe() {
    return (
        <section className="about-me" id="about">
            <h2>About Me</h2>
    
            <div className="about-content">

                <div className="about-text">
                    <p>
                        I'm a passionate <strong>Web Developer, Game Developer, AI assistant Developer and 3D Modeler</strong> who loves building 
                        creative and efficient digital solutions. I enjoy solving problems, designing intuitive interfaces, and 
                        bringing ideas to life with code.
                    </p>

                    <p>Currently, I'm sharpening my skills in <strong>React.js, JavaScript, and Frontend Development</strong> while exploring game development and 3D modeling.</p>

                    <a href="/resume.pdf" download className="btn">Download Resume</a>
                </div>
            </div>

            <div className="tech-stack">
                <h3>Tech Stack</h3>
                <div className="icons">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" alt="Three.js" />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;