
export interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  philosophy?: string;
  keyInsight?: string;
  authorNote?: string;
  category: BookCategory;
  imageUrl: string;
}

export enum BookCategory {
  MINDSET = 'Mindset & Self-Improvement',
  LIFESTYLE = 'Lifestyle & Beauty',
  TECHNOLOGY = 'Technology & Communication',
  STRATEGY = 'Betting Strategy'
}
