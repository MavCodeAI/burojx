'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HolographicEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
      {/* Holographic Grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%),
            linear-gradient(0deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)
          `,
          backgroundSize: '50px 50px',
          transform: `perspective(500px) rotateX(60deg) translateZ(-100px)`,
        }}
        animate={{
          backgroundPosition: [`0px 0px`, `50px 50px`],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Scanning Lines */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 92, 246, 0.03) 2px, rgba(139, 92, 246, 0.03) 4px)',
        }}
        animate={{
          y: ['-100%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Holographic Circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border-2"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            width: `${150 + i * 50}px`,
            height: `${150 + i * 50}px`,
            borderColor: `rgba(${139 + i * 20}, ${92 - i * 10}, 246, 0.2)`,
            boxShadow: `0 0 ${20 + i * 10}px rgba(139, 92, 246, 0.3)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Glitch Effect Lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`glitch-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{
            left: 0,
            right: 0,
            top: `${20 + i * 30}%`,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 2,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating Holographic Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `rgba(${139 + Math.random() * 100}, ${92 + Math.random() * 100}, 246, 0.6)`,
            boxShadow: '0 0 10px currentColor',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Mouse-following Holographic Beam */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Corner Brackets (Holographic UI) */}
      {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((position) => (
        <motion.div
          key={position}
          className={`absolute w-20 h-20 ${position}`}
          style={{
            [position.includes('top') ? 'top' : 'bottom']: '20px',
            [position.includes('left') ? 'left' : 'right']: '20px',
            borderTop: position.includes('top') ? '2px solid rgba(139, 92, 246, 0.5)' : 'none',
            borderBottom: position.includes('bottom') ? '2px solid rgba(139, 92, 246, 0.5)' : 'none',
            borderLeft: position.includes('left') ? '2px solid rgba(139, 92, 246, 0.5)' : 'none',
            borderRight: position.includes('right') ? '2px solid rgba(139, 92, 246, 0.5)' : 'none',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
