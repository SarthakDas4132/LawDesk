"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const features = [
  {
    title: "End-to-End Matter Management",
    description: "Manage every legal case from initial intake to completion with clear case stages, court details, opposition party information, and next hearing dates."
  },
  {
    title: "Smart Hearing & Deadline Tracking",
    description: "Track upcoming hearings, important dates, and case deadlines in one place to reduce missed follow-ups and improve firm discipline."
  },
  {
    title: "Success & Strategy Knowledge Base",
    description: "Store case outcomes, resolution notes, legal arguments, and winning strategies so your firm's past experience becomes useful for future cases."
  },
  {
    title: "Intelligent Counsel Finder",
    description: "Find the right lawyer for a new matter based on past case experience, success history, legal category, and relevant resolution notes."
  },
  {
    title: "AI-Powered Case Briefing",
    description: "Upload long client complaints or case documents and get a short, clear summary of the key issues to save time during review."
  },
  {
    title: "Role-Based Workspace",
    description: "Give separate access to admins, senior lawyers, junior lawyers, interns, and clients with permissions based on their role."
  },
  {
    title: "Client Portal",
    description: "Allow clients to securely view case status, hearing updates, and progress without accessing internal firm notes or strategy details."
  },
  {
    title: "Firm Performance Dashboard",
    description: "Monitor ongoing cases, completed cases, win/loss ratio, legal categories, lawyer workload, and overall firm performance from one dashboard."
  },
  {
    title: "Case Outcome Tracking",
    description: "Mark matters as won, lost, settled, dismissed, or pending, and maintain a clear history of every case result."
  },
  {
    title: "Secure Legal Data Management",
    description: "Keep sensitive case information, client records, court details, and internal notes organized in a secure digital system."
  }
]

function FeatureBlock({ feature, index }: { feature: typeof features[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  
  // Track scroll position for opacity/y animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // The element peaks at 50% scroll progress (center of screen)
  const opacity = useTransform(scrollYProgress, [0.2, 0.45, 0.55, 0.8], [0.15, 1, 1, 0.15])
  const y = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [30, 0, -30])

  // Track progress strictly for the dot activation (when it crosses the center)
  const { scrollYProgress: dotProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  })
  
  // Change color when the element crosses the vertical center
  const dotBorder = useTransform(dotProgress, [0, 0.1], ["#d1d5db", "#111827"])
  const dotBg = useTransform(dotProgress, [0, 0.1], ["#f9f8f6", "#111827"])
  const textColor = useTransform(dotProgress, [0, 0.1], ["#9ca3af", "#ffffff"])

  return (
    <div ref={ref} className="py-12 md:py-24 relative group">
      
      {/* Circle on the progress line */}
      <motion.div 
        className="absolute left-0 top-[48px] md:top-[102px] w-10 h-10 rounded-full border-2 flex items-center justify-center -ml-[19px] z-10 text-[12px] font-bold shadow-sm"
        style={{ 
          borderColor: dotBorder, 
          backgroundColor: dotBg, 
          color: textColor 
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </motion.div>

      {/* Content Block */}
      <motion.div style={{ opacity, y }} className="pl-12 md:pl-20">
        <h4 className="text-[1.75rem] md:text-[2.75rem] font-bold text-[#111827] tracking-tight mb-4 md:mb-6 leading-tight">
          {feature.title}
        </h4>
        <p className="text-[16px] md:text-[1.3rem] text-[#4b5563] leading-relaxed max-w-2xl">
          {feature.description}
        </p>
      </motion.div>

    </div>
  )
}

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // For the vertical line filling up
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  return (
    <section id="features" className="py-24 md:py-40 bg-[#f9f8f6] relative">
      <div className="container mx-auto px-6 max-w-7xl relative">
        
        <div ref={containerRef} className="flex flex-col md:flex-row gap-12 md:gap-32 relative items-start">
          
          {/* Left Column: Sticky Title */}
          <div className="w-full md:w-[35%] md:sticky md:top-40 flex flex-col justify-center mb-8 md:mb-0">
            <h3 className="text-[#8c8273] font-bold tracking-widest uppercase text-xs mb-4">
              Our Process
            </h3>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-[#111827] tracking-tight mb-6 leading-[1.05]">
              Your Firm.<br />Your Intelligence.
            </h2>
            <p className="text-[17px] md:text-[1.2rem] text-[#4b5563] leading-relaxed max-w-sm">
              Design the ideal workflow for your needs and LawDesk handles the rest for you automatically.
            </p>
          </div>

          {/* Right Column: Scrolling Feature List */}
          <div className="w-full md:w-[65%] relative">
             
             {/* Progress Line Container */}
             <div className="absolute left-0 top-12 bottom-12 w-[2px] bg-[#e5e7eb]">
               {/* Filling Progress Line */}
               <motion.div 
                 className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#111827] origin-top rounded-full shadow-lg"
                 style={{ scaleY: scrollYProgress }}
               />
             </div>

             <div className="w-full">
              {features.map((feature, i) => (
                <FeatureBlock key={i} feature={feature} index={i} />
              ))}
             </div>
             
          </div>

        </div>

      </div>
    </section>
  )
}
