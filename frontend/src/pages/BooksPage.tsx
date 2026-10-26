import { Link } from 'react-router';
import { BookCard } from '../components/BookCard';
import { books } from '../data/books';

export function BooksPage() {
  return (
    <section className="books-section">
      <div className="page-header">
        <h2>Мои книги</h2>
        <Link to="/books/new" className="btn-add">Добавить книгу</Link>
      </div>
      {books.length === 0 ? (
        <div className="empty-state">
          <p>На полке пока нет книг.</p>
        </div>
      ) : (
        <div className="book-list">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </section>
  );
}
