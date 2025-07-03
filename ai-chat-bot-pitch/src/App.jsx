import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Bot, Search, Bookmark, X, Settings, FileText, Users, LayoutDashboard } from 'lucide-react'
import './App.css'

// ChatWidgetDemo Component for FFX NOVA demonstration
function ChatWidgetDemo() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("chat");

  return (
    <>
      {/* Collapsed launcher */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed right-4 top-1/2 z-50 -translate-y-1/2 rotate-90 origin-right py-2 px-4 rounded-t-full flex items-center gap-1 shadow-lg"
          style={{
            backgroundColor: '#0f172a',
            color: '#ffffff',
            border: 'none',
            fontSize: '0.75rem',
            fontWeight: '600'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1e293b'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#0f172a'}
        >
          <Bot className="w-4 h-4" style={{ color: '#ffffff' }} />
          <span className="whitespace-nowrap" style={{ color: '#ffffff' }}>
            Find&nbsp;Jobs&nbsp;in&nbsp;NOVA
          </span>
        </button>
      )}

      {/* Expanded panel */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
          />

          <div className="fixed right-0 top-0 z-50 h-full w-[420px] max-w-full bg-white shadow-xl flex flex-col">
                         {/* Header */}
             <header className="h-16 px-6 flex items-center justify-between border-b border-slate-200">
               <span className="flex items-center gap-3 text-base font-semibold text-slate-800">
                 <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded-full">
                   <Bot className="w-4 h-4" />
                 </div>
                 Fairfax NOVA Career Bot
               </span>
               <button
                 onClick={() => setOpen(false)}
                 className="chatbot-button p-2 rounded-full hover:bg-slate-100 transition-colors"
                 aria-label="Close chat"
               >
                 <X className="w-5 h-5 text-slate-600" />
               </button>
             </header>

                         {/* Tab bar */}
             <div className="flex justify-center gap-4 border-b border-slate-200 px-6 py-4">
               {[
                 { id: "chat", label: "Chat", Icon: Bot },
                 { id: "search", label: "Search", Icon: Search },
                 { id: "saved", label: "Saved", Icon: Bookmark },
               ].map(({ id, label, Icon }) => (
                 <button
                   key={id}
                   onClick={() => setTab(id)}
                   className={
                     tab === id
                       ? "chatbot-button flex items-center gap-2 rounded-full text-sm font-medium shadow-md"
                       : "chatbot-button flex items-center gap-2 rounded-full hover:bg-slate-100 text-slate-700 text-sm font-medium transition-colors border border-slate-200"
                   }
                   style={
                     tab === id 
                       ? { backgroundColor: '#0f172a', color: '#ffffff', padding: '8px 16px' } 
                       : { padding: '8px 16px' }
                   }
                 >
                   <Icon className="w-4 h-4" style={tab === id ? { color: '#ffffff' } : { color: '#334155' }} /> 
                   <span style={tab === id ? { color: '#ffffff' } : { color: '#334155' }}>{label}</span>
                 </button>
               ))}
             </div>

                         {/* Body */}
             <main className="flex-1 overflow-y-auto p-6 space-y-4 text-sm">
               {tab === "chat" && (
                 <>
                   {/* Bot initial message */}
                   <div className="flex items-start gap-3">
                     <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded-full flex-shrink-0">
                       <Bot className="w-4 h-4" />
                     </div>
                     <div className="flex-1">
                       <div className="bg-slate-50 p-4 rounded-2xl">
                         <p className="text-slate-800 font-medium mb-2">👋 Hi! I'm your NOVA career assistant.</p>
                         <p className="text-slate-600">I can help you explore 48,000+ jobs, salary info, and career paths in Fairfax NOVA. What brings you here today?</p>
                       </div>
                     </div>
                   </div>

                   {/* User message */}
                   <div className="flex items-start gap-3 justify-end">
                     <div className="flex-1 max-w-sm">
                       <div className="bg-blue-600 text-white p-4 rounded-2xl">
                         <p>I'm a software engineer looking for tech jobs that pay over $120k in the DC area. Any remote options?</p>
                       </div>
                     </div>
                     <div className="w-8 h-8 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full flex-shrink-0">
                       <span className="text-sm font-medium">U</span>
                     </div>
                   </div>

                   {/* Bot response */}
                   <div className="flex items-start gap-3">
                     <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded-full flex-shrink-0">
                       <Bot className="w-4 h-4" />
                     </div>
                     <div className="flex-1">
                       <div className="bg-slate-50 p-4 rounded-2xl">
                         <p className="text-slate-800 font-medium mb-3">Great! Found 1,247 tech roles over $120k in NOVA. 🎯</p>
                         <div className="space-y-3">
                           <div className="bg-white p-3 rounded-lg border border-slate-200">
                             <p className="font-medium text-slate-800">Senior Software Engineer @ Capital One</p>
                             <p className="text-sm text-slate-600">$135k-$165k • Remote/Hybrid • Posted 2 days ago</p>
                           </div>
                           <div className="bg-white p-3 rounded-lg border border-slate-200">
                             <p className="font-medium text-slate-800">Full Stack Developer @ Booz Allen</p>
                             <p className="text-sm text-slate-600">$125k-$150k • Remote First • Security clearance preferred</p>
                           </div>
                         </div>
                         <p className="text-slate-600 mt-3 text-sm">Want me to filter by specific skills or companies?</p>
                       </div>
                     </div>
                   </div>
                 </>
               )}

                             {tab === "search" && (
                 <div className="space-y-4">
                   <div className="text-slate-800 font-medium">Quick Search</div>
                   <div className="flex flex-wrap gap-2">
                     {['Technology', 'Healthcare', 'Government', 'Finance', 'Aerospace'].map((industry) => (
                       <button key={industry} className="chatbot-button px-4 py-2 bg-slate-100 rounded-full text-sm hover:bg-slate-200 transition-colors border border-slate-200 text-slate-700">
                         {industry}
                       </button>
                     ))}
                   </div>
                   <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                     <div className="text-slate-700 font-medium mb-2">🔍 Advanced Filters</div>
                     <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                       <div>• Salary: $80k - $200k+</div>
                       <div>• Remote/Hybrid</div>
                       <div>• Experience level</div>
                       <div>• Security clearance</div>
                     </div>
                   </div>
                 </div>
               )}

               {tab === "saved" && (
                 <div className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-200">
                   <div className="text-slate-400 text-3xl mb-3">💾</div>
                   <div className="text-slate-700 font-medium mb-2">No saved items yet</div>
                   <div className="text-slate-500 text-sm">Save jobs and conversations for quick access later.</div>
                 </div>
               )}
            </main>

                         {/* Input bar */}
             <form className="p-4 border-t border-slate-200 flex gap-3" onSubmit={(e) => e.preventDefault()}>
               <input
                 className="flex-1 border border-slate-200 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white"
                 placeholder="Ask about jobs, salaries, or career paths..."
                 disabled
               />
               <button
                 className="chatbot-button px-5 py-3 bg-slate-900 text-white rounded-full text-sm opacity-50 flex items-center gap-2 hover:opacity-60 transition-opacity"
                 disabled
               >
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                 </svg>
               </button>
             </form>
          </div>
        </>
      )}
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-50 to-light-100">
      {/* Fixed Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-light-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <span className="font-heading font-semibold text-dark-900">ChatFlow Pro</span>
          </div>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex gap-8">
            <a href="#hero" className="text-dark-600 hover:text-primary-600 transition-colors">Overview</a>
            <a href="#dashboard" className="text-dark-600 hover:text-primary-600 transition-colors">Dashboard</a>
            <a href="#synergy" className="text-dark-600 hover:text-primary-600 transition-colors">Advantage</a>
            <a href="#value" className="text-dark-600 hover:text-primary-600 transition-colors">Live Demo</a>
            <a href="#brand" className="text-dark-600 hover:text-primary-600 transition-colors">Branding</a>
            <a href="#security" className="text-dark-600 hover:text-primary-600 transition-colors">Security</a>
            <a href="#engagement" className="text-dark-600 hover:text-primary-600 transition-colors">Implementation</a>
          </nav>
        </div>
      </header>

      {/* Main Content - Full Page Sections */}
      <main>
        <HeroSection />
        <DashboardSection />
        <SynergySection />
        <ValueSection />
        <BrandSection />
        <SecuritySection />
        <EngagementSection />
      </main>

      {/* Demo Widget - only shows in Value section */}
      <ChatWidgetDemo />
    </div>
  )
}

// Section Components - Each takes full viewport height
function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-light-50 to-light-100">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl font-heading font-bold text-dark-900 mb-6">
          AI Chatbots for Your WordPress Sites
        </h1>
        <p className="text-2xl text-dark-600 mb-12 font-body">
          Turn every visitor into a potential lead.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-accent-600 text-4xl font-bold mb-2">1</div>
            <p className="text-dark-700">Universal widget</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-accent-600 text-4xl font-bold mb-2">5</div>
            <p className="text-dark-700">WordPress sites</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-accent-600 text-4xl font-bold mb-2">24/7</div>
            <p className="text-dark-700">Lead capture</p>
          </div>
        </div>

        <p className="text-dark-500">One solution across your entire WordPress portfolio.</p>
        
        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 text-dark-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

function DashboardSection() {
  return (
    <section id="dashboard" className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-heading font-bold text-dark-900 mb-4">
            All Your Bots. One Dashboard.
          </h2>
          <p className="text-xl text-dark-600 font-body">Professional admin interface for managing all client chatbots</p>
        </div>

        {/* Dashboard Mockup */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden" style={{height: '600px'}}>
          <div className="flex h-full bg-slate-50 font-sans">
            {/* Sidebar */}
            <aside className="w-60 shrink-0 bg-white border-r border-slate-200 flex flex-col">
              <h2 className="px-6 py-4 text-xl font-bold tracking-tight flex items-center gap-2">
                <LayoutDashboard className="w-5 h-5"/>
                ChatFlow Pro
              </h2>
              <nav className="mt-4 flex flex-col gap-1 px-4 text-sm">
                <a className="flex items-center gap-2 rounded px-3 py-2 hover:bg-slate-100 font-medium text-slate-900 bg-slate-100">
                  <Bot className="w-4 h-4"/> Chatbots
                </a>
                <a className="flex items-center gap-2 rounded px-3 py-2 hover:bg-slate-100 text-slate-600">
                  <Users className="w-4 h-4"/> Clients
                </a>
                <a className="flex items-center gap-2 rounded px-3 py-2 hover:bg-slate-100 text-slate-600">
                  <FileText className="w-4 h-4"/> Knowledge
                </a>
                <a className="flex items-center gap-2 rounded px-3 py-2 hover:bg-slate-100 text-slate-600">
                  <Settings className="w-4 h-4"/> Settings
                </a>
              </nav>
              <div className="mt-auto px-4 pb-4 text-xs text-slate-500">v1.0 demo</div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8">
              <h1 className="text-2xl font-semibold mb-6">Chatbots</h1>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {[
                  {name: "Love Kansas", color: "bg-yellow-400", msgs: "4.2k", cost: "$24"},
                  {name: "Fairfax NOVA", color: "bg-blue-600", msgs: "6.8k", cost: "$38"},
                  {name: "Carolina Core", color: "bg-slate-900", msgs: "3.1k", cost: "$18"},
                  {name: "Stay for Philly", color: "bg-rose-600", msgs: "5.4k", cost: "$31"},
                  {name: "You Can in MI", color: "bg-emerald-600", msgs: "3.7k", cost: "$22"},
                ].map(({name, color, msgs, cost}) => (
                  <div key={name} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                    <div className={`h-2 ${color}`}></div>
                    <div className="p-4 flex flex-col gap-3">
                      <div className="text-lg font-medium text-slate-900">{name}</div>
                      <div className="flex items-center justify-between text-xs text-slate-600">
                        <span>{msgs} msgs / mo</span>
                        <span>{cost} token cost</span>
                      </div>
                      <button className="mt-2 inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-3 py-1.5 text-xs hover:bg-slate-700 transition-colors">
                        Configure
                      </button>
                    </div>
                  </div>
                ))}
                
                {/* Add New Chatbot Card */}
                <div className="bg-white rounded-lg shadow-sm border-2 border-dashed border-slate-300 hover:border-slate-400 transition-colors cursor-pointer">
                  <div className="p-4 flex flex-col items-center justify-center h-full min-h-[140px]">
                    <svg className="w-8 h-8 text-slate-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="text-sm text-slate-600 font-medium">Add New Bot</span>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        <div className="mt-8 text-center">
          <ul className="inline-flex flex-col text-left gap-3 text-dark-700">
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Professional admin interface with sidebar navigation
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Real-time usage metrics and cost tracking per site
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              One-click configuration and deployment
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function SynergySection() {
  return (
    <section id="synergy" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-heading font-bold text-dark-900 mb-4">
            Your Secret Advantage
          </h2>
          <p className="text-xl text-dark-600 font-body">All five sites share the same foundation</p>
        </div>

        {/* Main Value Proposition */}
        <div className="bg-white rounded-2xl shadow-2xl p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-dark-900 mb-6">
                Build Once. Deploy Everywhere.
              </h3>
              <p className="text-lg text-dark-600 mb-6">
                Every client site uses identical technology: WordPress, Vue, and the same custom theme. 
                This isn't just convenient—it's your competitive moat.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-success-600 font-bold text-sm">1×</span>
                  </div>
                  <div>
                    <p className="font-semibold text-dark-800">Development Cost</p>
                    <p className="text-dark-600 text-sm">One chatbot codebase works across all sites</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-success-600 font-bold text-sm">5</span>
                  </div>
                  <div>
                    <p className="font-semibold text-dark-800">Sites Live on Day 1</p>
                    <p className="text-dark-600 text-sm">Deploy to five sites immediately</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-success-600 font-bold text-sm">0×</span>
                  </div>
                  <div>
                    <p className="font-semibold text-dark-800">Extra Development Hours</p>
                    <p className="text-dark-600 text-sm">Works on every client site you already manage—no extra dev hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Visual representation */}
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-dark-800">One Codebase</p>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { name: "Love Kansas", color: "bg-yellow-400" },
                    { name: "Fairfax NOVA", color: "bg-blue-500" },
                    { name: "Carolina Core", color: "bg-slate-700" },
                    { name: "Stay for Philly", color: "bg-rose-500" },
                    { name: "You Can in MI", color: "bg-emerald-500" }
                  ].map((site) => (
                    <div key={site.name} className="bg-white rounded-lg p-3 flex items-center gap-3 shadow-sm">
                      <div className={`w-4 h-4 rounded-full ${site.color}`}></div>
                      <span className="text-sm font-medium text-dark-700">{site.name}</span>
                      <div className="ml-auto">
                        <svg className="w-4 h-4 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shared Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-dark-900 mb-2 text-xl">Cost Calculators</h3>
            <p className="text-dark-600 text-sm">Kansas, Michigan, Carolina, and Philly all use the same cost-of-living tools</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
            </div>
            <h3 className="font-semibold text-dark-900 mb-2 text-xl">Job Boards</h3>
            <p className="text-dark-600 text-sm">NOVA, Carolina, Kansas, and Philly share identical job search infrastructure</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-dark-900 mb-2 text-xl">Community Matching</h3>
            <p className="text-dark-600 text-sm">Philly, Carolina, and Kansas use the same neighborhood quiz technology</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              {/* GTM Icon */}
              <svg className="w-8 h-8 text-accent-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.93-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-dark-900 mb-2 text-xl">Built-in Analytics</h3>
            <div className="text-dark-600 text-sm space-y-2">
              <p>GTM events fire automatically across all sites</p>
              <div className="flex items-center justify-center gap-1 text-xs text-success-700">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Attribution out-of-the-box
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Impact Statement */}
        <div className="text-center">
          <div className="bg-dark-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">The Bottom Line</h3>
            <p className="text-lg text-dark-100 mb-6">
              While your competitors build custom solutions for each client, you deploy proven technology across your entire portfolio.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent-400 mb-2">80%</div>
                <p className="text-dark-200">Lower development cost per site</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-400 mb-2">5x</div>
                <p className="text-dark-200">Faster time to market</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-400 mb-2">100%</div>
                <p className="text-dark-200">Consistent quality across all sites</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ValueSection() {
  return (
    <section id="value" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-primary-50 to-accent-50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-heading font-bold text-dark-900 mb-4">
            Live Demo: FFX NOVA Site
          </h2>
          <p className="text-xl text-dark-600 font-body">See how it works on a real client site</p>
        </div>

        {/* FFX NOVA Site Mockup */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
          {/* Fake Browser Header */}
          <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 bg-white rounded-lg px-3 py-1 text-sm text-gray-600 text-center">
              workinffxnova.com
            </div>
          </div>

          {/* FFX NOVA Homepage Mockup */}
          <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white p-8 relative opacity-70">
            <div className="max-w-4xl">
              <div className="flex items-center justify-between mb-8">
                <div className="text-2xl font-bold">FFX NOVA</div>
                <div className="flex gap-6 text-sm">
                  <span>EVENTS</span>
                  <span>ABOUT US</span>
                  <span>EMPLOYER RESOURCES</span>
                  <span>CAREER RESOURCES</span>
                  <span className="bg-green-500 px-3 py-1 rounded">FIND A JOB</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl font-bold">
                  FIND YOUR<br />
                  <span className="text-green-400">FUTURE</span> HERE.
                </h1>
                <p className="text-xl opacity-90 max-w-2xl">
                  In FFX NOVA, your career is created through adventure, and your path forward is driven by purpose.
                </p>
                <div className="flex gap-4">
                  <button className="bg-purple-800 px-6 py-3 rounded font-medium">
                    LOOKING FOR A JOB? GET HELP NOW!
                  </button>
                  <button className="bg-purple-800 px-6 py-3 rounded font-medium">
                    CONNECT TO THOUSANDS OF JOB OPENINGS
                  </button>
                  <button className="bg-purple-800 px-6 py-3 rounded font-medium">
                    KEY INDUSTRIES
                  </button>
                </div>
              </div>
            </div>
            
            {/* Instruction overlay */}
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg p-4 text-sm">
              <p className="mb-2">👆 <strong>Try the chatbot!</strong></p>
              <p>Click "Find Jobs in NOVA" on the right edge →</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-dark-900 mb-2 text-xl">Instant Answers (48K+ jobs)</h3>
            <p className="text-dark-600">Pulls from job listings and site content</p>
          </div>
          
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-semibold text-dark-900 mb-2 text-xl">Smart Matching</h3>
            <p className="text-dark-600">Connects users to relevant jobs and resources</p>
          </div>
          
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-dark-900 mb-2 text-xl">Zero Setup</h3>
            <p className="text-dark-600">Works immediately with existing content</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function BrandSection() {
  return (
    <section id="brand" className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-heading font-bold text-dark-900 mb-4">
            Looks and Sounds Like <em>You</em>
          </h2>
          <p className="text-xl text-dark-600 font-body">Because generic bots don't build brands.</p>
        </div>

        {/* Customization Demo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-light-50 rounded-2xl shadow-xl p-8">
            <h3 className="font-semibold text-dark-900 mb-6 text-xl">Customize for Love Kansas</h3>
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-3">Widget Position</label>
                <div className="grid grid-cols-4 gap-2">
                  <button className="p-3 border-2 border-light-300 rounded-lg hover:border-primary-600 transition-colors">
                    <svg className="w-6 h-6 mx-auto text-dark-600" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="4" height="4" />
                    </svg>
                    <span className="text-xs text-dark-600 mt-1 block">Top Left</span>
                  </button>
                  <button className="p-3 border-2 border-light-300 rounded-lg hover:border-primary-600 transition-colors">
                    <svg className="w-6 h-6 mx-auto text-dark-600" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="10" y="2" width="4" height="4" />
                    </svg>
                    <span className="text-xs text-dark-600 mt-1 block">Top Center</span>
                  </button>
                  <button className="p-3 border-2 border-light-300 rounded-lg hover:border-primary-600 transition-colors">
                    <svg className="w-6 h-6 mx-auto text-dark-600" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="18" y="2" width="4" height="4" />
                    </svg>
                    <span className="text-xs text-dark-600 mt-1 block">Top Right</span>
                  </button>
                  <button className="p-3 border-2 border-light-300 rounded-lg hover:border-primary-600 transition-colors">
                    <svg className="w-6 h-6 mx-auto text-dark-600" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="10" width="4" height="4" />
                    </svg>
                    <span className="text-xs text-dark-600 mt-1 block">Mid Left</span>
                  </button>
                  <button className="p-3 border-2 border-primary-600 rounded-lg bg-primary-50">
                    <svg className="w-6 h-6 mx-auto text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="18" y="10" width="4" height="4" />
                    </svg>
                    <span className="text-xs text-primary-600 mt-1 block font-medium">Mid Right</span>
                  </button>
                  <button className="p-3 border-2 border-light-300 rounded-lg hover:border-primary-600 transition-colors">
                    <svg className="w-6 h-6 mx-auto text-dark-600" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="18" width="4" height="4" />
                    </svg>
                    <span className="text-xs text-dark-600 mt-1 block">Bot Left</span>
                  </button>
                  <button className="p-3 border-2 border-light-300 rounded-lg hover:border-primary-600 transition-colors">
                    <svg className="w-6 h-6 mx-auto text-dark-600" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="10" y="18" width="4" height="4" />
                    </svg>
                    <span className="text-xs text-dark-600 mt-1 block">Bot Center</span>
                  </button>
                  <button className="p-3 border-2 border-light-300 rounded-lg hover:border-primary-600 transition-colors">
                    <svg className="w-6 h-6 mx-auto text-dark-600" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="18" y="18" width="4" height="4" />
                    </svg>
                    <span className="text-xs text-dark-600 mt-1 block">Bot Right</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-3">Brand Colors</label>
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-red-500 rounded-xl cursor-pointer ring-2 ring-offset-2 ring-primary-600"></div>
                  <div className="w-16 h-16 bg-red-700 rounded-xl cursor-pointer"></div>
                  <input type="text" value="#DC2626" className="flex-1 px-4 py-3 border border-light-300 rounded-xl text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-3">Tone of Voice</label>
                <select className="w-full px-4 py-3 border border-light-300 rounded-xl">
                  <option>Friendly & Welcoming</option>
                  <option>Professional</option>
                  <option>Casual & Fun</option>
                  <option>Formal</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-3">Knowledge Sources</label>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-light-200">
                    <span className="text-sm text-dark-700">Auto-crawl website</span>
                    <div className="w-12 h-6 bg-success-600 rounded-full relative cursor-pointer">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-light-200">
                    <span className="text-sm text-dark-700">Kansas-Guide-2025.pdf</span>
                    <span className="text-xs text-success-600 font-medium">Uploaded</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Website Preview */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 h-[500px] relative overflow-hidden shadow-2xl">
              <div className="bg-white/90 backdrop-blur rounded-lg p-6 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-dark-500 ml-3">lovekansas.com</span>
                </div>
                <div className="space-y-3">
                  <div className="h-10 bg-light-200 rounded w-3/4"></div>
                  <div className="h-6 bg-light-100 rounded w-full"></div>
                  <div className="h-6 bg-light-100 rounded w-5/6"></div>
                  <div className="h-6 bg-light-100 rounded w-4/5"></div>
                </div>
              </div>
              
              {/* Chat Widget */}
              <div className="absolute bottom-8 right-8 bg-red-600 text-white rounded-full p-4 shadow-xl cursor-pointer hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-dark-600 mb-6">Widget adapts to your brand instantly</p>
              <ul className="inline-flex flex-col text-left gap-3 text-dark-700">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Eight flexible positioning options (4 corners + 4 side centers)
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Drop in your palette, logo, and voice
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Upload PDFs, DOCX, CSV—everything searchable
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SecuritySection() {
  return (
    <section id="security" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-light-50 to-light-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-heading font-bold text-dark-900 mb-4">
            Built for Compliance. Powered for Growth.
          </h2>
          <p className="text-xl text-dark-600 font-body">Trust comes first.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="font-semibold text-dark-900 text-xl mb-3">Isolated Data</h3>
            <p className="text-dark-600">Each site runs on its own OpenAI key and data sandbox. Complete separation.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-dark-900 text-xl mb-3">Full Analytics</h3>
            <p className="text-dark-600">Real-time logs plus GA4/GTM events for attribution in your existing dashboards.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-dark-900 text-xl mb-3">Privacy First</h3>
            <p className="text-dark-600">Strips PII before text ever reaches the LLM. Leads saved securely in your database.</p>
          </div>
        </div>

        {/* Analytics Dashboard Preview */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h3 className="font-semibold text-dark-900 mb-8 text-xl">Real-Time Insights Dashboard</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-light-50 rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-medium text-dark-700">Live Conversation Log</h4>
                <select className="text-xs bg-white border border-light-300 rounded px-2 py-1 text-dark-600">
                  <option>Filter by site</option>
                </select>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-dark-800">User from Kansas City</span>
                    <span className="text-dark-500 text-sm">2 min ago</span>
                  </div>
                  <p className="text-dark-600 mb-3">"What tech jobs pay over 100k?"</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-success-100 text-success-700 px-3 py-1 rounded-full">Answered</span>
                    <span className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full">Lead Captured</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-dark-800">User from California</span>
                    <span className="text-dark-500 text-sm">5 min ago</span>
                  </div>
                  <p className="text-dark-600 mb-3">"Cost of living calculator"</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-success-100 text-success-700 px-3 py-1 rounded-full">Tool Used</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-light-50 rounded-xl p-6">
              <h4 className="font-medium text-dark-700 mb-6">Security Dashboard</h4>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-dark-600">RBAC (Role-Based Access)</span>
                  <span className="text-success-600 font-medium">✓ Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dark-600">End-to-End Encryption</span>
                  <span className="text-success-600 font-medium">✓ AES-256</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dark-600">XSS Prevention</span>
                  <span className="text-success-600 font-medium">✓ Enabled</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dark-600">PII Stripping</span>
                  <span className="text-success-600 font-medium">✓ Enabled</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dark-600">Data Retention</span>
                  <span className="text-dark-700 font-medium">90 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EngagementSection() {
  return (
    <section id="engagement" className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-heading font-bold text-dark-900 mb-4">
            Fast Start, Steady Momentum
          </h2>
          <p className="text-xl text-dark-600 font-body">Tailored development at your pace.</p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-light-300"></div>
          
          <div className="space-y-16">
            <div className="flex items-center gap-12">
              <div className="flex-1 text-right">
                <h3 className="font-semibold text-dark-900 text-2xl mb-3">Week 1: Kickoff Sprint</h3>
                <p className="text-dark-600 mb-2">2-hour session with your frontend engineer</p>
                <p className="text-primary-600 font-medium flex items-center gap-2">
                  <svg className="w-4 h-4 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  First bot goes live
                </p>
              </div>
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl z-10 relative shadow-xl">
                1
              </div>
              <div className="flex-1">
                <div className="bg-light-50 rounded-xl shadow-lg p-6 max-w-sm">
                  <ul className="space-y-2 text-dark-600">
                    <li>• Install widget</li>
                    <li>• Configure chatbot</li>
                    <li>• Test staging</li>
                    <li>• Deploy production</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-12">
              <div className="flex-1">
                <div className="bg-light-50 rounded-xl shadow-lg p-6 max-w-sm ml-auto">
                  <ul className="space-y-2 text-dark-600">
                    <li>• Review chat logs</li>
                    <li>• Tune responses</li>
                    <li>• Track conversions</li>
                    <li>• Optimize prompts</li>
                  </ul>
                </div>
              </div>
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 relative shadow-xl">
                2-4
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-dark-900 text-2xl mb-3">Weeks 2-4: Optimization</h3>
                <p className="text-dark-600 mb-2">Stand-ups 2-4× per week</p>
                <p className="text-primary-600 font-medium">Fine-tune for results</p>
              </div>
            </div>

            <div className="flex items-center gap-12">
              <div className="flex-1 text-right">
                <h3 className="font-semibold text-dark-900 text-2xl mb-3">Month 2+: Scale</h3>
                <p className="text-dark-600 mb-2">Roll out to remaining 4 sites</p>
                <p className="text-primary-600 font-medium">Full deployment</p>
              </div>
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 relative shadow-xl">
                5+
              </div>
              <div className="flex-1">
                <div className="bg-light-50 rounded-xl shadow-lg p-6 max-w-sm">
                  <ul className="space-y-2 text-dark-600">
                    <li>• Clone successful config</li>
                    <li>• Customize per brand</li>
                    <li>• Launch sequentially</li>
                    <li>• Monitor performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-dark-600 text-lg">Ready to transform your WordPress sites with intelligent chatbots?</p>
        </div>
      </div>
    </section>
  )
}

export default App
