"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built.",
    author: "Sergio Walker",
    role: "Agency Owner",
  },
  {
    quote: "We used to duct-tape tools together. Now our contracts, time tracking, and payments live in one clean system. It's everything a small team needs to stay pro.",
    author: "Jane Jay Jay",
    role: "Project Manager, Google",
  },
  {
    quote: "Managing projects used to mean spreadsheets, DMs, and missed invoices. This platform keeps our workflows tight and our clients impressed.",
    author: "Amos Chen",
    role: "Art Director, Pentagram",
  },
  {
    quote: "As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built.",
    author: "Leah Daniel",
    role: "Design Ops Lead, teamwork.",
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-[#f4f6f8] relative overflow-hidden">
      <div className="container mx-auto px-6 mb-24">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h3 className="text-[#8c8273] font-bold tracking-widest uppercase text-xs mb-6">
             LawDesk
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] tracking-tight mb-12 leading-[1.1] text-center max-w-2xl mx-auto">
            "LawDesk is by far the best<br/>agency tool I have ever used"
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://i.pravatar.cc/150?img=47" alt="Martha Punla" className="w-12 h-12 rounded-full mb-4 shadow-sm" />
            <h4 className="font-bold text-[#111827] text-sm">Martha Punla</h4>
            <p className="text-xs text-[#6b7280]">VP Marketing, Meta</p>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel with Edge Masks */}
      <div className="relative max-w-6xl mx-auto overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_15%,_black_85%,transparent_100%)] flex items-center h-[350px]">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          className="flex gap-6 absolute left-0"
        >
          {/* Duplicate list for infinite loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-[2rem] w-[400px] h-full flex flex-col justify-between shrink-0 shadow-sm border border-[#e5e7eb]"
            >
              <p className="text-[#374151] text-[15px] leading-relaxed mb-10">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={`https://i.pravatar.cc/150?img=${i % 10 + 10}`} alt={t.author} className="w-10 h-10 rounded-full" />
                <div>
                  <h4 className="font-bold text-[#111827] text-sm">{t.author}</h4>
                  <p className="text-xs text-[#6b7280]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
