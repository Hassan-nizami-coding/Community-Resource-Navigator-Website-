import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/home/HeroSection';
import { CategoryCards } from '../components/home/CategoryCards';
import { FloatingElements } from '../components/ui/FloatingElements';
import { BackgroundPattern } from '../components/ui/BackgroundPattern';
export function Home() {
  return <div className="w-full">
      <HeroSection />
      <BackgroundPattern variant="dots" className="relative">
        <FloatingElements variant="mixed" density="low" />
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7
          }} className="inline-block mb-2 px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-300 text-sm font-medium">
              Explore Resources
            </motion.div>
            <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-3" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.1
          }}>
              Find Resources Near You
            </motion.h2>
            <motion.p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.2
          }}>
              Connect with local services designed to help you navigate life's
              challenges. Our platform makes it easy to find the support you
              need.
            </motion.p>
          </div>
          <CategoryCards />
          {/* Additional section */}
          <motion.div className="mt-20 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden" initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-100px'
        }} transition={{
          duration: 0.7
        }}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 dark:bg-indigo-900/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100 dark:bg-amber-900/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  How It Works
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our platform connects you with resources in your community
                  that can help with various needs. We've made it simple to find
                  and access the support you deserve.
                </p>
                <div className="space-y-4">
                  {[{
                  number: '01',
                  title: 'Search for resources',
                  description: 'Use our search tool to find services near you'
                }, {
                  number: '02',
                  title: 'Explore different sections',
                  description: 'Discover resources in our specialized categories'
                }, {
                  number: '03',
                  title: 'Ask our chatbot',
                  description: "If you don't know what to do, our chatbot will guide you to the right resources"
                }].map((step, index) => <motion.div key={index} className="flex gap-4" initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-medium">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{step.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>)}
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-amber-500/10 dark:from-indigo-500/20 dark:to-amber-500/20 rounded-2xl transform rotate-3"></div>
                <motion.img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" alt="Person using laptop to find community resources" className="rounded-2xl shadow-lg relative z-10 transform -rotate-3 hover:rotate-0 transition-transform duration-500" whileHover={{
                scale: 1.03,
                rotate: 0
              }} transition={{
                duration: 0.5
              }} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </BackgroundPattern>
    </div>;
}