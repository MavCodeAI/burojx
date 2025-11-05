'use client';

import { useEffect, useRef } from 'react';

export default function NeonLines() {
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

    class NeonLine {
      startX: number;
      startY: number;
      endX: number;
      endY: number;
      color: string;
      speed: number;
      offset: number;
      thickness: number;

      constructor() {
        this.startX = Math.random() * canvas!.width;
        this.startY = Math.random() * canvas!.height;
        this.endX = Math.random() * canvas!.width;
        this.endY = Math.random() * canvas!.height;
        this.color = this.getRandomColor();
        this.speed = Math.random() * 0.5 + 0.2;
        this.offset = Math.random() * 1000;
        this.thickness = Math.random() * 2 + 1;
      }

      getRandomColor() {
        const colors = ['#8b5cf6', '#3b82f6', '#ec4899', '#06b6d4', '#10b981', '#f59e0b'];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update(time: number) {
        const wave = Math.sin(time * this.speed + this.offset) * 50;
        this.endX += wave * 0.01;
        this.endY += wave * 0.01;

        // Keep lines within bounds
        if (this.endX < 0 || this.endX > canvas!.width) {
          this.endX = Math.random() * canvas!.width;
        }
        if (this.endY < 0 || this.endY > canvas!.height) {
          this.endY = Math.random() * canvas!.height;
        }
      }

      draw(ctx: CanvasRenderingContext2D, time: number) {
        const pulse = Math.sin(time * 0.003 + this.offset) * 0.5 + 0.5;
        
        ctx.save();
        
        // Outer glow
        ctx.strokeStyle = this.color + '40';
        ctx.lineWidth = this.thickness + 8;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        
        // Create curved line
        const cpX = (this.startX + this.endX) / 2 + Math.sin(time * 0.001) * 100;
        const cpY = (this.startY + this.endY) / 2 + Math.cos(time * 0.001) * 100;
        ctx.quadraticCurveTo(cpX, cpY, this.endX, this.endY);
        ctx.stroke();

        // Inner bright line
        ctx.strokeStyle = this.color + Math.floor(pulse * 255).toString(16).padStart(2, '0');
        ctx.lineWidth = this.thickness;
        ctx.shadowBlur = 30;
        
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        ctx.quadraticCurveTo(cpX, cpY, this.endX, this.endY);
        ctx.stroke();

        // Brightest core
        ctx.strokeStyle = '#ffffff' + Math.floor(pulse * 200).toString(16).padStart(2, '0');
        ctx.lineWidth = this.thickness * 0.5;
        ctx.shadowBlur = 40;
        
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        ctx.quadraticCurveTo(cpX, cpY, this.endX, this.endY);
        ctx.stroke();

        ctx.restore();
      }
    }

    // Create neon lines
    const lines: NeonLine[] = [];
    for (let i = 0; i < 12; i++) {
      lines.push(new NeonLine());
    }

    const animate = () => {
      // Fade effect instead of clear
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      time += 1;
      
      lines.forEach(line => {
        line.update(time);
        line.draw(ctx, time);
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
      className="fixed inset-0 pointer-events-none opacity-40"
      style={{ zIndex: 1 }}
    />
  );
}
