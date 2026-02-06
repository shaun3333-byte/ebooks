
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
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600&h=800'
  },
  {
    id: 'loa-book-one',
    title: 'Super Easy Law of Attraction',
    subtitle: 'Book One: The Big Book of Absolutely Everything',
    description: 'A stripped-back, jargon-free introduction to the Law of Attraction. Written to be affordable, accessible, and usable by anyone, this book removes mysticism and replaces it with practical understanding and control.',
    category: BookCategory.MINDSET,
    imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=600&h=800'
  },
  {
    id: 'lustrous-locks',
    title: 'Lustrous Locks',
    subtitle: 'The Ultimate Guide to Women’s Haircare',
    description: 'A holistic approach to haircare that blends science, nutrition, and natural treatments. The book educates readers on hair biology, growth cycles, and sustainable beauty practices while debunking common myths.',
    keyInsight: 'True beauty begins with understanding, not products.',
    authorNote: 'Written as Sabrina Love',
    category: BookCategory.LIFESTYLE,
    imageUrl: 'https://images.unsplash.com/photo-1527799858527-424422a07505?auto=format&fit=crop&q=80&w=600&h=800'
  },
  {
    id: 'beauty-queen',
    title: 'The Beauty Queen Blueprint',
    subtitle: 'Unleash Your Inner Radiance',
    description: 'A comprehensive guide for aspiring beauty queens that goes beyond appearance. It combines grooming, mindset, communication, and resilience to help competitors perform with confidence on and off the stage.',
    category: BookCategory.LIFESTYLE,
    imageUrl: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3c?auto=format&fit=crop&q=80&w=600&h=800'
  },
  {
    id: 'chatgpt-comm',
    title: 'Mastering Communication with ChatGPT',
    subtitle: '20 Powerful Words to Enhance Your Conversations',
    description: 'A practical handbook designed to help users communicate with artificial intelligence clearly and effectively. The book introduces a precise vocabulary that dramatically improves output quality and eliminates misunderstandings.',
    category: BookCategory.TECHNOLOGY,
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600&h=800'
  },
  {
    id: 'betting-strategy',
    title: 'Betting to Lose and Winning',
    subtitle: 'Strategic Decision-Making Framework',
    description: 'A disciplined, experience-driven betting framework focused on identifying weak favourites and structured decision-making. Developed over decades, the system emphasises analysis, restraint, and risk management over speculation.',
    category: BookCategory.STRATEGY,
    imageUrl: 'https://images.unsplash.com/photo-1518893063132-36e46dbe2428?auto=format&fit=crop&q=80&w=600&h=800'
  }
];
