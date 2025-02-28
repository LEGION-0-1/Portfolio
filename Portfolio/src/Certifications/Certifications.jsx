import "./Certifications.css";

const certifications = [
    {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "July 2024",
        link: "https://freecodecamp.org/certification/Dilpreet_LEGION/responsive-web-design",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png",
    },
    {
        title: "Foundational C# with Microsoft",
        issuer: "freeCodeCamp/Microsoft",
        date: "July 2024",
        link: "https://www.freecodecamp.org/certification/Dilpreet_LEGION/foundational-c-sharp-with-microsoft",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
        title: "JavaScript Algorithms and Data Structures (Beta)",
        issuer: "freeCodeCamp",
        date: "Sep 2024",
        link: "https://freecodecamp.org/certification/Dilpreet_LEGION/javascript-algorithms-and-data-structures-v8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
        title: "Python (Basic)",
        issuer: "HackerRank",
        date: "Oct 2024",
        link: "https://www.hackerrank.com/certificates/iframe/fed495095130",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
        title: "Learning Microsoft 365 Copilot",
        issuer: "Microsoft",
        date: "Oct 2024",
        link: "https://www.linkedin.com/learning/certificates/07a6808835e395c08abb105b2d153c34e417d5fba2fc5f66da82e79250bceaba",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
        title: "Java (Basic)",
        issuer: "HackerRank",
        date: "Oct 2024",
        link: "https://www.hackerrank.com/certificates/iframe/c91bec9e7f2f",
        logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    },
    {
        title: "Introduction to Prompt Engineering for Generative AI",
        issuer: "LinkedIn",
        date: "Feb 2024",
        link: "https://www.linkedin.com/learning/certificates/26412bdf66cf7e06948e8d5f32c702aaa3d17e66916323fae31bffe581b54572",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    },
    {
        title: "Front End Development Libraries",
        issuer: "freeCodeCamp",
        date: "Jan 2025",
        link: "https://freecodecamp.org/certification/Dilpreet_LEGION/front-end-development-libraries",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
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