import React, { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { pagesData } from '../data/content';
import { PageId } from '../types';

interface ContactProps {
  onNavigate: (page: PageId) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const meta = pagesData['contact.html'];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Question',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [zipInput, setZipInput] = useState('');
  const [zipResult, setZipResult] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipInput.trim()) return;
    setZipResult(`Postal code ${zipInput.trim()} is in our standard demo coverage zone! Free travel fee included.`);
  };

  return (
    <main>
      <PageHero meta={meta} onNavigate={onNavigate} />

      <section className="section">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div>
            <span className="eyebrow">SAY HELLO</span>
            <h2>We’re happy to help.</h2>
            <p>
              Use the form to share a question or request a cleaning quote. Replace the
              sample contact details below with the real business information before
              launch.
            </p>

            <div className="card">
              <div className="icon">✉</div>
              <h3>Email us</h3>
              <p className="text-slate-800 font-semibold mb-1">hello@cleanswift.demo</p>
              <span className="text-[11px] text-slate-400">Sample email for testing</span>
            </div>

            <div className="card" style={{ marginTop: 16 }}>
              <div className="icon">☎</div>
              <h3>Call the team</h3>
              <p className="text-slate-800 font-semibold mb-1">+1 (555) 014-2088</p>
              <span className="text-[11px] text-slate-400">Mon–Sat 8:00 AM – 6:00 PM (Sample number)</span>
            </div>

            <div className="card" style={{ marginTop: 16 }}>
              <div className="icon">⌖</div>
              <h3>Service area</h3>
              <p className="text-slate-800 font-semibold mb-1">
                Metro Area, West Suburbs, &amp; Downtown
              </p>
              <span className="text-[11px] text-slate-400">Update with your real city and service boundary.</span>
            </div>
          </div>

          <div className="formbox">
            <div className="notice-warning">
              <strong>DEMO NOTICE:</strong> Messages submitted here are displayed locally for demonstration. No live emails are sent to a real company.
            </div>

            {submitted ? (
              <div className="space-y-4">
                <div className="notice" style={{ display: 'block', backgroundColor: '#e8f8f0' }}>
                  <div className="flex items-center gap-2 font-bold text-emerald-800 text-sm mb-1">
                    <span>✓</span> Message Received (Demo)
                  </div>
                  <p className="text-emerald-900 text-xs leading-relaxed m-0">
                    Thanks <strong>{formData.name}</strong>! Your demo message about &quot;{formData.subject}&quot; was recorded. In production, this delivers straight to the support inbox or ticketing system.
                  </p>
                </div>
                <button
                  type="button"
                  className="btn light"
                  style={{ width: '100%' }}
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: 'General Question',
                      message: '',
                    });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="formgrid">
                  <div className="field">
                    <label htmlFor="contactName">Full name *</label>
                    <input
                      id="contactName"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="contactEmail">Email address *</label>
                    <input
                      id="contactEmail"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="contactPhone">Phone number</label>
                    <input
                      id="contactPhone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="contactSubject">Inquiry subject</label>
                    <select
                      id="contactSubject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option>General Question</option>
                      <option>Quote Consultation</option>
                      <option>Commercial Cleaning Contract</option>
                      <option>Reschedule or Cancel</option>
                      <option>Careers &amp; Cleaner Application</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="contactMsg">Your message *</label>
                  <textarea
                    id="contactMsg"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you need help with or ask any questions…"
                  ></textarea>
                </div>

                <button className="btn" type="submit" style={{ width: '100%' }}>
                  Send inquiry ↗
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Service Area Section & Interactive Area Checker */}
      <section className="section soft">
        <div className="container center">
          <span className="eyebrow">SERVICE AREA</span>
          <h2>Local care, right where you need it.</h2>
          <p>
            Add your business address or embedded Google Map here when setting up the live site.
          </p>

          {/* Interactive Map Visual */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-50 via-slate-50 to-emerald-50 border border-slate-200 shadow-sm max-w-3xl mx-auto text-left">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <div className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
                  <span className="text-blue-600">⌖</span> CleanSwift Service Radius
                </div>
                <div className="text-xs text-slate-500">
                  Serving residential and commercial properties within 30 miles
                </div>
              </div>

              {/* Quick Zip code checker */}
              <form onSubmit={handleZipCheck} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter postal code..."
                  value={zipInput}
                  onChange={(e) => setZipInput(e.target.value)}
                  className="text-xs px-3 py-2 border rounded-lg bg-white outline-none focus:border-blue-500"
                />
                <button type="submit" className="btn light text-xs py-2 px-3">
                  Check Area
                </button>
              </form>
            </div>

            {zipResult && (
              <div className="mt-3 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
                ✓ {zipResult}
              </div>
            )}

            {/* Stylized Map Canvas Placeholder */}
            <div className="mt-4 rounded-xl min-h-[220px] bg-slate-100 border border-slate-200 relative overflow-hidden flex flex-col items-center justify-center p-6 text-center">
              {/* Map grid lines aesthetic */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(#1677ff 1.5px, transparent 1.5px), radial-gradient(#1677ff 1.5px, #f1f5f9 1.5px)',
                  backgroundSize: '24px 24px',
                }}
              ></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl shadow-lg mb-2 animate-bounce">
                  ⌖
                </div>
                <h4 className="text-slate-900 font-extrabold text-base mb-1">
                  Google Maps Embed Placeholder
                </h4>
                <p className="text-xs text-slate-500 max-w-sm mb-3">
                  In live production, replace this component with an active Google Maps Platform iframe or Interactive Map API.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-semibold text-slate-600">
                    Downtown District
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-semibold text-slate-600">
                    North Metro
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-semibold text-slate-600">
                    West Suburbs
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-semibold text-slate-600">
                    Tech Park South
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
