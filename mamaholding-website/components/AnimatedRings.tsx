'use client'

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
    subtle: 'opacity-10',
    medium: 'opacity-20',
    strong: 'opacity-30'
  }

  if (variant === 'hero') {
    return (
      <div className={`ring-container ${className}`}>
        <div
          className={`ring-red ${sizeClasses[size]} ${opacityClasses[intensity]} hidden md:block animate-spin-slow`}
          style={{
            top: '10%',
            left: '5%',
          }}
        />
        
        <div
          className={`ring-green ${sizeClasses[size]} ${opacityClasses[intensity]} hidden md:block animate-spin-reverse`}
          style={{
            top: '60%',
            right: '10%',
          }}
        />
      </div>
    )
  }

  if (variant === 'section') {
    return (
      <div className={`ring-container ${className}`}>
        <div
          className={`ring-red ${sizeClasses[size]} ${opacityClasses[intensity]} animate-spin-slow`}
          style={{
            top: '50%',
            left: '10%',
            transform: 'translateY(-50%)',
          }}
        />
        
        <div
          className={`ring-green ${sizeClasses[size]} ${opacityClasses[intensity]} animate-spin-reverse`}
          style={{
            top: '50%',
            right: '10%',
            transform: 'translateY(-50%)',
          }}
        />
      </div>
    )
  }

  if (variant === 'floating') {
    return (
      <div className={`ring-container ${className}`}>
        <div
          className={`ring-red ring-floating ${sizeClasses[size]} ${opacityClasses[intensity]}`}
          style={{
            top: '20%',
            left: '30%',
          }}
        />
        
        <div
          className={`ring-green ring-floating ${sizeClasses[size]} ${opacityClasses[intensity]}`}
          style={{
            top: '60%',
            right: '30%',
          }}
        />
      </div>
    )
  }

  return null
}

export default AnimatedRings
