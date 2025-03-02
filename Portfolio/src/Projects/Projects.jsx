import { useState } from "react";
import "./Projects.css";
import Hexaped from '../assets/hexaped.png';
import Flappy from '../assets/flappy.png';

const projectData = [
    {
        id: 1,
        title: "To-Do-Ro App",
        image: "/images/todoro.png", // Replace with actual image
        description: "A to-do list and Pomodoro timer combined for productivity.",
        tech: ["React", "JavaScript", "CSS", "HTML"],
        link: "https://github.com/LEGION-0-1/To-Do-Ro",
        category: "Web Dev",
    },
    {
        id: 2,
        title: "Hexaped Rigged Model",
        image: Hexaped,
        description: "A 3D 6 legged model that can be animated as it is completely rigged created in Blender.",
        tech: ["Blender"],
        link: "https://github.com/LEGION-0-1/Blender",
        category: "3D Modeling",
    },
    {
        id: 3,
        title: "Flappy Bird",
        image: Flappy,
        description: "A replica of the OG Flappy Bird game",
        tech: ["Unity", "C#"],
        link: "https://github.com/LEGION-0-1/Flappy_Bird",
        category: "Game Dev",
    },
    {
        id: 4,
        title: "Python AI Assitant",
        image: "/images/todoro.png",
        description: "A command line personal AI assistant to increase productivity and save time.",
        tech: ["Ai", "Python"],
        link: "https://github.com/LEGION-0-1/python-assistant-script",
        category: "AI",
    },
];

function Projects() {
    const [filter, setFilter] = useState("All");

    const filteredProjects =
    filter === "All"
        ? projectData
        : projectData.filter((project) => project.category === filter);

    return (
        <section className="projects" id="projects">
            <h2>My Projects</h2>

            <div className="filters">
                {["All", "Web Dev", "Game Dev", "3D Modeling", "AI"].map((category) => (
                <button
                key={category}
                className={filter === category ? "active" : ""}
                onClick={() => setFilter(category)}
                >
                    {category}
                </button>
                ))}
            </div>

            <div className="projects-container">
                {filteredProjects.map((project) => (
                <div key={project.id} className="project-card">
                    <img src={project.image} alt={project.title} />
                    <div className="project-info">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tech-stack">
                            {project.tech.map((tech, index) => (
                                <span key={index}>{tech}</span>
                            ))}
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;