"use client"

import { motion } from "framer-motion"

const logos = [
  "Amsterdam", "SAVANNAH", "MILANO", "luminous", "theo"
]

export function MarqueeSection() {
  return (
    <section className="py-12 bg-white relative z-20 rounded-t-[3rem] mt-[-4rem] shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <p className="text-[17px] font-medium text-[#4b5563] mb-8">
          Run Your Law Firm with clarity, control and intelligence
        </p>
        
        <div className="relative flex overflow-x-hidden w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            className="flex flex-none gap-8 md:gap-16 items-center"
          >
            {/* Repeat the phrase multiple times for seamless loop */}
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex-none flex items-center gap-2 grayscale opacity-60">
                <div className="w-5 h-5 rounded-full bg-black/80 flex items-center justify-center text-[10px] text-white font-bold">
                  S
                </div>
                <span className="text-[15px] md:text-[20px] lg:text-2xl font-bold text-black tracking-tight">Your data is fully secured and end to end encrypted</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
