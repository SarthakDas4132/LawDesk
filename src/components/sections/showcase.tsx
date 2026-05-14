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
    <section className="pt-16 md:pt-24 pb-12 bg-[#f9f8f6] overflow-hidden hidden md:block">
      <div className="container mx-auto px-6 text-center flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-[#8c8273] font-bold tracking-widest uppercase text-xs mb-4">SEAMLESS ACROSS DEVICES</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111827] tracking-tight">
            Work from anywhere, stay in sync
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full lg:max-w-4xl xl:max-w-5xl h-[350px] sm:h-[450px] md:h-[700px] rounded-3xl md:rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-[#f9f8f6] border border-black/5"
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
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-auto">
            <div className="bg-black/40 backdrop-blur-xl p-1.5 rounded-full inline-flex relative shadow-lg border border-white/20">
              <motion.div 
                className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-black rounded-full shadow-sm"
                animate={{ left: device === "mobile" ? "6px" : "calc(50%)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <button
                onClick={() => setDevice("mobile")}
                className={`relative z-10 px-8 py-2.5 rounded-full text-[14px] font-bold transition-colors ${device === "mobile" ? "text-white" : "text-white/70 hover:text-white"}`}
              >
                Mobile App
              </button>
              <button
                onClick={() => setDevice("desktop")}
                className={`relative z-10 px-8 py-2.5 rounded-full text-[14px] font-bold transition-colors ${device === "desktop" ? "text-white" : "text-white/70 hover:text-white"}`}
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
