import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Filter, Search } from 'lucide-react';
import { ResourceGrid } from '../components/resources/ResourceGrid';
import { InteractiveMap } from '../components/map/InteractiveMap';
export function LegalAid() {
  return <div className="w-full pt-16 bg-white dark:bg-gray-900">
      {/* Hero Banner */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} className="bg-indigo-100 dark:bg-indigo-900/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div initial={{
            scale: 0.8,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} transition={{
            delay: 0.2,
            type: 'spring'
          }} className="bg-indigo-200 dark:bg-indigo-800/50 p-6 rounded-full mb-6 md:mb-0 md:mr-8">
              <Scale size={48} className="text-indigo-600 dark:text-indigo-300" />
            </motion.div>
            <div>
              <motion.h1 initial={{
              y: -20,
              opacity: 0
            }} animate={{
              y: 0,
              opacity: 1
            }} transition={{
              delay: 0.1
            }} className="text-3xl md:text-4xl font-bold mb-2">
                Legal Aid Resources
              </motion.h1>
              <motion.p initial={{
              y: -20,
              opacity: 0
            }} animate={{
              y: 0,
              opacity: 1
            }} transition={{
              delay: 0.2
            }} className="text-gray-600 dark:text-gray-300 text-lg">
                Find free or low-cost legal assistance, advice, and
                representation in your area.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input type="text" placeholder="Search for legal aid services..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <Filter size={16} className="mr-2" />
                <span>Filters</span>
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Search
              </button>
            </div>
          </div>
          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {['Open Now', 'Wheelchair Accessible', 'Free Services', 'Walk-ins Welcome'].map((filter, index) => <div key={index} className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
                <span>{filter}</span>
              </div>)}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resource Listings */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Available Resources</h2>
            <ResourceGrid category="legal" />
          </div>
          {/* Map */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Resource Map</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden h-[500px]">
              <InteractiveMap category="legal" />
            </div>
          </div>
        </div>
      </div>
    </div>;
}