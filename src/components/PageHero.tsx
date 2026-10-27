import React from 'react';
import { PageId, PageMeta } from '../types';

interface PageHeroProps {
  meta: PageMeta;
  onNavigate: (page: PageId) => void;
}

export const PageHero: React.FC<PageHeroProps> = ({ meta, onNavigate }) => {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">
          <span className="dot"></span>
          {meta.sub}
        </span>
        <h1>{meta.title}</h1>
        <p style={{ maxWidth: 690, fontSize: 16, marginTop: 20 }}>
          {meta.desc}
        </p>
        <div className="crumb">
          <button onClick={() => onNavigate('index.html')}>Home</button>
          <span> &nbsp; / &nbsp; {meta.sub}</span>
        </div>
      </div>
    </section>
  );
};
