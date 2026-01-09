import React from 'react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 bg-brand-midnight relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-6">
            Comprehensive <span className="text-brand-electric">Growth</span> Strategies
          </h2>
          <p className="text-brand-gray text-lg">
            We don't do "one size fits all." Our services are designed to tackle every aspect of a modern music career, from distribution to data analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 bg-brand-white/5 border border-white/5 hover:border-brand-electric/50 transition-colors duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-electric to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-brand-electric group-hover:bg-brand-electric group-hover:text-white transition-colors duration-300">
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold font-display uppercase mb-3 tracking-wide text-white">
                  {service.title}
                </h3>
                
                <p className="text-brand-gray mb-6 text-sm leading-relaxed border-b border-white/10 pb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-electric mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="bg-white/5 p-4 rounded border border-white/5">
                  <p className="text-xs font-bold text-brand-electric uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-sm text-white font-medium italic">{service.outcome}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};