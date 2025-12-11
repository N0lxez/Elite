import React from 'react';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';
import { Button } from './Button';
import { ScrollReveal } from './ScrollReveal';

const tiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Landing Esencial',
    price: 'Consultar',
    description: 'Perfecto para negocios que necesitan presencia rápida y empezar a captar leads sin complicaciones.',
    features: ['Diseño Profesional (Landing Page)', 'Adaptado a Móviles 100%', 'Formulario de Contacto', 'Textos Básicos Incluidos', 'Entrega Rápida'],
  },
  {
    id: 'growth',
    name: 'Landing Pro (Ventas)',
    price: 'Consultar',
    description: 'Nuestra especialidad. Diseño estratégico, psicología de ventas y optimización para campañas de publicidad.',
    features: ['Estrategia de Ventas Completa', 'Copywriting Persuasivo (Ventas)', 'Animaciones Premium', 'Integración con Email/CRM', 'Optimización Google (SEO)', 'Soporte Prioritario'],
    isPopular: true,
  },
  {
    id: 'enterprise',
    name: 'Landing A Medida',
    price: 'A Medida',
    description: 'Diseño 100% código (sin plantillas) para productos exclusivos, lanzamientos o embudos de venta complejos.',
    features: ['Diseño y Código desde Cero', 'Velocidad Extrema', 'Efectos Visuales Únicos', 'A/B Testing Setup', 'Automatizaciones Avanzadas'],
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="planes" className="py-20 md:py-32 bg-[#f4f4f4] text-[#0e0e0e]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <ScrollReveal>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 block">Solo Landing Pages</span>
            <h2 className="font-serif text-4xl md:text-6xl mb-6">
              Elige tu nivel de <br/> conversión.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay="0.1s">
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              No hacemos webs corporativas aburridas. Diseñamos herramientas de venta afiladas para convertir tráfico en dinero.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <ScrollReveal key={tier.id} delay={`${index * 0.15}s`} className="h-full">
              <div 
                className={`relative p-6 md:p-10 flex flex-col h-full transition-all duration-500 ${
                  tier.isPopular 
                    ? 'bg-[#0e0e0e] text-white shadow-2xl scale-100 lg:scale-[1.05] z-10 rounded-sm ring-1 ring-white/10' 
                    : 'bg-white text-[#0e0e0e] border border-gray-200 hover:shadow-xl rounded-sm'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute top-0 right-0 bg-accent text-black px-4 py-1 text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    Más Vendido
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="font-serif text-3xl mb-4">{tier.name}</h3>
                  <p className={`text-sm leading-relaxed ${tier.isPopular ? 'text-gray-400' : 'text-gray-600'}`}>
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm font-medium">
                      <Check size={16} className={`mt-0.5 flex-shrink-0 ${tier.isPopular ? 'text-accent' : 'text-black'}`} />
                      <span className={tier.isPopular ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={tier.isPopular ? 'secondary' : 'primary'} 
                  fullWidth
                  onClick={() => {
                      const contactSection = document.getElementById('contacto');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={tier.isPopular ? 'border-white/20 hover:bg-white hover:text-black' : 'bg-[#0e0e0e] text-white hover:bg-[#0e0e0e]/80'}
                >
                  Solicitar Landing
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay="0.3s" className="mt-16 text-center">
             <p className="text-sm text-gray-500 font-sans px-4">
                ¿Dudas sobre qué Landing necesitas? 
                <a 
                   href="#contacto"
                   className="text-black font-bold underline ml-1 hover:text-accent transition-colors p-2 inline-block"
                   onClick={(e) => {
                       e.preventDefault();
                       document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                   }}
                >
                    Asesoría gratuita express
                </a>
             </p>
        </ScrollReveal>
      </div>
    </section>
  );
};