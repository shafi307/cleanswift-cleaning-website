import React from 'react';
import { PageId, PricingPlan } from '../types';

interface PricingCardProps {
  plan: PricingPlan;
  onNavigate: (page: PageId, prefillPackage?: string) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, onNavigate }) => {
  return (
    <article className={`price-card ${plan.featured ? 'featured' : ''}`}>
      {plan.featured && <span className="popular">MOST POPULAR</span>}
      <h3>{plan.name}</h3>
      <p>{plan.desc}</p>
      <div className="price">
        {plan.price}{' '}
        <small className="text-slate-500 font-medium text-xs">
          {plan.period}
        </small>
      </div>
      <ul>
        {plan.features.map((feat, idx) => (
          <li key={idx}>{feat}</li>
        ))}
      </ul>
      <button
        className={`btn ${plan.featured ? '' : 'light'}`}
        style={{ width: '100%' }}
        onClick={() => onNavigate('booking.html', plan.name)}
      >
        Choose package ↗
      </button>
    </article>
  );
};
