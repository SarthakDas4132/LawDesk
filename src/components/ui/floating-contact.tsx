"use client"

import { motion } from "framer-motion"
import { Calendar, Mail, MessageCircle } from "lucide-react"

const contactLinks = [
  {
    name: "Calendly",
    href: "https://calendly.com/jmdsolutions",
    icon: <img src="/logos/calender-trimmed.png" alt="Calendar" className="w-[24px] h-[24px] object-contain opacity-90 invert" />,
    color: "bg-[#1a1818]",
    hoverColor: "hover:bg-black",
    ringColor: "hover:ring-[#8c8273]",
    shadow: "shadow-black/20"
  },
  {
    name: "Email",
    href: "mailto:jmdsolutionbeyond@gmail.com",
    icon: <img src="/logos/gmail.png" alt="Gmail" className="w-6 h-6 object-contain" />,
    color: "bg-white",
    hoverColor: "hover:bg-neutral-50",
    ringColor: "hover:ring-[#ea4335]",
    shadow: "shadow-black/10"
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919209552809?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20LegalRobe%20and%20how%20it%20can%20help%20manage%20my%20law%20firm.",
    icon: <img src="/logos/whatsapp.png?v=2" alt="WhatsApp" className="w-full h-full object-cover rounded-[14px]" />,
    color: "bg-transparent",
    hoverColor: "hover:bg-transparent",
    ringColor: "hover:ring-[#25d366]",
    shadow: "shadow-emerald-500/25"
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
          className={`pointer-events-auto w-12 h-12 ${link.color} ${link.hoverColor} text-white rounded-[14px] flex items-center justify-center shadow-lg ${link.shadow} hover:scale-110 active:scale-95 transition-all duration-300 group ring-offset-2 hover:ring-2 ${link.ringColor}`}
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
