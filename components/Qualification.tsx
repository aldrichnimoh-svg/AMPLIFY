import React from 'react';
import { motion } from 'framer-motion';

export const Qualification: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white text-brand-midnight">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-8 leading-tight">
            Are you ready to <br/>
            take this seriously?
          </h2>
          <div className="w-24 h-2 bg-brand-magenta mx-auto mb-8" />
          <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto text-brand-midnight">
            This is for artists who are ready to invest in growth, build a real audience, and treat their music career like a business. 
          </p>
          <p className="mt-4 text-brand-electric font-bold">
            No bots. No fake streams. Just real work for real results.
          </p>
        </motion.div>
      </div>
    </section>
  );
};