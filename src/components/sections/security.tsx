"use client"
import { motion } from "framer-motion"

export function SecuritySection() {
  return (
    <section className="py-16 md:py-24 bg-[#f9f8f6]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[2rem] md:text-[3rem] font-bold text-[#111827] tracking-tight leading-[1.15]"
          >
            Never lose progress with<br />secure cloud storage
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#f3ede3] rounded-[2.5rem] p-8 md:p-10 flex flex-col min-h-[320px]"
          >
            <h3 className="text-[1.35rem] md:text-2xl font-bold text-[#111827] max-w-[280px] mb-6 leading-tight">
              End-to-end encryption for total privacy
            </h3>
            
            <div className="flex-1 flex items-center justify-center">
              <svg width="150" height="150" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[150px]">
                {/* Shackle */}
                <path d="M85 85V55C85 40 110 40 110 55V85" stroke="#615043" strokeWidth="4" fill="none" strokeLinecap="round" />
                {/* Padlock Body */}
                <rect x="60" y="85" width="100" height="65" rx="12" fill="#f3ede3" stroke="#615043" strokeWidth="4" />
                
                {/* Keyhole */}
                <circle cx="85" cy="110" r="5" fill="#615043" stroke="none" />
                <path d="M82 115L79 128H91L88 115" fill="#615043" stroke="none" />
                
                {/* Binary Text */}
                <text x="105" y="103" fill="#615043" fontSize="10" fontWeight="bold" fontFamily="monospace" style={{ letterSpacing: '1px' }}>0101 01010</text>
                <text x="105" y="117" fill="#615043" fontSize="10" fontWeight="bold" fontFamily="monospace" style={{ letterSpacing: '1px' }}>0100 10101</text>
                <text x="105" y="131" fill="#615043" fontSize="10" fontWeight="bold" fontFamily="monospace" style={{ letterSpacing: '1px' }}>0101 10010</text>
                <text x="105" y="145" fill="#615043" fontSize="10" fontWeight="bold" fontFamily="monospace" style={{ letterSpacing: '1px' }}>0101 01010</text>
                
                {/* Shield */}
                <path d="M35 95L55 85L75 95V115C75 135 60 150 55 155C50 150 35 135 35 115V95Z" fill="#f3ede3" stroke="#615043" strokeWidth="4" strokeLinejoin="round" />
                {/* Shield Check */}
                <path d="M48 120L54 126L65 110" stroke="#615043" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            
            <p className="text-[15px] md:text-[16px] text-[#374151] font-medium mt-6 leading-relaxed">
              Your data is encrypted in transit and at rest, ensuring only you can access your work.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#f3ede3] rounded-[2.5rem] p-8 md:p-10 flex flex-col min-h-[320px]"
          >
            <h3 className="text-[1.35rem] md:text-2xl font-bold text-[#111827] max-w-[280px] mb-6 leading-tight">
              Automatic cloud backups, always safe
            </h3>
            
            <div className="flex-1 flex items-center justify-center">
              <svg width="150" height="150" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[150px]">
                {/* Cloud */}
                <path d="M100 135 H 150 C 175 135, 185 115, 185 100 C 185 80, 170 65, 150 65 C 140 45, 110 40, 90 50 C 65 40, 40 55, 40 80 C 40 100, 55 115, 70 120" stroke="#615043" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* Arrow (Filled) */}
                <path d="M55 150 C 80 145, 95 125, 95 100 L 80 105 L 105 75 L 125 110 L 110 105 C 110 135, 90 155, 55 150 Z" fill="#615043" />
                
                {/* Check Circle */}
                <circle cx="150" cy="125" r="16" fill="#615043" stroke="#f3ede3" strokeWidth="6" />
                <path d="M143 125 L 148 130 L 157 118" stroke="#f3ede3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            
            <p className="text-[15px] md:text-[16px] text-[#374151] font-medium mt-6 leading-relaxed">
              Real-time sync to the cloud means your progress is instantly saved, so you can work without worry.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
