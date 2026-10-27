export type PageId =
  | 'index.html'
  | 'about.html'
  | 'services.html'
  | 'house-cleaning.html'
  | 'commercial-cleaning.html'
  | 'deep-cleaning.html'
  | 'pricing.html'
  | 'booking.html'
  | 'blog.html'
  | 'contact.html';

export interface PageMeta {
  title: string;
  sub: string;
  desc: string;
  hero?: boolean;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  desc: string;
  targetPage: PageId;
  badge?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  featured?: boolean;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  stars: number;
}

export interface BlogPost {
  id: string;
  title: string;
  desc: string;
  category: string;
  readTime: string;
  imgUrl: string;
  fullContent?: string[];
  date: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  propertyType: string;
  preferredDate: string;
  frequency: string;
  bedrooms: string;
  bathrooms: string;
  notes: string;
}
