"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"

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
          className={`pointer-events-auto flex items-center justify-between transition-all duration-500 w-full rounded-full ${
            isScrolled 
              ? "max-w-4xl bg-white/50 dark:bg-[#161b22]/80 backdrop-blur-2xl border border-white/50 dark:border-[#30363d]/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] px-5 py-2.5" 
              : "max-w-7xl bg-white/10 dark:bg-[#161b22]/20 backdrop-blur-sm border border-white/10 dark:border-[#30363d]/20 px-6 py-3 shadow-none"
          }`}
        >
          <motion.div layout transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="flex items-center gap-2 pl-2 z-50">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
              <img src="/logo-final-nobg.png" alt="LegalRobe Light" className="h-8 w-8 md:h-10 md:w-10 object-contain block dark:hidden" />
              <img src="/logos/invert-logo.png" alt="LegalRobe Dark" className="h-8 w-8 md:h-10 md:w-10 object-contain hidden dark:block" />
              <span className="font-bold text-lg md:text-xl text-[#111827] dark:text-[#fafafa] tracking-tight">LegalRobe</span>
            </Link>
          </motion.div>
          
          <motion.nav layout transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="/#features" className="text-[14px] xl:text-[15px] font-medium text-[#111827] dark:text-[#a3a3a3] dark:hover:text-[#fafafa] hover:opacity-70 transition-colors">Features</Link>
            <Link href="/#benefits" className="text-[14px] xl:text-[15px] font-medium text-[#111827] dark:text-[#a3a3a3] dark:hover:text-[#fafafa] hover:opacity-70 transition-colors">Benefits</Link>
            <Link href="/#pricing" className="text-[14px] xl:text-[15px] font-medium text-[#111827] dark:text-[#a3a3a3] dark:hover:text-[#fafafa] hover:opacity-70 transition-colors">Pricing</Link>
            <Link href="/blog" className="text-[14px] xl:text-[15px] font-medium text-[#111827] dark:text-[#a3a3a3] dark:hover:text-[#fafafa] hover:opacity-70 transition-colors">Blog</Link>
            <Link href="/contact-us" className="text-[14px] xl:text-[15px] font-medium text-[#111827] dark:text-[#a3a3a3] dark:hover:text-[#fafafa] hover:opacity-70 transition-colors">Contact Us</Link>
          </motion.nav>

          <motion.div layout transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Link href="/contact-us" className="bg-[#1a1818] dark:bg-[#fafafa] hover:bg-black dark:hover:bg-[#e5e5e5] text-white dark:text-[#0a0a0a] text-[14px] xl:text-[15px] font-bold px-5 xl:px-6 py-2.5 rounded-full transition-colors whitespace-nowrap">
              Try LegalRobe free
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle Button */}
          <motion.div layout transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center p-2 z-50 text-[#111827] dark:text-[#fafafa]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
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
            className="fixed left-4 right-4 top-24 z-40 lg:hidden flex flex-col items-center bg-white/95 dark:bg-[#141414]/95 backdrop-blur-3xl rounded-[2rem] border border-[#e5e0d8] dark:border-[#262626] shadow-2xl p-6"
          >
            <nav className="flex flex-col items-center gap-5 mb-8 w-full">
              <Link href="/#features" onClick={() => setIsOpen(false)} className="text-[16px] font-bold text-[#4b5563] dark:text-[#a3a3a3] hover:text-[#111827] dark:hover:text-[#fafafa]">Features</Link>
              <Link href="/#benefits" onClick={() => setIsOpen(false)} className="text-[16px] font-bold text-[#4b5563] dark:text-[#a3a3a3] hover:text-[#111827] dark:hover:text-[#fafafa]">Benefits</Link>
              <Link href="/#pricing" onClick={() => setIsOpen(false)} className="text-[16px] font-bold text-[#4b5563] dark:text-[#a3a3a3] hover:text-[#111827] dark:hover:text-[#fafafa]">Pricing</Link>
              <Link href="/blog" onClick={() => setIsOpen(false)} className="text-[16px] font-bold text-[#4b5563] dark:text-[#a3a3a3] hover:text-[#111827] dark:hover:text-[#fafafa]">Blog</Link>
              <Link href="/contact-us" onClick={() => setIsOpen(false)} className="text-[16px] font-bold text-[#4b5563] dark:text-[#a3a3a3] hover:text-[#111827] dark:hover:text-[#fafafa]">Contact Us</Link>
            </nav>

            <div className="flex flex-col gap-3 w-full max-w-[280px]">
              <Link 
                href="/contact-us" 
                onClick={() => setIsOpen(false)}
                className="bg-[#1a1818] dark:bg-[#fafafa] text-white dark:text-[#0a0a0a] text-[15px] font-bold px-6 py-3.5 rounded-full text-center w-full shadow-lg"
              >
                Try LegalRobe free
              </Link>
              <Link 
                href="/#features" 
                onClick={() => setIsOpen(false)}
                className="bg-[#f4efe9] dark:bg-[#262626] hover:bg-[#eaddce] dark:hover:bg-[#333333] transition-colors text-[#111827] dark:text-[#fafafa] text-[15px] font-bold px-6 py-3.5 rounded-full text-center w-full"
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
