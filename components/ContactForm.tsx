import React, { useState } from 'react';
import { Instagram, CheckCircle, ArrowRight, Mail } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ProjectData {
  name: string;
  objective: string;
}

export const ContactForm: React.FC = () => {
  const [data, setData] = useState<ProjectData>({
    name: '',
    objective: 'Quiero una Landing Page'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDirectEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    const recipient = "nivorastudio.business@gmail.com";
    const subject = encodeURIComponent(`🔥 NUEVO LEAD: ${data.name || 'Interesado'} quiere vender más`);
    
    const bodyText = 
`Hola equipo,

Estoy interesado en una Landing Page para mi negocio.

MIS DATOS:
Nombre/Empresa: ${data.name}
Objetivo: ${data.objective}

Espero su contacto para ver precios y opciones.

Saludos.`;

    const body = encodeURIComponent(bodyText);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/bizmaty', '_blank');
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-[#050505] text-white relative overflow-hidden">
      
      {/* --- BACKGROUND: CSS Stars (Zero Lag) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Static Stars */}
        <div className="absolute inset-0 bg-[radial-gradient(white,rgba(255,255,255,.2)_2px,transparent_3px)] bg-[size:100px_100px] opacity-[0.03]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(white,rgba(255,255,255,.15)_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.05]"></div>
        
        {/* Animated Glows */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-12 relative z-10">
        <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 p-1 md:p-2 rounded-xl shadow-2xl overflow-hidden">
            
            {/* Subtle top highlight on the card */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="p-6 md:p-16 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                
                <div className="lg:w-1/2">
                    <ScrollReveal>
                        <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-accent mb-6">
                            Agenda Abierta
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white leading-tight">
                           ¿Listo para tener una <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 italic">Landing que vende?</span>
                        </h2>
                        <p className="text-gray-400 text-base mb-10 leading-relaxed max-w-md">
                           Deja de perder dinero con webs que no convierten. Elige tu canal preferido y hablemos sobre tu nueva Landing Page.
                        </p>
                        
                        <div className="space-y-5 mb-8 border-l border-white/10 pl-6">
                            <div className="flex items-center gap-3 text-sm text-gray-300">
                                <CheckCircle size={18} className="text-accent flex-shrink-0" /> 
                                <span>Respuesta en menos de 24h</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-300">
                                <CheckCircle size={18} className="text-accent flex-shrink-0" /> 
                                <span>Propuesta de Landing personalizada</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-300">
                                <CheckCircle size={18} className="text-accent flex-shrink-0" /> 
                                <span>Enfoque 100% en ventas</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="lg:w-1/2 w-full">
                     <ScrollReveal delay="0.2s">
                        <form onSubmit={handleDirectEmail} className="space-y-6 relative">
                            
                            <div className="space-y-5">
                                <div className="group">
                                    <label className="block text-[10px] font-mono uppercase text-gray-500 mb-2 pl-1 tracking-wider group-focus-within:text-white transition-colors">Tu Nombre o Empresa</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={data.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#121212] border border-white/10 p-4 text-white text-base focus:outline-none focus:border-white/30 focus:bg-[#161616] transition-all rounded-sm placeholder-gray-700 font-sans"
                                        placeholder="Ej. Consultoría López"
                                        style={{ fontSize: '16px' }} // Prevents iOS zoom
                                    />
                                </div>

                                <div className="group">
                                    <label className="block text-[10px] font-mono uppercase text-gray-500 mb-2 pl-1 tracking-wider group-focus-within:text-white transition-colors">Objetivo Principal</label>
                                    <div className="relative">
                                        <select 
                                        name="objective"
                                        value={data.objective}
                                        onChange={handleChange}
                                        className="w-full bg-[#121212] border border-white/10 p-4 text-white text-base focus:outline-none focus:border-white/30 focus:bg-[#161616] transition-all rounded-sm appearance-none cursor-pointer font-sans"
                                        style={{ fontSize: '16px' }} // Prevents iOS zoom
                                        >
                                        <option>Quiero una Landing Page</option>
                                        <option>Mejorar mi Landing actual</option>
                                        <option>Lanzar un nuevo producto</option>
                                        <option>Landing A Medida (Avanzado)</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 4L6 8L10 4" stroke="white" strokeOpacity="0.5" strokeWidth="1.5"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 pt-4">
                                {/* BUTTON 1: GMAIL (Primary) */}
                                <button 
                                    type="submit"
                                    className="group relative w-full h-16 bg-white text-black rounded-sm overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] touch-manipulation"
                                >
                                    <div className="absolute inset-0 bg-[#d4bfa8] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute inset-0 -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 skew-x-[-20deg] pointer-events-none z-10"></div>
                                    
                                    <div className="relative z-20 flex items-center justify-center gap-3 font-mono font-bold uppercase tracking-widest text-sm">
                                        <Mail size={18} className="group-hover:scale-110 transition-transform" />
                                        Solicitar Asesoría (Gmail)
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </button>

                                {/* BUTTON 2: INSTAGRAM (Secondary) */}
                                <button 
                                    type="button"
                                    onClick={handleInstagram}
                                    className="group relative w-full h-16 bg-[#121212] text-white rounded-sm overflow-hidden border border-white/10 hover:border-transparent transition-all duration-300 active:scale-[0.98] touch-manipulation"
                                >
                                    {/* Sliding White Background Effect */}
                                    <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
                                    
                                    <div className="relative z-20 flex items-center justify-center gap-3 font-mono font-bold uppercase tracking-widest text-sm h-full group-hover:text-black transition-colors duration-500">
                                        <Instagram size={18} className="group-hover:scale-110 transition-transform duration-300" />
                                        Contactar por Instagram
                                    </div>
                                </button>
                            </div>
                            
                            <div className="text-center pt-2">
                                <span className="text-[9px] text-gray-600 uppercase tracking-[0.2em]">
                                    Sin esperas • Sin compromiso
                                </span>
                            </div>
                        </form>
                     </ScrollReveal>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
}