import React from 'react';
import { PageId, ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  onNavigate: (page: PageId) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onNavigate }) => {
  return (
    <article className="card">
      <div className="icon">{service.icon}</div>
      <div className="flex items-center justify-between gap-2">
        <h3>{service.title}</h3>
        {service.badge && (
          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
            {service.badge}
          </span>
        )}
      </div>
      <p>{service.desc}</p>
      <button
        className="textlink"
        onClick={() => onNavigate(service.targetPage)}
      >
        Explore service ↗
      </button>
    </article>
  );
};
