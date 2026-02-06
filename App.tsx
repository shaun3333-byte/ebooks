
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import BookLibrary from './components/BookLibrary';
import Philosophy from './components/Philosophy';
import Bio from './components/Bio';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Simple scroll animation trigger
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-luxury-black font-sans selection:bg-luxury-gold selection:text-luxury-black">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <BookLibrary />
        <Philosophy />
        <Bio />
        <CTASection />
      </main>
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}} />
    </div>
  );
};

export default App;
