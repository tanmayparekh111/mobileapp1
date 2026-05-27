import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const letters = ["X", "u", "t", "r", "a"];

  return (
    <div className="splash-screen">
      <div className="glow glow-left" />
      <div className="glow glow-right" />

      <div className="logo-container">
        <div className="logo-icon">
          X
        </div>

        <div className="brand-wrapper">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`letter ${
                index === 0 ? "pink-letter" : ""
              }`}
              style={{
                animationDelay: `${index * .08}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        <p className="tagline">
          Crafted with elegance
        </p>
      </div>
    </div>
  );
}

export default SplashPage;