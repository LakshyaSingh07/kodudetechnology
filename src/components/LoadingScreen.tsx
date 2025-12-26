import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </div>

      {/* Logo */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo icon with gold border animation */}
        <div className="relative mb-8">
          <motion.div
            className="w-20 h-20 rounded-lg bg-gradient-gold flex items-center justify-center shadow-glow"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-primary-foreground font-display font-bold text-4xl">K</span>
          </motion.div>
          
          {/* Rotating gold ring */}
          <motion.div
            className="absolute -inset-3 rounded-xl border border-primary/30"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{
              opacity: { duration: 0.5, delay: 0.3 },
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            }}
          />
          <motion.div
            className="absolute -inset-6 rounded-xl border border-primary/20"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: -360 }}
            transition={{
              opacity: { duration: 0.5, delay: 0.4 },
              rotate: { duration: 12, repeat: Infinity, ease: "linear" },
            }}
          />
        </div>

        {/* Brand name */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h1 className="font-display text-3xl text-foreground tracking-wide mb-2">KoDude</h1>
          <p className="text-xs text-muted-foreground uppercase tracking-[0.3em]">Technology</p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="w-48 h-px bg-border overflow-hidden"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-gold origin-left"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="mt-4 text-xs text-muted-foreground font-light tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {progress < 100 ? "Loading" : "Welcome"}
        </motion.p>
      </motion.div>

      {/* Bottom tagline */}
      <motion.p
        className="absolute bottom-8 text-xs text-muted-foreground/50 font-light tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Where Ideas Become Digital Reality
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;