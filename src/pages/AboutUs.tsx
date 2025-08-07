import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundPattern } from '../components/ui/BackgroundPattern';
import { FloatingElements } from '../components/ui/FloatingElements';
export function AboutUs() {
  return <div className="w-full pt-16 bg-white dark:bg-gray-900">
      {/* Hero Banner */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" alt="Community volunteers helping at a shelter" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
          {/* Animated overlay */}
          <div className="absolute inset-0">
            {Array.from({
            length: 10
          }).map((_, i) => <motion.div key={i} className="absolute bg-white/5 rounded-full" style={{
            width: Math.random() * 150 + 50,
            height: Math.random() * 150 + 50,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }} animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1]
          }} transition={{
            repeat: Infinity,
            duration: Math.random() * 10 + 10,
            ease: 'easeInOut'
          }} />)}
          </div>
        </div>
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
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5
          }} className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow">
              Our Mission
            </h1>
            <motion.p className="text-xl md:text-2xl text-white/90" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.3,
            duration: 0.8
          }}>
              Building a better Pakistan through community support and
              connection.
            </motion.p>
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
      </div>
      {/* About Content */}
      <BackgroundPattern variant="gradient" className="relative">
        <FloatingElements variant="circles" density="low" color="indigo" />
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-100 dark:bg-indigo-900/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <div className="relative">
                <div className="inline-block mb-4 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-300 text-sm font-medium">
                  Our Story
                </div>
                <h2 className="text-3xl font-bold mb-6">How We Started</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Community Navigator began with a simple belief: that every
                  Pakistani deserves access to essential resources, regardless
                  of their background or circumstances. In a country facing
                  numerous social and economic challenges, we recognized the
                  need for a platform that connects people with the help they
                  need.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our journey started in Karachi, where we witnessed firsthand
                  the struggles many communities face in accessing basic
                  services. From legal aid to healthcare, food security to
                  housing - finding help often meant navigating a complex web of
                  organizations, each with their own processes and requirements.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  We created Community Navigator to bridge this gap, making it
                  easier for people to find and access the support they need,
                  when they need it most.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="rounded-2xl overflow-hidden shadow-lg relative">
              {/* Image wrapper with hover effect */}
              <div className="relative overflow-hidden rounded-2xl">
                <motion.div whileHover={{
                scale: 1.05
              }} transition={{
                duration: 0.5
              }}>
                  <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" alt="Community outreach in Pakistan" className="w-full h-auto" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">
                      Making a Difference
                    </h3>
                    <p className="text-white/80 text-sm">
                      Karachi, Pakistan - 2023
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-100px'
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }} className="mt-20">
            <div className="text-center mb-12">
              <div className="inline-block mb-2 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-300 text-sm font-medium">
                Our Vision
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Our Vision for Pakistan
              </h2>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-2xl shadow-inner relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-indigo-200 dark:bg-indigo-800/30 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-200 dark:bg-indigo-800/30 rounded-full translate-x-1/2 translate-y-1/2 blur-xl"></div>
              <div className="relative">
                <svg className="w-12 h-12 text-indigo-400 dark:text-indigo-500 mb-4 opacity-40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21c3.33-3.33 5-6 5-8 0-1-.67-2-2-2-1.33 0-2 .67-2 2h-2c0-1.33.33-2.33 1-3 .67-.67 1.67-1 3-1 1.33 0 2.33.33 3 1 .67.67 1 1.67 1 3 0 1.33-.67 2.67-2 4-.67.67-1.33 1.33-2 2h4v2h-9z" fill="currentColor" />
                  <path d="M17 21c3.33-3.33 5-6 5-8 0-1-.67-2-2-2-1.33 0-2 .67-2 2h-2c0-1.33.33-2.33 1-3 .67-.67 1.67-1 3-1 1.33 0 2.33.33 3 1 .67.67 1 1.67 1 3 0 1.33-.67 2.67-2 4-.67.67-1.33 1.33-2 2h4v2h-9z" fill="currentColor" />
                </svg>
                <p className="text-gray-700 dark:text-gray-300 text-xl italic mb-4">
                  "We envision a Pakistan where no one struggles alone. Where
                  communities are empowered with knowledge and access to
                  resources that improve their lives. Where the barriers between
                  those who need help and those who provide it are removed."
                </p>
                <p className="text-right text-gray-600 dark:text-gray-400">
                  — Community Navigator Team
                </p>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
              title: 'Connecting Communities',
              description: "We're building bridges between service providers and those in need, creating a network that spans across Pakistan's diverse communities.",
              color: 'indigo'
            }, {
              title: 'Empowering Through Information',
              description: 'Knowledge is power. By providing clear information about available resources, we empower Pakistanis to make informed decisions about their needs.',
              color: 'emerald'
            }, {
              title: 'Sustainable Change',
              description: "Beyond immediate assistance, we're working toward systemic changes that address the root causes of social issues in Pakistan.",
              color: 'amber'
            }].map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1,
              duration: 0.5
            }} whileHover={{
              y: -5
            }} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-${item.color}-100 dark:bg-${item.color}-900/30 text-${item.color}-600 dark:text-${item.color}-400`}>
                    {index === 0 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 6.1H3" />
                        <path d="M21 12.1H3" />
                        <path d="M15.1 18H3" />
                      </svg>}
                    {index === 1 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 14v.01" />
                        <path d="M22 10v3a5 5 0 0 1-5 5h-5l-5 5v-5H3a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5Z" />
                      </svg>}
                    {index === 2 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22v-5" />
                        <path d="M9 7V2" />
                        <path d="M15 7V2" />
                        <path d="M6 13V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Z" />
                      </svg>}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 text-${item.color}-600 dark:text-${item.color}-400`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </BackgroundPattern>
    </div>;
}