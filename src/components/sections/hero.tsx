"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Use state to handle responsive values for tablet sizes (iPad Mini, Air, Pro)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      // Range covering iPad Mini (768) to iPad Pro (1024/1180)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1180)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  
  // If we're at the top, it should be slightly tilted, and fully flat as we scroll down
  const { scrollY } = useScroll()
  const rotateX = useTransform(scrollY, [0, 800], isTablet ? [8, 0] : [25, 0])
  const scale = useTransform(scrollY, [0, 800], isTablet ? [0.96, 1] : [0.9, 1])

  // Parallax for dashboard so it scrolls slower
  // Reduced movement for tablet to keep it 'attached' to the desk
  const dashboardY = useTransform(scrollY, [0, 800], isTablet ? [0, 60] : [0, 200])



  return (
    <section className={`relative pt-28 pb-12 md:min-h-screen md:pt-36 ${isTablet ? 'md:pb-0 justify-start' : 'md:pb-32 justify-center'} flex flex-col items-center z-0 overflow-hidden bg-[#faf8f5]`}>
      {/* Responsive Background */}
      <div 
        className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat pointer-events-none
                   bg-[url('/background/1080x1920.jpg')] 
                   sm:bg-[url('/background/1600x2100.jpg')]
                   md:bg-[url('/background/1200x1600.jpg')]
                   lg:bg-[url('/background/1920x1200.jpg')] 
                   xl:bg-[url('/background/2560x1440.jpg')]"
      />
      




      <div className={`container mx-auto px-6 relative z-10 ${isTablet ? 'flex-1 flex flex-col' : ''}`}>
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          
          <h1 className="text-[2.2rem] sm:text-[3.6rem] md:text-[3.8rem] lg:text-[4.2rem] xl:text-[4.8rem] leading-[1.1] font-bold text-[#111827] mb-5 md:mb-6 tracking-tight transition-colors duration-300">
            All-in-One Legal Case <br className="hidden md:block" /> Workspace Management
          </h1>

          <p className="text-lg md:text-[20px] text-[#374151] mb-8 md:mb-10 max-w-[800px] leading-relaxed font-medium px-4 md:px-0 transition-colors duration-300" style={{ opacity: 1, transform: "none" }}>
            AI powered matter management for smarter law firms<br className="hidden md:block"/><br className="hidden md:block"/>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row items-stretch justify-center gap-4 mb-8 md:mb-12 w-full"
          >
            <Link 
              href="/contact-us" 
              className="bg-[#1a1818] hover:bg-black text-white text-[16px] md:text-[17px] font-bold px-7 py-3 rounded-full transition-colors w-full sm:w-auto text-center"
            >
              Try LegalRobe free
            </Link>
            <a 
              href="#features" 
              className="bg-white/40 hover:bg-white/60 text-[#111827] text-[16px] md:text-[17px] font-bold px-7 py-3 rounded-full transition-colors border border-white/50 w-full sm:w-auto text-center backdrop-blur-md"
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
          className={`hidden md:block w-full lg:max-w-4xl xl:max-w-5xl mx-auto perspective-[1200px] ${isTablet ? 'mt-auto' : ''}`}
        >
          <motion.div
            style={{ 
              rotateX, 
              scale,
              y: dashboardY,
              transformStyle: "preserve-3d" 
            }}
            className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/40 origin-bottom transition-colors duration-300"
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
