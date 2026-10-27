import { BlogPost, PageId, PageMeta, PricingPlan, ServiceItem, TestimonialItem } from '../types';

export const unsplashImg = (id: string, width = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const navItems: { label: string; page: PageId }[] = [
  { label: 'Home', page: 'index.html' },
  { label: 'About', page: 'about.html' },
  { label: 'Services', page: 'services.html' },
  { label: 'Pricing', page: 'pricing.html' },
  { label: 'Blog', page: 'blog.html' },
  { label: 'Contact', page: 'contact.html' },
];

export const pagesData: Record<PageId, PageMeta> = {
  'index.html': {
    title: 'A cleaner space. A calmer mind.',
    sub: 'Professional cleaning, thoughtfully delivered.',
    desc: 'Enjoy a beautifully clean home or workplace without giving up your time. Our trusted team brings care, consistency and a little extra sparkle to every visit.',
    hero: true,
  },
  'about.html': {
    title: 'A little more care in every clean.',
    sub: 'About CleanSwift',
    desc: 'We believe a clean space makes room for better days. Our team combines thoughtful service, dependable people and a detail-first approach.',
  },
  'services.html': {
    title: 'Cleaning solutions for real life.',
    sub: 'Our Services',
    desc: 'From regular home refreshes to detailed deep cleans and professional workplaces, find the right service for your space.',
  },
  'house-cleaning.html': {
    title: 'Come home to wonderfully clean.',
    sub: 'House Cleaning',
    desc: 'A reliable, detail-focused clean that makes your everyday space feel fresh, comfortable and ready to enjoy.',
  },
  'commercial-cleaning.html': {
    title: 'A cleaner workplace works better.',
    sub: 'Commercial Cleaning',
    desc: 'Professional cleaning plans for offices, studios, retail spaces and growing businesses—with minimal disruption.',
  },
  'deep-cleaning.html': {
    title: 'The deep clean your space deserves.',
    sub: 'Deep Cleaning',
    desc: 'We go beyond the surface to tackle overlooked corners, built-up dust and those little details that make a big difference.',
  },
  'pricing.html': {
    title: 'Straightforward pricing. Sparkling results.',
    sub: 'Pricing & Packages',
    desc: 'Choose a starting package that fits your space. Every quote can be tailored to your rooms, priorities and schedule.',
  },
  'booking.html': {
    title: 'Your cleaner space starts here.',
    sub: 'Book a Cleaning',
    desc: 'Tell us a little about your space and preferred timing. We’ll help you find the right cleaning plan.',
  },
  'blog.html': {
    title: 'A fresher space, one tip at a time.',
    sub: 'The CleanSwift Journal',
    desc: 'Practical cleaning advice, home-care guides and simple routines for a cleaner, calmer everyday life.',
  },
  'contact.html': {
    title: 'Let’s make your space shine.',
    sub: 'Contact Us',
    desc: 'Questions, custom requests or ready for a quote? Our friendly team would love to hear from you.',
  },
};

export const servicesData: ServiceItem[] = [
  {
    id: 'house',
    icon: '⌂',
    title: 'House Cleaning',
    desc: 'Regular home cleaning designed around your routine and priorities.',
    targetPage: 'house-cleaning.html',
    badge: 'Popular',
  },
  {
    id: 'deep',
    icon: '✦',
    title: 'Deep Cleaning',
    desc: 'A detailed top-to-bottom refresh for the places that need extra care.',
    targetPage: 'deep-cleaning.html',
    badge: 'Thorough',
  },
  {
    id: 'commercial',
    icon: '▦',
    title: 'Office Cleaning',
    desc: 'Clean, welcoming workspaces that help your team feel their best.',
    targetPage: 'commercial-cleaning.html',
  },
  {
    id: 'move',
    icon: '♧',
    title: 'Move In / Out',
    desc: 'A fresh start for your next chapter, from empty rooms to final details.',
    targetPage: 'booking.html',
  },
  {
    id: 'kitchen-bath',
    icon: '☼',
    title: 'Kitchen & Bath',
    desc: 'Focused attention on the hardest-working rooms in your home.',
    targetPage: 'booking.html',
  },
  {
    id: 'recurring',
    icon: '◇',
    title: 'Recurring Plans',
    desc: 'Weekly, bi-weekly or monthly visits for a consistently fresh space.',
    targetPage: 'booking.html',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Essential',
    price: '$89',
    period: '/ starting at',
    desc: 'For a regular refresh',
    features: [
      'Kitchen and bathrooms refresh',
      'Dusting & surface wipe-down',
      'Vacuum and mop all main floors',
      'Tidy common areas and empty bins',
      'Standard eco-safe supplies included',
    ],
  },
  {
    name: 'Signature',
    price: '$149',
    period: '/ starting at',
    desc: 'Our most-loved clean',
    featured: true,
    features: [
      'Everything in Essential',
      'Detailed bathroom disinfection & tile scrub',
      'Kitchen exterior & appliance fronts polished',
      'Interior microwave and range hood wiped',
      'Extra attention to living room details & mirrors',
      'High-touch light switches and door handles',
    ],
  },
  {
    name: 'Deep Refresh',
    price: '$229',
    period: '/ starting at',
    desc: 'For a top-to-bottom reset',
    features: [
      'Everything in Signature',
      'Baseboards, reachable door frames & trims',
      'Deep grime & buildup removal',
      'Under easily movable furniture vacuumed',
      'Interior window sills and tracks wiped',
      'Personalized high-priority focus area',
    ],
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      '“The whole place felt lighter after the clean. The team was thoughtful, professional and thorough.”',
    author: 'Olivia M.',
    role: 'Homeowner',
    stars: 5,
  },
  {
    quote:
      '“Easy to book, clear communication and a workspace that feels fresh every Monday.”',
    author: 'James R.',
    role: 'Studio owner',
    stars: 5,
  },
  {
    quote:
      '“The extra attention to the kitchen and bathrooms was exactly what we needed.”',
    author: 'Sophia L.',
    role: 'Busy parent',
    stars: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'kitchen-reset',
    imgUrl: 'photo-1556911220-bff31c812dba',
    category: 'Daily Habits',
    readTime: '5 min read',
    title: 'A 15-minute kitchen reset that makes a difference',
    desc: 'A simple daily routine to keep counters, sinks and high-touch areas feeling fresh without eating up your whole evening.',
    date: 'Oct 14, 2026',
    fullContent: [
      'The kitchen is the heart of the home, but it can also be the quickest room to descend into clutter. With a predictable 15-minute sequence, you can end each evening in a tranquil, spotless room ready for morning coffee.',
      'Step 1: Empty and reload the dishwasher right after dinner (4 minutes). Getting dirty pots off counters instantly restores visual breathing space.',
      'Step 2: Clear and spray counters using a gentle microfiber cloth and mild multi-surface spray (4 minutes). Wipe front-to-back toward the sink.',
      'Step 3: Scrub the sink basin with a drop of gentle dish soap or baking soda (3 minutes). Rinse with hot water and dry the faucet so it gleams.',
      'Step 4: Take out organic scraps and replace the hand towel (2 minutes). Put a fresh dry cloth on the stove rail and switch off the overheads.',
      'By turning this into a consistent ritual, deep cleaning becomes ten times easier and weekend chores drop dramatically.',
    ],
  },
  {
    id: 'deep-clean-checklist',
    imgUrl: 'photo-1584622650111-993a426fbf0a',
    category: 'Checklists',
    readTime: '7 min read',
    title: 'The room-by-room deep cleaning checklist',
    desc: 'A practical way to break a big clean into manageable steps without feeling overwhelmed or losing steam halfway through.',
    date: 'Oct 02, 2026',
    fullContent: [
      'Deep cleaning doesn’t have to happen in an exhausting 12-hour marathon. Tackling one room at a time with a strict top-down method guarantees sparkling results with far less fatigue.',
      'Living Area Checklist: Dust ceiling fan blades and high corners; wash throw pillow covers; vacuum sofa cushions and crevices; wipe down baseboards, door frames, and remote controls.',
      'Bedrooms: Rotate mattress; wash duvet and protectors; dust behind headboard; vacuum under bed frames; clean mirrors and window glass.',
      'Bathrooms: Descale shower head; deep scrub grout lines; sanitize exhaust vent covers; wash bath mats; thoroughly polish faucets and shower screens.',
      'Kitchen: Degrease range hood filters; wipe down cabinet exteriors; pull out refrigerator drawers to wash; clean behind the toaster and microwave.',
    ],
  },
  {
    id: 'cleaning-schedule',
    imgUrl: 'photo-1527515637462-cff94eecc1ac',
    category: 'Schedules',
    readTime: '6 min read',
    title: 'How often should you clean your home?',
    desc: 'Build a realistic schedule around your household, your routines and the spaces you use most instead of impossible perfection.',
    date: 'Sep 21, 2026',
    fullContent: [
      'One of the most frequent questions we receive is whether bi-weekly cleaning is enough, or if weekly visits are essential. The honest answer depends on three factors: household size, pets, and your personal tolerance for lived-in clutter.',
      'Weekly Cleaning: Best suited for busy families, homes with shedding pets, or anyone who hosts regularly. Focuses on bathrooms, kitchens, and full-floor vacuums.',
      'Bi-Weekly Cleaning: The gold standard for most 1-2 person households and busy professionals. It maintains baseline cleanliness while keeping recurring costs low.',
      'Monthly / Seasonal Deep Cleaning: Perfect supplement for homeowners who maintain daily tidy habits, but want a professional team to handle heavy bathroom scaling, baseboards, and intensive sanitization.',
      'Remember, consistency always beats sporadic perfection. Find a rhythm that brings genuine peace of mind.',
    ],
  },
];

export const homeFaqs = [
  {
    q: 'Do I need to provide cleaning supplies?',
    a: 'Discuss this with the real cleaning company and specify the arrangement in your booking confirmation. CleanSwift professionals typically carry all standard eco-conscious supplies and commercial-grade vacuums.',
  },
  {
    q: 'Can I request specific areas or priority rooms?',
    a: 'Yes, absolutely. The booking form includes space for special requests, high-priority zones (like focusing heavily on the kitchen and master bath), and any sensitive materials.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Use the booking form to share your service type, property details, and preferred date. A friendly team member will review your space requirements and follow up with a transparent estimate.',
  },
  {
    q: 'Are your cleaners vetted and insured?',
    a: 'Yes, in a real production deployment, all staff undergo background screening, extensive hands-on training, and comprehensive liability insurance coverage.',
  },
];

export const pricingFaqs = [
  {
    q: 'What affects the final price?',
    a: 'Property size (square footage), number of bedrooms & bathrooms, current condition, service type (regular vs deep clean), requested extras (inside oven/fridge), and visit frequency can affect your quote.',
  },
  {
    q: 'Can I set up recurring cleaning?',
    a: 'Yes. Weekly, bi-weekly and monthly plans can be discussed when requesting your quote, which typically unlock discounted recurring rates.',
  },
  {
    q: 'Are these final prices?',
    a: 'No. These are illustrative demo prices for presentation purposes. A real business should replace them with its own localized rates.',
  },
  {
    q: 'Is there a minimum booking duration?',
    a: 'Most standard cleaning visits have a minimum 2-hour visit duration to ensure high-standard execution across core rooms.',
  },
];
