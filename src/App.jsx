import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { initGA, logPageView } from './utils/analytics';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Portfolio from './components/Portfolio';

// Create a component to track page views
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <Router>
      {/* Updated the main app background to a subtle brand-aligned gradient */}
      <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
        <PageTracker />
        <Routes>
          <Route path="/terms" element={<Terms />} />
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Services />
              {/* <Portfolio/> */}
              <Process />
              <TechStack />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;