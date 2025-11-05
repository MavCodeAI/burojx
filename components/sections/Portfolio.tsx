'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon, CloseIcon } from '@/components/icons/CustomIcons';

const projects = [
  {
    title: 'Quantum Tech',
    category: 'Web Development',
    description: 'Futuristic tech platform with 3D interactions',
    longDescription: 'A modern tech platform built with 3D interactions and real-time data visualization.',
    tags: ['React', 'Three.js', 'WebGL', 'Node.js'],
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    gradient: 'bg-gradient-to-br from-indigo-500/30 via-blue-500/30 to-cyan-500/30',
  },
  {
    title: 'Luxe Fashion',
    category: 'Creative Design',
    description: 'High-end e-commerce with immersive experience',
    longDescription: 'An e-commerce platform for a luxury fashion brand that provides exceptional user experience.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion', 'Stripe'],
    color: 'from-purple-600 via-pink-600 to-rose-600',
    gradient: 'bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-rose-500/30',
  },
  {
    title: 'Neural AI',
    category: '3D Experience',
    description: 'AI platform with particle animations',
    longDescription: 'An AI-powered platform that works with particle animations and machine learning.',
    tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
    color: 'from-emerald-600 via-teal-600 to-cyan-600',
    gradient: 'bg-gradient-to-br from-emerald-500/30 via-teal-500/30 to-cyan-500/30',
  },
  {
    title: 'Eco Vision',
    category: 'Brand Strategy',
    description: 'Sustainable brand with organic aesthetics',
    longDescription: 'Complete digital strategy and organic design for an eco-friendly brand.',
    tags: ['Branding', 'UI/UX', 'WordPress', 'SEO'],
    color: 'from-amber-600 via-orange-600 to-red-600',
    gradient: 'bg-gradient-to-br from-amber-500/30 via-orange-500/30 to-red-500/30',
  },
];

const categories = ['All', 'Web Development', 'Creative Design', '3D Experience', 'Brand Strategy'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      
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
              Our Work
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Selected projects that showcase our creative capabilities
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
                onClick={() => setSelectedProject(project)}
              >
                {/* 3D Card Effect */}
                <motion.div
                  className="relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                  whileHover={{ 
                    rotateY: 5,
                    rotateX: 5,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 ${project.gradient} backdrop-blur-sm`} />
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`} />
                  
                  {/* Border */}
                  <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-white/30 transition-colors duration-300" />
                  
                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col justify-between">
                    <div>
                      <motion.div
                        className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-semibold mb-4`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {project.category}
                      </motion.div>
                      
                      <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Hover Arrow */}
                    <motion.div
                      className="absolute bottom-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.2, rotate: 45 }}
                    >
                      <ExternalLinkIcon className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>

                  {/* 3D Floating Elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"
                    animate={{
                      y: [0, -20, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className={`relative max-w-2xl w-full ${selectedProject.gradient} backdrop-blur-xl rounded-2xl p-8 border border-white/20`}
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <CloseIcon className="w-5 h-5 text-white" />
                </button>

                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${selectedProject.color} text-white text-sm font-semibold mb-4`}>
                  {selectedProject.category}
                </div>

                <h3 className="text-4xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.button
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLinkIcon className="w-5 h-5 inline mr-2" />
                    View Project
                  </motion.button>
                  <motion.button
                    className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GithubIcon className="w-5 h-5 inline mr-2" />
                    Code
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
