'use client';

import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import Preloader from '@/components/Preloader';
import SmoothScroll from '@/components/SmoothScroll';
import Navigation from '@/components/Navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Preloader />}
      <Navigation />
      <SmoothScroll>
        <main className="relative overflow-hidden bg-black">
          <section id="home">
            <Hero />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
