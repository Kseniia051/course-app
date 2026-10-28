export type ReadingStatus = 'to_read' | 'reading' | 'completed';

export type Book = {
  id: string;
  title: string;
  author: string;
  genre: string;
  status: ReadingStatus;
  rating: number; // Оценка от 1 до 5
  notes: string;
  createdAt: string;
};
// Тип для черновика формы — все поля книги, кроме автоматически генерируемого id
export type BookDraft = Omit<Book, 'id'>;
