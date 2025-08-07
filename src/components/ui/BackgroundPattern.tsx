import React from 'react';
import { motion } from 'framer-motion';
interface BackgroundPatternProps {
  children: React.ReactNode;
  variant?: 'gradient' | 'dots' | 'waves' | 'geometric';
  className?: string;
}
export function BackgroundPattern({
  children,
  variant = 'gradient',
  className = ''
}: BackgroundPatternProps) {
  return <div className={`relative overflow-hidden ${className}`}>
      {/* Background Pattern */}
      {variant === 'gradient' && <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/70 via-white to-amber-50/70 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950/30 -z-10" />}
      {variant === 'dots' && <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white dark:bg-gray-900" />
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: 'radial-gradient(#4F46E5 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />
        </div>}
      {variant === 'waves' && <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white dark:bg-gray-900" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="waves" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="scale(2) rotate(0)">
                <path d="M50 0C34 0 34 20 25 20S16 0 0 0v100h100V0c-16 0-16 20-25 20s-9-20-25-20z" stroke="#4F46E5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>
        </div>}
      {variant === 'geometric' && <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white dark:bg-gray-900" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="geometric" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 30 L30 0 L60 30 L30 60 Z" fill="none" stroke="#4F46E5" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geometric)" />
          </svg>
        </div>}
      {/* Floating Elements */}
      <div className="hidden md:block">
        {variant === 'gradient' && <>
            <motion.div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-indigo-200 dark:bg-indigo-900/30 blur-3xl opacity-30 dark:opacity-20" animate={{
          x: [0, 20, 0],
          y: [0, 30, 0]
        }} transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'easeInOut'
        }} />
            <motion.div className="absolute top-1/2 -right-32 w-72 h-72 rounded-full bg-amber-200 dark:bg-amber-900/30 blur-3xl opacity-30 dark:opacity-20" animate={{
          x: [0, -20, 0],
          y: [0, -40, 0]
        }} transition={{
          repeat: Infinity,
          duration: 25,
          ease: 'easeInOut'
        }} />
            <motion.div className="absolute bottom-20 left-1/3 w-48 h-48 rounded-full bg-emerald-200 dark:bg-emerald-900/30 blur-3xl opacity-30 dark:opacity-20" animate={{
          x: [0, 30, 0],
          y: [0, -20, 0]
        }} transition={{
          repeat: Infinity,
          duration: 18,
          ease: 'easeInOut'
        }} />
          </>}
      </div>
      {/* Content */}
      {children}
    </div>;
}