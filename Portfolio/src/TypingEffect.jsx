import { useState, useEffect } from "react";

const TypingEffect = ({ texts, speed = 100, pause = 1000 }) => {
    const [textIndex, setTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        let typingSpeed = speed;

        if (isDeleting) {
            typingSpeed /= 2;
        }

        const timeout = setTimeout(() => {
            setDisplayedText((prev) =>
                isDeleting ? currentText.substring(0, prev.length - 1) : currentText.substring(0, prev.length + 1)
            );

            if (!isDeleting && displayedText === currentText) {
                setTimeout(() => setIsDeleting(true), pause);
            } else if (isDeleting && displayedText === "") {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }
            }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, textIndex, texts, speed, pause]);

    return <span style={{fontSize:'2em'}}>{displayedText}|</span>;
};

export default TypingEffect;