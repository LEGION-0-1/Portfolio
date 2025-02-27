import "./Certifications.css";

const certifications = [
    {
        title: "Front End Development Libraries",
        issuer: "freeCodeCamp",
        date: "Jan 2024",
        link: "https://www.freecodecamp.org/certification/your-profile/front-end-development-libraries",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        title: "Introduction to Prompt Engineering for Generative AI",
        issuer: "LinkedIn",
        date: "Feb 2024",
        link: "https://www.linkedin.com/learning/certification/your-profile",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    },
    {
        title: "Learning Microsoft 365 Copilot",
        issuer: "Microsoft",
        date: "Feb 2024",
        link: "https://www.microsoft.com/learning/certification",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg",
    },
    {
        title: "JavaScript Algorithms and Data Structures (Beta)",
        issuer: "freeCodeCamp",
        date: "Dec 2023",
        link: "https://www.freecodecamp.org/certification/your-profile/javascript-algorithms-and-data-structures",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        title: "Foundational C# with Microsoft",
        issuer: "Microsoft",
        date: "Nov 2023",
        link: "https://www.microsoft.com/learning/certification",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "Oct 2023",
        link: "https://www.freecodecamp.org/certification/your-profile/responsive-web-design",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
];

function Certifications() {
    return (
        <section className="certifications" id="certifications">
            <h2>Certifications</h2>
            <div className="certifications-container">
            {certifications.map((cert, index) => (
                <div key={index} className="cert-card">
                    <img src={cert.logo} alt={`${cert.issuer} Logo`} className="cert-logo" />
                    <div className="cert-info">
                        <h3>{cert.title}</h3>
                        <p>{cert.issuer}</p>
                        <p>{cert.date}</p>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                            View Certificate
                        </a>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
}

export default Certifications;