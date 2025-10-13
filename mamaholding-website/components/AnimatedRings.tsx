'use client'

import { motion } from 'framer-motion'

interface AnimatedRingsProps {
  className?: string
  size?: 'small' | 'medium' | 'large' | 'xl' | '2xl'
  variant?: 'hero' | 'section' | 'floating'
  intensity?: 'subtle' | 'medium' | 'strong'
}

const AnimatedRings = ({ 
  className = '', 
  size = 'large', 
  variant = 'hero',
  intensity = 'medium' 
}: AnimatedRingsProps) => {
  const sizeClasses = {
    small: 'ring-small',
    medium: 'ring-medium', 
    large: 'ring-large',
    xl: 'ring-xl',
    '2xl': 'ring-2xl'
  }

  const opacityClasses = {
    subtle: 'opacity-20',
    medium: 'opacity-40',
    strong: 'opacity-60'
  }

  const shadowClasses = {
    subtle: '',
    medium: 'ring-shadow',
    strong: 'ring-shadow ring-shadow-green'
  }

  if (variant === 'hero') {
    return (
      <div className={`ring-container ${className}`}>
        {/* Anneaux principaux */}
        <motion.div
          className={`ring-red ${sizeClasses[size]} ${opacityClasses[intensity]} ${shadowClasses[intensity]} hidden md:block`}
          style={{
            top: '10%',
            left: '5%',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* Version mobile - anneaux plus petits */}
        <motion.div
          className={`ring-red ring-medium ${opacityClasses[intensity]} ${shadowClasses[intensity]} block md:hidden`}
          style={{
            top: '15%',
            left: '10%',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <motion.div
          className={`ring-green ${sizeClasses[size]} ${opacityClasses[intensity]} ${shadowClasses[intensity]} hidden md:block`}
          style={{
            top: '60%',
            right: '10%',
          }}
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* Version mobile - anneau vert */}
        <motion.div
          className={`ring-green ring-medium ${opacityClasses[intensity]} ${shadowClasses[intensity]} block md:hidden`}
          style={{
            top: '65%',
            right: '15%',
          }}
          animate={{
            rotate: [360, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        <motion.div
          className={`ring-white ${sizeClasses[size]} ${opacityClasses[intensity]} ring-shadow-white hidden md:block`}
          style={{
            top: '30%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Version mobile - anneau blanc */}
        <motion.div
          className={`ring-white ring-small ${opacityClasses[intensity]} ring-shadow-white block md:hidden`}
          style={{
            top: '40%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Anneaux flottants plus petits - Desktop seulement */}
        <motion.div
          className={`ring-red ring-medium ${opacityClasses[intensity]} hidden md:block`}
          style={{
            top: '20%',
            right: '20%',
          }}
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className={`ring-green ring-medium ${opacityClasses[intensity]} hidden md:block`}
          style={{
            bottom: '20%',
            left: '20%',
          }}
          animate={{
            y: [10, -10, 10],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Particules autour des anneaux - Desktop seulement */}
        <div className="ring-particles hidden md:block">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="ring-particle"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${30 + (i * 5)}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 6 + (i * 0.5),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
        </div>
        
        {/* Particules mobiles - version simplifiée */}
        <div className="ring-particles block md:hidden">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="ring-particle"
              style={{
                left: `${25 + (i * 15)}%`,
                top: `${40 + (i * 10)}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 8 + (i * 0.5),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  if (variant === 'section') {
    return (
      <div className={`ring-container ${className}`}>
        <motion.div
          className={`ring-red ${sizeClasses[size]} ${opacityClasses[intensity]}`}
          style={{
            top: '50%',
            left: '10%',
            transform: 'translateY(-50%)',
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className={`ring-green ${sizeClasses[size]} ${opacityClasses[intensity]}`}
          style={{
            top: '50%',
            right: '10%',
            transform: 'translateY(-50%)',
          }}
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    )
  }

  if (variant === 'floating') {
    return (
      <div className={`ring-container ${className}`}>
        <motion.div
          className={`ring-red ring-floating ${sizeClasses[size]} ${opacityClasses[intensity]}`}
          style={{
            top: '20%',
            left: '30%',
          }}
        />
        
        <motion.div
          className={`ring-green ring-floating ${sizeClasses[size]} ${opacityClasses[intensity]}`}
          style={{
            top: '60%',
            right: '30%',
          }}
          animate={{
            animationDelay: '2s'
          }}
        />

        <motion.div
          className={`ring-white ring-floating ring-medium ${opacityClasses[intensity]}`}
          style={{
            top: '40%',
            left: '60%',
          }}
          animate={{
            animationDelay: '4s'
          }}
        />
      </div>
    )
  }

  return null
}

export default AnimatedRings
