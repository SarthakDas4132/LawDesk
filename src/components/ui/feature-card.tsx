import { motion, Variants } from "framer-motion"
import { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
  className?: string
}

const iconVariants: Variants = {
  hover: {
    scale: 1.15,
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
}

export function FeatureCard({ icon, title, description, delay = 0, className = "" }: FeatureCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, rotateX: -15, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, ease: "easeOut", delay }}
      className={`bg-[#eeebe3] dark:bg-[#161b22] rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 flex flex-col shadow-2xl shadow-black/20 dark:shadow-black/50 md:shadow-none border border-white/80 dark:border-[#30363d]/80 md:border-transparent md:dark:border-transparent transform-gpu h-full transition-colors duration-300 ${className}`}
      style={{ transformOrigin: "center bottom" }}
    >
      <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
        <motion.div 
          variants={iconVariants}
          className="w-10 h-10 bg-white dark:bg-[#30363d] rounded-full flex items-center justify-center text-gray-700 dark:text-[#8b949e] shadow-sm shrink-0 transition-colors duration-300"
        >
          {icon}
        </motion.div>
        <h3 className="text-[17px] font-bold text-[#111827] dark:text-[#fafafa] mb-0 md:mb-2 md:mt-6 leading-tight transition-colors duration-300">
          {title}
        </h3>
      </div>
      <p className="text-[#4b5563] dark:text-[#a3a3a3] leading-relaxed text-[14px] md:text-[15px] font-medium mt-3 md:mt-1 transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  )
}
