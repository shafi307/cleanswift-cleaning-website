import React from 'react';
import { CTASection } from '../components/CTASection';
import { PageHero } from '../components/PageHero';
import { pagesData, unsplashImg } from '../data/content';
import { PageId } from '../types';

interface AboutProps {
  onNavigate: (page: PageId) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const meta = pagesData['about.html'];

  return (
    <main>
      <PageHero meta={meta} onNavigate={onNavigate} />

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">OUR STORY</span>
            <h2>
              Clean spaces.
              <br />
              Better everyday moments.
            </h2>
            <p>
              CleanSwift was created around a simple idea: professional cleaning
              should be dependable, personal and easy to fit into real life.
            </p>
            <p>
              We focus on the details people notice—the fresh feeling when you walk in,
              the care around your favourite spaces and the confidence that the job
              has been done thoughtfully.
            </p>
            <ul className="checks">
              <li>People-first, vetted cleaning professionals</li>
              <li>Clear, upfront communication from start to finish</li>
              <li>Flexible plans for homes and local businesses</li>
              <li>Consistent checklists tailored to your priorities</li>
            </ul>
            <button
              className="btn"
              onClick={() => onNavigate('booking.html')}
            >
              Meet your clean plan ↗
            </button>
          </div>

          <div className="photo-panel">
            <img
              src={unsplashImg('photo-1581578731548-c64695cc6952')}
              alt="CleanSwift cleaning professional at work"
              loading="lazy"
            />
            <div className="badge">
              Care in every corner ✦
            </div>
          </div>
        </div>

        {/* Four Stats */}
        <div className="container stats">
          <div className="stat">
            <strong>Detail</strong>
            <span>In every clean</span>
          </div>
          <div className="stat">
            <strong>Flexible</strong>
            <span>Plans &amp; schedules</span>
          </div>
          <div className="stat">
            <strong>Friendly</strong>
            <span>Service approach</span>
          </div>
          <div className="stat">
            <strong>Fresh</strong>
            <span>Spaces, always</span>
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="section soft">
        <div className="container">
          <div className="center">
            <span className="eyebrow">OUR CORE PRINCIPLES</span>
            <h2>What sets our cleans apart.</h2>
            <p>
              We treat your home and workspace with the highest respect and attention.
            </p>
          </div>

          <div className="cards">
            <article className="card">
              <div className="icon">🛡</div>
              <h3>Trusted &amp; Screened</h3>
              <p>
                Every team member undergoes identity verification, thorough background
                checks, and comprehensive hands-on quality training.
              </p>
            </article>

            <article className="card">
              <div className="icon">🌿</div>
              <h3>Eco-Conscious Supplies</h3>
              <p>
                We prioritize biodegradable, gentle cleaners that are safe for pets,
                curious toddlers, and delicate stone or hardwood surfaces.
              </p>
            </article>

            <article className="card">
              <div className="icon">✓</div>
              <h3>100% Sparkle Guarantee</h3>
              <p>
                If any agreed zone or priority room was missed, we’ll happily arrange
                a complimentary touch-up within 24 hours.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </main>
  );
};
