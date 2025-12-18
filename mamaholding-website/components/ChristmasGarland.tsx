'use client'

import { motion } from 'framer-motion'

export default function ChristmasGarland() {
  const lights = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    color: ['#DC143C', '#22C55E', '#FFD700', '#DC143C', '#22C55E'][i % 5], // Rouge, vert, or
    delay: i * 0.15,
  }))

  return (
    <div className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none overflow-hidden">
      {/* Guirlande (fil) */}
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 0 15 Q 50 5, 100 15 T 200 15 T 300 15 T 400 15 T 500 15 T 600 15 T 700 15 T 800 15 T 900 15 T 1000 15 T 1100 15 T 1200 15 T 1300 15 T 1400 15 T 1500 15 T 1600 15 T 1700 15 T 1800 15 T 1900 15 T 2000 15"
          stroke="#2D5016"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Lumières clignotantes */}
      <div className="absolute w-full h-full flex justify-around items-center px-4">
        {lights.map((light) => (
          <motion.div
            key={light.id}
            className="relative"
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 2,
              delay: light.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Ampoule */}
            <div
              className="w-3 h-4 rounded-full shadow-lg"
              style={{
                backgroundColor: light.color,
                boxShadow: `0 0 10px ${light.color}, 0 0 20px ${light.color}`,
              }}
            />
            {/* Fil de connexion */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-2 bg-gray-700" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
