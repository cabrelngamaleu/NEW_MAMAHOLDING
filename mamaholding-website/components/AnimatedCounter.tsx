'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import CountUp from 'react-countup'

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
}

export default function AnimatedCounter({
  end,
  duration = 2.5,
  suffix = '',
  prefix = '',
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [shouldStart, setShouldStart] = useState(false)

  useEffect(() => {
    if (isInView) {
      setShouldStart(true)
    }
  }, [isInView])

  return (
    <div ref={ref}>
      {shouldStart && (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          decimals={decimals}
          suffix={suffix}
          prefix={prefix}
          enableScrollSpy={false}
        />
      )}
    </div>
  )
}
