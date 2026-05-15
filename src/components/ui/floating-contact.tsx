"use client"

import { motion } from "framer-motion"
import { Calendar, Mail, MessageCircle } from "lucide-react"

const contactLinks = [
  {
    name: "Calendly",
    href: "https://calendly.com/jmdsolutions",
    icon: <Calendar size={20} />,
    color: "bg-[#1a1818]",
    shadow: "shadow-black/10"
  },
  {
    name: "Email",
    href: "mailto:jmdsolutionbeyond@gmail.com",
    icon: <Mail size={20} />,
    color: "bg-[#1a1818]",
    shadow: "shadow-black/10"
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919209552809",
    icon: <MessageCircle size={20} />,
    color: "bg-[#1a1818]",
    shadow: "shadow-black/10"
  }
]

export function FloatingContact() {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-3 pointer-events-none">
      {contactLinks.map((link, i) => (
        <motion.a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
          className={`pointer-events-auto w-12 h-12 ${link.color} text-white rounded-[14px] flex items-center justify-center shadow-lg ${link.shadow} hover:bg-black hover:scale-110 active:scale-95 transition-all duration-300 group ring-offset-2 hover:ring-2 hover:ring-[#1a1818]`}
          aria-label={link.name}
        >
          {link.icon}
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-black/80 backdrop-blur-md text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-wider">
            {link.name}
          </span>
        </motion.a>
      ))}
    </div>
  )
}
