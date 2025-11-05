'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* 3D Background Effect */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), 
                         radial-gradient(circle at ${50 - mousePosition.x * 15}% ${50 - mousePosition.y * 15}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
          }}
        />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `perspective(500px) rotateX(60deg) translateZ(-100px) translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          }} />
        </div>

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
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
      </div>

      <motion.div 
        className="text-center max-w-4xl relative z-10"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className="text-7xl md:text-9xl font-black text-white mb-6 tracking-tight font-display uppercase" 
            style={{
              textShadow: '0 0 80px rgba(147, 51, 234, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
              background: 'linear-gradient(to right, #fff, #a78bfa, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'var(--font-bebas-neue)',
            }} 
            animate={{
              textShadow: [
                '0 0 80px rgba(147, 51, 234, 0.5)',
                '0 0 100px rgba(147, 51, 234, 0.8)',
                '0 0 80px rgba(147, 51, 234, 0.5)',
              ],
            }} 
            transition={{ duration: 2, repeat: Infinity }}
          >
            BUROJX
          </motion.h1>

          <motion.div
            className="text-2xl md:text-4xl text-gray-300 mb-4 font-light tracking-wide"
            style={{ fontFamily: 'var(--font-poppins)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Digital Experiences That Matter
          </motion.div>

          <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-inter)' }}>
            We create amazing digital experiences with modern technology and creative design
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <motion.button
            onClick={() => scrollToSection('#contact')}
            className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-lg font-semibold overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 font-semibold" style={{ fontFamily: 'var(--font-poppins)' }}>Get Started</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('#portfolio')}
            className="group relative px-10 py-4 border-2 border-white/20 text-white rounded-full text-lg font-semibold backdrop-blur-sm overflow-hidden hover:border-white/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 font-semibold" style={{ fontFamily: 'var(--font-poppins)' }}>View Our Work</span>
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-3 bg-white/50 rounded-full"
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
