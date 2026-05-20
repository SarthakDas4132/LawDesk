"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What is LegalRobe and who is it for?",
    answer: "LegalRobe is an all-in-one AI-powered legal workspace management platform built for modern law firms of all sizes — from solo practitioners to large enterprises. It consolidates case management, client records, hearing tracking, document storage, and an AI legal assistant into a single, beautifully designed platform."
  },
  {
    question: "How does the AI Legal Assistant work?",
    answer: "The AI Legal Assistant uses advanced language models trained on legal contexts to help lawyers quickly find case details, summarize lengthy documents, answer internal legal questions, and draft routine correspondence. It learns from your case history to give more contextual and relevant responses over time."
  },
  {
    question: "Is my data secure and encrypted?",
    answer: "Absolutely. Security is our top priority. All your case data is encrypted both at rest and in transit using industry-standard AES-256 encryption. We also offer automatic cloud backup, so your data is always protected and accessible from any device. We are fully compliant with data protection regulations."
  },
  {
    question: "Can I access LegalRobe on mobile devices?",
    answer: "Yes. LegalRobe is available as a native iOS and Android app, fully mirroring the desktop experience. The mobile app supports offline access, so you can view your cases and documents even in a courtroom without an internet connection."
  },
  {
    question: "What is the difference between the Basic and Premium plans?",
    answer: "The Basic plan is free and ideal for solo lawyers, covering unlimited projects, clients, time tracking, and CRM access. The Premium plan adds invoicing and payment processing, expense and income tracking, and smart scheduling — perfect for growing law firms. Enterprise offers flexible custom pricing, advanced onboarding, data import, and Hubspot integration for large teams."
  },
  {
    question: "Does LegalRobe integrate with Google Drive?",
    answer: "Yes. LegalRobe features native Google Drive integration for document storage and backup. You can attach petitions, evidence files, and court orders directly to each case, with all files automatically synced to your connected Google Drive account. This ensures seamless access and a complete audit trail."
  },
  {
    question: "Can I switch between plans at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any point. When upgrading, the change takes effect immediately and you'll be billed on a pro-rated basis. When downgrading, the change takes effect at the start of your next billing cycle. All your data remains intact regardless of plan changes."
  },
  {
    question: "Is there a free trial for the Premium plan?",
    answer: "Yes. We offer a 14-day free trial of LegalRobe Premium with no credit card required. You'll have full access to all Premium features during the trial period, allowing you to experience the complete platform before committing to a subscription."
  },
  {
    question: "How does the Hearing Tracker work?",
    answer: "The Hearing Tracker maintains a smart calendar of all upcoming and past hearings linked to your cases. It sends automatic reminders ahead of hearing dates, tracks the status of each hearing (scheduled, adjourned, completed), and gives your entire team a real-time view of your firm's court schedule."
  },
  {
    question: "Do you offer onboarding support for new users?",
    answer: "Yes. All plans include access to our comprehensive documentation, video tutorials, and a dedicated support team. Premium users get priority email support, while Enterprise clients receive personalized advanced onboarding sessions, custom data import assistance, and a dedicated account manager."
  }
]

function highlight(text: string, query: string) {
  if (!query.trim()) return text
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
  const parts = text.split(regex)
  return parts.map((part, i) =>
    regex.test(part)
      ? `<mark class="bg-[#fde68a] dark:bg-[#92400e]/60 text-[#111827] dark:text-[#fef3c7] rounded px-0.5 not-italic">${part}</mark>`
      : part
  ).join("")
}

function FAQItem({ question, answer, query, index }: { question: string; answer: string; query: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  const highlightedQuestion = useMemo(() => highlight(question, query), [question, query])
  const highlightedAnswer = useMemo(() => highlight(answer, query), [answer, query])

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-[#e5e0d8] dark:border-[#262626] last:border-b-0 transition-colors duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className="text-[16px] md:text-[17px] font-semibold text-[#111827] dark:text-[#fafafa] leading-snug group-hover:text-[#4b5563] dark:group-hover:text-[#d4d4d8] transition-colors duration-200"
          dangerouslySetInnerHTML={{ __html: highlightedQuestion }}
        />
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 w-8 h-8 rounded-full bg-[#f2f0ea] dark:bg-[#1f1f1f] border border-[#e5e0d8] dark:border-[#333333] flex items-center justify-center text-[#4b5563] dark:text-[#a3a3a3] group-hover:bg-[#e8e4dc] dark:group-hover:bg-[#2a2a2a] transition-colors duration-200"
        >
          {isOpen
            ? <Minus size={14} strokeWidth={2.5} />
            : <Plus size={14} strokeWidth={2.5} />
          }
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p
              className="text-[#4b5563] dark:text-[#a3a3a3] text-[15px] leading-relaxed pb-6 pr-14 transition-colors duration-300"
              dangerouslySetInnerHTML={{ __html: highlightedAnswer }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  const [query, setQuery] = useState("")
  const [showAll, setShowAll] = useState(false)
  const INITIAL_COUNT = 4

  const filtered = useMemo(() => {
    const base = !query.trim()
      ? faqs
      : faqs.filter(f =>
          f.question.toLowerCase().includes(query.toLowerCase()) ||
          f.answer.toLowerCase().includes(query.toLowerCase())
        )
    // When searching, always show all matches; otherwise respect showAll
    return query.trim() ? base : (showAll ? base : base.slice(0, INITIAL_COUNT))
  }, [query, showAll])

  const totalFiltered = useMemo(() => {
    if (!query.trim()) return faqs.length
    return faqs.filter(f =>
      f.question.toLowerCase().includes(query.toLowerCase()) ||
      f.answer.toLowerCase().includes(query.toLowerCase())
    ).length
  }, [query])

  const hasMore = !query.trim() && faqs.length > INITIAL_COUNT

  return (
    <section id="faq" className="pt-12 pb-20 md:pt-16 md:pb-28 bg-[#f9f8f6] dark:bg-[#0d1117] transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h3 className="text-[#8c8273] dark:text-[#737373] font-bold tracking-widest uppercase text-xs mb-4 transition-colors duration-300">
            Help Center
          </h3>
          <h2 className="text-4xl md:text-[3.5rem] font-bold text-[#111827] dark:text-[#fafafa] tracking-tight leading-[1.1] mb-5 transition-colors duration-300">
            Frequently asked<br className="hidden md:block" /> questions
          </h2>
          <p className="text-[#4b5563] dark:text-[#a3a3a3] text-[17px] max-w-xl mx-auto leading-relaxed transition-colors duration-300">
            Everything you need to know about LegalRobe. Can't find an answer?{" "}
            <a href="/contact-us" className="text-[#111827] dark:text-[#fafafa] font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity">
              Chat with us.
            </a>
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-10 md:mb-12"
        >
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search size={18} className="text-[#9ca3af] dark:text-[#6b7280]" />
          </div>
          <input
            type="text"
            placeholder="Search questions…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full pl-12 pr-5 py-4 rounded-2xl bg-[#eeebe3] dark:bg-[#161b22] border border-[#e5e0d8] dark:border-[#30363d] text-[#111827] dark:text-[#fafafa] placeholder-[#9ca3af] dark:placeholder-[#6b7280] text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-[#111827]/20 dark:focus:ring-[#fafafa]/10 transition-all duration-300"
          />
          <AnimatePresence>
            {query && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                onClick={() => setQuery("")}
                className="absolute inset-y-0 right-4 flex items-center text-[#9ca3af] dark:text-[#6b7280] hover:text-[#111827] dark:hover:text-[#fafafa] transition-colors text-sm font-medium"
              >
                Clear
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          layout
          className="bg-[#eeebe3] dark:bg-[#161b22] rounded-3xl border border-[#e5e0d8] dark:border-[#30363d] px-6 md:px-10 transition-colors duration-300"
        >
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              filtered.map((faq, i) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  query={query}
                  index={i}
                />
              ))
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-16 text-center"
              >
                <p className="text-[#9ca3af] dark:text-[#6b7280] text-[16px] font-medium">
                  No results for "<span className="text-[#111827] dark:text-[#fafafa]">{query}</span>"
                </p>
                <p className="text-[#9ca3af] dark:text-[#6b7280] text-[14px] mt-2">
                  Try a different keyword or{" "}
                  <button onClick={() => setQuery("")} className="underline underline-offset-2 hover:text-[#111827] dark:hover:text-[#fafafa] transition-colors">
                    clear the search
                  </button>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Show more / less */}
        <AnimatePresence>
          {hasMore && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center mt-6"
            >
              <button
                onClick={() => setShowAll(v => !v)}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-[#1a1818] dark:border-[#fafafa] text-[#111827] dark:text-[#fafafa] text-[14px] font-bold hover:bg-[#1a1818] hover:text-white dark:hover:bg-[#fafafa] dark:hover:text-[#0a0a0a] transition-all duration-300"
              >
                <motion.span
                  key={showAll ? "less" : "more"}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                >
                  {showAll ? "Show less" : "Show more"}
                </motion.span>
                <motion.svg
                  animate={{ rotate: showAll ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </motion.svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Result count badge when searching */}
        <AnimatePresence>
          {query && totalFiltered > 0 && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-center text-[13px] text-[#9ca3af] dark:text-[#6b7280] mt-5"
            >
              Showing {totalFiltered} of {faqs.length} questions
            </motion.p>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
