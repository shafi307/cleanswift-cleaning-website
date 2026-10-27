import React from 'react';
import { CTASection } from '../components/CTASection';
import { PricingCard } from '../components/PricingCard';
import { ServiceCard } from '../components/ServiceCard';
import { homeFaqs, pricingPlans, servicesData, testimonials, unsplashImg } from '../data/content';
import { PageId } from '../types';

interface HomeProps {
  onNavigate: (page: PageId, prefillPackage?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">
              <span className="dot"></span> YOUR SPACE, OUR CARE
            </span>
            <h1>
              A cleaner space.
              <br />A <span>calmer mind.</span>
            </h1>
            <p>
              Professional cleaning, thoughtfully delivered. Get your time back while
              we take care of the details that make your space feel like new.
            </p>
            <div className="actions">
              <button
                className="btn"
                onClick={() => onNavigate('booking.html')}
              >
                Book your clean ↗
              </button>
              <button
                className="btn light"
                onClick={() => onNavigate('services.html')}
              >
                Explore services
              </button>
            </div>
            <div className="trustline">
              <div className="avatars" aria-hidden="true">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
              <span>Friendly people. Detail-first service.</span>
            </div>
          </div>

          <div className="hero-art">
            <img
              src={unsplashImg('photo-1581578731548-c64695cc6952')}
              alt="Professional cleaning in a bright modern home"
              loading="eager"
            />
            <div className="float-card fc1">
              <strong>100%</strong>Care in every corner
            </div>
            <div className="float-card fc2">
              <strong>✦ Fresh</strong>Feel-good spaces
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">WHAT WE DO</span>
              <h2>
                Goodbye mess.
                <br />
                Hello fresh.
              </h2>
            </div>
            <p>
              Whether it’s your everyday home or a busy workplace, our flexible services
              are designed to make clean feel effortless.
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

          <div style={{ textAlign: 'center', marginTop: 34 }}>
            <button
              className="btn light"
              onClick={() => onNavigate('services.html')}
            >
              View all services ↗
            </button>
          </div>
        </div>
      </section>

      {/* The CleanSwift Difference Split */}
      <section className="section soft">
        <div className="container split">
          <div className="photo-panel">
            <img
              src={unsplashImg('photo-1527515637462-cff94eecc1ac')}
              alt="Clean and tidy sunlit living space"
              loading="lazy"
            />
            <div className="badge">
              The little details
              <br />
              make the difference ✦
            </div>
          </div>

          <div>
            <span className="eyebrow">THE CLEANSWIFT DIFFERENCE</span>
            <h2>
              More than clean.
              <br />
              Peace of mind.
            </h2>
            <p>
              We make it easy to enjoy a space that feels cared for. Clear communication,
              thoughtful attention and a cleaning plan that fits your life—that’s the CleanSwift way.
            </p>
            <ul className="checks">
              <li>Reliable, friendly cleaning professionals</li>
              <li>Plans tailored to your space and schedule</li>
              <li>Detail-focused approach, every visit</li>
              <li>Easy booking and clear expectations</li>
            </ul>
            <button
              className="btn"
              onClick={() => onNavigate('about.html')}
            >
              Get to know us ↗
            </button>
          </div>
        </div>
      </section>

      {/* Simple Pricing */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">SIMPLE PRICING</span>
              <h2>A clean that fits your life.</h2>
            </div>
            <button
              className="textlink font-bold"
              onClick={() => onNavigate('pricing.html')}
            >
              See all packages ↗
            </button>
          </div>

          <div className="cards">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.name}
                plan={plan}
                onNavigate={onNavigate}
              />
            ))}
          </div>
          <p style={{ fontSize: 12, marginTop: 22, color: 'var(--muted)' }}>
            * Demo pricing shown for presentation purposes. Final prices depend on home size, condition and service frequency.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section soft">
        <div className="container">
          <div className="center">
            <span className="eyebrow">KIND WORDS</span>
            <h2>Our favourite thing? Your smile.</h2>
            <p>Great service should feel just as good as a freshly cleaned room.</p>
          </div>

          <div className="cards">
            {testimonials.map((t, idx) => (
              <article key={idx} className="testimonial">
                <div className="stars">★★★★★</div>
                <p>{t.quote}</p>
                <div className="person">
                  <div className="avatar">{t.author[0]}</div>
                  <div>
                    <strong>{t.author}</strong>
                    <span>{t.role} · Sample review</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container faq" style={{ maxWidth: 800 }}>
          <div className="center">
            <span className="eyebrow">QUICK ANSWERS</span>
            <h2>Good to know.</h2>
          </div>
          {homeFaqs.map((faq, idx) => (
            <details key={idx}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </main>
  );
};
