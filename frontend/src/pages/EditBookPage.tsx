import { Link, useParams, useNavigate } from 'react-router';
import { BookForm } from '../components/BookForm';
import type { Book, BookDraft } from '../types/book';

type EditBookPageProps = {
  books: Book[];
  onUpdate: (id: string, draft: BookDraft) => void;
};

export function EditBookPage({ books, onUpdate }: EditBookPageProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((item) => item.id === id);

  if (!book) {
    return (
      <section className="empty-state">
        <h1>Книга не найдена</h1>
        <p>Невозможно отредактировать несуществующую запись.</p>
        <Link to="/books" className="back-link">К списку книг</Link>
      </section>
    );
  }

  const initialValues: BookDraft = {
    title: book.title,
    author: book.author,
    genre: book.genre,
    status: book.status,
    rating: book.rating,
    notes: book.notes,
    createdAt: book.createdAt
  };

  return (
    <section>
      <h2>Редактирование книги</h2>
      {/* key={book.id} сбрасывает черновик формы при смене id */}
      <BookForm
        key={book.id}
        initialValues={initialValues}
        onSave={(draft) => {
          onUpdate(book.id, draft);
          navigate(`/books/${book.id}`);
        }}
        onCancel={() => navigate(`/books/${book.id}`)}
      />
    </section>
  );
}
