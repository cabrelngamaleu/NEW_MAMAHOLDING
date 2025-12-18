'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Snowflake {
  id: number
  x: number
  size: number
  duration: number
  delay: number
}

export default function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    const flakes: Snowflake[] = []
    const flakeCount = 25 // Nombre de flocons optimisé

    for (let i = 0; i < flakeCount; i++) {
      flakes.push({
        id: i,
        x: Math.random() * 100, // Position X en pourcentage
        size: Math.random() * 3 + 2, // Taille entre 2 et 5px
        duration: Math.random() * 10 + 15, // Durée entre 15 et 25 secondes
        delay: Math.random() * 5, // Délai entre 0 et 5 secondes
      })
    }

    setSnowflakes(flakes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute bg-white rounded-full opacity-70"
          style={{
            left: `${flake.x}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            top: '-10px',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(flake.id) * 50, 0],
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
