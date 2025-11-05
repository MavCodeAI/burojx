'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CodeIcon, DesignIcon, StrategyIcon, ExperienceIcon, CheckIcon } from '@/components/icons/CustomIcons';

const services = [
  {
    title: 'Development',
    description: 'Modern web applications and mobile solutions',
    icon: CodeIcon,
    features: ['React/Next.js', 'TypeScript', 'Node.js', 'Mobile Apps'],
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    delay: 0,
  },
  {
    title: 'Design',
    description: 'Beautiful and intuitive interfaces',
    icon: DesignIcon,
    features: ['UI/UX Design', 'Prototyping', 'Brand Identity', 'Design Systems'],
    color: 'from-purple-600 via-pink-600 to-rose-600',
    delay: 0.1,
  },
  {
    title: 'Strategy',
    description: 'Data-driven digital strategies',
    icon: StrategyIcon,
    features: ['Market Research', 'Digital Planning', 'Growth Strategy', 'Analytics'],
    color: 'from-amber-600 via-orange-600 to-red-600',
    delay: 0.2,
  },
  {
    title: 'Experience',
    description: 'Exceptional user experiences',
    icon: ExperienceIcon,
    features: ['User Research', 'Journey Mapping', 'A/B Testing', 'Performance'],
    color: 'from-emerald-600 via-teal-600 to-cyan-600',
    delay: 0.3,
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions that drive your business forward
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: service.delay }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* 3D Card Container */}
                <motion.div
                  className="relative h-full"
                  whileHover={{
                    rotateY: 5,
                    rotateX: 5,
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl`}
                    animate={{
                      opacity: hoveredIndex === index ? 0.4 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Card */}
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <motion.div
                      className="space-y-2 mb-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        height: hoveredIndex === index ? 'auto' : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </motion.div>

                    {/* Learn More */}
                    <motion.div
                      className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white font-semibold text-lg">
              Ready to start your project?
            </span>
            <ArrowRight className="w-5 h-5 text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
