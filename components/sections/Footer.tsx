'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Mail, href: '#', label: 'Email' },
];

const footerLinks = {
  Services: ['Web Development', 'Creative Design', 'Brand Strategy', '3D Experiences'],
  Company: ['About Us', 'Our Work', 'Careers', 'Contact'],
  Resources: ['Blog', 'Case Studies', 'Documentation', 'Support'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'],
};

export default function Footer() {
  return (
    <footer className="relative bg-black pt-20 pb-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold gradient-text glow-effect mb-4">
                BurojX
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Creative Web Experiences That Breathe. Building the future of digital interactions.
              </p>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-900"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} BurojX. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors duration-300">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors duration-300">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>

          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="mt-8 text-center"
          >
            <p className="text-xs text-gray-600 tracking-widest">
              CRAFTED WITH PASSION & PRECISION
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
      />
    </footer>
  );
}
