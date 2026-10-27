import { useEffect, useState } from 'react';
import { FloatingCTA } from './components/FloatingCTA';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { pagesData } from './data/content';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { Booking } from './pages/Booking';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { ServiceDetail } from './pages/ServiceDetail';
import { Services } from './pages/Services';
import { PageId } from './types';

// Helper to resolve route from URL
function getPageFromUrl(): PageId {
  const path = window.location.pathname.split('/').pop() || '';
  const hash = window.location.hash.replace('#', '');

  const validPages: PageId[] = [
    'index.html',
    'about.html',
    'services.html',
    'house-cleaning.html',
    'commercial-cleaning.html',
    'deep-cleaning.html',
    'pricing.html',
    'booking.html',
    'blog.html',
    'contact.html',
  ];

  if (validPages.includes(path as PageId)) {
    return path as PageId;
  }
  if (validPages.includes(hash as PageId)) {
    return hash as PageId;
  }

  // Handle path without .html
  const map: Record<string, PageId> = {
    '': 'index.html',
    'home': 'index.html',
    'about': 'about.html',
    'services': 'services.html',
    'house-cleaning': 'house-cleaning.html',
    'commercial-cleaning': 'commercial-cleaning.html',
    'deep-cleaning': 'deep-cleaning.html',
    'pricing': 'pricing.html',
    'booking': 'booking.html',
    'blog': 'blog.html',
    'contact': 'contact.html',
  };

  const cleanPath = path.replace('.html', '').toLowerCase();
  return map[cleanPath] || 'index.html';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromUrl);
  const [prefillPackage, setPrefillPackage] = useState<string | undefined>(undefined);

  // Synchronize document title
  useEffect(() => {
    const meta = pagesData[currentPage];
    if (meta) {
      document.title = `${meta.sub} | CleanSwift Cleaning Co.`;
    }
  }, [currentPage]);

  // Handle popstate for browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromUrl());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: PageId, prefill?: string) => {
    setCurrentPage(page);
    if (prefill) {
      setPrefillPackage(prefill);
    } else if (page !== 'booking.html') {
      setPrefillPackage(undefined);
    }

    try {
      window.history.pushState({}, '', page === 'index.html' ? '/' : `/${page}`);
    } catch {
      // fallback if pushState is restricted
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Intercept any internal link click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      if (href.endsWith('.html') || ['/about', '/services', '/pricing', '/booking', '/blog', '/contact'].includes(href)) {
        e.preventDefault();
        const raw = href.replace('/', '');
        const pageKey = raw.endsWith('.html') ? raw : `${raw}.html`;
        if (pageKey in pagesData) {
          navigateTo(pageKey as PageId);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'index.html':
        return <Home onNavigate={navigateTo} />;
      case 'about.html':
        return <About onNavigate={navigateTo} />;
      case 'services.html':
        return <Services onNavigate={navigateTo} />;
      case 'house-cleaning.html':
      case 'commercial-cleaning.html':
      case 'deep-cleaning.html':
        return <ServiceDetail pageId={currentPage} onNavigate={navigateTo} />;
      case 'pricing.html':
        return <Pricing onNavigate={navigateTo} />;
      case 'booking.html':
        return <Booking onNavigate={navigateTo} prefillPackage={prefillPackage} />;
      case 'blog.html':
        return <Blog onNavigate={navigateTo} />;
      case 'contact.html':
        return <Contact onNavigate={navigateTo} />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#183044]">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      <div className="flex-grow">
        {renderCurrentPage()}
      </div>
      <Footer onNavigate={navigateTo} />
      <FloatingCTA currentPage={currentPage} onNavigate={navigateTo} />
    </div>
  );
}
