import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Tech />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
