import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Button } from './Button';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
}

const projects: Project[] = [
  {
    id: '01',
    title: 'FinTech Vanguard',
    category: 'Web App / High Performance',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '02',
    title: 'Luxury Estate',
    category: 'Landing Page / Lead Gen',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'Neon Agency',
    category: 'Portfolio / Creative',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop'
  }
];

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-20 md:py-32 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-6">
            <ScrollReveal>
                <span className="font-mono text-accent text-[10px] tracking-[0.25em] uppercase mb-4 block">Selected Work</span>
                <h2 className="font-serif text-4xl md:text-6xl text-white leading-none">
                    Casos de <br/> <span className="text-gray-600 italic">Éxito.</span>
                </h2>
            </ScrollReveal>
            <ScrollReveal delay="0.1s">
                <p className="font-mono text-xs text-gray-400 max-w-xs text-justify uppercase tracking-wide">
                    Una selección de proyectos donde la estética se encuentra con la conversión agresiva.
                </p>
            </ScrollReveal>
        </div>

        <div className="space-y-20 md:space-y-32">
            {projects.map((project, index) => (
                <ScrollReveal key={project.id} className="group cursor-pointer" delay={`${index * 0.1}s`}>
                    <div className="relative overflow-hidden rounded-sm mb-6 border border-white/10 aspect-video md:aspect-[21/9]">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                        <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
                            loading="lazy"
                        />
                        
                        {/* Floating Badge */}
                        <div className="absolute top-4 right-4 z-20 bg-white text-black px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                            Ver Case Study
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-6 group-hover:border-white/30 transition-colors">
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <span className="font-mono text-accent text-xs">0{index + 1}</span>
                                <h3 className="font-serif text-3xl md:text-4xl text-white group-hover:text-accent transition-colors">{project.title}</h3>
                            </div>
                            <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">{project.category}</p>
                        </div>
                        
                        <div className="mt-4 md:mt-0 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0">
                            <span className="font-mono text-xs text-white uppercase">Explorar</span>
                            <ArrowUpRight size={16} className="text-accent" />
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </div>

        <div className="mt-20 text-center">
            <Button variant="outline" onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'})}>
                Ver Todos los Proyectos
            </Button>
        </div>

      </div>
    </section>
  );
};