import React from 'react';
import { CTASection } from '../components/CTASection';
import { PageHero } from '../components/PageHero';
import { ServiceCard } from '../components/ServiceCard';
import { pagesData, servicesData, unsplashImg } from '../data/content';
import { PageId } from '../types';

interface ServicesProps {
  onNavigate: (page: PageId) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const meta = pagesData['services.html'];

  return (
    <main>
      <PageHero meta={meta} onNavigate={onNavigate} />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">ALL SERVICES</span>
              <h2>Tailored packages for every space.</h2>
            </div>
            <p>
              Choose from standard maintenance visits, intensive resets, commercial sanitization, or move transitions.
            </p>
          </div>

          <div className="cards">
            {servicesData.map((svc) => (
              <ServiceCard
                key={svc.id}
                service={svc}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Made for your space split */}
      <section className="section soft">
        <div className="container split">
          <div>
            <span className="eyebrow">MADE FOR YOUR SPACE</span>
            <h2>The right clean, without the guesswork.</h2>
            <p>
              Not sure what you need? Tell us about your space and what matters most.
              We’ll help you choose a service and schedule that make sense.
            </p>
            <ul className="checks">
              <li>One-time resets or recurring scheduled appointments</li>
              <li>Customized priority checklists tailored to your lifestyle</li>
              <li>Transparent sample quote and expectations before booking</li>
              <li>Option to add interior oven, fridge, or window treatments</li>
            </ul>
            <button
              className="btn"
              onClick={() => onNavigate('booking.html')}
            >
              Help me choose ↗
            </button>
          </div>

          <div className="photo-panel">
            <img
              src={unsplashImg('photo-1527515637462-cff94eecc1ac')}
              alt="Fresh clean living room in natural daylight"
              loading="lazy"
            />
            <div className="badge">
              Customizable checklists ✦
            </div>
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </main>
  );
};
