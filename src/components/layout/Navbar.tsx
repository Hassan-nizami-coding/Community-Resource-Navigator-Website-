import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
export function Navbar({
  darkMode,
  toggleDarkMode
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Legal Aid',
    path: '/legal-aid'
  }, {
    name: 'Food & Nutrition',
    path: '/food-nutrition'
  }, {
    name: 'Housing',
    path: '/housing-assistance'
  }, {
    name: 'Healthcare',
    path: '/healthcare-services'
  }, {
    name: 'Employment',
    path: '/employment-help'
  }, {
    name: 'Disability Services',
    path: '/disability-services'
  }];
  const navbarBg = isHomePage && !isScrolled && !mobileMenuOpen ? 'bg-transparent' : 'bg-white dark:bg-gray-800 shadow-md';
  const textColor = isHomePage && !isScrolled && !mobileMenuOpen ? 'text-white' : 'text-gray-800 dark:text-white';
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div whileHover={{
            rotate: 10
          }} className="bg-indigo-600 text-white p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 22h2a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-2v5Z" />
                <path d="M14 22h-2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2v5Z" />
                <path d="M18 5V3a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2" />
                <path d="M10 11v11" />
                <path d="M6 11h12" />
                <path d="M8 5V3" />
                <path d="M16 5V3" />
                <path d="M6 11a4 4 0 0 1 0-8h12a4 4 0 0 1 0 8" />
              </svg>
            </motion.div>
            <span className={`font-bold text-xl ${textColor}`}>
              Community Navigator
            </span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link, index) => <Link key={index} to={link.path} className={`${textColor} hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium ${location.pathname === link.path ? 'border-b-2 border-indigo-600 dark:border-indigo-400' : ''}`}>
                  {link.name}
                </Link>)}
            </div>
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
              {darkMode ? <Sun className="text-amber-400" size={20} /> : <Moon className={isHomePage && !isScrolled ? 'text-white' : 'text-gray-800'} size={20} />}
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleDarkMode} className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
              {darkMode ? <Sun className="text-amber-400" size={20} /> : <Moon className={isHomePage && !isScrolled ? 'text-white' : 'text-gray-800'} size={20} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 rounded-md focus:outline-none ${textColor}`} aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && <motion.div initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, index) => <Link key={index} to={link.path} className={`py-2 px-3 rounded-md text-gray-800 dark:text-white hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors ${location.pathname === link.path ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  {link.name}
                </Link>)}
            </div>
          </div>
        </motion.div>}
    </nav>;
}