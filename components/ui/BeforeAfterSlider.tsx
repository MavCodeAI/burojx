'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeLabel = 'Before',
  afterLabel = 'After',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging && e.type !== 'click') return;

    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Before & After
          </h2>
          <p className="text-gray-400 text-lg">
            Slider ko drag karke difference dekho
          </p>
        </motion.div>

        <div
          className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none"
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseMove={handleMove}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleMove}
          onClick={handleMove}
        >
          {/* Before Image */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-4">📱</div>
              <p className="text-white text-2xl font-bold">{beforeLabel}</p>
              <p className="text-gray-400">Old Design</p>
            </div>
          </div>

          {/* After Image */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <div className="text-center">
              <div className="text-8xl mb-4">✨</div>
              <p className="text-white text-2xl font-bold">{afterLabel}</p>
              <p className="text-white/80">New Design</p>
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </motion.div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full">
            <span className="text-white font-semibold">{beforeLabel}</span>
          </div>
          <div className="absolute top-4 right-4 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full">
            <span className="text-white font-semibold">{afterLabel}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
