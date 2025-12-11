import React, { memo } from 'react';
import { Star, Quote } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Antes dependíamos solo de conocidos. Ahora nos llegan 3 o 4 presupuestos cada semana desde la web. La inversión se pagó sola el primer mes.",
    author: "Carlos Martínez",
    role: "Gerente",
    company: "Reformas Madrid",
    metric: "Más Presupuestos"
  },
  {
    id: 2,
    quote: "No entiendo de internet, pero quería que mi clínica se viera seria. Se encargaron de todo. Ahora los pacientes reservan cita desde el móvil sin llamarme.",
    author: "Dra. Elena Ruiz",
    role: "Directora",
    company: "Clínica Dental Ruiz",
    metric: "Reservas Automáticas"
  },
  {
    id: 3,
    quote: "Teníamos una web vieja que daba vergüenza. El cambio ha sido brutal, ahora parecemos una multinacional. Los clientes confían mucho más.",
    author: "Javier Fernández",
    role: "Socio",
    company: "Fernández Legal",
    metric: "Imagen Premium"
  },
  {
    id: 4,
    quote: "Super rápidos. En 10 días tenía la web lista y funcionando. Me ayudaron a escribir los textos y a elegir las fotos. Un servicio de 10.",
    author: "Marta Soler",
    role: "Fundadora",
    company: "Soler Interiorismo",
    metric: "Entrega Rápida"
  },
  {
    id: 5,
    quote: "Desde que lanzamos la nueva web, las llamadas han aumentado un 40%. El diseño en móvil es increíble, muy fácil de usar.",
    author: "Roberto Gil",
    role: "Dueño",
    company: "Talleres Gil",
    metric: "+40% Llamadas"
  },
  {
    id: 6,
    quote: "Buscaba algo limpio y profesional para mi despacho de psicología. Entendieron lo que quería a la primera. Muy recomendados.",
    author: "Ana Belén",
    role: "Psicóloga",
    company: "Consulta Privada",
    metric: "Diseño Limpio"
  }
];

// Performance: Memoized component to prevent re-renders during animation
const TestimonialCard = memo(({ item }: { item: Testimonial }) => (
    <div className="w-[280px] md:w-[400px] flex-shrink-0 mx-3 md:mx-4 h-full">
        <div className="bg-[#0a0a0a] p-6 md:p-8 border border-white/5 rounded-sm h-full flex flex-col relative group hover:border-accent/30 transition-colors duration-500 hover:bg-[#0f0f0f]">
            <Quote className="text-white/10 absolute top-6 right-6 group-hover:text-accent/20 transition-colors" size={24} />
            
            <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
            </div>

            <p className="font-sans text-sm md:text-base text-gray-300 mb-8 leading-relaxed">
                "{item.quote}"
            </p>

            <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-end">
                <div>
                    <h4 className="text-white font-mono text-xs font-bold uppercase tracking-wider mb-1">{item.author}</h4>
                    <p className="text-gray-500 font-mono text-[10px] uppercase">{item.role}, {item.company}</p>
                </div>
                <div className="bg-white/5 px-2 py-1 rounded text-accent font-mono text-[9px] font-bold uppercase tracking-wider">
                    {item.metric}
                </div>
            </div>
        </div>
    </div>
));

TestimonialCard.displayName = "TestimonialCard";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#080808] border-y border-white/5 relative overflow-hidden w-full">
      {/* Decorational Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="relative z-10 w-full overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 text-center">
            <ScrollReveal>
                <span className="font-mono text-xs text-gray-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
                    Lo que dicen nuestros clientes
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-white mt-6">
                    Resultados Reales, <span className="text-gray-600 italic">Sin Humo.</span>
                </h2>
            </ScrollReveal>
        </div>

        {/* Infinite Slider Container */}
        <div className="relative w-full overflow-hidden mask-linear-fade">
           {/* Gradient Masks for Edges */}
           <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-[#080808] to-transparent z-20 pointer-events-none" />
           <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-[#080808] to-transparent z-20 pointer-events-none" />

           {/* Moving Track */}
           <div className="flex animate-marquee-slow hover:[animation-play-state:paused] w-max will-change-transform">
              {[...testimonials, ...testimonials].map((item, index) => (
                  <TestimonialCard key={`${item.id}-${index}`} item={item} />
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};