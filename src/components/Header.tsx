import React, { useState } from 'react';
import { navItems } from '../data/content';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Sample / Demo notice banner */}
      <div className="demo-banner">
        <span>
          <strong>DEMO PRESENTATION:</strong> CleanSwift is a concept portfolio site. Pricing, reviews &amp; contact info are sample data.
        </span>
      </div>

      {/* Topbar */}
      <div className="topbar">
        <div className="container toprow">
          <span>✦ Thoughtful cleaning. Remarkable results.</span>
          <span>
            Mon–Sat: 8:00 AM–6:00 PM &nbsp; · &nbsp;{' '}
            <button
              onClick={() => handleNavClick('contact.html')}
              className="underline text-white hover:text-blue-200 transition bg-transparent border-0 cursor-pointer p-0 font-inherit inline"
            >
              hello@cleanswift.demo
            </button>
          </span>
        </div>
      </div>

      {/* Main navigation */}
      <header className="navwrap">
        <nav className="container nav" aria-label="Main Navigation">
          <button
            className="brand"
            onClick={() => handleNavClick('index.html')}
            aria-label="CleanSwift Home"
          >
            <span className="brandmark">✦</span>
            <span>
              cleanswift<small>CLEANING CO.</small>
            </span>
          </button>

          <button
            className="mobile-toggle"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>

          <div className={`navlinks ${mobileOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <button
                key={item.page}
                className={currentPage === item.page ? 'active' : ''}
                onClick={() => handleNavClick(item.page)}
              >
                {item.label}
              </button>
            ))}
            <button
              className={currentPage === 'booking.html' ? 'active' : ''}
              onClick={() => handleNavClick('booking.html')}
            >
              Booking
            </button>
          </div>

          <button
            className="btn"
            onClick={() => handleNavClick('booking.html')}
          >
            Get a free quote ↗
          </button>
        </nav>
      </header>
    </>
  );
};
