import { Check, Droplet, X, Moon, Sun, MessageSquare, Video, FileText, Hash, CheckCircle2 } from "lucide-react"

export function SimplicitySection() {
  return (
    <section className="pt-0 pb-16 md:pb-24 bg-[#f9f8f6]">
      <div className="container mx-auto px-6 max-w-5xl">


        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 3 */}
          <div className="bg-[#eeebe3] rounded-[2rem] p-8 h-[250px] flex flex-col">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 mb-auto shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h6 className="text-[17px] font-bold text-[#111827] mb-2 mt-6">Collaborate in realtime</h6>
            <p className="text-[#4b5563] leading-relaxed text-[15px] font-medium mt-1">
              Keep every conversation in sync use comments, messages, and project chats to stay on the same page.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#eeebe3] rounded-[2rem] p-8 h-[250px] flex flex-col">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 mb-auto shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <h6 className="text-[17px] font-bold text-[#111827] mb-2 mt-6">Speaks your language</h6>
            <p className="text-[#4b5563] leading-relaxed text-[15px] font-medium mt-1">
              Set your language, currency, time, and date preferences for a seamless experience that feels truly local.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#eeebe3] rounded-[2rem] p-8 h-[250px] flex flex-col">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 mb-auto shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            </div>
            <h6 className="text-[17px] font-bold text-[#111827] mb-2 mt-6">View things your way</h6>
            <p className="text-[#4b5563] leading-relaxed text-[15px] font-medium mt-1">
              Easily toggle between various views, including Kanban, cards, list, table, timeline, and calendar.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
