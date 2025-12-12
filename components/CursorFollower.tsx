import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CursorFollower: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Fluid physics configuration
  // Mass: Higher mass = more inertia (smoother)
  // Stiffness: Lower = looser connection to mouse
  // Damping: Prevents excessive wobbling
  const springConfig = { damping: 35, stiffness: 250, mass: 0.8 };
  
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      // Robust check for interactive elements
      const isLink = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('clickable');
      
      setIsHovering(!!isLink);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      
      {/* Outer Ring - Expands on hover */}
      <motion.div
        className="absolute top-0 left-0 rounded-full box-border border border-accent"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 60 : 20,
          height: isHovering ? 60 : 20,
          // Subtle fill on hover, clean transparent otherwise
          backgroundColor: isHovering ? 'rgba(249, 115, 22, 0.05)' : 'transparent',
          // Softer border on hover
          borderColor: isHovering ? 'rgba(249, 115, 22, 0.3)' : '#f97316',
          scale: isClicking ? 0.9 : 1,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.3
        }}
      />

      {/* Inner Dot - Disappears on hover for cleanliness */}
      <motion.div
        className="absolute top-0 left-0 bg-accent rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 0 : 6,
          height: isHovering ? 0 : 6,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
};

export default CursorFollower;