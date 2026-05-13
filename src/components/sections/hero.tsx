"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Standup scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  })
  
  // If we're at the top, it should be slightly tilted, and fully flat as we scroll down
  const { scrollY } = useScroll()
  const rotateX = useTransform(scrollY, [0, 800], [25, 0]) // Slower standup
  const scale = useTransform(scrollY, [0, 800], [0.9, 1])

  // Parallax for dashboard so it scrolls slower
  const dashboardY = useTransform(scrollY, [0, 800], [0, 200])



  return (
    <section className="relative pt-28 pb-12 md:min-h-screen md:pt-48 md:pb-40 flex flex-col items-center justify-center z-0 overflow-hidden bg-[#faf8f5]">
      {/* Responsive Background */}
      <div 
        className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat pointer-events-none 
                   bg-[url('/background/1080x1920.jpg')] 
                   md:bg-[url('/background/1920x1080.jpg')] 
                   xl:bg-[url('/background/2560x1440.jpg')]"
      />
      




      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          
          <h1 className="text-[2.1rem] sm:text-[3.5rem] md:text-[5.5rem] leading-[1.1] font-bold text-[#111827] mb-6 md:mb-8 tracking-tight" style={{ opacity: 1, transform: "none" }}>
            All-in-One<br className="block md:hidden"/><span className="hidden md:inline"> Legal Case</span><br className="hidden md:block"/><span className="md:hidden"> Legal Case</span><span className="hidden md:inline">Workspace.</span><br/>Management
          </h1>

          <p className="text-lg md:text-[22px] text-[#374151] mb-10 md:mb-12 max-w-[800px] leading-relaxed font-medium px-4 md:px-0" style={{ opacity: 1, transform: "none" }}>
            AI powered matter management for smarter law firms<br className="hidden md:block"/><br className="hidden md:block"/>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row items-stretch justify-center gap-4 mb-8 md:mb-20 w-full"
          >
            <Link 
              href="/contact-us" 
              className="bg-[#1a1818] hover:bg-black text-white text-[17px] font-bold px-8 py-3.5 rounded-full transition-colors w-full sm:w-auto text-center"
            >
              Try LegalRobe free
            </Link>
            <a 
              href="#features" 
              className="bg-white/40 hover:bg-white/60 text-[#111827] text-[17px] font-bold px-8 py-3.5 rounded-full transition-colors border border-white/50 w-full sm:w-auto text-center backdrop-blur-md"
            >
              See features
            </a>
          </motion.div>
        </div>



        {/* Desktop 3D Standup Image */}
        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block w-full max-w-5xl mx-auto perspective-[1200px]"
        >
          <motion.div
            style={{ 
              rotateX, 
              scale,
              y: dashboardY,
              transformStyle: "preserve-3d" 
            }}
            className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/40 origin-bottom"
          >
            {/* The uploaded dashboard image */}
            <img 
              src="/hero-dashboard.jpeg" 
              alt="Platform Dashboard" 
              className="w-full h-auto object-cover block"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
