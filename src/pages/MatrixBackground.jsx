import React, { useRef, useEffect } from "react";

function MatrixBackground() {
  const canvasRef = useRef(null);
  const animationFrameIdRef = useRef(null);

  useEffect(() => {
    // 1. Setup the canvas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 2. Define the characters and initial config
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*(){}[]<>?/~";
    const charsArray = characters.split("");

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);

    // Each column has a 'drop' - a y-coordinate to draw the next character
    const drops = Array(columns).fill(1);

    // 3. Draw function (called each frame)
    function draw() {
      // Black out the canvas with a slight opacity to create the fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set the code color and font
      ctx.fillStyle = "#0f0"; // Green matrix color
      ctx.font = `${fontSize}px monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const text = charsArray[Math.floor(Math.random() * charsArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Send the drop back to the top occasionally after it reaches the bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      // Queue up the next animation frame
      animationFrameIdRef.current = requestAnimationFrame(draw);
    }

    // Start the animation
    draw();

    // 4. Handle resizing
    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", handleResize);

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  // 5. Return the canvas positioned behind other elements
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none", // So it doesn't block clicks on elements above it
        backgroundColor: "#000", // Fallback background
      }}
    />
  );
}

export default MatrixBackground;
