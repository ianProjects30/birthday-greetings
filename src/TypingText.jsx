import { useEffect, useState } from "react";

const TypingText = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className="typing-text">{displayedText}</p>;
};

export default TypingText;
