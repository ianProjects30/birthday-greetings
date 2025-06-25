import { useEffect, useRef, useState } from 'react';
import TypingText from './TypingText';
import './App.css';

function App() {
  const audioRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [showGreeting, setShowGreeting] = useState(false);

  const images = Array.from({ length: 12 }, (_, i) => `/assets/img${i + 1}.jpg`);

  useEffect(() => {
    const playMusic = () => {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked:", err);
      });
    };
    document.addEventListener("click", playMusic);
    return () => document.removeEventListener("click", playMusic);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container">
      <h1>🎉 Happy Birthday! 🎂</h1>

      <audio ref={audioRef} src="/assets/birthday-song.mp3" loop />

      <div className="slideshow">
        <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
        <div className="slide-counter">{currentImage + 1} / {images.length}</div>
      </div>

      <button className="greet-button" onClick={() => setShowGreeting(!showGreeting)}>
        {showGreeting ? "Hide Greeting" : "Show Greeting"}
      </button>

      {showGreeting && (
        <div className="greeting-text">
          <TypingText text="Wishing you joy, love, and laughter on your special day. 🎈 May your birthday be as wonderful as you are! 💖🎁" />
        </div>
      )}
    </div>
  );
}

export default App;
