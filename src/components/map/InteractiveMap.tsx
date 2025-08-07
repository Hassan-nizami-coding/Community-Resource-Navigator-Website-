import React from 'react';
import { MapPin } from 'lucide-react';
interface InteractiveMapProps {
  category?: string;
  singleResource?: any;
}
export function InteractiveMap({
  category,
  singleResource
}: InteractiveMapProps) {
  // This is a placeholder for the actual map implementation
  // In a real implementation, this would use Google Maps or Leaflet
  const mapColors: Record<string, string> = {
    legal: '#4F46E5',
    food: '#10B981',
    housing: '#F59E0B',
    healthcare: '#F43F5E',
    employment: '#3B82F6',
    disability: '#8B5CF6' // purple
  };
  const currentCategory = category || singleResource?.category || 'legal';
  const color = mapColors[currentCategory] || '#4F46E5';
  return <div className="w-full h-full relative bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
      {/* Placeholder for the map */}
      <div className="text-center">
        <p className="text-gray-500 dark:text-gray-400 mb-3">Interactive Map</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {singleResource ? `Showing location for ${singleResource.name}` : `Showing all ${category || 'resource'} locations`}
        </p>
      </div>
      {/* Sample map pins */}
      <div className="absolute" style={{
      left: '30%',
      top: '40%'
    }}>
        <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{
        backgroundColor: color
      }}>
          <MapPin size={14} className="text-white" />
        </div>
      </div>
      <div className="absolute" style={{
      left: '60%',
      top: '30%'
    }}>
        <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{
        backgroundColor: color
      }}>
          <MapPin size={14} className="text-white" />
        </div>
      </div>
      <div className="absolute" style={{
      left: '45%',
      top: '60%'
    }}>
        <div className="w-6 h-6 rounded-full flex items-center justify-center animate-pulse" style={{
        backgroundColor: color
      }}>
          <MapPin size={14} className="text-white" />
        </div>
      </div>
    </div>;
}