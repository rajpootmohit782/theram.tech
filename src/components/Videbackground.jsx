import React from "react";

function VideoBackground({ src }) {
  return (
    <video
      autoPlay
      loop
      muted
      className="absolute inset-0 w-full h-full object-cover z-0"
      style={{
        position: "fixed",
        inset: "0",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: "-1", // Ensure the video stays in the background
        opacity: "0.25",
      }}
    >
      <source src="/v1.mp4" type="video/mp4" />
      {/* Add additional source tags for different video formats if necessary */}
    </video>
  );
}

export default VideoBackground;
