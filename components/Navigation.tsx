'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, CloseIcon } from '@/components/icons/CustomIcons';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  const menuItems = [
  { name: 'Work', id: 'portfolio' },
  { name: 'Services', id: 'services' },
  { name: 'About', id: 'about' },
  { name: 'Contact', id: 'contact' }
];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-4">
        <nav className="max-w-4xl mx-auto flex items-center justify-between">
          <span
            className="text-xl font-light text-white cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            BurojX
          </span>

          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <span
                key={item.name}
                onClick={() => scrollToSection(`#${item.id}`)}
                className="text-white font-light text-sm cursor-pointer hover:text-purple-400 transition-colors"
              >
                {item.name}
              </span>
            ))}
          </div>

          <button
            className="md:hidden text-white cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-xl border-l border-white/10"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <span className="text-xl font-light text-white">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white"
                  >
                    <CloseIcon className="w-5 h-5" />
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 p-6">
                  <div className="space-y-6">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span
                          onClick={() => scrollToSection(`#${item.id}`)}
                          className="block text-lg font-light text-white cursor-pointer hover:text-purple-400 transition-colors"
                        >
                          {item.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-white/10">
                  <p className="text-sm text-gray-400">
                    © 2024 BurojX
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
