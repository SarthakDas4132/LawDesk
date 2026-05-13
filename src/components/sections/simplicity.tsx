"use client"
import { motion } from "framer-motion"
import { FeatureCard } from "../ui/feature-card"

export function SimplicitySection() {
  return (
    <section className="pt-0 pb-16 md:pb-24 bg-[#f9f8f6]">
      <div className="container mx-auto px-5 md:px-6 max-w-5xl">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <FeatureCard
            delay={0.3}
            title="Collaborate in realtime"
            description="Keep every conversation in sync use comments, messages, and project chats to stay on the same page."
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
          />
          <FeatureCard
            delay={0.4}
            title="Speaks your language"
            description="Set your language, currency, time, and date preferences for a seamless experience that feels truly local."
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>}
          />
          <FeatureCard
            delay={0.5}
            title="View things your way"
            description="Easily toggle between various views, including Kanban, cards, list, table, timeline, and calendar."
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>}
          />
        </div>
      </div>
    </section>
  )
}
