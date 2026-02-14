
export enum Screen {
  HOME = 'home',
  QUIZ = 'quiz',
  FLASHCARD = 'flashcard',
  SUMMARY = 'summary',
  REVIEW = 'review',
  LEVELS = 'levels',
  TOPICS = 'topics'
}

export type Category = 'General' | 'Travel' | 'Food' | 'Work' | 'Emotions' | 'Nature' | 'Technology' | 'Sports' | 'Health';

export interface Word {
  id: string;
  word: string;
  translation: string;
  phonetic: string;
  type: string;
  image: string;
  example: string;
  category: Category;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface UserStats {
  dailyGoal: number;
  completedToday: number;
  learningTimeMinutes: number;
  accuracy: number;
  streak: number;
  xp: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  learnedWordsIds: string[];
  mistakeWordsIds: string[];
}
