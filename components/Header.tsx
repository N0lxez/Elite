import React, { useState, useEffect } from 'react';
import { Instagram, ArrowRight, Menu, X } from 'lucide-react';

// Simple hover effect link for Desktop
const NavLink: React.FC<{ href: string; text: string; onClick?: () => void }> = ({ href, text, onClick }) => {
  return (
    <a 
      href={href}
      onClick={(e) => {
        if (onClick) onClick();
      }}
      className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors relative group overflow-hidden py-2 block"
    >
      <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity absolute -left-3 mr-1">/</span>
      {text}
    </a>
  );
};

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleScrollTo = (id: string) => {
      setActiveSection(id);
      setIsMobileMenuOpen(false); // Close menu immediately
      
      // Small delay to allow the menu close animation to start before scrolling
      setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
              const headerOffset = 80;
              const elementPosition = el.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              
              window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
              });
          }
          setActiveSection(null);
      }, 300);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#050505]/90 backdrop-blur-lg border-b border-white/5 py-3 md:py-4 shadow-2xl' 
            : 'bg-transparent border-b border-transparent py-4 md:py-6'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-4 md:px-12 flex justify-between items-center relative">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group relative z-[70]" 
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="relative bg-white text-black px-2 py-1 md:px-3 md:py-1 font-mono font-bold text-base md:text-lg tracking-tighter rounded-sm group-hover:bg-[#d4bfa8] transition-colors shadow-lg">
                <span className="block">&lt;E/&gt;</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-lg md:text-xl tracking-[0.15em] text-white group-hover:text-[#d4bfa8] transition-colors mix-blend-difference">
                ELITE
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <NavLink href="#expertise" text="Servicios" />
            <NavLink href="#planes" text="Precios" />
            <NavLink href="#contacto" text="Contacto" />
            
            <div className="h-4 w-[1px] bg-white/20 mx-2"></div>

            <button 
              onClick={() => handleScrollTo('contacto')}
              className="group relative overflow-hidden bg-white text-black hover:bg-[#d4bfa8] transition-all duration-500 px-8 py-3 font-mono text-[11px] font-bold uppercase tracking-widest rounded-sm hover:shadow-[0_0_25px_rgba(212,191,168,0.5)] hover:-translate-y-1 active:translate-y-0"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shimmer_1s_infinite]" />
              <span className="relative z-10 flex items-center gap-2">
                  Empezar Ahora
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </nav>

          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden relative z-[70] w-10 h-10 flex items-center justify-center text-white focus:outline-none hover:text-accent transition-colors active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span 
                className={`absolute top-0 left-0 w-full h-[2px] bg-current transform transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : 'translate-y-0'
                }`} 
              />
              <span 
                className={`absolute top-[9px] left-0 w-full h-[2px] bg-current transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? 'opacity-0 translate-x-2' : 'opacity-100'
                }`} 
              />
              <span 
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-current transform transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : 'translate-y-0'
                }`} 
              />
            </div>
          </button>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[55] bg-[#050505]/98 backdrop-blur-xl flex flex-col transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-[20%] pointer-events-none'
        }`}
        style={{ height: '100dvh' }}
      >
          {/* Decorative Background Elements */}
          <div className="absolute top-[-20%] right-[-20%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-blue-900/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="flex-1 flex flex-col px-6 pt-28 pb-10 relative z-10 overflow-y-auto h-full">
            
            <div className={`transition-all duration-700 delay-100 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="font-mono text-[10px] text-accent mb-6 tracking-[0.3em] uppercase border-b border-white/10 pb-4 block w-full">
                Menú
              </span>
            </div>
            
            <div className="flex flex-col gap-2 mb-10">
              {[
                { name: 'Servicios', id: 'expertise', num: '01' },
                { name: 'Planes', id: 'planes', num: '02' },
                { name: 'Preguntas', id: 'faq', num: '03' },
                { name: 'Contacto', id: 'contacto', num: '04' }
              ].map((item, index) => (
                <button 
                  key={item.name}
                  onClick={() => handleScrollTo(item.id)}
                  className={`group flex items-center gap-6 py-4 text-left border-b border-white/5 last:border-0`}
                  style={{ transitionDelay: `${100 + (index * 50)}ms`, transitionProperty: 'opacity, transform', transitionDuration: '500ms', transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(30px)', opacity: isMobileMenuOpen ? 1 : 0 }}
                >
                  <span className="font-mono text-xs text-gray-600 group-hover:text-accent transition-colors">/{item.num}</span>
                  <span className={`font-serif text-4xl sm:text-5xl transition-all duration-300 ${activeSection === item.id ? 'text-accent' : 'text-white group-hover:text-gray-300'}`}>
                      {item.name}
                  </span>
                  <ArrowRight className="ml-auto text-white/20 group-hover:text-accent opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" size={20} />
                </button>
              ))}
            </div>

            {/* Mobile Footer/CTA */}
            <div className={`mt-auto transition-all duration-700 delay-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
               <div className="bg-white/5 p-5 rounded-sm mb-6 border border-white/5">
                  <h4 className="text-white font-serif text-xl mb-2">¿Empezamos?</h4>
                  <p className="text-gray-500 text-xs mb-4 font-sans leading-relaxed">
                      Lleva tu negocio al siguiente nivel digital.
                  </p>
                  <button 
                      onClick={() => handleScrollTo('contacto')}
                      className="w-full bg-white text-black font-mono text-xs font-bold uppercase tracking-widest py-4 rounded-sm flex items-center justify-center gap-3 active:scale-[0.98] transition-transform"
                  >
                      Pedir Presupuesto <ArrowRight size={14} />
                  </button>
               </div>

               <div className="flex justify-center">
                  <a 
                      href="https://www.instagram.com/bizmaty"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white flex items-center gap-2 text-xs font-mono py-2 transition-colors"
                  >
                      <Instagram size={14} /> @BIZMATY
                  </a>
               </div>
            </div>
          </div>
      </div>
    </>
  );
};