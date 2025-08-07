import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCard } from '../components/ui/FeatureCard';
import { Zap, Shield, Globe, Sparkles, Lightbulb, RefreshCw } from 'lucide-react';
export function FeatureCardDemo() {
  const features = [{
    title: 'Lightning Fast Performance',
    description: 'Experience blazing-fast load times and smooth interactions with our optimized platform.',
    icon: <Zap size={24} />,
    accentColor: '#4F46E5' // Indigo
  }, {
    title: 'Enterprise-Grade Security',
    description: 'Rest easy knowing your data is protected with state-of-the-art security protocols.',
    icon: <Shield size={24} />,
    accentColor: '#059669' // Emerald
  }, {
    title: 'Global Accessibility',
    description: 'Access your resources from anywhere in the world with our distributed network.',
    icon: <Globe size={24} />,
    accentColor: '#D97706' // Amber
  }, {
    title: 'AI-Powered Insights',
    description: 'Gain valuable insights with our advanced machine learning algorithms.',
    icon: <Sparkles size={24} />,
    accentColor: '#DB2777' // Pink
  }, {
    title: 'Intuitive User Experience',
    description: 'Enjoy a thoughtfully designed interface that makes complex tasks simple.',
    icon: <Lightbulb size={24} />,
    accentColor: '#8B5CF6' // Purple
  }, {
    title: 'Continuous Updates',
    description: 'Stay ahead with regular feature updates and improvements based on user feedback.',
    icon: <RefreshCw size={24} />,
    accentColor: '#0EA5E9' // Sky
  }];
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            Interactive Feature Cards
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hover over the cards below to see the dynamic hover state in action.
            Experience the 3D tilt, shadow effects, and animated accents.
          </p>
        </motion.div>
        {/* Before & After Demonstration */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
            Before & After Comparison
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="w-full max-w-sm">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                  <Zap size={24} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  Default State
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  This is how the card looks before any interaction takes place.
                </p>
                <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">
                  Learn More
                </span>
              </div>
              <p className="text-center mt-4 text-gray-500 dark:text-gray-400">
                Before: Default State
              </p>
            </div>
            <div className="hidden md:block text-4xl font-light text-gray-400">
              →
            </div>
            <div className="w-full max-w-sm">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl transform scale-105" style={{
              transform: 'perspective(1000px) rotateX(-5deg) rotateY(5deg) translateZ(10px)'
            }}>
                <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-white/10 to-transparent opacity-60"></div>
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                  <Zap size={26} className="text-indigo-600 dark:text-indigo-400 transform -translate-y-0.5" />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white transform -translate-y-0.5">
                  Hover State
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  This is how the card transforms when a user hovers over it.
                </p>
                <div className="relative inline-block">
                  <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">
                    Learn More
                  </span>
                  <div className="absolute left-0 bottom-0 h-0.5 w-full bg-indigo-600 dark:bg-indigo-400"></div>
                </div>
              </div>
              <p className="text-center mt-4 text-gray-500 dark:text-gray-400">
                After: Hover State
              </p>
            </div>
          </div>
        </div>
        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1,
          duration: 0.5
        }}>
              <FeatureCard title={feature.title} description={feature.description} icon={feature.icon} accentColor={feature.accentColor} />
            </motion.div>)}
        </div>
      </div>
    </div>;
}