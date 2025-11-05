'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function RotatingShapes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let rotation = 0;

    // 3D Shape class
    class Shape3D {
      x: number;
      y: number;
      size: number;
      rotationSpeed: number;
      color: string;
      type: 'cube' | 'pyramid' | 'sphere';

      constructor(x: number, y: number, size: number, type: 'cube' | 'pyramid' | 'sphere', color: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.rotationSpeed = Math.random() * 0.02 + 0.01;
        this.color = color;
        this.type = type;
      }

      draw(ctx: CanvasRenderingContext2D, rotation: number) {
        ctx.save();
        ctx.translate(this.x, this.y);

        if (this.type === 'cube') {
          this.drawCube(ctx, rotation);
        } else if (this.type === 'pyramid') {
          this.drawPyramid(ctx, rotation);
        } else {
          this.drawSphere(ctx, rotation);
        }

        ctx.restore();
      }

      drawCube(ctx: CanvasRenderingContext2D, rotation: number) {
        const angle = rotation * this.rotationSpeed;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);

        // Front face
        ctx.fillStyle = this.color + '40';
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.moveTo(-this.size * cos, -this.size);
        ctx.lineTo(this.size * cos, -this.size);
        ctx.lineTo(this.size * cos, this.size);
        ctx.lineTo(-this.size * cos, this.size);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Top face
        ctx.fillStyle = this.color + '20';
        ctx.beginPath();
        ctx.moveTo(-this.size * cos, -this.size);
        ctx.lineTo(0, -this.size - this.size * sin);
        ctx.lineTo(this.size * cos, -this.size);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }

      drawPyramid(ctx: CanvasRenderingContext2D, rotation: number) {
        const angle = rotation * this.rotationSpeed;
        const cos = Math.cos(angle);

        ctx.fillStyle = this.color + '40';
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(0, -this.size * 1.5);
        ctx.lineTo(-this.size * cos, this.size);
        ctx.lineTo(this.size * cos, this.size);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }

      drawSphere(ctx: CanvasRenderingContext2D, rotation: number) {
        const angle = rotation * this.rotationSpeed;
        
        // Create gradient for 3D effect
        const gradient = ctx.createRadialGradient(
          -this.size * 0.3, -this.size * 0.3, 0,
          0, 0, this.size
        );
        gradient.addColorStop(0, this.color + 'ff');
        gradient.addColorStop(1, this.color + '20');

        ctx.fillStyle = gradient;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Add rotating line for 3D effect
        ctx.strokeStyle = this.color + '80';
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size, this.size * 0.3, angle, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    // Create shapes
    const shapes: Shape3D[] = [
      new Shape3D(window.innerWidth * 0.2, window.innerHeight * 0.3, 60, 'cube', '#8b5cf6'),
      new Shape3D(window.innerWidth * 0.8, window.innerHeight * 0.2, 50, 'pyramid', '#3b82f6'),
      new Shape3D(window.innerWidth * 0.7, window.innerHeight * 0.7, 70, 'sphere', '#06b6d4'),
      new Shape3D(window.innerWidth * 0.3, window.innerHeight * 0.8, 55, 'cube', '#ec4899'),
      new Shape3D(window.innerWidth * 0.5, window.innerHeight * 0.5, 45, 'pyramid', '#10b981'),
    ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      rotation += 0.01;
      
      shapes.forEach(shape => {
        shape.draw(ctx, rotation);
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
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 1 }}
    />
  );
}
