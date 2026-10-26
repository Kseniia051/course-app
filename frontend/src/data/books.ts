import type { Book } from '../types/book';

export const books: Book[] = [
  {
    id: 'b1',
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    genre: 'Классика / Мистика',
    status: 'completed',
    rating: 5,
    notes: 'Шедевр русской литературы. Перечитывала дважды.',
    createdAt: '2026-01-15'
  },
  {
    id: 'b2',
    title: 'Дюна',
    author: 'Фрэнк Герберт',
    genre: 'Фантастика',
    status: 'reading',
    rating: 4,
    notes: 'Интересный лор и политика, но местами затянуто.',
    createdAt: '2026-02-10'
  },
  {
    id: 'b3',
    title: 'Игры, в которые играют люди',
    author: 'Эрик Берн',
    genre: 'Психология',
    status: 'to_read',
    rating: 0,
    notes: 'Посоветовали для понимания сценариев общения.',
    createdAt: '2026-03-01'
  },
  {
    id: 'b4',
    title: '1984',
    author: 'Джордж Оруэлл',
    genre: 'Антиутопия',
    status: 'completed',
    rating: 5,
    notes: 'Очень сильная и мрачная книга. Финал поражает.',
    createdAt: '2026-03-05'
  },
  {
    id: 'b5',
    title: 'Цветы для Элджернона',
    author: 'Дэниел Киз',
    genre: 'Драма / Фантастика',
    status: 'to_read',
    rating: 0,
    notes: 'Говорят, очень трогательная история.',
    createdAt: '2026-03-20'
  }
];
