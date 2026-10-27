import React, { useState } from 'react';
import { BookingFormData } from '../types';

interface BookingFormProps {
  initialService?: string;
  initialPackage?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialService = '',
  initialPackage = '',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: initialService || (initialPackage ? `${initialPackage} Cleaning` : 'House Cleaning'),
    propertyType: 'House',
    preferredDate: '',
    frequency: 'One-time',
    bedrooms: '2 Bedrooms',
    bathrooms: '2 Bathrooms',
    notes: initialPackage ? `Interested in the ${initialPackage} package.` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<BookingFormData | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setLastSubmission({ ...formData });
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: 'House Cleaning',
      propertyType: 'House',
      preferredDate: '',
      frequency: 'One-time',
      bedrooms: '2 Bedrooms',
      bathrooms: '2 Bathrooms',
      notes: '',
    });
  };

  // Sample estimated price calculation (demo illustrative only)
  const calculateEstimatedDemoPrice = () => {
    let base = 89;
    if (formData.service.includes('Deep')) base = 199;
    else if (formData.service.includes('Commercial') || formData.service.includes('Office')) base = 169;
    else if (formData.service.includes('Move')) base = 219;
    else if (formData.service.includes('Signature')) base = 149;

    const beds = parseInt(formData.bedrooms) || 2;
    const baths = parseInt(formData.bathrooms) || 1;
    const total = base + (beds - 1) * 25 + (baths - 1) * 20;

    let discount = 1;
    if (formData.frequency === 'Weekly') discount = 0.85;
    else if (formData.frequency === 'Bi-weekly') discount = 0.9;
    else if (formData.frequency === 'Monthly') discount = 0.95;

    return Math.round(total * discount);
  };

  return (
    <div className="formbox">
      <div className="notice-warning">
        <strong>DEMO NOTICE:</strong> This is a sample booking request form for demonstration. No payments or actual commercial dispatch will be made.
      </div>

      {submitted ? (
        <div className="space-y-4">
          <div className="notice" style={{ display: 'block', backgroundColor: '#e8f8f0', borderColor: '#a3e6cb' }}>
            <div className="flex items-center gap-2 font-bold text-emerald-800 text-sm mb-1">
              <span>✓</span> Demo Request Submitted Successfully
            </div>
            <p className="text-emerald-900 text-xs leading-relaxed m-0">
              Thanks <strong>{lastSubmission?.fullName}</strong>! Because this is a static demo preview, no booking email was transmitted to a live business. In a production launch, this connects to an automated email service or booking dispatch API.
            </p>
          </div>

          {lastSubmission && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-slate-900 border-b pb-1 text-sm">
                Sample Submission Summary
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div><span className="text-slate-500">Service:</span> {lastSubmission.service}</div>
                <div><span className="text-slate-500">Property:</span> {lastSubmission.propertyType}</div>
                <div><span className="text-slate-500">Email:</span> {lastSubmission.email}</div>
                <div><span className="text-slate-500">Phone:</span> {lastSubmission.phone || 'Not provided'}</div>
                <div><span className="text-slate-500">Target Date:</span> {lastSubmission.preferredDate || 'Flexible'}</div>
                <div><span className="text-slate-500">Frequency:</span> {lastSubmission.frequency}</div>
                <div><span className="text-slate-500">Bed / Bath:</span> {lastSubmission.bedrooms}, {lastSubmission.bathrooms}</div>
                <div><span className="text-slate-500">Est. Sample Rate:</span> ~${calculateEstimatedDemoPrice()}</div>
              </div>
              {lastSubmission.notes && (
                <div className="pt-2 border-t text-slate-600">
                  <span className="text-slate-500">Special Notes:</span> {lastSubmission.notes}
                </div>
              )}
            </div>
          )}

          <button
            type="button"
            className="btn light"
            style={{ width: '100%' }}
            onClick={handleReset}
          >
            Submit Another Sample Request
          </button>
        </div>
      ) : (
        <form id="quoteForm" onSubmit={handleSubmit}>
          <div className="formgrid">
            <div className="field">
              <label htmlFor="fullName">Full name *</label>
              <input
                id="fullName"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Jane Doe"
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email address *</label>
              <input
                id="email"
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@example.com"
              />
            </div>

            <div className="field">
              <label htmlFor="phone">Phone number</label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="field">
              <label htmlFor="service">Service needed *</label>
              <select
                id="service"
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="House Cleaning">House Cleaning (Regular)</option>
                <option value="Deep Cleaning">Deep Cleaning (Top-to-Bottom)</option>
                <option value="Commercial Cleaning">Office &amp; Commercial Cleaning</option>
                <option value="Move In / Move Out">Move In / Move Out Cleaning</option>
                <option value="Kitchen & Bath Focus">Kitchen &amp; Bath Focus</option>
                <option value="Recurring Cleaning">Recurring Maintenance Clean</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="propertyType">Property type</label>
              <select
                id="propertyType"
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              >
                <option value="House">Single Family House</option>
                <option value="Apartment">Apartment / Condo</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Office / Commercial">Office / Commercial Space</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="preferredDate">Preferred date</label>
              <input
                id="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              />
            </div>

            <div className="field">
              <label htmlFor="frequency">Service frequency</label>
              <select
                id="frequency"
                value={formData.frequency}
                onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
              >
                <option value="One-time">One-time clean</option>
                <option value="Weekly">Weekly (15% demo savings)</option>
                <option value="Bi-weekly">Bi-weekly (10% demo savings)</option>
                <option value="Monthly">Monthly (5% demo savings)</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="bedrooms">Bedrooms &amp; Bathrooms</label>
              <div className="grid grid-cols-2 gap-2">
                <select
                  id="bedrooms"
                  aria-label="Bedrooms"
                  value={formData.bedrooms}
                  onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                >
                  <option value="1 Bedroom">1 Bed</option>
                  <option value="2 Bedrooms">2 Beds</option>
                  <option value="3 Bedrooms">3 Beds</option>
                  <option value="4+ Bedrooms">4+ Beds</option>
                </select>
                <select
                  id="bathrooms"
                  aria-label="Bathrooms"
                  value={formData.bathrooms}
                  onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                >
                  <option value="1 Bathroom">1 Bath</option>
                  <option value="2 Bathrooms">2 Baths</option>
                  <option value="3 Bathrooms">3 Baths</option>
                  <option value="4+ Bathrooms">4+ Baths</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label htmlFor="notes">Tell us about your space &amp; priorities</label>
            <textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Number of rooms, special priorities (oven, baseboards, pets), access codes or anything we should know…"
            ></textarea>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50/70 border border-blue-100 text-xs mb-4">
            <span className="text-slate-600 font-semibold">Estimated Demo Rate:</span>
            <span className="font-extrabold text-blue-700 text-sm">
              ~${calculateEstimatedDemoPrice()}{' '}
              <span className="text-[10px] text-slate-500 font-normal">
                (Sample starting price)
              </span>
            </span>
          </div>

          <button className="btn" type="submit" style={{ width: '100%' }}>
            Request my free quote ↗
          </button>
        </form>
      )}
    </div>
  );
};
