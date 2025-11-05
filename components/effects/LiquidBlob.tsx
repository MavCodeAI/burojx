'use client';

import { useEffect, useRef } from 'react';

export default function LiquidBlob() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let time = 0;

    class Blob {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      points: number;

      constructor(x: number, y: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.points = 8;
      }

      update(time: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x < this.radius || this.x > canvas!.width - this.radius) {
          this.speedX *= -1;
        }
        if (this.y < this.radius || this.y > canvas!.height - this.radius) {
          this.speedY *= -1;
        }
      }

      draw(ctx: CanvasRenderingContext2D, time: number) {
        ctx.save();
        ctx.translate(this.x, this.y);

        // Create gradient
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.radius);
        gradient.addColorStop(0, this.color + 'ff');
        gradient.addColorStop(0.5, this.color + '80');
        gradient.addColorStop(1, this.color + '00');

        ctx.fillStyle = gradient;

        // Draw organic blob shape
        ctx.beginPath();
        for (let i = 0; i <= this.points; i++) {
          const angle = (i / this.points) * Math.PI * 2;
          const wave = Math.sin(time * 0.002 + i) * 20;
          const radius = this.radius + wave;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            // Use quadratic curves for smooth blob
            const prevAngle = ((i - 1) / this.points) * Math.PI * 2;
            const prevWave = Math.sin(time * 0.002 + (i - 1)) * 20;
            const prevRadius = this.radius + prevWave;
            const prevX = Math.cos(prevAngle) * prevRadius;
            const prevY = Math.sin(prevAngle) * prevRadius;
            
            const cpX = (prevX + x) / 2;
            const cpY = (prevY + y) / 2;
            
            ctx.quadraticCurveTo(prevX, prevY, cpX, cpY);
          }
        }
        ctx.closePath();
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 40;
        ctx.shadowColor = this.color;
        ctx.fill();

        ctx.restore();
      }
    }

    // Create blobs
    const blobs: Blob[] = [
      new Blob(window.innerWidth * 0.2, window.innerHeight * 0.3, 150, '#8b5cf6'),
      new Blob(window.innerWidth * 0.7, window.innerHeight * 0.6, 180, '#3b82f6'),
      new Blob(window.innerWidth * 0.5, window.innerHeight * 0.8, 120, '#ec4899'),
      new Blob(window.innerWidth * 0.8, window.innerHeight * 0.2, 140, '#06b6d4'),
    ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 1;
      
      blobs.forEach(blob => {
        blob.update(time);
        blob.draw(ctx, time);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-20"
      style={{ zIndex: 0 }}
    />
  );
}
