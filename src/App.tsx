import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home } from './pages/Home';
import { LegalAid } from './pages/LegalAid';
import { FoodNutrition } from './pages/FoodNutrition';
import { HousingAssistance } from './pages/HousingAssistance';
import { HealthcareServices } from './pages/HealthcareServices';
import { EmploymentHelp } from './pages/EmploymentHelp';
import { DisabilityServices } from './pages/DisabilityServices';
import { AboutUs } from './pages/AboutUs';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Chatbot } from './components/chatbot/Chatbot';
import { PageTransition } from './components/ui/PageTransition';
import { BackgroundPattern } from './components/ui/BackgroundPattern';
export function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return <Router>
      <div className={`${darkMode ? 'dark' : ''} min-h-screen`}>
        <BackgroundPattern variant="gradient" className="min-h-screen">
          <div className="flex flex-col min-h-screen text-charcoal dark:text-white transition-colors duration-300">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <PageTransition>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/legal-aid" element={<LegalAid />} />
                    <Route path="/food-nutrition" element={<FoodNutrition />} />
                    <Route path="/housing-assistance" element={<HousingAssistance />} />
                    <Route path="/healthcare-services" element={<HealthcareServices />} />
                    <Route path="/employment-help" element={<EmploymentHelp />} />
                    <Route path="/disability-services" element={<DisabilityServices />} />
                    <Route path="/about-us" element={<AboutUs />} />
                  </Routes>
                </PageTransition>
              </AnimatePresence>
            </main>
            <Footer />
            <Chatbot />
          </div>
        </BackgroundPattern>
      </div>
    </Router>;
}