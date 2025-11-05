'use client';

import { motion } from 'framer-motion';

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-20 left-[10%] w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-40 right-[15%] w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
      />

      <motion.div
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-40 left-[20%] w-48 h-48 bg-gradient-to-br from-cyan-500/15 to-purple-500/15 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-20 right-[10%] w-36 h-36 bg-gradient-to-br from-orange-500/15 to-red-500/15 rounded-full blur-2xl"
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"
      />

      <motion.div
        className="absolute top-[30%] right-[25%] w-2 h-2 bg-cyan-400 rounded-full"
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-[60%] left-[30%] w-2 h-2 bg-purple-400 rounded-full"
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-[45%] right-[40%] w-2 h-2 bg-pink-400 rounded-full"
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,217,255,0.03),transparent_50%)]" />
    </div>
  );
}
