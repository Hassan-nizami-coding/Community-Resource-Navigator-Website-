import React, { useEffect, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Clock, Phone, Globe, Mail, Calendar } from 'lucide-react';
import { InteractiveMap } from '../map/InteractiveMap';
interface ResourceModalProps {
  resource: any;
  onClose: () => void;
}
export function ResourceModal({
  resource,
  onClose
}: ResourceModalProps) {
  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);
  return <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} exit={{
        opacity: 0,
        scale: 0.9
      }} transition={{
        type: 'spring',
        damping: 25,
        stiffness: 300
      }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
          <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold">{resource.name}</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Close modal">
              <X size={24} />
            </button>
          </div>
          <div className="overflow-y-auto p-6 max-h-[calc(90vh-8rem)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                {resource.image ? <img src={resource.image} alt={resource.name} className="w-full h-64 object-cover rounded-xl mb-6" /> : <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-xl mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-400 dark:text-gray-500">
                      {resource.name.charAt(0)}
                    </span>
                  </div>}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-indigo-600 dark:text-indigo-400 mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {resource.address || '123 Main St, Anytown, ST 12345'}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {resource.distance} miles away
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-indigo-600 dark:text-indigo-400 mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <h4 className="font-medium">Hours</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {resource.hours || 'Monday - Friday: 9am - 5pm'}
                      </p>
                      <p className={`text-sm ${resource.status === 'Open' ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
                        {resource.status || 'Closed Now'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-indigo-600 dark:text-indigo-400 mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <h4 className="font-medium">Contact</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {resource.phone || '(555) 123-4567'}
                      </p>
                      {resource.email && <div className="flex items-center mt-1">
                          <Mail className="text-gray-500 mr-1" size={14} />
                          <a href={`mailto:${resource.email}`} className="text-indigo-600 dark:text-indigo-400 text-sm">
                            {resource.email}
                          </a>
                        </div>}
                      {resource.website && <div className="flex items-center mt-1">
                          <Globe className="text-gray-500 mr-1" size={14} />
                          <a href={resource.website} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 text-sm">
                            Visit Website
                          </a>
                        </div>}
                    </div>
                  </div>
                  {resource.nextAvailable && <div className="flex items-start">
                      <Calendar className="text-indigo-600 dark:text-indigo-400 mt-1 mr-3 flex-shrink-0" size={18} />
                      <div>
                        <h4 className="font-medium">Availability</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Next available: {resource.nextAvailable}
                        </p>
                      </div>
                    </div>}
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">About</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {resource.description || 'No description available.'}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Services</h3>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                    {resource.services ? resource.services.map((service: string, index: number) => <li key={index}>{service}</li>) : <li>Information not available</li>}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Location</h3>
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden h-48">
                    <InteractiveMap singleResource={resource} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 p-6 flex justify-between">
            <button onClick={onClose} className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              Close
            </button>
            <div className="flex space-x-3">
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(resource.address || '123 Main St, Anytown, ST 12345')}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors">
                Get Directions
              </a>
              <a href={`tel:${resource.phone || '5551234567'}`} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>;
}