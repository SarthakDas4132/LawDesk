"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const features = [
  {
    title: "AI Legal Assistant",
    description: "Helps lawyers quickly find case details, summarize updates, answer internal questions, and manage legal work more efficiently using AI."
  },
  {
    title: "AI Case File Summarization",
    description: "Quickly converts long case files, documents, and notes into clear summaries so lawyers can understand key details faster."
  },
  {
    title: "AI Case Memory & New Case Assistance",
    description: "Keeps past closed case records as a reference and helps organize new case files with relevant details, documents, and summaries."
  },
  {
    title: "Case Management",
    description: "Add, edit, and organise all your cases in one centralised dashboard. Filter by court, status, date, or client with a single tap."
  },
  {
    title: "Hearing Tracker",
    description: "Never miss a hearing date. LegalRobe tracks all upcoming and past hearings with a smart calendar view and status updates."
  },
  {
    title: "Client Directory",
    description: "Maintain a complete directory of all your clients, linked to their respective cases. Quick search and one-tap calling built in."
  },
  {
    title: "Document Storage",
    description: "Attach petitions, evidence files, and court orders directly to each case. Access them offline whenever you need them in court. Supports Google Drive Backup."
  },
  {
    title: "Secure, Private & Cloud Backup",
    description: "Your case data is encrypted at rest and in transit. All your data is automatically backed up to the cloud so you can access your cases from any device without losing a single record."
  }
]

function FeatureBlock({ feature, index, isLast }: { feature: typeof features[0], index: number, isLast?: boolean }) {
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
  
  // Change color exactly when the line reaches the center of the circle
  // On mobile, center is at 52px. On desktop, it's at 90px.
  // We'll use a rough estimation for the transition point (approx 0.15 - 0.2 of the block)
  const dotBorder = useTransform(dotProgress, [0.1, 0.2], ["#d1d5db", "#111827"])
  const dotBg = useTransform(dotProgress, [0.1, 0.2], ["#f9f8f6", "#111827"])
  const textColor = useTransform(dotProgress, [0.1, 0.2], ["#9ca3af", "#ffffff"])

  return (
    <div ref={ref} className={`pt-8 md:pt-16 ${isLast ? 'pb-0' : 'pb-8 md:pb-16'} relative group`}>
      
      {/* Vertical Line Container */}
      <div className={`absolute left-0 ${index === 0 ? 'top-[52px] md:top-[90px]' : 'top-0'} bottom-0 w-[2px] z-0`}>
        {/* Background (Grey) Segment */}
        <div className="absolute inset-0 bg-[#e5e7eb]" />
        
        {/* Animated Filling (Black) Segment */}
        <motion.div 
          className="absolute inset-0 bg-[#111827] origin-top"
          style={{ scaleY: dotProgress }}
        />

        {/* Mask for the very last point to prevent line bleed */}
        {index === 7 && (
          <div className="absolute top-[52px] md:top-[90px] bottom-0 w-4 -left-2 bg-[#f9f8f6] z-[5]" />
        )}
      </div>

      {/* Circle on the progress line */}
      <motion.div 
        className="absolute left-0 top-[32px] md:top-[70px] w-10 h-10 rounded-full border-2 flex items-center justify-center -ml-[19px] z-10 text-[12px] font-bold shadow-sm"
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

  // Fade out title at the very end
  const titleOpacity = useTransform(scrollYProgress, [0.8, 0.95], [1, 0])

  return (
    <section id="features" className="py-24 md:py-40 bg-[#f9f8f6] relative">
      <div className="container mx-auto px-6 max-w-5xl relative">
        
        <div ref={containerRef} className="flex flex-col md:flex-row gap-12 md:gap-32 relative items-start">
          
          {/* Left Column: Sticky Title */}
          <motion.div 
            style={{ opacity: titleOpacity }}
            className="w-full md:w-[35%] md:sticky md:top-40 self-start mb-8 md:mb-0"
          >
            <h3 className="text-[#8c8273] font-bold tracking-widest uppercase text-xs mb-4">
              Our Process
            </h3>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-[#111827] tracking-tight mb-6 leading-[1.05]">
              Your Firm.<br />Your Intelligence.
            </h2>
            <p className="text-[17px] md:text-[1.2rem] text-[#4b5563] leading-relaxed max-w-sm">
              Design the ideal workflow for your needs and LegalRobe handles the rest for you automatically.
            </p>
          </motion.div>

          {/* Right Column: Scrolling Feature List */}
          <div className="w-full md:w-[65%] relative">
             
             <div className="w-full">
              {features.map((feature, i) => (
                <FeatureBlock key={i} feature={feature} index={i} isLast={i === features.length - 1} />
              ))}
             </div>
             
          </div>

        </div>

      </div>
    </section>
  )
}
