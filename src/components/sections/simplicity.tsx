import { Check, Droplet, X, Moon, Sun, MessageSquare, Video, FileText, Hash, CheckCircle2 } from "lucide-react"

export function SimplicitySection() {
  return (
    <section className="py-24 bg-[#f9f8f6]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h3 className="text-[#8c8273] font-bold tracking-widest uppercase text-xs mb-4">FEATURES</h3>
          <h2 className="text-4xl md:text-[2.75rem] font-bold text-[#111827] tracking-tight leading-[1.1]">
            Built for freelancers,<br/>powered by simplicity
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Card 1: Workflow & Customization */}
          <div className="bg-[#eeebe3] rounded-[2rem] p-10 flex flex-col min-h-[500px]">
            <h5 className="text-[24px] font-bold text-[#111827] mb-8 max-w-[280px] leading-[1.2]">Smart, flexible, and built around your business workflow</h5>
            
            {/* UI Mockup embedded inside the card */}
            <div className="bg-white rounded-3xl shadow-md border border-[#e5e0d8] p-5 flex flex-col gap-4 mb-8 z-10 w-full overflow-hidden">
                 
                 {/* Color Picker Row */}
                 <div className="bg-white border border-[#e5e0d8] rounded-2xl p-3 flex flex-wrap items-center justify-between shadow-sm gap-y-2">
                   <div className="flex flex-wrap gap-2">
                     <div className="w-8 h-8 rounded-full bg-[#5d463d] flex items-center justify-center text-white"><Check size={14} strokeWidth={3} /></div>
                     <div className="w-8 h-8 rounded-full bg-gray-500"></div>
                     <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
                     <div className="w-8 h-8 rounded-full bg-orange-500"></div>
                     <div className="w-8 h-8 rounded-full bg-green-500"></div>
                     <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                   </div>
                   <div className="flex gap-2 ml-auto md:ml-4">
                     <div className="w-8 h-8 rounded-full bg-[#f4efe9] flex items-center justify-center text-gray-400"><Droplet size={14} /></div>
                     <div className="w-8 h-8 rounded-full bg-[#f4efe9] flex items-center justify-center text-gray-400"><X size={14} /></div>
                   </div>
                 </div>

                 {/* Toggles Row */}
                 <div className="flex flex-col sm:flex-row gap-3">
                   <div className="bg-white border border-[#e5e0d8] rounded-2xl p-3 px-4 flex items-center justify-between sm:justify-start gap-3 shadow-sm flex-1">
                     <div className="w-9 h-5 bg-green-500 rounded-full flex items-center p-[2px] shrink-0"><div className="w-4 h-4 bg-white rounded-full translate-x-4"></div></div>
                     <span className="text-[12px] font-medium text-gray-700 whitespace-nowrap">Hide LawDesk branding</span>
                   </div>
                   <div className="bg-white border border-[#e5e0d8] rounded-2xl p-2 px-3 flex items-center justify-center gap-3 shadow-sm shrink-0">
                     <div className="w-7 h-7 rounded-full bg-[#f4efe9] flex items-center justify-center text-gray-500"><Moon size={14} /></div>
                     <div className="w-7 h-7 rounded-full bg-transparent flex items-center justify-center text-gray-400"><Sun size={14} /></div>
                   </div>
                 </div>

            </div>
            
            <p className="text-[#6b7280] leading-relaxed text-[15px] mt-auto">
              <strong className="text-[#111827]">Personalize every detail,</strong> From branding and interface layout to colors and menus, so LawDesk feels like an extension of your brand.
            </p>
          </div>

          {/* Card 2: Integrations */}
          <div className="bg-[#eeebe3] rounded-[2rem] p-10 flex flex-col min-h-[500px]">
            <h5 className="text-[24px] font-bold text-[#111827] mb-8 max-w-[280px] leading-[1.2]">Integrates seamlessly with the tools you already use</h5>
            
            {/* Apps Grid */}
            <div className="mb-12 flex-1 flex flex-col items-center justify-center">
               <div className="flex gap-3 justify-center mb-3">
                 <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-white flex items-center justify-center text-gray-700"><FileText /></div>
                 <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-white flex items-center justify-center text-pink-500"><Hash /></div>
                 <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-white flex items-center justify-center text-blue-500"><Video /></div>
                 <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-white flex items-center justify-center text-purple-600"><MessageSquare /></div>
               </div>
               <div className="flex gap-3 justify-center">
                 <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-white flex items-center justify-center text-pink-500"><Hash /></div>
                 <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-white flex items-center justify-center text-gray-700"><FileText /></div>
                 <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-white flex items-center justify-center text-blue-500"><Video /></div>
                 <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-white flex items-center justify-center text-purple-600"><MessageSquare /></div>
               </div>
            </div>

            <p className="text-[#6b7280] leading-relaxed text-[15px] mt-auto">
              <strong className="text-[#111827]">Seamless integrations.</strong> Plug LawDesk into the tools you love. Set up automations, sync your data, and make your systems work smarter together.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 3 */}
          <div className="bg-[#eeebe3] rounded-[2rem] p-8 h-[250px] flex flex-col">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 mb-auto shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h6 className="text-[17px] font-bold text-[#111827] mb-2 mt-6">Collaborate in realtime</h6>
            <p className="text-[#6b7280] leading-relaxed text-[14px]">
              Keep every conversation in sync use comments, messages, and project chats to stay on the same page.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#eeebe3] rounded-[2rem] p-8 h-[250px] flex flex-col">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 mb-auto shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <h6 className="text-[17px] font-bold text-[#111827] mb-2 mt-6">Speaks your language</h6>
            <p className="text-[#6b7280] leading-relaxed text-[14px]">
              Set your language, currency, time, and date preferences for a seamless experience that feels truly local.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#eeebe3] rounded-[2rem] p-8 h-[250px] flex flex-col">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 mb-auto shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            </div>
            <h6 className="text-[17px] font-bold text-[#111827] mb-2 mt-6">View things your way</h6>
            <p className="text-[#6b7280] leading-relaxed text-[14px]">
              Easily toggle between various views, including Kanban, cards, list, table, timeline, and calendar.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
