import './CodolioCard.css'

function CodolioCard() {
    return (
        <section className="codolio">
            <h2>My Codolio Profile</h2>
            <iframe
                src="https://codolio.com/profile/LEGION/card"
                width="100%"
                height="500px"
                style={{
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
                loading="lazy"
            ></iframe>
            <p>
                View my full profile on{" "}
            <a
                href="https://codolio.com/profile/LEGION"
                target="_blank"
                rel="noopener noreferrer"
            >
                Codolio
            </a>
        </p>
    </section>
    );
}

export default CodolioCard;