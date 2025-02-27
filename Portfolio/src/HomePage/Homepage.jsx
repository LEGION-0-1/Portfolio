import "./Homepage.css";
import TypingEffect from "../TypingEffect";

function Homepage() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Hey, I'm <span>Dilpreet Singh</span> 👋</h1>
                I'm a <TypingEffect texts={["Web Developer", "Game Developer", "3D Modeler", "AI Assistant Developer"]} />

                <div className="buttons">
                    <a href="#projects" className="btn">View Portfolio</a>
                    <a href="#contact" className="btn outline">Contact Me</a>
                </div>
            </div>

            <div className="animated-bg"></div>
        </section>
    );
}

export default Homepage;