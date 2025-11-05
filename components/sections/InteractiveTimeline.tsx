'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const timelineData = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'BurojX ki shuruaat hui innovative ideas ke saath',
    icon: '🚀',
    color: 'from-purple-600 to-blue-600',
  },
  {
    year: '2021',
    title: 'First Major Project',
    description: 'Pehla bara project successfully deliver kiya',
    icon: '🎯',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    year: '2022',
    title: 'Team Expansion',
    description: 'Team ko 20+ talented members ke saath expand kiya',
    icon: '👥',
    color: 'from-cyan-600 to-teal-600',
  },
  {
    year: '2023',
    title: 'International Clients',
    description: 'Global clients ke saath kaam shuru kiya',
    icon: '🌍',
    color: 'from-teal-600 to-green-600',
  },
  {
    year: '2024',
    title: 'Industry Recognition',
    description: 'Multiple awards aur recognition mili',
    icon: '🏆',
    color: 'from-green-600 to-emerald-600',
  },
];

export default function InteractiveTimeline() {
  const [selectedYear, setSelectedYear] = useState(0);

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Our Journey
          </h2>
          <p className="text-gray-400 text-lg">
            Hamari kahani, saal dar saal
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 via-cyan-600 to-green-600" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <motion.div
                  className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedYear(index)}
                >
                  <div
                    className={`inline-block p-6 rounded-2xl bg-gradient-to-r ${item.color} cursor-pointer`}
                  >
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/80">{item.description}</p>
                  </div>
                </motion.div>

                {/* Year Badge */}
                <motion.div
                  className={`relative z-10 w-20 h-20 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center cursor-pointer`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  onClick={() => setSelectedYear(index)}
                  animate={{
                    scale: selectedYear === index ? 1.3 : 1,
                    boxShadow:
                      selectedYear === index
                        ? '0 0 30px rgba(139, 92, 246, 0.8)'
                        : '0 0 0px rgba(139, 92, 246, 0)',
                  }}
                >
                  <span className="text-white font-bold text-lg">
                    {item.year}
                  </span>
                </motion.div>

                {/* Spacer */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Selected Year Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-16 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
          >
            <div className="text-center">
              <div className="text-6xl mb-4">{timelineData[selectedYear].icon}</div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {timelineData[selectedYear].year} - {timelineData[selectedYear].title}
              </h3>
              <p className="text-gray-300 text-lg">
                {timelineData[selectedYear].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
