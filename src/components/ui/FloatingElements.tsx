import React from 'react';
import { motion } from 'framer-motion';
interface FloatingElementsProps {
  variant?: 'circles' | 'squares' | 'mixed';
  density?: 'low' | 'medium' | 'high';
  color?: 'indigo' | 'amber' | 'emerald' | 'mixed';
}
export function FloatingElements({
  variant = 'circles',
  density = 'medium',
  color = 'mixed'
}: FloatingElementsProps) {
  // Determine number of elements based on density
  const elementCount = density === 'low' ? 5 : density === 'medium' ? 10 : 15;
  // Create array of elements
  const elements = Array.from({
    length: elementCount
  }).map((_, i) => {
    // Random position
    const top = `${Math.random() * 100}%`;
    const left = `${Math.random() * 100}%`;
    // Random size between 4-12
    const size = Math.floor(Math.random() * 8) + 4;
    // Random duration between 15-40s
    const duration = Math.floor(Math.random() * 25) + 15;
    // Random delay
    const delay = Math.random() * 5;
    // Color based on prop or random if mixed
    let elementColor;
    if (color === 'mixed') {
      const colors = ['indigo', 'amber', 'emerald'];
      elementColor = colors[Math.floor(Math.random() * colors.length)];
    } else {
      elementColor = color;
    }
    // Shape based on variant or random if mixed
    let shape;
    if (variant === 'mixed') {
      shape = Math.random() > 0.5 ? 'circle' : 'square';
    } else if (variant === 'circles') {
      shape = 'circle';
    } else {
      shape = 'square';
    }
    return {
      id: i,
      top,
      left,
      size,
      duration,
      delay,
      color: elementColor,
      shape
    };
  });
  return <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {elements.map(element => <motion.div key={element.id} className={`absolute ${element.shape === 'circle' ? 'rounded-full' : 'rounded-md'} ${element.color === 'indigo' ? 'bg-indigo-500/10 dark:bg-indigo-500/20' : element.color === 'amber' ? 'bg-amber-500/10 dark:bg-amber-500/20' : 'bg-emerald-500/10 dark:bg-emerald-500/20'}`} style={{
      top: element.top,
      left: element.left,
      width: `${element.size}px`,
      height: `${element.size}px`
    }} animate={{
      y: [0, -20, 0],
      x: [0, 15, 0],
      rotate: [0, 180, 0]
    }} transition={{
      repeat: Infinity,
      duration: element.duration,
      delay: element.delay,
      ease: 'easeInOut'
    }} />)}
    </div>;
}