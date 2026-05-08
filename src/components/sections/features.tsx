"use client"
import Link from "next/link"

import { motion, useScroll, useTransform } from "framer-motion"

export function FeaturesSection() {
  // True scroll-linked parallax for the project management image
  const { scrollYProgress } = useScroll()
  const cardY = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section id="features" className="py-24 bg-[#f9f8f6]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Project Management */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-16">
          {/* Left: Blue/Beige Gradient Rectangle with Parallax Card */}
          <div className="w-full lg:w-[55%]">
            <div className="bg-gradient-to-b from-[#A6C4E5] to-[#EBE3D5] rounded-[2.5rem] p-10 md:p-14 lg:p-16 flex items-center justify-center relative overflow-hidden">
              <motion.img 
                style={{ y: cardY }}
                src="/project-management-v2.jpg" 
                alt="Dashboard Mockup" 
                className="w-full h-auto object-contain rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/20"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="w-full lg:w-[45%]">
            <h3 className="text-[#8c8273] font-bold tracking-widest uppercase text-xs mb-4">PROJECT MANAGEMENT</h3>
            <h2 className="text-4xl md:text-[2.75rem] font-bold text-[#111827] tracking-tight mb-6 leading-[1.1]">
              Keep every<br />project moving<br />forward
            </h2>
            <p className="text-[17px] text-[#4b5563] mb-10 leading-relaxed">
              <strong>Plan, assign, and deliver your work</strong> - all in one place. With smart task tracking, deadlines, and real-time progress, you stay organized and clients stay confident.
            </p>
            <Link 
              href="/contact-us" 
              className="inline-block bg-[#1a1818] hover:bg-black text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-colors"
            >
              Try LawDesk free
            </Link>
          </div>
        </div>

        {/* Task Management / Second Feature */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mt-32 mb-16">
          {/* Right/Top: Gradient Rectangle with Parallax Card */}
          <div className="w-full lg:w-[55%]">
            <div className="bg-gradient-to-b from-[#e3dcd1] to-[#f4efe9] rounded-[2.5rem] p-10 md:p-14 lg:p-16 flex items-center justify-center relative overflow-hidden">
              <motion.img 
                style={{ y: cardY }}
                src="/feature-2.jpeg" 
                alt="Task Management Mockup" 
                className="w-full h-auto object-contain rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/20"
              />
            </div>
          </div>

          {/* Left/Bottom: Text */}
          <div className="w-full lg:w-[45%]">
            <h3 className="text-[#8c8273] font-bold tracking-widest uppercase text-xs mb-4">TASK MANAGEMENT</h3>
            <h2 className="text-4xl md:text-[2.75rem] font-bold text-[#111827] tracking-tight mb-6 leading-[1.1]">
              Organize your<br />daily matters
            </h2>
            <p className="text-[17px] text-[#4b5563] mb-10 leading-relaxed">
              <strong>Keep track of every case</strong> with our intuitive task manager. Filter by priority, monitor deadlines, and ensure your team is always aligned on what matters most.
            </p>
            <Link 
              href="/contact-us" 
              className="inline-block bg-[#1a1818] hover:bg-black text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-colors"
            >
              Explore features
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
