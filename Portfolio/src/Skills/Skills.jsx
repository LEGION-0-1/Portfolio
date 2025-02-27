import "./Skills.css";

const skills = [
        {
            category: "Web Development",
            skills: [
                { name: "HTML", icon: "🔥", level: "Advanced" },
                { name: "CSS", icon: "🎨", level: "Advanced" },
                { name: "JavaScript", icon: "⚡", level: "Intermediate" },
                { name: "React", icon: "⚛️", level: "Intermediate" },
            ],
        },
        {
            category: "Game Development",
            skills: [
                { name: "Phaser.js", icon: "🎮", level: "Beginner" },
                { name: "JavaScript", icon: "⚡", level: "Intermediate" },
            ],
        },
        {
            category: "3D Modeling",
            skills: [
                { name: "Blender", icon: "🛠️", level: "Intermediate" },
                { name: "Three.js", icon: "🌐", level: "Beginner" },
            ],
        },
    ];

function Skills() {
    return (
        <section className="skills" id="skills">
            <h2>My Skills</h2>

            <div className="skills-container">
                {skills.map((skillCategory, index) => (
                <div key={index} className="skill-category">
                    <h3>{skillCategory.category}</h3>
                    <ul>
                        {skillCategory.skills.map((skill, i) => (
                        <li key={i}>
                            <span className="icon">{skill.icon}</span> {skill.name}
                            <span className={`level ${skill.level.toLowerCase()}`}>
                        {skill.level}
                            </span>
                        </li>
                        ))}
                    </ul>
                </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;