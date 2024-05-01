import React, { useState, useEffect } from "react";

function ColorChangingHeader() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ["rgb(251,82,114)", "rgb(150,130,215)", "rgb(100,192,183)"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const transitionDuration = 1; // in seconds

  return (
    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white text-center">
      <span
        style={{
          color: colors[currentColorIndex],
          transition: `color ${transitionDuration}s ease`,
        }}
      >
        Building
      </span>{" "}
      <span
        style={{
          color: colors[(currentColorIndex + 1) % colors.length],
          transition: `color ${transitionDuration}s ease ${transitionDuration}s`,
        }}
      >
        Digital
      </span>{" "}
      <span
        style={{
          color: colors[(currentColorIndex + 2) % colors.length],
          transition: `color ${transitionDuration}s ease ${transitionDuration}s`,
        }}
      >
        Brands.
      </span>
    </h1>
  );
}

export default ColorChangingHeader;
