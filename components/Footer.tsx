import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-midnight py-16 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Decorative top border gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-brand-electric/30 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-10">
        
        {/* Brand & Credibility Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img 
            src="https://i.ibb.co/HTrKLxWN/AMPLIFY-WHITE.png" 
            alt="AMPLIFY Logo" 
            className="h-12 w-auto object-contain mb-6 opacity-90" 
          />
          <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3">
            Make Your Music Heard
          </h3>
          <p className="text-brand-gray text-sm leading-relaxed max-w-md opacity-80">
            A dedicated gospel music marketing and promotion service.
          </p>
        </div>

        {/* Legal & Trust Section */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <div className="mb-4 px-3 py-1 bg-brand-electric/5 border border-brand-electric/10 rounded-full">
            <p className="text-[10px] font-bold text-brand-electric uppercase tracking-widest">
              Serious Inquiries Only
            </p>
          </div>
          <p className="text-brand-gray/40 text-xs">
            © {new Date().getFullYear()} AMPLIFY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};