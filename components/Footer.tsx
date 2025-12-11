import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-white pt-20 md:pt-32 pb-10 border-t border-white/5 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 md:mb-32 text-center md:text-left">
            <ScrollReveal className="col-span-1 lg:col-span-2">
                <span className="font-mono text-xs text-accent uppercase tracking-widest mb-6 block">Estudio Elite</span>
                <p className="font-serif text-3xl md:text-4xl leading-tight text-gray-300 max-w-md mx-auto md:mx-0">
                    El futuro del diseño web. <br/>
                    Creatividad Humana × Inteligencia Artificial.
                </p>
            </ScrollReveal>

            <div className="font-mono text-xs tracking-widest">
                <h4 className="text-white mb-6 md:mb-8 uppercase font-bold">Menu</h4>
                <ul className="space-y-4 text-gray-500">
                    <li><a href="#expertise" className="hover:text-white transition-colors p-2 md:p-0">EXPERTISE</a></li>
                    <li><a href="#planes" className="hover:text-white transition-colors p-2 md:p-0">PRECIOS</a></li>
                    <li><a href="#faq" className="hover:text-white transition-colors p-2 md:p-0">FAQ</a></li>
                </ul>
            </div>

            <div className="font-mono text-xs tracking-widest">
                <h4 className="text-white mb-6 md:mb-8 uppercase font-bold">Social</h4>
                <ul className="space-y-4 text-gray-500">
                    <li><a href="https://www.instagram.com/bizmaty" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 md:p-0">INSTAGRAM</a></li>
                    <li><a href="mailto:nivorastudio.business@gmail.com" className="hover:text-white transition-colors p-2 md:p-0">EMAIL</a></li>
                </ul>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-end border-t border-white/10 pt-8 gap-6">
          <p className="font-mono text-[10px] text-gray-600 uppercase text-center md:text-left">
            © {new Date().getFullYear()} ELITE AI STUDIO.
          </p>
          <div className="font-mono text-[10px] text-gray-600 uppercase flex gap-6">
            <span>Madrid, ES</span>
            <span>Remote Worldwide</span>
          </div>
        </div>
        
        {/* Massive Footer Typography Background */}
        <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-full select-none pointer-events-none opacity-20">
            <ScrollReveal delay="0.5s">
                <h1 className="text-[22vw] font-serif leading-none text-center text-transparent text-stroke whitespace-nowrap">
                    ELITE AI
                </h1>
            </ScrollReveal>
        </div>
      </div>
    </footer>
  );
};