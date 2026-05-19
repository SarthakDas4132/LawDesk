"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ShowcaseSection() {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop")

  useEffect(() => {
    const interval = setInterval(() => {
      setDevice((prev) => (prev === "desktop" ? "mobile" : "desktop"))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-8 md:pt-12 pb-12 bg-[#f9f8f6] dark:bg-[#161b22] overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-5 md:px-6 text-center flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
        >
          <h3 className="text-[#8c8273] dark:text-[#737373] font-bold tracking-widest uppercase text-[10px] md:text-xs mb-3 md:mb-4 transition-colors duration-300">SEAMLESS ACROSS DEVICES</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111827] dark:text-[#fafafa] tracking-tight text-balance transition-colors duration-300">
            Work from anywhere, stay in sync
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full lg:max-w-4xl xl:max-w-5xl h-[400px] sm:h-[500px] md:h-[700px] rounded-[2rem] md:rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-[#f9f8f6] dark:bg-[#0d1117] border border-black/5 dark:border-[#30363d]/50 transition-colors duration-300"
        >
          <div className="absolute inset-0 w-full h-full">
            <motion.img
              initial={false}
              animate={{ opacity: device === "desktop" ? 1 : 0, scale: device === "desktop" ? 1 : 1.04 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              src="/web-original.jpeg"
              alt="Web App"
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{ pointerEvents: device === "desktop" ? "auto" : "none" }}
            />
            <motion.img
              initial={false}
              animate={{ opacity: device === "mobile" ? 1 : 0, scale: device === "mobile" ? 1 : 1.04 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              src="/mobile-original.jpeg"
              alt="Mobile App"
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{ pointerEvents: device === "mobile" ? "auto" : "none" }}
            />
          </div>

          {/* Floating blur toggle over the image */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 pointer-events-auto w-[calc(100%-40px)] max-w-[320px]">
            <div className="bg-black/40 backdrop-blur-xl p-1 rounded-full flex relative shadow-lg border border-white/20">
              <motion.div 
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-black rounded-full shadow-sm"
                animate={{ left: device === "mobile" ? "4px" : "calc(50%)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <button
                onClick={() => setDevice("mobile")}
                className={`flex-1 relative z-10 py-2.5 rounded-full text-[12px] md:text-[14px] font-bold transition-colors ${device === "mobile" ? "text-white" : "text-white/70 hover:text-white"}`}
              >
                Mobile App
              </button>
              <button
                onClick={() => setDevice("desktop")}
                className={`flex-1 relative z-10 py-2.5 rounded-full text-[12px] md:text-[14px] font-bold transition-colors ${device === "desktop" ? "text-white" : "text-white/70 hover:text-white"}`}
              >
                Web App
              </button>
            </div>
          </div>
          
        </motion.div>

      </div>
    </section>
  )
}
