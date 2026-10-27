import React, { useState } from 'react';
import { CTASection } from '../components/CTASection';
import { PageHero } from '../components/PageHero';
import { blogPosts, pagesData, unsplashImg } from '../data/content';
import { BlogPost, PageId } from '../types';

interface BlogProps {
  onNavigate: (page: PageId) => void;
}

export const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  const meta = pagesData['blog.html'];
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Daily Habits', 'Checklists', 'Schedules'];

  const filteredPosts =
    activeFilter === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeFilter);

  return (
    <main>
      <PageHero meta={meta} onNavigate={onNavigate} />

      <section className="section">
        <div className="container">
          {/* Category filter pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">
                Filter by:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition border ${
                    activeFilter === cat
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <span className="text-xs text-slate-500">
              Showing {filteredPosts.length} practical guides
            </span>
          </div>

          {/* Cards Grid */}
          <div className="cards">
            {filteredPosts.map((post) => (
              <article key={post.id} className="card">
                <div className="blog-img">
                  <img
                    src={unsplashImg(post.imgUrl, 600)}
                    alt={post.title}
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="eyebrow" style={{ marginBottom: 0, padding: '4px 10px' }}>
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">{post.date}</span>
                  <button
                    className="textlink font-bold"
                    onClick={() => setSelectedPost(post)}
                  >
                    Read article ↗
                  </button>
                </div>
              </article>
            ))}
          </div>

          <p className="center text-xs mt-8 text-slate-500">
            * Sample blog articles for demo presentation. Add full article pages and verified advice before production.
          </p>
        </div>
      </section>

      {/* Interactive Modal for full article reading */}
      {selectedPost && (
        <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedPost(null)}
              aria-label="Close article"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="eyebrow" style={{ marginBottom: 0 }}>
                {selectedPost.category}
              </span>
              <span className="text-xs text-slate-400">· {selectedPost.readTime}</span>
              <span className="text-xs text-slate-400">· {selectedPost.date}</span>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              {selectedPost.title}
            </h2>

            <div className="h-56 rounded-xl overflow-hidden mb-6">
              <img
                src={unsplashImg(selectedPost.imgUrl, 800)}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              {selectedPost.fullContent?.map((paragraph, idx) => (
                <p key={idx} className="m-0">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Found this helpful? Keep your space fresh with CleanSwift.
              </div>
              <div className="flex gap-2">
                <button
                  className="btn light text-xs py-2 px-3"
                  onClick={() => setSelectedPost(null)}
                >
                  Close
                </button>
                <button
                  className="btn text-xs py-2 px-4"
                  onClick={() => {
                    setSelectedPost(null);
                    onNavigate('booking.html');
                  }}
                >
                  Book a Clean ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <CTASection onNavigate={onNavigate} />
    </main>
  );
};
