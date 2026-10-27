import React from 'react';
import { CTASection } from '../components/CTASection';
import { PageHero } from '../components/PageHero';
import { pagesData, unsplashImg } from '../data/content';
import { PageId } from '../types';

interface ServiceDetailProps {
  pageId: 'house-cleaning.html' | 'commercial-cleaning.html' | 'deep-cleaning.html';
  onNavigate: (page: PageId, prefillPackage?: string) => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ pageId, onNavigate }) => {
  const meta = pagesData[pageId];
  const isOffice = pageId === 'commercial-cleaning.html';
  const isDeep = pageId === 'deep-cleaning.html';

  const benefits = isOffice
    ? [
        'Reception and shared common areas sanitized',
        'Desks, conference tables, and touchpoints wiped down',
        'Staff kitchenette, coffee stations, and washrooms refreshed',
        'Flexible after-hours or weekend scheduling to prevent disruption',
        'Waste bins emptied, recycling separated, and liners replaced',
      ]
    : isDeep
    ? [
        'Detailed kitchen degreasing & intensive bathroom lime/grout focus',
        'Baseboards, reachable door frames, moldings, and trims',
        'Behind and under easily movable furniture and appliances',
        'Corners, ceiling cobwebs, and overlooked dusty zones',
        'Customized high-priority checklist tailored to your home',
      ]
    : [
        'Dusting of all surfaces, shelves, sideboards, and decor',
        'Kitchen exterior counters, stove top, and sink sanitized',
        'Full bathroom scrub, faucets polished, mirrors cleaned',
        'Vacuuming of all rugs and thorough mopping of hard floors',
        'Beds made, linens straightened, and common living areas tidied',
      ];

  const heroImage = isOffice
    ? 'photo-1497366754035-f200968a6e72'
    : isDeep
    ? 'photo-1584622650111-993a426fbf0a'
    : 'photo-1581578731548-c64695cc6952';

  const subHeading = isOffice
    ? 'A workplace that feels ready for business.'
    : isDeep
    ? 'A reset from top to bottom.'
    : 'A fresh feeling, room by room.';

  const steps = [
    {
      num: '01',
      title: 'Tell us what you need',
      desc: 'Share your property size, priority areas, and preferred morning or afternoon window.',
    },
    {
      num: '02',
      title: 'Get your tailored plan',
      desc: 'We recommend a custom checklist, supply plan, and transparent demo estimate with no surprises.',
    },
    {
      num: '03',
      title: 'Enjoy the fresh feeling',
      desc: 'Our screened team arrives on schedule, completes the checklist, and leaves your space sparkling.',
    },
  ];

  return (
    <main>
      <PageHero meta={meta} onNavigate={onNavigate} />

      {/* What's Included Split */}
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">WHAT’S INCLUDED</span>
            <h2>{subHeading}</h2>
            <p>
              {meta.desc} We’ll agree on the priorities before we begin so your clean feels
              completely right for your space and requirements.
            </p>
            <ul className="checks">
              {benefits.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
            <div className="actions mt-6">
              <button
                className="btn"
                onClick={() => onNavigate('booking.html', meta.sub)}
              >
                Request a tailored quote ↗
              </button>
              <button
                className="btn light"
                onClick={() => onNavigate('pricing.html')}
              >
                View pricing plans
              </button>
            </div>
          </div>

          <div className="photo-panel">
            <img
              src={unsplashImg(heroImage)}
              alt={meta.sub}
              loading="lazy"
            />
            <div className="badge">
              {meta.sub} Specialization ✦
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Grid */}
      <section className="section soft">
        <div className="container">
          <div className="center">
            <span className="eyebrow">ROOM-BY-ROOM SCOPE</span>
            <h2>Detailed attention in every area.</h2>
            <p>Here is what our technicians execute during every standard visit.</p>
          </div>

          <div className="cards">
            <article className="card">
              <div className="icon">🍳</div>
              <h3>Kitchen Area</h3>
              <p>
                Wipe countertops, sanitize sink basins, clean stovetops, polish stainless steel appliance exteriors, and mop floor.
              </p>
            </article>

            <article className="card">
              <div className="icon">🚿</div>
              <h3>Bathrooms</h3>
              <p>
                Disinfect toilets, scrub tub/shower tiles, remove soap scum, polish chrome faucets, wash mirrors, and sanitize floors.
              </p>
            </article>

            <article className="card">
              <div className="icon">🛋</div>
              <h3>Living &amp; Common</h3>
              <p>
                Dust all reachable surfaces, vacuum upholstered couches, straighten cushions, wipe electronics/tables, and vacuum rugs.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="section">
        <div className="container">
          <div className="center">
            <span className="eyebrow">YOUR VISIT, MADE SIMPLE</span>
            <h2>Three easy steps to a fresher space.</h2>
          </div>
          <div className="cards">
            {steps.map((x) => (
              <article className="card" key={x.num}>
                <div className="icon font-extrabold text-blue-600">{x.num}</div>
                <h3>{x.title}</h3>
                <p>{x.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </main>
  );
};
