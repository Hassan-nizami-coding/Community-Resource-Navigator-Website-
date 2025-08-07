import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
export function HeroSection() {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };
  const fadeIn = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };
  return <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-group-of-people-walking-on-a-busy-sidewalk-42634-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-indigo-900/50"></div>
        {/* Animated overlay elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({
          length: 6
        }).map((_, i) => <motion.div key={i} className="absolute rounded-full bg-white/10" style={{
          width: Math.random() * 200 + 50,
          height: Math.random() * 200 + 50,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`
        }} animate={{
          y: [0, -30, 0],
          opacity: [0.1, 0.15, 0.1]
        }} transition={{
          repeat: Infinity,
          duration: Math.random() * 10 + 15,
          ease: 'easeInOut'
        }} />)}
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-center max-w-4xl">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8
        }} className="mb-6 inline-block">
            <div className="bg-white/20 backdrop-blur-md rounded-full p-3 inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
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
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow-lg">
            Your Local Community Resource Navigator
          </h1>
          <motion.p className="text-xl md:text-2xl mb-8 text-white/90" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.3,
          duration: 0.8
        }}>
            Find help. Get directions. Feel supported.
          </motion.p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
            <motion.div className="relative w-full md:w-96" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5,
            duration: 0.5
          }} whileHover={{
            scale: 1.02
          }}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search for resources..." className="w-full pl-10 pr-4 py-3 rounded-full bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-lg backdrop-blur-sm transition-all" />
              <motion.div className="absolute inset-0 rounded-full bg-indigo-400/20" animate={{
              boxShadow: ['0 0 0 0 rgba(99, 102, 241, 0)', '0 0 0 10px rgba(99, 102, 241, 0)']
            }} transition={{
              repeat: Infinity,
              duration: 2
            }} />
            </motion.div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[{
            title: 'Legal Aid',
            path: '/legal-aid',
            delay: 0.1
          }, {
            title: 'Food & Nutrition',
            path: '/food-nutrition',
            delay: 0.2
          }, {
            title: 'Housing',
            path: '/housing-assistance',
            delay: 0.3
          }, {
            title: 'Healthcare',
            path: '/healthcare-services',
            delay: 0.4
          }, {
            title: 'Employment',
            path: '/employment-help',
            delay: 0.5
          }, {
            title: 'About Us',
            path: '/about-us',
            delay: 0.6
          }].map((category, index) => <motion.div key={index} custom={index} variants={fadeIn} initial="hidden" animate="visible">
                <Link to={category.path}>
                  <motion.button variants={buttonVariants} whileHover="hover" whileTap="tap" className="w-full py-3 px-4 bg-indigo-600/90 hover:bg-indigo-700 rounded-xl font-medium text-white shadow-lg backdrop-blur-sm transition-all border border-indigo-500/30">
                    {category.title}
                  </motion.button>
                </Link>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10" animate={{
      y: [0, 10, 0]
    }} transition={{
      repeat: Infinity,
      duration: 2,
      ease: 'easeInOut'
    }}>
        <div className="w-6 h-10 rounded-full border-2 border-white/60 flex items-center justify-center">
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" animate={{
          y: [0, 12, 0]
        }} transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: 'easeInOut'
        }} />
        </div>
      </motion.div>
    </div>;
}