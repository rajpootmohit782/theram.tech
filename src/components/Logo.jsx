import React, { useState, useEffect } from "react";

const Logo = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((currentColorIndex) => (currentColorIndex + 1) % 3);
    }, 5000); // Change color every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const colors = ["rgb(251,82,114)", "rgb(150,130,215)", "rgb(100,192,183)"];

  // Determine the font size based on the screen width
  const getFontSize = (letter) => {
    if (letter === "R") {
      return "2rem"; // Larger font size for "R"
    } else {
      return "1rem"; // Default font size for other letters
    }
  };

  return (
    <span
      className="self-center font-bold whitespace-nowrap"
      style={{
        fontFamily: "Arial, sans-serif", // Replace with Ray-Ban font family
        background: `linear-gradient(to right, ${colors[0]}, ${colors[1]}, ${colors[2]})`,
        WebkitBackgroundClip: "text",
        color: "transparent",
        padding: "0.5rem",
        borderRadius: "0.2rem",
        fontWeight: "bold",
        transition: "background 1s",
      }}
    >
      {["R", "A", "M", "T", "E", "C", "H"].map((letter, index) => (
        <span key={index} style={{ fontSize: getFontSize(letter) }}>
          {letter}
        </span>
      ))}
    </span>
  );
};

export default Logo;
