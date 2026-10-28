import { useNavigate } from 'react-router';
import { BookForm } from '../components/BookForm';
import type { BookDraft } from '../types/book';

type NewBookPageProps = {
  onCreate: (draft: BookDraft) => string;
};

const emptyBook: BookDraft = {
  title: '',
  author: '',
  genre: '',
  status: 'to_read',
  rating: 0,
  notes: '',
  createdAt: new Date().toISOString().split('T')[0]
};

export function NewBookPage({ onCreate }: NewBookPageProps) {
  const navigate = useNavigate();

  function handleSave(draft: BookDraft) {
    const id = onCreate(draft);
    navigate(`/books/${id}`);
  }

  return (
    <section>
      <h2>Добавление новой книги</h2>
      <BookForm
        initialValues={emptyBook}
        onSave={handleSave}
        onCancel={() => navigate('/books')}
      />
    </section>
  );
}
