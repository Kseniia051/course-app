import { Link, useParams, useNavigate } from 'react-router';
import type { Book } from '../types/book';

type BookDetailsPageProps = {
  books: Book[];
  onDelete: (id: string) => void;
};

export function BookDetailsPage({ books, onDelete }: BookDetailsPageProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((item) => item.id === id);

  if (!book) {
    return (
      <section className="empty-state">
        <h1>Книга не найдена</h1>
        <p>Записи с идентификатором "{id}" не существует в вашей библиотеке.</p>
        <Link to="/books" className="back-link">← Вернуться к списку книг</Link>
      </section>
    );
  }

  const handleDelete = () => {
    if (window.confirm(`Вы действительно хотите удалить книгу «${book.title}»?`)) {
      onDelete(book.id);
      navigate('/books', { replace: true });
    }
  };

  return (
    <section className="book-details">
      <div className="page-header" style={{ marginBottom: '24px' }}>
        <h1 style={{ margin: 0 }}>{book.title}</h1>
        <div className="action-buttons">
          <Link to={`/books/${book.id}/edit`} className="btn-edit-link">Редактировать</Link>
          <button type="button" className="btn-delete" onClick={handleDelete}>Удалить</button>
        </div>
      </div>

      <div className="details-grid">
        <p><strong>Автор:</strong> {book.author}</p>
        <p><strong>Жанр:</strong> {book.genre}</p>
        <p><strong>Оценка:</strong> {book.rating > 0 ? `${book.rating}/5 ⭐` : 'Без оценки'}</p>
        <p><strong>Дата добавления:</strong> {book.createdAt}</p>
      </div>

      <div className="book-notes">
        <h3>Мои заметки и впечатления:</h3>
        <p style={{ whiteSpace: 'pre-wrap' }}>{book.notes || 'Заметок пока нет.'}</p>
      </div>
      
      <Link to="/books" className="back-link">← К списку книг</Link>
    </section>
  );
}
