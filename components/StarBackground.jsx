"use client";
import { useEffect, useRef } from "react";

export default function StarBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();

    // Create stars with depth-based parallax
    const createStar = (resetY = false) => {
      // Size determines depth: larger = closer = faster & brighter
      const size = Math.random() * 2 + 0.5; 
      return {
        x: Math.random() * canvas.width,
        y: resetY ? -10 : Math.random() * canvas.height, // -10 starts them just off top edge
        size: size,
        // Base falling speed scaled by size to create parallax depth
        speed: (size * 0.8) + (Math.random() * 0.5), 
        opacity: (size / 2.5) * 0.8 + 0.2, // Larger stars are slightly brighter
        isShooting: Math.random() > 0.98 // 2% chance for a fast "shooting" star
      };
    };

    let stars = Array.from({ length: 150 }).map(() => createStar(false));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        // Smoothly move stars downward
        let currentSpeed = star.isShooting ? star.speed * 6 : star.speed;
        star.y += currentSpeed;

        // Reset if off screen at the bottom
        if (star.y > canvas.height + 20) {
          Object.assign(star, createStar(true));
        }

        ctx.beginPath();
        // Modern crisp cyan/light-blue
        const rgb = { r: 100, g: 210, b: 255 }; 
        
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${star.opacity})`;
        
        if (star.isShooting) {
            // Draw a distinct long streak for shooting stars
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(star.x, star.y - currentSpeed * 3);
            ctx.lineWidth = star.size * 0.8;
            ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${star.opacity})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`;
            ctx.stroke();
        } else {
            // Standard falling star - draw as a tiny vertical line to simulate motion blur!
            // This is the key to making movement feel incredibly "smooth" instead of choppy points
            const tailLength = currentSpeed * 2.5; 
            
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(star.x, star.y - tailLength);
            ctx.lineWidth = star.size;
            ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${star.opacity})`;
            ctx.lineCap = "round";
            
            // Subtle glow for closer objects
            if (star.size > 1.5) {
              ctx.shadowBlur = 6;
              ctx.shadowColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8)`;
            } else {
              ctx.shadowBlur = 0;
            }
            ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", setCanvasSize);
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[-1] opacity-70"
    />
  );
}
