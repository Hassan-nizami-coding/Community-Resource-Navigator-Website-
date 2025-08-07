import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { ResourceCard } from './ResourceCard';
import { ResourceModal } from './ResourceModal';
import { resourceData } from '../../utils/resourceData';
interface ResourceGridProps {
  category: string;
}
export function ResourceGrid({
  category
}: ResourceGridProps) {
  const [selectedResource, setSelectedResource] = useState<any | null>(null);
  // Filter resources by category
  const filteredResources = resourceData.filter(resource => resource.category === category);
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
  return <>
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredResources.map((resource, index) => <ResourceCard key={index} resource={resource} onClick={() => setSelectedResource(resource)} />)}
      </motion.div>
      {/* Show empty state if no resources */}
      {filteredResources.length === 0 && <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 7h.01" />
              <path d="M17 7h.01" />
              <path d="M7 17h.01" />
              <path d="M17 17h.01" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">No resources found</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-md">
            We couldn't find any resources in this category. Try adjusting your
            search or filters.
          </p>
        </div>}
      {/* Resource Detail Modal */}
      {selectedResource && <ResourceModal resource={selectedResource} onClose={() => setSelectedResource(null)} />}
    </>;
}