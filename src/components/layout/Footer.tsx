import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-100 dark:bg-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-indigo-600 text-white p-2 rounded-lg">
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
              </div>
              <span className="font-bold text-xl">Community Navigator</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Helping people in need discover local resources and get directions
              fast.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/legal-aid" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Legal Aid
                </Link>
              </li>
              <li>
                <Link to="/food-nutrition" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Food & Nutrition
                </Link>
              </li>
              <li>
                <Link to="/housing-assistance" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Housing Assistance
                </Link>
              </li>
              <li>
                <Link to="/healthcare-services" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Healthcare Services
                </Link>
              </li>
              <li>
                <Link to="/employment-help" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Employment Help
                </Link>
              </li>
              <li>
                <Link to="/disability-services" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Disability Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-600 dark:text-gray-300">
                  123 Community Way
                  <br />
                  Karachi, Pakistan
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" size={18} />
                <span className="text-gray-600 dark:text-gray-300">
                  (021) 123-4567
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" size={18} />
                <span className="text-gray-600 dark:text-gray-300">
                  help@communitynavigator.org
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Community Navigator. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-400 text-sm hover:text-indigo-600 dark:hover:text-indigo-400">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 text-sm hover:text-indigo-600 dark:hover:text-indigo-400">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 text-sm hover:text-indigo-600 dark:hover:text-indigo-400">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}