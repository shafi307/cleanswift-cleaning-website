import React, { useState } from 'react';
import { CTASection } from '../components/CTASection';
import { PageHero } from '../components/PageHero';
import { PricingCard } from '../components/PricingCard';
import { pagesData, pricingFaqs, pricingPlans } from '../data/content';
import { PageId } from '../types';

interface PricingProps {
  onNavigate: (page: PageId, prefillPackage?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  const meta = pagesData['pricing.html'];

  // Interactive sample cost estimator states
  const [beds, setBeds] = useState<number>(2);
  const [baths, setBaths] = useState<number>(2);
  const [cadence, setCadence] = useState<'once' | 'biweekly' | 'weekly'>('biweekly');

  const getEstimatedTotal = (basePrice: number) => {
    const raw = basePrice + (beds - 1) * 25 + (baths - 1) * 20;
    const multiplier = cadence === 'weekly' ? 0.85 : cadence === 'biweekly' ? 0.9 : 1.0;
    return Math.round(raw * multiplier);
  };

  return (
    <main>
      <PageHero meta={meta} onNavigate={onNavigate} />

      {/* Main Pricing Cards */}
      <section className="section">
        <div className="container">
          <div className="center">
            <span className="eyebrow">CLEAR &amp; TRANSPARENT</span>
            <h2>Simple packages, zero hidden fees.</h2>
            <p>
              Choose a starting package that fits your space. Every quote can be tailored to your rooms, priorities and schedule.
            </p>
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

          <div className="p-4 mt-6 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs text-center max-w-2xl mx-auto">
            <strong>Sample Information:</strong> Demo pricing shown for presentation purposes. Final commercial rates depend on exact home square footage, soil level, pet presence, and requested custom add-ons.
          </div>

          {/* Interactive Quick Estimate Tool */}
          <div className="mt-16 p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <span className="eyebrow mint">INTERACTIVE TOOL</span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                Interactive Sample Rate Calculator
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                Select your home size and preferred recurring schedule to see how sample pricing scales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Bedrooms: {beds} {beds === 1 ? 'bed' : 'beds'}
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={beds}
                  onChange={(e) => setBeds(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>1 Bed</span>
                  <span>5 Beds</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Bathrooms: {baths} {baths === 1 ? 'bath' : 'baths'}
                </label>
                <input
                  type="range"
                  min="1"
                  max="4"
                  value={baths}
                  onChange={(e) => setBaths(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>1 Bath</span>
                  <span>4 Baths</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Frequency
                </label>
                <div className="grid grid-cols-3 gap-1">
                  <button
                    type="button"
                    onClick={() => setCadence('once')}
                    className={`py-1.5 px-2 text-xs font-semibold rounded-md border ${
                      cadence === 'once'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    1x Clean
                  </button>
                  <button
                    type="button"
                    onClick={() => setCadence('biweekly')}
                    className={`py-1.5 px-2 text-xs font-semibold rounded-md border ${
                      cadence === 'biweekly'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    Bi-wk (-10%)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCadence('weekly')}
                    className={`py-1.5 px-2 text-xs font-semibold rounded-md border ${
                      cadence === 'weekly'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    Wkly (-15%)
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 text-center">
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="text-xs text-slate-500 font-semibold">Essential Clean</div>
                <div className="text-xl font-extrabold text-slate-900 mt-1">
                  ${getEstimatedTotal(89)}
                </div>
                <div className="text-[10px] text-slate-400">est. sample rate</div>
              </div>
              <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200">
                <div className="text-xs text-blue-700 font-semibold">Signature Clean</div>
                <div className="text-xl font-extrabold text-blue-900 mt-1">
                  ${getEstimatedTotal(149)}
                </div>
                <div className="text-[10px] text-blue-500">most popular</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="text-xs text-slate-500 font-semibold">Deep Refresh</div>
                <div className="text-xl font-extrabold text-slate-900 mt-1">
                  ${getEstimatedTotal(229)}
                </div>
                <div className="text-[10px] text-slate-400">intensive reset</div>
              </div>
            </div>

            <div className="text-center mt-5">
              <button
                className="btn"
                onClick={() => onNavigate('booking.html')}
              >
                Book with these specifications ↗
              </button>
            </div>
          </div>

          {/* Pricing FAQs */}
          <div className="faq" style={{ maxWidth: 800, margin: '65px auto 0' }}>
            <h2 className="text-center mb-6">Pricing questions, answered.</h2>
            {pricingFaqs.map((faq, idx) => (
              <details key={idx}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </main>
  );
};
