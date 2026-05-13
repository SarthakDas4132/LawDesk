"use client"
import { motion } from "framer-motion"
import { FeatureCard } from "../ui/feature-card"

export function SecuritySection() {
  return (
    <section className="pt-16 md:pt-24 pb-4 md:pb-8 bg-[#f9f8f6]">
      <div className="container mx-auto px-5 md:px-6 max-w-5xl">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-[3rem] font-bold text-[#111827] tracking-tight leading-tight text-balance mx-auto max-w-2xl"
          >
            Never lose progress with secure cloud storage
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <FeatureCard
            delay={0.1}
            title="End-to-end encryption for total privacy"
            description="Your data is encrypted in transit and at rest, ensuring only you can access your work."
            icon={
              <svg width="20" height="20" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                <path d="M85 85V55C85 40 110 40 110 55V85" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                <rect x="60" y="85" width="100" height="65" rx="12" fill="none" stroke="currentColor" strokeWidth="8" />
                <path d="M35 95L55 85L75 95V115C75 135 60 150 55 155C50 150 35 135 35 115V95Z" fill="none" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
              </svg>
            }
          />
          <FeatureCard
            delay={0.2}
            title="Automatic cloud backups, always safe"
            description="Real-time sync to the cloud means your progress is instantly saved, so you can work without worry."
            icon={
              <svg width="20" height="20" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                <path d="M100 135 H 150 C 175 135, 185 115, 185 100 C 185 80, 170 65, 150 65 C 140 45, 110 40, 90 50 C 65 40, 40 55, 40 80 C 40 100, 55 115, 70 120" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="150" cy="125" r="16" fill="currentColor" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  )
}
