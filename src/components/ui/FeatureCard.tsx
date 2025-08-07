import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor?: string;
}
export function FeatureCard({
  title,
  description,
  icon,
  accentColor = '#4F46E5' // Default indigo color
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  // Handle mouse move for the 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    // Calculate mouse position relative to the card center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Normalize values (between -1 and 1)
    const normalizedX = x / (rect.width / 2);
    const normalizedY = y / (rect.height / 2);
    setMousePosition({
      x: normalizedX,
      y: normalizedY
    });
  };
  // Reset mouse position when mouse leaves
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({
      x: 0,
      y: 0
    });
  };
  return <motion.div ref={cardRef} className="relative w-full max-w-sm bg-white dark:bg-gray-800 rounded-2xl p-6 transition-all duration-300 cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} animate={{
    scale: isHovered ? 1.03 : 1,
    boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    rotateX: isHovered ? -mousePosition.y * 7 : 0,
    rotateY: isHovered ? mousePosition.x * 7 : 0,
    z: isHovered ? 10 : 0
  }} transition={{
    type: 'spring',
    stiffness: 300,
    damping: 20
  }} style={{
    transformStyle: 'preserve-3d'
  }}>
      {/* Card Content */}
      <div className="flex flex-col h-full">
        {/* Icon */}
        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{
        backgroundColor: `${accentColor}15`
      }} // Light version of accent color
      >
          <motion.div animate={{
          scale: isHovered ? 1.1 : 1,
          y: isHovered ? -2 : 0
        }} transition={{
          type: 'spring',
          stiffness: 400
        }} style={{
          color: accentColor
        }}>
            {icon}
          </motion.div>
        </div>
        {/* Title */}
        <motion.h3 className="text-xl font-bold mb-2 dark:text-white" animate={{
        y: isHovered ? -2 : 0
      }} transition={{
        type: 'spring',
        stiffness: 400
      }}>
          {title}
        </motion.h3>
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
          {description}
        </p>
        {/* Learn More Link with Animated Underline */}
        <div className="relative inline-block self-start">
          <span className="font-medium text-sm" style={{
          color: accentColor
        }}>
            Learn More
          </span>
          {/* Animated underline */}
          <motion.div className="absolute left-0 bottom-0 h-0.5 w-0" style={{
          backgroundColor: accentColor
        }} initial={{
          width: '0%',
          left: '50%'
        }} animate={{
          width: isHovered ? '100%' : '0%',
          left: isHovered ? '0%' : '50%'
        }} transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }} />
        </div>
      </div>
      {/* 3D floating effect */}
      <motion.div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
      background: `radial-gradient(
            circle at ${mousePosition.x > 0 ? mousePosition.x * 100 + 50 : 50}% ${mousePosition.y > 0 ? mousePosition.y * 100 + 50 : 50}%, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(255, 255, 255, 0) 60%
          )`,
      opacity: isHovered ? 1 : 0
    }} />
    </motion.div>;
}