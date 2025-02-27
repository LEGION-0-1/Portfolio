import { useState } from "react";
import "./Projects.css";

const projectData = [
    {
        id: 1,
        title: "To-Do-Ro App",
        image: "/images/todoro.png", // Replace with actual image
        description: "A to-do list and Pomodoro timer combined for productivity.",
        tech: ["React", "JavaScript", "CSS"],
        link: "https://github.com/yourusername/todoro",
        category: "Web Dev",
    },
    {
        id: 2,
        title: "3D Portfolio Model",
        image: "/images/3dmodel.png",
        description: "A 3D character model created in Blender.",
        tech: ["Blender", "Three.js"],
        link: "https://your-3d-portfolio-link",
        category: "3D Modeling",
    },
    {
        id: 3,
        title: "Minimalist Platformer Game",
        image: "/images/platformer.png",
        description: "A 2D platformer game built using Phaser.js.",
        tech: ["Phaser.js", "JavaScript"],
        link: "https://your-game-link",
        category: "Game Dev",
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
                {["All", "Web Dev", "Game Dev", "3D Modeling"].map((category) => (
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