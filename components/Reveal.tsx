import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  width?: 'fit-content' | '100%';
  direction?: 'up' | 'left';
}

export function Reveal({ children, delay = 0, width = 'fit-content', direction = 'up' }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' });

  const initial = direction === 'up'
    ? { opacity: 0, y: 24 }
    : { opacity: 0, x: -24 };

  return (
    <div ref={ref} style={{ width, overflow: 'visible' }}>
      <motion.div
        initial={initial}
        animate={isInView ? { opacity: 1, y: 0, x: 0 } : initial}
        transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
