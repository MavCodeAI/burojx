'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@/components/icons/CustomIcons';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.body.classList.add('bg-white', 'text-gray-900');
      document.body.classList.remove('bg-black', 'text-white');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-black', 'text-white');
      document.body.classList.remove('bg-white', 'text-gray-900');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-black', 'text-white');
      document.body.classList.remove('bg-white', 'text-gray-900');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.add('bg-white', 'text-gray-900');
      document.body.classList.remove('bg-black', 'text-white');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-50 w-14 h-14 backdrop-blur-sm border rounded-full flex items-center justify-center group transition-all duration-300 ${
        isDark 
          ? 'bg-white/10 border-white/20 hover:bg-white/20' 
          : 'bg-gray-100/80 border-gray-300 hover:bg-gray-200/80'
      }`}
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.div
        className="relative w-6 h-6"
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <MoonIcon className="absolute inset-0 text-white" />
        ) : (
          <SunIcon className="absolute inset-0 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
}
