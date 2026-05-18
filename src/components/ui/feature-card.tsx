import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
  className?: string
}

export function FeatureCard({ icon, title, description, delay = 0, className = "" }: FeatureCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, rotateX: -15, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, ease: "easeOut", delay }}
      className={`bg-[#eeebe3] rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 flex flex-col shadow-2xl shadow-black/20 md:shadow-none border border-white/80 md:border-transparent transform-gpu h-full ${className}`}
    >
      <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-sm shrink-0">
          {icon}
        </div>
        <h3 className="text-[17px] font-bold text-[#111827] mb-0 md:mb-2 md:mt-6 leading-tight">
          {title}
        </h3>
      </div>
      <p className="text-[#4b5563] leading-relaxed text-[14px] md:text-[15px] font-medium mt-3 md:mt-1">
        {description}
      </p>
    </motion.div>
  )
}
