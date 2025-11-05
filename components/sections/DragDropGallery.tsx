'use client';

import { useState } from 'react';
import { motion, Reorder } from 'framer-motion';

const initialProjects = [
  { id: 1, title: 'Quantum Tech', color: 'from-indigo-600 to-blue-600', image: '🚀' },
  { id: 2, title: 'Luxe Fashion', color: 'from-purple-600 to-pink-600', image: '👗' },
  { id: 3, title: 'Neural AI', color: 'from-emerald-600 to-teal-600', image: '🤖' },
  { id: 4, title: 'Eco Vision', color: 'from-amber-600 to-orange-600', image: '🌱' },
  { id: 5, title: 'Crypto Wallet', color: 'from-blue-600 to-cyan-600', image: '💎' },
  { id: 6, title: 'Food Delivery', color: 'from-red-600 to-pink-600', image: '🍕' },
];

export default function DragDropGallery() {
  const [projects, setProjects] = useState(initialProjects);

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
            Drag & Drop Gallery
          </h2>
          <p className="text-gray-400 text-lg">
            Projects ko drag karke reorder karo
          </p>
        </motion.div>

        <Reorder.Group
          axis="y"
          values={projects}
          onReorder={setProjects}
          className="space-y-4"
        >
          {projects.map((project) => (
            <Reorder.Item
              key={project.id}
              value={project}
              className="cursor-grab active:cursor-grabbing"
            >
              <motion.div
                className={`bg-gradient-to-r ${project.color} p-8 rounded-2xl`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                layout
              >
                <div className="flex items-center gap-6">
                  <div className="text-6xl">{project.image}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/80">
                      Drag to reorder • Click to view details
                    </p>
                  </div>
                  <div className="ml-auto">
                    <svg
                      className="w-6 h-6 text-white/50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </section>
  );
}
