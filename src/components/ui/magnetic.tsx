"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface MagneticProps {
  children: React.ReactElement
  range?: number // distance in pixels to trigger magnetic pull
  actionScale?: number // scale effect on hover/active
}

export function Magnetic({ children, range = 60, actionScale = 1.05 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Spring configuration for silky smooth movement
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    
    // Element center coordinates
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    // Distance from cursor to center
    const distanceX = clientX - centerX
    const distanceY = clientY - centerY
    const distance = Math.hypot(distanceX, distanceY)
    
    if (distance < range) {
      // Pull strength decreases as distance increases
      const strength = (range - distance) / range
      x.set(distanceX * strength * 0.4)
      y.set(distanceY * strength * 0.4)
    } else {
      x.set(0)
      y.set(0)
    }
  }
  
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: actionScale }}
      whileTap={{ scale: 0.95 }}
      className="inline-block pointer-events-auto"
    >
      {children}
    </motion.div>
  )
}
