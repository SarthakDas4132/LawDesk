"use client"

import { motion } from "framer-motion"

const baseLogos = [
  "/logos/Slack_Mark_Web.png",
  "/logos/google-calendar.png",
  "/logos/asana.png",
  "/logos/trello.png",
  "/logos/email.png",
  "/logos/whatsapp.png",
  "/logos/meet.png"
]

// Pre-shuffled arrays to avoid hydration errors
const row1 = [baseLogos[0], baseLogos[3], baseLogos[1], baseLogos[6], baseLogos[2], baseLogos[4], baseLogos[5]]
const row2 = [baseLogos[5], baseLogos[2], baseLogos[6], baseLogos[1], baseLogos[3], baseLogos[4], baseLogos[0]]
const row3 = [baseLogos[3], baseLogos[0], baseLogos[5], baseLogos[2], baseLogos[6], baseLogos[1], baseLogos[4]]
const row4 = [baseLogos[6], baseLogos[4], baseLogos[0], baseLogos[3], baseLogos[5], baseLogos[2], baseLogos[1]]
const row5 = [baseLogos[1], baseLogos[5], baseLogos[4], baseLogos[0], baseLogos[2], baseLogos[6], baseLogos[3]]

// Duplicate sequence to ensure seamless loop
const makeLongRow = (arr: string[]) => [...arr, ...arr, ...arr]

const MarqueeRow = ({ items, reverse, duration }: { items: string[], reverse?: boolean, duration: number }) => {
  return (
    <div className="flex gap-4 md:gap-5 w-max">
       <motion.div
         animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
         transition={{ repeat: Infinity, ease: "linear", duration }}
         className="flex gap-4 md:gap-5 w-max pr-4 md:pr-5"
       >
         {/* Render items twice to ensure smooth infinite scroll (50% translation) */}
         {[...items, ...items].map((logo, i) => (
           <div key={i} className="w-12 h-12 md:w-[72px] md:h-[72px] bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shrink-0">
             <img src={logo} alt="Integration Logo" className="w-6 h-6 md:w-10 md:h-10 object-contain" />
           </div>
         ))}
       </motion.div>
    </div>
  )
}

export function IntegrationsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f9f8f6]">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#8c8273] font-bold tracking-widest uppercase text-xs mb-4"
          >
            FEATURES
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-[3.25rem] font-bold text-[#111827] tracking-tight leading-[1.1]"
          >
            Integrations
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] relative min-h-[400px] md:min-h-[500px]"
        >
          
          {/* Background/Left Grid */}
          <div className="w-full md:w-[55%] absolute md:relative inset-0 flex items-center justify-center md:justify-start h-[400px] md:h-[550px] overflow-hidden">
            {/* The CSS mask creates the smooth fade into black on the right side, DESKTOP ONLY */}
            <div 
              className="hidden md:block absolute inset-0 z-10 pointer-events-none" 
              style={{
                background: 'linear-gradient(to right, transparent 30%, #0a0a0a 95%)'
              }}
            ></div>
            
            {/* Oversized container. On mobile, opacity is reduced so text stands out without a black box */}
            <div className="absolute top-1/2 left-1/2 md:left-0 -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 w-[250%] sm:w-[200%] md:w-[150%] transform -rotate-2 scale-110 opacity-30 md:opacity-100">
              <div className="flex flex-col gap-3 md:gap-5 md:-ml-[50%]">
                <MarqueeRow items={makeLongRow(row1)} duration={35} />
                <MarqueeRow items={makeLongRow(row2)} reverse duration={45} />
                <MarqueeRow items={makeLongRow(row3)} duration={40} />
                <MarqueeRow items={makeLongRow(row4)} reverse duration={38} />
                <MarqueeRow items={makeLongRow(row5)} duration={42} />
              </div>
            </div>
          </div>

          {/* Foreground/Right Side */}
          <div className="w-full md:w-[45%] flex flex-col items-center justify-center p-8 md:p-16 z-20 relative h-[400px] md:h-auto mt-auto md:mt-0">
            {/* Subtle glow behind the logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-white/10 rounded-full blur-[60px] md:blur-[80px] pointer-events-none"></div>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white w-24 h-24 md:w-[136px] md:h-[136px] rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center mb-6 md:mb-10 shadow-[0_0_30px_rgba(255,255,255,0.2)] relative z-10"
            >
               <img src="/logos/logo-v2.png" alt="LegalRobe Logo" className="w-[60%] h-[60%] object-contain drop-shadow-sm" />
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-[#f9f8f6] text-[1.5rem] md:text-[2rem] font-bold text-center leading-[1.2] max-w-[280px] md:max-w-[320px] tracking-tight relative z-10 drop-shadow-md"
            >
              Streamline your workflow with a single, unified platform.
            </motion.h3>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
