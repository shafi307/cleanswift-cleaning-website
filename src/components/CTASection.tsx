import React from 'react';
import { PageId } from '../types';

interface CTASectionProps {
  onNavigate: (page: PageId) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onNavigate }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="cta">
          <div>
            <h2>
              Ready for a <span>fresh start?</span>
            </h2>
            <p>Tell us about your space. We’ll help you choose the right clean.</p>
          </div>
          <button
            className="btn lime text-slate-900"
            onClick={() => onNavigate('booking.html')}
          >
            Get your free quote ↗
          </button>
        </div>
      </div>
    </section>
  );
};
