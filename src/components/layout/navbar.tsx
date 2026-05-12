"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20) // trigger a bit earlier
  })

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
        <motion.div 
          layout
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between transition-colors duration-500 w-full ${
            isScrolled 
              ? "max-w-4xl bg-white/50 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-full px-5 py-2.5" 
              : "max-w-7xl bg-transparent border border-transparent px-2 py-4"
          }`}
        >
          <motion.div layout transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="flex items-center gap-2 pl-2 z-50">
            <img src="/logo.png" alt="LawDesk" className="h-7 md:h-8 w-auto" />
            <span className="font-bold text-lg md:text-xl text-[#111827] tracking-tight">LawDesk</span>
          </motion.div>
          
          <motion.nav layout transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-[15px] font-medium text-[#111827] hover:opacity-70 transition-opacity">Features</Link>
            <Link href="/#benefits" className="text-[15px] font-medium text-[#111827] hover:opacity-70 transition-opacity">Benefits</Link>
            <Link href="/#pricing" className="text-[15px] font-medium text-[#111827] hover:opacity-70 transition-opacity">Pricing</Link>
            <Link href="/blog" className="text-[15px] font-medium text-[#111827] hover:opacity-70 transition-opacity">Blog</Link>
            <Link href="/contact-us" className="text-[15px] font-medium text-[#111827] hover:opacity-70 transition-opacity">Contact Us</Link>
          </motion.nav>

          <motion.div layout transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="hidden md:flex items-center">
            <Link href="/contact-us" className="bg-[#1a1818] hover:bg-black text-white text-[15px] font-bold px-6 py-2.5 rounded-full transition-colors whitespace-nowrap">
              Try LawDesk free
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle Button */}
          <motion.button 
            layout 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center p-2 z-50 text-[#111827]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-4 right-4 top-24 z-40 md:hidden flex flex-col items-center bg-white/95 backdrop-blur-3xl rounded-[2rem] border border-[#e5e0d8] shadow-2xl p-6"
          >
            <nav className="flex flex-col items-center gap-5 mb-8 w-full">
              <Link href="/#features" onClick={() => setIsOpen(false)} className="text-[16px] font-bold text-[#4b5563] hover:text-[#111827]">Features</Link>
              <Link href="/#benefits" onClick={() => setIsOpen(false)} className="text-[16px] font-bold text-[#4b5563] hover:text-[#111827]">Benefits</Link>
              <Link href="/#pricing" onClick={() => setIsOpen(false)} className="text-[16px] font-bold text-[#4b5563] hover:text-[#111827]">Pricing</Link>
              <Link href="/blog" onClick={() => setIsOpen(false)} className="text-[16px] font-bold text-[#4b5563] hover:text-[#111827]">Blog</Link>
              <Link href="/contact-us" onClick={() => setIsOpen(false)} className="text-[16px] font-bold text-[#4b5563] hover:text-[#111827]">Contact Us</Link>
            </nav>

            <div className="flex flex-col gap-3 w-full max-w-[280px]">
              <Link 
                href="/contact-us" 
                onClick={() => setIsOpen(false)}
                className="bg-[#1a1818] text-white text-[15px] font-bold px-6 py-3.5 rounded-full text-center w-full shadow-lg"
              >
                Try LawDesk free
              </Link>
              <Link 
                href="/#features" 
                onClick={() => setIsOpen(false)}
                className="bg-[#f4efe9] hover:bg-[#eaddce] transition-colors text-[#111827] text-[15px] font-bold px-6 py-3.5 rounded-full text-center w-full"
              >
                See features
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
