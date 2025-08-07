import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
interface PageTransitionProps {
  children: React.ReactNode;
}
export function PageTransition({
  children
}: PageTransitionProps) {
  const location = useLocation();
  return <motion.div key={location.pathname} initial={{
    opacity: 0,
    y: 10
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0,
    y: -10
  }} transition={{
    duration: 0.3
  }} className="w-full">
      {children}
    </motion.div>;
}