import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Collaborators from './components/Collaborators';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* Cinematic Film Grain Overlay */}
      <div className="film-grain" />

      {/* Main Layout */}
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Collaborators />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
