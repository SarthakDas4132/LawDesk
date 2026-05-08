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

  // Statues moving out on scroll
  const leftStatueX = useTransform(scrollY, [0, 1000], [0, -300])
  const rightStatueX = useTransform(scrollY, [0, 1000], [0, 300])
  const statueY = useTransform(scrollY, [0, 1000], [0, 100])

  return (
    <section className="relative pt-32 md:pt-48 pb-24 md:pb-40 flex flex-col items-center justify-center bg-[url('/bg.jpeg')] bg-cover bg-center z-0 overflow-hidden">
      
      {/* Cloud left */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-[-5%] top-[10%] pointer-events-none opacity-80"
      >
        <motion.img 
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          src="/cloud-2.png" 
          alt="Cloud" 
          className="w-[500px] object-contain"
        />
      </motion.div>

      {/* Cloud right */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-[-5%] top-[5%] pointer-events-none opacity-80"
      >
        <motion.img 
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 1 }}
          src="/cloud-2.png" 
          alt="Cloud" 
          className="w-[600px] object-contain"
        />
      </motion.div>

      {/* Background fade overlay to blend into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f9f8f6] to-transparent z-0 pointer-events-none"></div>

      {/* Statues */}
      <motion.div 
        style={{ x: leftStatueX, y: statueY }}
        className="absolute left-[-20%] md:left-[-10%] lg:-left-[2%] top-[20vh] md:top-[30vh] lg:top-[35vh] z-20 pointer-events-none opacity-25 md:opacity-100"
      >
        <motion.img 
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          src="/statue-left.png" 
          alt="Lady Justice Statue Left" 
          className="w-[110px] md:w-[350px] lg:w-[450px] object-contain drop-shadow-2xl"
        />
      </motion.div>

      <motion.div 
        style={{ x: rightStatueX, y: statueY }}
        className="absolute right-[-20%] md:right-[-10%] lg:-right-[2%] top-[20vh] md:top-[30vh] lg:top-[35vh] z-20 pointer-events-none opacity-25 md:opacity-100"
      >
        <motion.img 
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          src="/statue-right.png" 
          alt="Lady Justice Statue Right" 
          className="w-[110px] md:w-[350px] lg:w-[450px] object-contain drop-shadow-2xl"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[2.1rem] sm:text-[3.5rem] md:text-[5.5rem] leading-[1.1] font-bold text-[#111827] mb-6 md:mb-8 tracking-tight"
          >
            The Complete<br className="block md:hidden" />
            <span className="hidden md:inline"> Legal</span><br className="hidden md:block" />
            <span className="md:hidden"> Legal Workspace.</span><span className="hidden md:inline">Workspace.</span><br />
            Zero Distractions.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg md:text-[22px] text-[#374151] mb-10 md:mb-12 max-w-[800px] leading-relaxed font-medium px-4 md:px-0"
          >
            The all-in-one legal platform that brings algorithmic matchmaking,<br className="hidden md:block"/>
            confidential messaging, and task management into a single,<br className="hidden md:block"/>
            secure dashboard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row items-stretch justify-center gap-4 mb-10 md:mb-20 w-full"
          >
            <Link 
              href="/contact-us" 
              className="bg-[#1a1818] hover:bg-black text-white text-[17px] font-bold px-8 py-3.5 rounded-full transition-colors w-full sm:w-auto text-center"
            >
              Try LawDesk free
            </Link>
            <a 
              href="#features" 
              className="bg-white/40 hover:bg-white/60 text-[#111827] text-[17px] font-bold px-8 py-3.5 rounded-full transition-colors border border-white/50 w-full sm:w-auto text-center backdrop-blur-md"
            >
              See features
            </a>
          </motion.div>
        </div>

        {/* Dashboard 3D Standup Image */}
        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl mx-auto perspective-[1200px]"
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
