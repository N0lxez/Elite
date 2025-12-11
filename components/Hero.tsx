import React, { useEffect, useRef } from 'react';
import { Sparkles, Brain } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let frameId: number;

    const ORB_COUNT = window.innerWidth < 768 ? 15 : 25; // Reduce particles on mobile
    const STAR_COUNT = window.innerWidth < 768 ? 80 : 150;
    const COLORS = ['rgba(212, 191, 168, alpha)', 'rgba(70, 80, 120, alpha)', 'rgba(255, 255, 255, alpha)'];

    class Particle {
      x: number; y: number; vx: number; vy: number; r: number; color: string;
      
      constructor(isOrb = false) {
        this.reset(true, isOrb);
      }

      reset(init = false, isOrb = false) {
        this.x = init ? Math.random() * w : (Math.random() > 0.5 ? -50 : w + 50);
        this.y = Math.random() * h;
        
        if (isOrb) {
          this.r = Math.random() * 400 + 150;
          this.vx = (Math.random() - 0.5) * 0.15;
          this.vy = (Math.random() - 0.5) * 0.15;
          const alpha = Math.random() * 0.06 + 0.02;
          const type = Math.random();
          const c = type > 0.6 ? COLORS[0] : type > 0.3 ? COLORS[1] : COLORS[2];
          this.color = c.replace('alpha', alpha.toString());
        } else {
          this.r = Math.random() * 1.5;
          this.vx = 0;
          this.vy = 0;
          this.color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})`;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        
        this.x += this.vx;
        this.y += this.vy;

        if (this.vx !== 0) {
            if (this.x < -500 || this.x > w + 500 || this.y < -500 || this.y > h + 500) {
                this.reset(false, true);
            }
        }
      }
    }

    const particles = Array.from({ length: ORB_COUNT }, () => new Particle(true));
    const stars = Array.from({ length: STAR_COUNT }, () => new Particle(false));
    
    let shoot = { x: 0, y: 0, active: false, timer: 200 };

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      [...particles, ...stars].forEach(p => p.draw());

      if (--shoot.timer <= 0) {
        shoot.active = true;
        shoot.x = Math.random() * w * 0.8;
        shoot.y = -10;
        shoot.timer = Math.random() * 300 + 200;
      }

      if (shoot.active) {
        shoot.x += 8;
        shoot.y += 8;
        const tailX = shoot.x - 80;
        const tailY = shoot.y - 80;
        
        const grad = ctx.createLinearGradient(shoot.x, shoot.y, tailX, tailY);
        grad.addColorStop(0, 'white');
        grad.addColorStop(1, 'transparent');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(shoot.x, shoot.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        if (shoot.x > w + 100) shoot.active = false;
      }

      frameId = requestAnimationFrame(render);
    };

    render();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const items = ["Landing Pages", "IA", "Conversión", "Diseño Futuro", "Ventas", "Rapidez"];

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#050505] text-white pt-24 md:pt-20 pb-20">
      
      {/* Background Composition */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#101018_0%,#050505_100%)] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[50vh] bg-[radial-gradient(ellipse_at_bottom,rgba(212,191,168,0.12)_0%,transparent_70%)] pointer-events-none blur-[80px] z-[1]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[85vh] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(212,191,168,0.06)_120deg,transparent_180deg,rgba(80,90,140,0.08)_300deg,transparent_360deg)] blur-[100px] rounded-full animate-aurora opacity-90 pointer-events-none z-[2]" />

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-[5] pointer-events-auto" />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_120%)] pointer-events-none z-[6]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 text-center pointer-events-none w-full flex flex-col items-center">
        <ScrollReveal>
           <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 md:mb-8 pointer-events-auto shadow-lg">
                <Brain size={12} className="text-accent animate-pulse" />
                <span className="font-mono text-[9px] md:text-xs text-accent uppercase tracking-widest">Agencia Web Potenciada por IA</span>
           </div>
        </ScrollReveal>

        <ScrollReveal as="div" className="relative mb-6 md:mb-8 pointer-events-auto w-full">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-transparent via-black/60 to-transparent blur-[50px] -z-10" />
             <h1 className="font-serif text-[12vw] sm:text-[10vw] md:text-[clamp(3.5rem,8vw,8.5rem)] leading-[1] md:leading-[0.9] tracking-tighter text-white drop-shadow-2xl mx-auto">
                WEBS CON IA <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 italic">QUE VENDEN SOLAS</span>
             </h1>
        </ScrollReveal>
          
        <ScrollReveal as="div" delay="0.2s" className="pointer-events-auto max-w-xl md:max-w-2xl mx-auto mb-10 md:mb-12 px-2">
           <p className="font-sans text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed drop-shadow-lg">
             Fusionamos diseño premium con <strong>Inteligencia Artificial</strong>. Creamos Landing Pages ultra-rápidas y optimizadas exclusivamente para convertir visitas en clientes.
           </p>
        </ScrollReveal>
           
        <ScrollReveal delay="0.3s" className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto w-full sm:w-auto px-6 sm:px-0">
            <div className="w-full sm:w-auto">
                <Button variant="primary" withArrow fullWidth onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'})}>
                EMPEZAR PROYECTO
                </Button>
            </div>
            <div className="w-full sm:w-auto">
                <Button variant="outline" fullWidth onClick={() => document.getElementById('planes')?.scrollIntoView({behavior: 'smooth'})}>
                VER PRECIOS
                </Button>
            </div>
        </ScrollReveal>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 w-full py-3 md:py-4 border-t border-white/10 bg-[#050505]/80 backdrop-blur-md z-20 overflow-hidden pointer-events-auto">
        <div className="flex animate-marquee whitespace-nowrap w-max">
            {[...items, ...items, ...items, ...items].map((item, i) => (
                <div key={i} className="flex items-center mx-4 md:mx-8 opacity-70 hover:opacity-100 transition-opacity cursor-default">
                    <Sparkles size={12} className="text-accent mr-2 md:mr-3" />
                    <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-white">{item}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};