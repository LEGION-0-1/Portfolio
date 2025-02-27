import { useState } from "react";
import "./Projects.css";

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
        title: "3D Portfolio Model",
        image: "/images/3dmodel.png",
        description: "A 3D character model created in Blender.",
        tech: ["Blender", "Three.js"],
        link: "https://your-3d-portfolio-link",
        category: "3D Modeling",
    },
    {
        id: 3,
        title: "Flappy Bird",
        image: "/images/platformer.png",
        description: "A replica of the OG Flappy Bird game",
        tech: ["Unity", "C#"],
        link: "https://github.com/LEGION-0-1/Flappy_Bird",
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