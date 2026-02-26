import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Values from './components/Values';
import Team from './components/Team';
import Cases from './components/Cases';
import ClientsPartners from './components/ClientsPartners';
import Footer from './components/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import SmoothScroll from './components/ui/SmoothScroll';

function App() {
  return (
    <div className="bg-davos-black min-h-screen text-white selection:bg-davos-blue selection:text-white">
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <Values />
        <Team />
        <Cases />
        <ClientsPartners />
      </main>
      <Footer />
    </div>
  );
}

export default App;
