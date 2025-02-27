import { useState } from "react";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        setTimeout(() => {
            setStatus("Message Sent! ✅");
            setFormData({ name: "", email: "", message: "" });
            }, 1500);
    };

    return (
        <section className="contact" id="contact">
            <h2>Contact Me</h2>

            <div className="contact-container">
                <form onSubmit={handleSubmit} className="contact-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Send Message</button>
                    <p className="status">{status}</p>
                </form>

                <div className="contact-info">
                    <p>📧 <a href="mailto:the.dilpreet.1@gmail.com">Dilpreet Singh</a></p>
                    <div className="socials">
                        <a href="https://github.com/LEGION-0-1" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/dilpreet-singh--/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;