import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import Cases from './components/Cases';
import ClientsPartners from './components/ClientsPartners';
import Footer from './components/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import SmoothScroll from './components/ui/SmoothScroll';
import Contact from './components/Contact';
import BackToTop from './components/ui/BackToTop';

function App() {
  return (
    <div className="bg-davos-black min-h-screen text-white selection:bg-davos-blue selection:text-white">
      <SmoothScroll />
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <main>
        <Hero />
        <Cases />
        <ClientsPartners />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
