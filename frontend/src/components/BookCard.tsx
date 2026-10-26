import { Link } from 'react-router';
import type { Book } from '../types/book';

type BookCardProps = { book: Book };

const statusLabels: Record<Book['status'], string> = {
  to_read: 'Хочу прочитать',
  reading: 'Читаю сейчас',
  completed: 'Прочитано'
};

export function BookCard({ book }: BookCardProps) {
  return (
    <article className="book-card">
      <h2>
        <Link to={`/books/${book.id}`}>{book.title}</Link>
      </h2>
      <p><strong>Автор:</strong> {book.author}</p>
      <p><strong>Жанр:</strong> {book.genre}</p>
      <p className={`status-badge ${book.status}`}>
        {statusLabels[book.status]}
      </p>
    </article>
  );
}
