import { Plan, RoomType, DesignStyle, StagingMode } from './types';
import { Layers, Zap, Image, Check, Star, Shield, Layout, ArrowRight } from 'lucide-react';

export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    priceMonthly: 24,
    priceYearly: 19,
    credits: 25,
    features: [
      '25 images / month',
      '3 regenerations per image',
      'High-resolution downloads',
      'Standard support'
    ],
    color: 'bg-slate-100 border-slate-200'
  },
  {
    id: 'pro',
    name: 'Pro',
    priceMonthly: 62,
    priceYearly: 49,
    credits: 75,
    isPopular: true,
    features: [
      '75 images / month',
      '3 regenerations per image',
      'High-resolution downloads',
      'Multi-view consistency',
      'Priority processing'
    ],
    color: 'bg-indigo-50 border-indigo-200'
  },
  {
    id: 'business',
    name: 'Business',
    priceMonthly: 99,
    priceYearly: 79,
    credits: 150,
    features: [
      '150 images / month',
      '3 regenerations per image',
      'Ultra quality output',
      'Multi-view consistency',
      'Bulk uploads',
      'Priority queue'
    ],
    color: 'bg-slate-900 text-white border-slate-800'
  }
];

export const ROOM_TYPES = Object.values(RoomType);
export const DESIGN_STYLES = Object.values(DesignStyle);
export const STAGING_MODES = Object.values(StagingMode);

export const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Real Estate Agent",
    text: "Virtual Stage Pro transformed my listing workflow. I sold a vacant property in 3 days after updating the listing with these staged photos.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Michael Chen",
    role: "Property Developer",
    text: "The multi-view consistency is a game changer. Clients can finally understand the flow of the room from different angles.",
    avatar: "https://picsum.photos/seed/michael/100/100"
  },
  {
    name: "Elena Rodriguez",
    role: "Interior Designer",
    text: "I use this to quickly mock up ideas for clients before we start the heavy lifting. The realism is astounding for the price.",
    avatar: "https://picsum.photos/seed/elena/100/100"
  }
];

export const FAQ_ITEMS = [
  {
    question: "What are the image requirements?",
    answer: "We recommend using high-quality JPEGs or PNGs, at least 1920x1080 resolution. Well-lit photos taken at eye level work best."
  },
  {
    question: "Is this MLS compliant?",
    answer: "Yes. We allow you to add a 'Virtually Staged' watermark if required by your local MLS. Our realistic results are designed to help market the potential of a home while remaining ethical."
  },
  {
    question: "How does the credit system work?",
    answer: "One credit equals one uploaded image. You can regenerate the output up to 3 times for that same image without using additional credits."
  },
  {
    question: "Can I use the images for commercial marketing?",
    answer: "Absolutely. You own the full commercial rights to all generated images on paid plans."
  }
];