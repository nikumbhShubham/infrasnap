import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timer;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Clear any existing timer when the mouse moves
      clearTimeout(timer);

      // Set a timer to detect when the mouse stops
      timer = setTimeout(() => {
        setIsMoving(false);
      }, 200); // Duration before the cursor is considered "at rest"
    };

    // Add mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener and timer on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: isMoving ? "20px" : "10px", // Size changes based on movement
        height: isMoving ? "20px" : "10px",
        backgroundColor: "black",
        borderRadius: "50%",
        pointerEvents: "none", // Prevent interaction issues
        transform: "translate(-50%, -50%)", // Center the dot on the cursor
        zIndex: 1000,
        transition: "width 0.5s ease, height 0.5s ease, top 0.05s, left 0.05s", // Smooth size transition
      }}
    ></div>
  );
};

export default CustomCursor;
