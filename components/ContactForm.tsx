import React from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.link/id2lq0', '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 bg-brand-midnight relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-electric/5 skew-x-12 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
            <div className="w-20 h-20 bg-brand-electric/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-brand-electric/20 text-brand-electric shadow-[0_0_30px_rgba(63,169,245,0.2)]">
                <MessageCircle size={40} strokeWidth={1.5} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6">
              Let's Amplify Your Music
            </h2>
            
            <p className="text-xl text-brand-gray mb-10 leading-relaxed max-w-2xl mx-auto">
              Ready to grow your audience? We prefer a direct connection. 
              Chat with us on WhatsApp to discuss your goals and build a custom strategy immediately.
            </p>

            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="min-w-[280px]"
            >
              Chat on WhatsApp
            </Button>
            
            <p className="text-sm text-brand-gray mt-6 opacity-60">
              Serious inquiries only.
            </p>
        </motion.div>
      </div>
    </section>
  );
};