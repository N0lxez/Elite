import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  // Global Smooth Scroll & Offset Handler
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      // Only intercept internal anchor links
      if (link) {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          
          const targetId = href.substring(1);
          
          // Handle "scroll to top" if href is just "#" or empty
          if (!targetId) {
             window.scrollTo({ top: 0, behavior: 'smooth' });
             return;
          }

          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            // Calculate offset to account for fixed header (80px)
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });

            // Update URL hash without default jump
            window.history.pushState(null, '', href);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen antialiased selection:bg-accent selection:text-black">
      <Header />
      <main>
        <Hero />
        <BentoGrid />
        <FAQ />
        <Pricing />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;