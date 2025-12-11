import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿Por qué sois tan rápidos?",
    answer: "Porque vamos al grano. Muchas agencias se tiran semanas en reuniones y 'bocetos' que no llevan a nada. Nosotros tenemos un sistema muy pulido: tú nos cuentas tu negocio, nosotros lo montamos. Sin vueltas. El tiempo es dinero para los dos."
  },
  {
    question: "¿Usáis plantillas repetidas?",
    answer: "No. Tu negocio no es una copia, tu web tampoco debería serlo. Aunque usamos estructuras que sabemos que funcionan para vender, el diseño y el acabado se hacen a medida para ti. Nada de 'copia y pega' barato."
  },
  {
    question: "Se me da fatal escribir textos...",
    answer: "No te preocupes, es lo normal. No tienes que escribir ni una línea. Nosotros redactamos todo para que suene profesional y persuasivo. Tú solo dinos qué vendes, nosotros ponemos las palabras exactas para convencer."
  },
  {
    question: "¿Hay que pagar cada mes?",
    answer: "Qué va. Es pago único. La web es propiedad tuya, como un coche o una casa. Nada de alquileres extraños ni letras pequeñas para el diseño. Solo pagas por el trabajo bien hecho y listo."
  },
  {
    question: "¿Cómo lográis esos precios?",
    answer: "Porque somos eficientes. No pagas oficinas de lujo en el centro ni largas comidas de negocios. Pagas por diseño y código de calidad. Al eliminar gastos innecesarios y trabajar de forma ágil, podemos ofrecerte un precio lógico sin bajar el nivel."
  }
];

const AccordionItem = ({ item, isOpen, onClick }: { item: FAQItem, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-white/10 group">
      <button 
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left focus:outline-none"
      >
        <span className={`font-serif text-xl md:text-2xl transition-colors duration-300 pr-8 ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
          {item.question}
        </span>
        <div className={`relative flex-shrink-0 flex items-center justify-center w-8 h-8 transition-transform duration-500 ${isOpen ? 'rotate-[135deg]' : 'rotate-0'}`}>
           <Plus size={20} className={`transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-gray-500'}`} />
        </div>
      </button>
      
      <div 
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="font-sans text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        
        <div className="mb-16 md:mb-24">
            <ScrollReveal>
                <span className="font-mono text-accent text-[10px] tracking-[0.25em] uppercase mb-4 block">
                    Sin rodeos
                </span>
                <h2 className="font-serif text-4xl md:text-6xl text-white leading-none">
                    Dudas <br/> <span className="text-gray-600 italic">Frecuentes.</span>
                </h2>
            </ScrollReveal>
        </div>

        <div className="flex flex-col">
            {faqs.map((faq, index) => (
                <ScrollReveal key={index} delay={`${index * 0.1}s`}>
                    <AccordionItem 
                        item={faq} 
                        isOpen={openIndex === index} 
                        onClick={() => handleToggle(index)} 
                    />
                </ScrollReveal>
            ))}
        </div>

      </div>
    </section>
  );
};