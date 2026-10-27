import React from 'react';
import { BookingForm } from '../components/BookingForm';
import { PageHero } from '../components/PageHero';
import { pagesData } from '../data/content';
import { PageId } from '../types';

interface BookingProps {
  onNavigate: (page: PageId) => void;
  prefillPackage?: string;
}

export const Booking: React.FC<BookingProps> = ({ onNavigate, prefillPackage }) => {
  const meta = pagesData['booking.html'];

  return (
    <main>
      <PageHero meta={meta} onNavigate={onNavigate} />

      <section className="section">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div>
            <span className="eyebrow">LET’S GET STARTED</span>
            <h2>
              A few details.
              <br />
              A fresher space.
            </h2>
            <p>
              Fill in the form and share what you have in mind. This demo shows the
              customer journey; connect a real email or booking service before using it
              for live enquiries.
            </p>
            <ul className="checks">
              <li>Choose your preferred cleaning package or service</li>
              <li>Tell us your property size and target date</li>
              <li>Receive a tailored follow-up quote and confirmation</li>
            </ul>

            <div className="card mt-6">
              <h3>Prefer a quick conversation?</h3>
              <p>
                Reach out directly with questions or special commercial scheduling requests.
              </p>
              <button
                className="textlink font-bold"
                onClick={() => onNavigate('contact.html')}
              >
                Contact information ↗
              </button>
            </div>

            <div className="p-4 mt-6 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-slate-600 leading-relaxed">
              <strong>Sample Booking Notice:</strong> This booking module operates in presentation demo mode. No payment processing, calendar lock, or commercial cleaner dispatch occurs.
            </div>
          </div>

          <div>
            <BookingForm initialPackage={prefillPackage} />
          </div>
        </div>
      </section>
    </main>
  );
};
