import React, { useEffect, useRef, useState } from 'react';

const SnowEffect = () => {
  const canvasRef = useRef(null);
  const [isStarting, setIsStarting] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakes = [];
    const maxFlakes = 250; // More snowflakes for winter effect

    // Breeze effect variables
    let breezeStrength = 0;
    let breezeDirection = 0; // -1 to 1, left to right
    let breezePhase = 0;
    let startTime = Date.now();
    const breezeDuration = 3000; // 3 seconds of strong breeze at start

    class Snowflake {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * -1; // Start above screen
        this.size = Math.random() * 5 + 2;
        this.speed = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.9 + 0.5;
        this.wind = Math.random() * 0.8 - 0.4;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 2 - 1;
        this.originalWind = this.wind;
      }

      update(breezeForce = 0, breezeDir = 0) {
        // Apply breeze effect (stronger at start)
        const currentBreeze = breezeForce * breezeDir;
        this.y += this.speed;
        this.x += this.originalWind + Math.sin(this.y * 0.01) * 1 + currentBreeze;
        this.rotation += this.rotationSpeed + (breezeForce * 0.5); // Rotate more with breeze

        // Reset if snowflake goes off screen
        if (this.y > canvas.height + 10) {
          this.y = -10;
          this.x = Math.random() * canvas.width;
        }
        if (this.x > canvas.width + 10) {
          this.x = -10;
        } else if (this.x < -10) {
          this.x = canvas.width + 10;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);

        // Draw snowflake pattern
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          ctx.moveTo(0, 0);
          ctx.lineTo(this.size, 0);
          ctx.moveTo(0, 0);
          ctx.lineTo(-this.size * 0.6, 0);
          ctx.rotate((Math.PI * 2) / 6);
        }
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.closePath();

        // Center circle
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
        ctx.closePath();

        ctx.restore();

        // Sparkle effect for some flakes
        if (Math.random() > 0.95) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 230, 255, ${this.opacity * 0.3})`;
          ctx.fill();
          ctx.closePath();
        }
      }
    }

    // Initialize snowflakes
    for (let i = 0; i < maxFlakes; i++) {
      snowflakes.push(new Snowflake());
    }

    let animationId;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;

      // Calculate breeze effect - strong at start, then gradually fades
      if (elapsed < breezeDuration) {
        // Strong breeze at the beginning (3 seconds)
        const progress = elapsed / breezeDuration;
        breezeStrength = 3 * (1 - progress); // Start at 3, fade to 0
        breezePhase += 0.02;
        breezeDirection = Math.sin(breezePhase) * 0.7 + Math.cos(breezePhase * 0.7) * 0.3; // Natural wind pattern
      } else {
        // Gentle ongoing breeze after initial effect
        breezePhase += 0.005;
        breezeStrength = 0.5; // Gentle ongoing breeze
        breezeDirection = Math.sin(breezePhase) * 0.3;
        if (isStarting) {
          setIsStarting(false);
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw wind trails during breeze
      if (breezeStrength > 1 && elapsed < breezeDuration) {
        ctx.save();
        ctx.globalAlpha = 0.1;
        snowflakes.forEach((flake) => {
          if (Math.random() > 0.7) {
            ctx.beginPath();
            ctx.moveTo(flake.x, flake.y);
            ctx.lineTo(flake.x - breezeDirection * 20, flake.y - 10);
            ctx.strokeStyle = 'rgba(200, 220, 255, 0.3)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
        ctx.restore();
      }

      snowflakes.forEach((flake) => {
        flake.update(breezeStrength, breezeDirection);
        flake.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isStarting]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      style={{ background: 'transparent' }}
    />
  );
};

export default SnowEffect;