import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-20">
      {/* Background Ambience - Updated to Electric Blue glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-electric/20 via-brand-midnight to-brand-midnight opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-electric/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Animated Sound Waves (CSS/SVG) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="flex items-center gap-1 sm:gap-2 h-64">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: "20%" }}
              animate={{ height: ["20%", "80%", "20%"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
              // Alternating colors for waves
              className={`w-2 sm:w-4 rounded-full ${i % 2 === 0 ? 'bg-brand-electric' : 'bg-brand-magenta'}`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 border border-brand-electric/30 rounded-full bg-brand-electric/10 backdrop-blur-sm text-xs sm:text-sm font-medium tracking-widest uppercase mb-6 text-brand-electric">
            Professional Music Marketing
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-bold uppercase leading-[0.9] tracking-tight text-white">
            Make Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric via-white to-brand-electric">
              Music Heard
            </span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl text-brand-gray max-w-2xl mx-auto leading-relaxed"
        >
          We build real audiences for artists who are ready to grow. 
          Stop chasing vanity metrics and start building a career.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-4"
        >
          <Button onClick={onCtaClick} size="lg" className="min-w-[240px]">
            Work With AMPLIFY
          </Button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-gray/50 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};