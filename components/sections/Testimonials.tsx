'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuoteIcon, StarIcon, ArrowLeftIcon, ArrowRightIcon } from '@/components/icons/CustomIcons';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content: 'BurojX transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations.',
    rating: 5,
    avatar: 'SJ',
    color: 'from-violet-600 via-purple-600 to-indigo-600',
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager, InnovateCo',
    content: 'Working with BurojX was a game-changer for our product. They delivered exceptional results on time and within budget.',
    rating: 5,
    avatar: 'MC',
    color: 'from-blue-600 via-cyan-600 to-teal-600',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, CreativeHub',
    content: 'The team at BurojX brought our vision to life with stunning design and flawless execution. Highly recommended!',
    rating: 5,
    avatar: 'ER',
    color: 'from-emerald-600 via-green-600 to-teal-600',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-8">
                <QuoteIcon />
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed mb-8 text-center">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${testimonials[currentIndex].color} flex items-center justify-center text-white font-bold text-xl`}>
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeftIcon />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRightIcon />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
