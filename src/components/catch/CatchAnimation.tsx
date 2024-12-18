import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CatchAnimationProps {
  isAttempting: boolean;
  isSuccess?: boolean;
  onComplete: () => void;
}

export function CatchAnimation({ isAttempting, isSuccess, onComplete }: CatchAnimationProps) {
  return (
    <AnimatePresence mode="wait" onExitComplete={onComplete}>
      {isAttempting && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative"
            initial={{ scale: 0 }}
            animate={[
              { scale: 1, rotate: 0 },
              { scale: 1.2, rotate: 360, transition: { delay: 0.5 } },
              { scale: 1, rotate: 720, transition: { delay: 1 } }
            ]}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 rounded-full bg-red-500 border-8 border-white relative">
              <div className="absolute inset-x-0 top-1/2 h-4 bg-white transform -translate-y-1/2" />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={isSuccess !== undefined ? {
                  backgroundColor: isSuccess ? '#22c55e' : '#ef4444',
                  transition: { delay: 1.5, duration: 0.3 }
                } : {}}
                onAnimationComplete={() => {
                  if (isSuccess !== undefined) {
                    setTimeout(() => onComplete(), 500);
                  }
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}