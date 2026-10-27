import React, { useState } from 'react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [showPolicy, setShowPolicy] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footgrid">
          <div>
            <button
              className="brand text-white"
              onClick={() => onNavigate('index.html')}
            >
              <span className="brandmark">✦</span>
              <span style={{ color: '#fff' }}>
                cleanswift<small style={{ color: '#91a7b8' }}>CLEANING CO.</small>
              </span>
            </button>
            <p style={{ maxWidth: 280, marginTop: 20 }}>
              A brighter clean for a better day. Thoughtful home and commercial cleaning, made simple.
            </p>
            <p>
              ✉ <button onClick={() => onNavigate('contact.html')} className="text-[#b7c7d5] underline hover:text-white bg-transparent border-0 cursor-pointer p-0 font-inherit inline">hello@cleanswift.demo</button>
              <br />
              ☎ <button onClick={() => onNavigate('contact.html')} className="text-[#b7c7d5] underline hover:text-white bg-transparent border-0 cursor-pointer p-0 font-inherit inline">+1 (555) 014-2088</button>
            </p>
          </div>

          <div>
            <h3>Explore</h3>
            <p>
              <button className="footlink" onClick={() => onNavigate('about.html')}>
                About us
              </button>
              <button className="footlink" onClick={() => onNavigate('services.html')}>
                Our services
              </button>
              <button className="footlink" onClick={() => onNavigate('pricing.html')}>
                Pricing &amp; packages
              </button>
              <button className="footlink" onClick={() => onNavigate('blog.html')}>
                Cleaning journal
              </button>
            </p>
          </div>

          <div>
            <h3>Our services</h3>
            <p>
              <button className="footlink" onClick={() => onNavigate('house-cleaning.html')}>
                House cleaning
              </button>
              <button className="footlink" onClick={() => onNavigate('deep-cleaning.html')}>
                Deep cleaning
              </button>
              <button className="footlink" onClick={() => onNavigate('commercial-cleaning.html')}>
                Office cleaning
              </button>
              <button className="footlink" onClick={() => onNavigate('booking.html')}>
                Move in / out
              </button>
            </p>
          </div>

          <div>
            <h3>Service promise</h3>
            <p>
              ✓ Detail-focused cleaning
              <br />
              ✓ Friendly, professional team
              <br />
              ✓ Flexible scheduling
              <br />
              ✓ Plans tailored to your space
            </p>
            <button
              className="btn mt-3"
              style={{ width: '100%' }}
              onClick={() => onNavigate('booking.html')}
            >
              Request a quote ↗
            </button>
          </div>
        </div>

        <div className="copyright">
          <span>
            © 2026 CleanSwift Cleaning Co. Demo website. Built for presentation purposes.
          </span>
          <div className="flex gap-4">
            <button
              onClick={() => setShowPolicy('privacy')}
              className="text-[#91a7b8] hover:text-white bg-transparent border-0 cursor-pointer p-0 text-xs"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => setShowPolicy('terms')}
              className="text-[#91a7b8] hover:text-white bg-transparent border-0 cursor-pointer p-0 text-xs"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {showPolicy && (
        <div className="modal-overlay" onClick={() => setShowPolicy(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowPolicy(null)}
              aria-label="Close dialog"
            >
              ✕
            </button>
            <div className="eyebrow">
              {showPolicy === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </div>
            <h2>
              {showPolicy === 'privacy'
                ? 'Demo Privacy Policy'
                : 'Demo Terms of Service'}
            </h2>
            <div className="text-sm text-slate-600 space-y-4 my-4">
              <p>
                <strong>Sample Information Disclaimer:</strong> This website is a functional demo template for CleanSwift Cleaning Co. It does not collect or transmit personal consumer data to any live corporate databases.
              </p>
              <p>
                Any form submissions, quotes requested, phone numbers, or email addresses displayed are purely for demonstration and testing.
              </p>
              <p>
                Prior to deploying to production for a commercial enterprise, appropriate operational agreements, real privacy disclosures, and dispatch endpoints should be configured.
              </p>
            </div>
            <button className="btn" onClick={() => setShowPolicy(null)}>
              Got it, close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
