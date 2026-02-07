
import { Book, BookCategory } from './types';

/**
 * DEPLOYMENT IMAGE GUIDE:
 * 
 * 1. EXTERNAL (Easiest): Use links from Unsplash, Cloudinary, or Imgur. 
 *    These work instantly on Netlify.
 * 
 * 2. LOCAL: If you have a file named 'cover.jpg' in your project root, 
 *    set the imageUrl to '/cover.jpg'. 
 * 
 * 3. CASE SENSITIVITY: Netlify is case-sensitive. 'MyImage.jpg' is 
 *    NOT the same as 'myimage.jpg'. Ensure they match perfectly.
 */

export const BOOKS: Book[] = [
  {
    id: 'rewire-mind',
    title: 'Rewire Your Mind for Unshakeable Confidence',
    subtitle: 'Transform Self-Doubt into Power',
    description: 'A practical, results-driven guide to rebuilding confidence using Neuro-Linguistic Programming (NLP). Readers learn how to remove limiting beliefs, neutralise fear, and install calm, grounded confidence that can be accessed on demand.',
    philosophy: 'Confidence isn’t something you’re born with — it’s something you can build.',
    category: BookCategory.MINDSET,
    imageUrl: 'public/rwyb.png'
  },
  {
    id: 'loa-book-one',
    title: 'Super Easy Law of Attraction',
    subtitle: 'Book One: The Big Book of Absolutely Everything',
    description: 'A stripped-back, jargon-free introduction to the Law of Attraction. Written to be affordable, accessible, and usable by anyone, this book removes mysticism and replaces it with practical understanding and control.',
    category: BookCategory.MINDSET,
    imageUrl: 'https://drive.google.com/file/d/1SvJtLwL2IRt_4gFchuIgiQ-dtVc8KmvX/view?usp=drive_link'
  },
  {
    id: 'lustrous-locks',
    title: 'Lustrous Locks',
    subtitle: 'The Ultimate Guide to Women’s Haircare',
    description: 'A holistic approach to haircare that blends science, nutrition, and natural treatments. The book educates readers on hair biology, growth cycles, and sustainable beauty practices while debunking common myths.',
    keyInsight: 'True beauty begins with understanding, not products.',
    authorNote: 'Written as Sabrina Love',
    category: BookCategory.LIFESTYLE,
    imageUrl: 'https://drive.google.com/file/d/1liNBZ4Nwhjcs4QkZDrCv1nqelqNLPlnr/view?usp=drive_link'
  },
  {
    id: 'beauty-queen',
    title: 'The Beauty Queen Blueprint',
    subtitle: 'Unleash Your Inner Radiance',
    description: 'A comprehensive guide for aspiring beauty queens that goes beyond appearance. It combines grooming, mindset, communication, and resilience to help competitors perform with confidence on and off the stage.',
    category: BookCategory.LIFESTYLE,
    imageUrl: 'https://drive.google.com/file/d/1HL--oEvaIzQRvcFl1tvYV7rIIHTzaVr-/view?usp=drive_link'
  },
  {
    id: 'chatgpt-comm',
    title: 'Mastering Communication with ChatGPT',
    subtitle: '20 Powerful Words to Enhance Your Conversations',
    description: 'A practical handbook designed to help users communicate with artificial intelligence clearly and effectively. The book introduces a precise vocabulary that dramatically improves output quality and eliminates misunderstandings.',
    category: BookCategory.TECHNOLOGY,
    imageUrl: 'https://drive.google.com/file/d/1J9wrUZJnZMz82fZdvP-pqkYpWvdn9fy7/view?usp=drive_link'
  },
  {
    id: 'betting-strategy',
    title: 'Betting to Lose and Winning',
    subtitle: 'Strategic Decision-Making Framework',
    description: 'A disciplined, experience-driven betting framework focused on identifying weak favourites and structured decision-making. Developed over decades, the system emphasises analysis, restraint, and risk management over speculation.',
    category: BookCategory.STRATEGY,
    imageUrl: 'https://drive.google.com/file/d/1WFgIE1viShNoKMYpHRIlzvs9Lxp6PpTZ/view?usp=drive_link'
  }
];
