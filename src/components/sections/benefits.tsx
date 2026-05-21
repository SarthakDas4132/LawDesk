"use client"

import { motion } from "framer-motion"
import { Clock, ShieldCheck, Smartphone, MessageSquare } from "lucide-react"

const benefits = [
  {
    icon: <Clock className="w-4 h-4 md:w-6 md:h-6 text-amber-700 dark:text-amber-400" />,
    title: "Reclaim Billable Hours",
    tagline: "80% Time Reduction",
    description: "Automate administrative routines, drafting case summaries, and document sorting. Reclaim up to 10+ hours a week to focus on courtroom preparation and high-value litigation.",
    stat: "10h+",
    statLabel: "Saved Weekly"
  },
  {
    icon: <ShieldCheck className="w-4 h-4 md:w-6 md:h-6 text-amber-700 dark:text-amber-400" />,
    title: "Ironclad Client Privilege",
    tagline: "Zero-Knowledge Security",
    description: "Practice with total confidence. All files, messages, and case summaries are protected with state-of-the-art encryption and automatic cloud backups. Your sensitive data remains completely private.",
    stat: "AES-256",
    statLabel: "Encryption Standards"
  },
  {
    icon: <Smartphone className="w-4 h-4 md:w-6 md:h-6 text-amber-700 dark:text-amber-400" />,
    title: "Courtroom Portability",
    tagline: "Always Accessible",
    description: "Carry your entire legal office in your pocket. Access active case briefs, client files, and court documents instantly on any mobile device or tablet, perfectly synced with your desk.",
    stat: "100%",
    statLabel: "Mobile Synchronized"
  },
  {
    icon: <MessageSquare className="w-4 h-4 md:w-6 md:h-6 text-amber-700 dark:text-amber-400" />,
    title: "Frictionless Partnerships",
    tagline: "Seamless Communication",
    description: "Build client trust through real-time visibility. Share case progress tracking and hearing milestones automatically, maintaining complete transparency without the repetitive email chains.",
    stat: "5x",
    statLabel: "Faster Client Updates"
  }
]

export function BenefitsSection() {
  return (
    <section 
      id="benefits" 
      className="pt-8 md:pt-12 pb-4 md:pb-4 bg-[#faf8f5] dark:bg-[#0d1117] transition-colors duration-500 relative overflow-hidden"
    >
      {/* Decorative subtle background gold glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-amber-500/5 dark:bg-amber-500/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-amber-600/5 dark:bg-amber-600/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-6 max-w-5xl relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[#8c8273] dark:text-[#737373] font-bold tracking-widest uppercase text-xs sm:text-sm block mb-2 sm:mb-3 md:mb-4"
          >
            The LegalRobe Value
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl sm:text-4xl md:text-5xl font-bold text-[#111827] dark:text-[#fafafa] tracking-tight leading-tight mb-3 md:mb-6 transition-colors duration-300"
          >
            Why Modern Law Firms Choose LegalRobe
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-lg text-[#4b5563] dark:text-[#a3a3a3] leading-relaxed max-w-2xl mx-auto transition-colors duration-300"
          >
            From solo practitioners to scaling litigation firms, LegalRobe cuts administrative overhead, secures sensitive materials, and gives you a professional edge.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col justify-between bg-[#eeebe3] dark:bg-[#161b22] rounded-xl sm:rounded-3xl md:rounded-[2.5rem] border border-white/80 dark:border-[#30363d]/80 p-4 sm:p-6 md:p-8 shadow-2xl shadow-black/10 dark:shadow-black/40 transition-all duration-300 hover:border-amber-500/40 hover:shadow-[0_20px_40px_rgba(217,119,6,0.06)] dark:hover:border-amber-500/30 dark:hover:shadow-[0_20px_40px_rgba(217,119,6,0.04)]"
            >
              <div>
                {/* Header Row: Icon + Tagline */}
                <div className="flex items-center justify-between mb-3.5 md:mb-6">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-white dark:bg-[#30363d] rounded-lg md:rounded-2xl flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-white/80 dark:border-[#30363d]/80 group-hover:bg-amber-50 dark:group-hover:bg-amber-950/20 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <span className="text-[9px] md:text-[11px] font-bold tracking-wider uppercase bg-[#e5e0d8] dark:bg-[#1f2937] text-[#8c8273] dark:text-[#a3a3a3] px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-white/40 dark:border-[#30363d]/40 transition-colors duration-300">
                    {benefit.tagline}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg md:text-2xl font-bold text-[#111827] dark:text-[#fafafa] mb-1 md:mb-3 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-[12px] sm:text-[14px] md:text-[15px] text-[#4b5563] dark:text-[#a3a3a3] leading-relaxed mb-3 md:mb-8 transition-colors duration-300 font-medium">
                  {benefit.description}
                </p>
              </div>

              {/* Bottom Row: Stat metrics */}
              <div className="pt-3 md:pt-6 border-t border-white/60 dark:border-[#30363d]/60 flex items-baseline justify-between transition-colors duration-300">
                <span className="text-[9px] md:text-xs font-bold text-[#8c8273] dark:text-[#737373] uppercase tracking-wider">
                  {benefit.statLabel}
                </span>
                <span className="text-lg md:text-3xl font-extrabold text-amber-700 dark:text-amber-500 tracking-tight transition-colors duration-300">
                  {benefit.stat}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
