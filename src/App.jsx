import React, { useState } from 'react';
import { 
  Mail, ExternalLink, Code2, Layers, Smartphone, Menu, X, 
  Copy, Check, ArrowUpRight, Terminal, MapPin, Download, Clock,
  Phone
} from 'lucide-react';
import { personalInfo, stats, skillCategories, projects } from './data';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#03050c] text-slate-200 font-sans relative overflow-x-hidden selection:bg-cyan-400 selection:text-slate-950">
      
      {/* Luxury Ambient Glow & Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />
      <div className="fixed top-[-20%] left-[5%] w-[550px] h-[550px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[5%] w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating Glass Navbar */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl bg-[#090d1a]/75 backdrop-blur-2xl border border-white/10 rounded-2xl z-50 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
        <div className="px-6 py-3.5 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white group">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-black text-xs shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition">
              {personalInfo.initials}
            </span>
            <span>{personalInfo.name}</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#about" className="hover:text-white transition">Principles</a>
            <a href="#contact" className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/15 to-blue-500/15 hover:from-cyan-500/25 hover:to-blue-500/25 text-cyan-300 border border-cyan-400/30 transition">
              Let's Talk
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-300 hover:text-cyan-400">
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm text-slate-300">
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400">Projects</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400">Skills</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-cyan-400">Principles</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-cyan-400 font-semibold">Let's Talk</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6 max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-14 relative z-10">
        <div className="flex-1 text-center md:text-left">
          {personalInfo.available && (
            <div className="inline-flex items-center gap-2.5 py-1.5 px-4 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open to Work & Freelance
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-4">
            I'm <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">{personalInfo.name}</span>
          </h1>
          
          <div className="flex items-center justify-center md:justify-start gap-2.5 text-slate-300 font-medium text-lg md:text-xl mb-5">
            <Terminal size={20} className="text-cyan-400" />
            <span>{personalInfo.role}</span>
          </div>

          <p className="text-slate-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed mx-auto md:mx-0">
            {personalInfo.tagline}
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5">
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-white font-semibold transition shadow-lg shadow-cyan-500/25">
              View Projects
              <ArrowUpRight size={18} />
            </a>

            {personalInfo.cvLink && (
              <a href={personalInfo.cvLink} download className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md text-slate-200 border border-white/10 font-medium transition">
                <Download size={17} className="text-cyan-400" />
                Resume
              </a>
            )}
            
            <button onClick={handleCopyEmail} className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md text-slate-200 border border-white/10 font-medium transition cursor-pointer">
              {copied ? <Check size={17} className="text-emerald-400" /> : <Copy size={17} className="text-slate-400" />}
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>

          <div className="mt-7 flex items-center justify-center md:justify-start gap-2 text-xs text-slate-500">
            <MapPin size={14} className="text-cyan-400" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Luxury Glass Profile Frame */}
        <div className="relative group">
          <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-500" />
          <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full bg-[#090d1a]/90 backdrop-blur-xl border border-white/15 p-2.5 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
              <img 
                src={personalInfo.avatar} 
                alt={personalInfo.name} 
                onError={(e) => { e.target.src = 'https://ui-avatars.com'; }}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Glass Stats Bar */}
      <section className="px-6 max-w-5xl mx-auto relative z-10 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-3xl bg-[#090d1a]/60 backdrop-blur-xl border border-white/10 shadow-xl">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center sm:border-r last:border-none border-white/10 px-4">
              <p className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Selected Work</span>
          <h3 className="text-3xl md:text-4xl font-bold text-white mt-1">Featured Project</h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto mt-3">
            Production-ready web application engineered with clean code, responsive layouts, and modern UI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 max-w-2xl mx-auto gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group rounded-3xl bg-[#090d1a]/70 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className={`h-52 w-full bg-gradient-to-br ${project.accent} p-6 flex flex-col justify-between border-b border-white/10 relative overflow-hidden`}>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-400/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                    </div>
                    {project.featured ? (
                      <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-cyan-300 border border-cyan-400/30">
                        Live Production
                      </span>
                    ) : (
                      <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-slate-300 border border-white/10">
                        In Development
                      </span>
                    )}
                  </div>

                  <div className="bg-[#03050c]/85 backdrop-blur-md border border-white/10 rounded-xl p-4 transform group-hover:-translate-y-1 transition duration-300 shadow-lg">
                    <p className="text-xs text-cyan-400 font-mono mb-1 truncate">
                      {project.liveLink ? project.liveLink.replace("https://", "") : "coming-soon.vercel.app"}
                    </p>
                    <h4 className="text-xl font-bold text-white">{project.title}</h4>
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-xs font-semibold text-cyan-400 mb-2">{project.subtitle}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-7 pb-7 pt-4 border-t border-white/5 flex items-center justify-between">
                {project.liveLink ? (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-5 py-2.5 rounded-xl transition shadow-md shadow-cyan-500/20"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-white/[0.03] px-3.5 py-2 rounded-xl border border-white/5">
                    <Clock size={14} />
                    Coming Soon
                  </span>
                )}

                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition"
                  >
                    <Code2 size={16} />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Capabilities</span>
          <h3 className="text-3xl md:text-4xl font-bold text-white mt-1">Technical Stack</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((group, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-[#090d1a]/70 backdrop-blur-xl border border-white/10 hover:border-white/20 transition">
              <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-5">{group.category}</h4>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200 text-xs font-medium hover:border-cyan-400/50 hover:text-cyan-300 transition cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Engineering Principles */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Value Proposition</span>
          <h3 className="text-3xl md:text-4xl font-bold text-white mt-1">Engineering Principles</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-7 rounded-3xl bg-[#090d1a]/70 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
              <Code2 size={22} />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Modular Architecture</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Writing clean, reusable React components with predictable state management that scales smoothly.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#090d1a]/70 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition">
            <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
              <Smartphone size={22} />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Responsive Precision</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Pixel-accurate layouts crafted to perform seamlessly on mobile phones, tablets, and desktops.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#090d1a]/70 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition">
            <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
              <Layers size={22} />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Luxury UI & UX</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Combining sleek glassmorphism, subtle motion, and fast load times for high-impact user interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center relative z-10">
        <div className="p-10 md:p-14 rounded-[2rem] bg-gradient-to-b from-white/[0.06] to-white/[0.01] backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Build Something Great?</h3>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Whether you have a project in mind or a Front-End opportunity, feel free to call directly, send an email, or connect via social platforms.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3.5 mb-10">
            <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 font-medium transition">
              <Phone size={18} className="text-cyan-400" />
              {personalInfo.phone}
            </a>

            <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-white font-semibold transition shadow-lg shadow-cyan-500/25">
              <Mail size={18} />
              Send Email
            </a>

            <button onClick={handleCopyEmail} className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 font-medium transition cursor-pointer">
              {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>

          <div className="flex justify-center gap-4 text-slate-400">
            {/* GitHub */}
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:text-cyan-400 hover:border-cyan-400/40 transition" aria-label="GitHub">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>

            {/* LinkedIn */}
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:text-cyan-400 hover:border-cyan-400/40 transition" aria-label="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>

            {/* WhatsApp */}
            <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:text-emerald-400 hover:border-emerald-400/40 transition" aria-label="WhatsApp">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-xs border-t border-white/5 relative z-10">
        <p>Crafted with precision by <span className="text-slate-300 font-medium">{personalInfo.name}</span> • © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
