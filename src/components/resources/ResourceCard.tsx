import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ExternalLink, DollarSign, Phone } from 'lucide-react';
interface ResourceCardProps {
  resource: any;
  onClick: () => void;
}
export function ResourceCard({
  resource,
  onClick
}: ResourceCardProps) {
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
  return <motion.div variants={item} whileHover={{
    y: -5,
    transition: {
      type: 'spring',
      stiffness: 300
    }
  }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-start">
          {resource.logo ? <img src={resource.logo} alt={`${resource.name} logo`} className="w-16 h-16 rounded-lg object-cover mr-4" /> : <div className="w-16 h-16 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-4">
              <span className="text-xl font-bold text-gray-500 dark:text-gray-400">
                {resource.name.charAt(0)}
              </span>
            </div>}
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-1">{resource.name}</h3>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <MapPin size={14} className="mr-1" />
              <span>{resource.distance} miles away</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 my-3 line-clamp-2">
          {resource.description}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 my-3">
          {resource.isAccessible && <div className="flex items-center px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded text-xs text-blue-700 dark:text-blue-300">
              <div size={12} className="mr-1" />
              <span>Accessible</span>
            </div>}
          {resource.isFree && <div className="flex items-center px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded text-xs text-green-700 dark:text-green-300">
              <DollarSign size={12} className="mr-1" />
              <span>Free</span>
            </div>}
          {resource.status === 'Open' ? <div className="flex items-center px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded text-xs text-emerald-700 dark:text-emerald-300">
              <Clock size={12} className="mr-1" />
              <span>Open Now</span>
            </div> : <div className="flex items-center px-2 py-1 bg-amber-100 dark:bg-amber-900/30 rounded text-xs text-amber-700 dark:text-amber-300">
              <Clock size={12} className="mr-1" />
              <span>Closed</span>
            </div>}
        </div>
        {/* Footer with button */}
        <div className="flex justify-between items-center mt-4">
          <a href={`tel:${resource.phone}`} className="flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-medium">
            <Phone size={14} className="mr-1" />
            <span>{resource.phone}</span>
          </a>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={onClick} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center text-sm font-medium transition-colors">
            <span>View Details</span>
            <ExternalLink size={14} className="ml-1" />
          </motion.button>
        </div>
      </div>
    </motion.div>;
}