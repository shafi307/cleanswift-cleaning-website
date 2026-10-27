import React from 'react';
import { PageId } from '../types';

interface FloatingCTAProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ currentPage, onNavigate }) => {
  // Don't show floating button if already on booking page
  if (currentPage === 'booking.html') {
    return null;
  }

  return (
    <button
      className="floating"
      onClick={() => onNavigate('booking.html')}
      aria-label="Get a free cleaning quote"
    >
      <span>✦</span> Get a quote
    </button>
  );
};
