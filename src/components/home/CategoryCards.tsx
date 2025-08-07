import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scale, Utensils, Home, Heart, Briefcase, Accessibility } from 'lucide-react';
export function CategoryCards() {
  const categories = [{
    title: 'Legal Aid',
    description: 'Access free legal advice, representation, and resources for your legal needs.',
    icon: <Scale size={32} />,
    color: 'bg-indigo-100 dark:bg-indigo-900/30',
    textColor: 'text-indigo-600 dark:text-indigo-300',
    accentColor: '#4F46E5',
    path: '/legal-aid'
  }, {
    title: 'Food & Nutrition',
    description: 'Find food banks, meal programs, and nutrition assistance near you.',
    icon: <Utensils size={32} />,
    color: 'bg-emerald-100 dark:bg-emerald-900/30',
    textColor: 'text-emerald-600 dark:text-emerald-300',
    accentColor: '#059669',
    path: '/food-nutrition'
  }, {
    title: 'Housing Assistance',
    description: 'Discover housing resources, shelters, and rental assistance programs.',
    icon: <Home size={32} />,
    color: 'bg-amber-100 dark:bg-amber-900/30',
    textColor: 'text-amber-600 dark:text-amber-300',
    accentColor: '#D97706',
    path: '/housing-assistance'
  }, {
    title: 'Healthcare Services',
    description: 'Connect with free and low-cost healthcare options and medical support.',
    icon: <Heart size={32} />,
    color: 'bg-rose-100 dark:bg-rose-900/30',
    textColor: 'text-rose-600 dark:text-rose-300',
    accentColor: '#E11D48',
    path: '/healthcare-services'
  }, {
    title: 'Employment Help',
    description: 'Find job training, career counseling, and employment opportunities.',
    icon: <Briefcase size={32} />,
    color: 'bg-blue-100 dark:bg-blue-900/30',
    textColor: 'text-blue-600 dark:text-blue-300',
    accentColor: '#2563EB',
    path: '/employment-help'
  }, {
    title: 'Disability Services',
    description: 'Access support services and resources for people with disabilities.',
    icon: <Accessibility size={32} />,
    color: 'bg-purple-100 dark:bg-purple-900/30',
    textColor: 'text-purple-600 dark:text-purple-300',
    accentColor: '#7C3AED',
    path: '/disability-services'
  }];
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24
      }
    }
  };
  return <div className="relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="absolute top-0 left-0 w-40 h-40 text-indigo-100 dark:text-indigo-900/20 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-64 h-64 text-amber-100 dark:text-amber-900/20 translate-x-1/3 translate-y-1/3" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="currentColor" />
        </svg>
      </div>
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {categories.map((category, index) => <motion.div key={index} variants={item} className="perspective-1000">
            <Link to={category.path} className="block h-full">
              <motion.div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-all duration-300 h-full flex flex-col transform-gpu border border-gray-100 dark:border-gray-700" whileHover={{
            scale: 1.05,
            rotateX: -2,
            rotateY: 2,
            z: 10,
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }} style={{
            transformStyle: 'preserve-3d'
          }}>
                <div className="p-6 h-full flex flex-col">
                  <motion.div className={`p-3 rounded-xl ${category.color} ${category.textColor} self-start mb-4 relative overflow-hidden`} whileHover={{
                scale: 1.1,
                y: -2,
                transition: {
                  type: 'spring',
                  stiffness: 400
                }
              }}>
                    {/* Animated background */}
                    <motion.div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `radial-gradient(circle at 50% 0%, ${category.accentColor}40, transparent 70%)`
                }} animate={{
                  y: [0, 10, 0],
                  opacity: [0.3, 0.5, 0.3]
                }} transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: 'easeInOut'
                }} />
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow">
                    {category.description}
                  </p>
                  <div className="mt-4 flex justify-end">
                    <div className="relative inline-block group">
                      <span className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center" style={{
                    color: category.accentColor
                  }}>
                        Learn more
                        <motion.span animate={{
                      x: [0, 5, 0]
                    }} transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      repeatType: 'loop',
                      ease: 'easeInOut'
                    }}>
                          →
                        </motion.span>
                      </span>
                      <motion.div className="absolute left-0 bottom-0 h-0.5 w-0" style={{
                    backgroundColor: category.accentColor
                  }} initial={{
                    width: '0%',
                    left: '50%'
                  }} whileHover={{
                    width: '100%',
                    left: '0%',
                    transition: {
                      duration: 0.3,
                      ease: 'easeInOut'
                    }
                  }} />
                    </div>
                  </div>
                </div>
                <motion.div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-white/10 to-transparent opacity-0" whileHover={{
              opacity: 0.6
            }} />
              </motion.div>
            </Link>
          </motion.div>)}
      </motion.div>
    </div>;
}