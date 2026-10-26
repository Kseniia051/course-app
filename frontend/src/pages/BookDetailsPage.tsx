import { Link, useParams } from 'react-router';
import { books } from '../data/books';

export function BookDetailsPage() {
  const { id } = useParams();
  const book = books.find((item) => item.id === id);

  if (!book) {
    return (
      <section className="error-page">
        <h1>Книга не найдена</h1>
        <p>Записи с идентификатором "{id}" не существует в вашей библиотеке.</p>
        <Link to="/books" className="back-link">← Вернуться к списку книг</Link>
      </section>
    );
  }

  return (
    <section className="book-details">
      <h1>{book.title}</h1>
      <div className="details-grid">
        <p><strong>Автор:</strong> {book.author}</p>
        <p><strong>Жанр:</strong> {book.genre}</p>
        <p><strong>Оценка:</strong> {book.rating > 0 ? `${book.rating}/5 ⭐` : 'Без оценки'}</p>
        <p><strong>Дата добавления:</strong> {book.createdAt}</p>
      </div>
      <div className="book-notes">
        <h3>Мои заметки и впечатления:</h3>
        <p>{book.notes || 'Заметок пока нет.'}</p>
      </div>
      <Link to="/books" className="back-link">← К списку книг</Link>
    </section>
  );
}
