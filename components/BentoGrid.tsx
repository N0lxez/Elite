import React, { memo } from 'react';
import { Sparkles, Zap, Target, TrendingUp, Cpu } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Button } from './Button';

const SpotlightCard = memo(({ children, className = '', imageSrc, altText }: { children: React.ReactNode; className?: string; imageSrc?: string; altText?: string }) => {
  return (
    <div className={`relative overflow-hidden rounded-sm border border-white/10 bg-[#080808] ${className} transition-all duration-500 hover:border-white/20 group`}>
      {imageSrc && (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
                src={imageSrc} 
                alt={altText || "Servicio de diseño web IA"} 
                className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000 ease-out"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/70 to-[#050505]"></div>
        </div>
      )}
      <div className="relative h-full z-20 flex flex-col">{children}</div>
    </div>
  );
});

SpotlightCard.displayName = 'SpotlightCard';

export const BentoGrid: React.FC = () => {
  return (
    <section id="expertise" className="py-20 md:py-28 relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
        <div className="mb-12 md:mb-16 border-b border-white/5 pb-8">
             <ScrollReveal>
                <span className="font-mono text-accent text-xs tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                   <Cpu size={14} /> Potenciado por IA
                </span>
                <h2 className="font-serif text-4xl md:text-6xl text-white leading-[1.1] mb-6">
                  Webs creadas con IA <br/>
                  <span className="text-gray-500">Más rápidas. Más eficientes.</span>
                </h2>
             </ScrollReveal>
             <ScrollReveal delay="0.1s" className="max-w-2xl">
                <p className="font-sans text-base text-gray-400 leading-relaxed">
                    Usamos las últimas herramientas de Inteligencia Artificial para crear Landing Pages que no solo son bonitas, sino que están matemáticamente optimizadas para vender.
                </p>
             </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* Card 1: Copywriting / Persuasion - Delay 0s */}
          <ScrollReveal delay="0s" className="md:col-span-2 min-h-[300px] md:min-h-[350px]">
             <SpotlightCard 
                className="p-6 md:p-10 h-full" 
                imageSrc="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format&fit=crop"
                altText="IA redactando textos persuasivos"
             >
                <div className="mb-auto">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-6 text-accent">
                        <Target size={20} />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">Copywriting Inteligente</h3>
                    <p className="font-sans text-sm text-gray-300 max-w-lg leading-relaxed">
                        Combinamos psicología de ventas con algoritmos de lenguaje natural. Redactamos textos que conectan emocionalmente con tu cliente ideal para cerrar la venta.
                    </p>
                </div>
             </SpotlightCard>
          </ScrollReveal>

          {/* Card 2: Speed - Delay 0.15s */}
          <ScrollReveal delay="0.15s" className="min-h-[300px] md:min-h-[350px]">
             <SpotlightCard 
                className="p-6 md:p-8 h-full" 
                imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
                altText="Servidores optimizados por IA"
             >
                <div className="flex flex-col h-full justify-between">
                   <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white">
                       <Zap size={20} />
                   </div>
                   <div>
                       <h3 className="font-serif text-2xl text-white mb-3">Código Optimizado</h3>
                       <p className="font-sans text-sm text-gray-400 leading-relaxed">
                          Código limpio y estructurado con ayuda de IA. Tu web cargará al instante, vital para retener visitas de anuncios.
                       </p>
                   </div>
                </div>
             </SpotlightCard>
          </ScrollReveal>

           {/* Card 3: Design / Trust - Delay 0.3s */}
           <ScrollReveal delay="0.3s" className="min-h-[300px] md:min-h-[350px]">
             <SpotlightCard 
                className="p-6 md:p-8 h-full" 
                imageSrc="https://images.unsplash.com/photo-1586717791821-3f44a5638d0f?q=80&w=800&auto=format&fit=crop"
                altText="Diseño de interfaz futurista"
             >
                <div className="flex flex-col h-full justify-between">
                   <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white">
                       <Sparkles size={20} />
                   </div>
                   <div>
                       <h3 className="font-serif text-2xl text-white mb-3">Diseño Premium</h3>
                       <p className="font-sans text-sm text-gray-400 leading-relaxed">
                          Estética moderna y profesional que genera autoridad inmediata. Tu competencia parecerá obsoleta.
                       </p>
                   </div>
                </div>
             </SpotlightCard>
          </ScrollReveal>

          {/* Card 4: Results - Delay 0.45s */}
          <ScrollReveal delay="0.45s" className="md:col-span-2 min-h-[320px] md:min-h-[350px]">
             <SpotlightCard 
                className="p-6 md:p-10 h-full" 
                imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                altText="Analíticas de crecimiento"
             >
                <div className="h-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div className="max-w-md">
                        <div className="flex items-center gap-3 mb-4">
                            <TrendingUp size={24} className="text-green-400" />
                            <span className="text-green-400 font-mono text-xs uppercase font-bold tracking-wider">OBJETIVO FINAL</span>
                        </div>
                        <h3 className="font-serif text-3xl text-white mb-4">Conseguir Clientes</h3>
                        <p className="font-sans text-sm text-gray-300 leading-relaxed mb-6">
                            La tecnología es el medio, las ventas son el fin. Creamos Landings inteligentes diseñadas para que te llamen o compren.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-white/10 text-xs rounded text-gray-300">Landing IA</span>
                            <span className="px-3 py-1 bg-white/10 text-xs rounded text-gray-300">Alta Conversión</span>
                            <span className="px-3 py-1 bg-white/10 text-xs rounded text-gray-300">Lead Gen</span>
                        </div>
                    </div>
                    
                    <div className="w-full md:w-auto mt-4 md:mt-0">
                        <Button 
                        variant="primary"
                        fullWidth
                        onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'})}
                        >
                        Quiero mi Web
                        </Button>
                    </div>
                </div>
             </SpotlightCard>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};