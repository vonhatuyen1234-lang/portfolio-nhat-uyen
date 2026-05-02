import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const StarryNightBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Star properties
    const stars: { x: number; y: number; size: number; glow: number; speed: number; angle: number }[] = [];
    const numStars = 150;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        glow: Math.random() * 10 + 2,
        speed: Math.random() * 0.05 + 0.01,
        angle: Math.random() * Math.PI * 2,
      });
    }

    // Shooting stars
    const shootingStars: { x: number; y: number; len: number; speed: number; opacity: number; active: boolean }[] = [];
    const createShootingStar = () => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.5,
      len: Math.random() * 80 + 50,
      speed: Math.random() * 15 + 10,
      opacity: 1,
      active: true,
    });

    // Swirl circles (Van Gogh vibe)
    const swirls: { x: number; y: number; r: number; color: string; speed: number; phase: number }[] = [];
    const numSwirls = 6;
    for (let i = 0; i < numSwirls; i++) {
      swirls.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.5,
        r: Math.random() * 100 + 50,
        color: `rgba(255, 200, 50, ${Math.random() * 0.15 + 0.05})`,
        speed: Math.random() * 0.01 + 0.005,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw swirls
      swirls.forEach((swirl) => {
        swirl.phase += swirl.speed;
        const currentR = swirl.r + Math.sin(swirl.phase) * 5;
        
        ctx.beginPath();
        ctx.arc(swirl.x, swirl.y, currentR, 0, Math.PI * 2);
        ctx.strokeStyle = swirl.color;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([2, 10]);
        ctx.stroke();
      });
      ctx.setLineDash([]);

      // Draw shooting stars
      if (Math.random() < 0.01 && shootingStars.length < 3) {
        shootingStars.push(createShootingStar());
      }

      shootingStars.forEach((ss, i) => {
        if (!ss.active) return;
        
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(ss.x - ss.len, ss.y + ss.len * 0.5);
        const grad = ctx.createLinearGradient(ss.x, ss.y, ss.x - ss.len, ss.y + ss.len * 0.5);
        grad.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();

        ss.x += ss.speed;
        ss.y -= ss.speed * 0.5;
        ss.opacity -= 0.02;

        if (ss.opacity <= 0) {
          ss.active = false;
          shootingStars.splice(i, 1);
        }
      });

      // Draw stars
      stars.forEach((star) => {
        star.angle += star.speed;
        const opacity = 0.5 + Math.sin(star.angle) * 0.5;

        ctx.shadowBlur = star.glow * opacity;
        ctx.shadowColor = 'rgba(255, 230, 100, 0.8)';
        ctx.fillStyle = `rgba(255, 255, 200, ${opacity})`;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0; // Reset shadow for next star
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://i.postimg.cc/pT7JvdM0/dreamy-night-under-the-beautiful-starry-sky-wallpaper-1680x1050-5.jpg")',
          filter: 'brightness(0.7) contrast(1.1)'
        }}
      />
      
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#040c18] opacity-80" />

      {/* Canvas for supplementary Starry Night effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-40 mix-blend-screen"
      />

      {/* Explicit Falling Stars (Framer Motion) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`falling-star-${i}`}
            initial={{ 
              top: '-10%', 
              right: `${Math.random() * 80 + 10}%`,
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              top: '110%',
              right: `${Math.random() * 20 - 40}%`, // move diagonally
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 2 + 1.5,
              repeat: Infinity,
              delay: Math.random() * 15 + i * 2,
              ease: "linear"
            }}
            className="absolute w-[2px] h-[100px] bg-gradient-to-t from-white to-transparent rotate-[45deg]"
          />
        ))}
      </div>

      {/* Flower Field (Glowing Yellow Dots/Flowers) - keeping this as it was a nice touch in the previous version, or adjust if it looks better without */}
      <div className="absolute bottom-0 left-0 w-full h-[30%] px-10 overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 + Math.random() * 20 }}
            animate={{ 
              opacity: [0.2, 0.6, 0.2],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              borderRadius: '50%',
              backgroundColor: '#fbbf24',
              boxShadow: '0 0 6px #fbbf24',
            }}
          />
        ))}
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)] pointer-events-none" />
    </div>
  );
};

export default StarryNightBackground;
