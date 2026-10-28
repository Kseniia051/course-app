import { useState } from 'react';
import type { FormEvent } from 'react';
import type { BookDraft } from '../types/book';

type BookFormProps = {
  initialValues: BookDraft;
  onSave: (draft: BookDraft) => void;
  onCancel: () => void;
};

export function BookForm(props: BookFormProps) {
  // Локальный черновик формы изолирован от общего состояния приложения
  const [draft, setDraft] = useState<BookDraft>(() => ({ ...props.initialValues }));
  const [error, setError] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    const title = draft.title.trim();
    const author = draft.author.trim();
    const genre = draft.genre.trim();

    // Валидация полей
    if (title.length < 3 || title.length > 100) {
      setError('Название книги должно содержать от 3 до 100 символов.');
      return;
    }
    if (!author) {
      setError('Укажите автора книги.');
      return;
    }
    if (!genre) {
      setError('Укажите жанр книги.');
      return;
    }

    // Предметное ограничение темы ЛР 3: если книга прочитана, у неё должна быть оценка от 1 до 5
    if (draft.status === 'completed' && (draft.rating < 1 || draft.rating > 5)) {
      setError('Для прочитанной книги необходимо выставить оценку от 1 до 5 ⭐.');
      return;
    }

    setError('');
    props.onSave({ ...draft, title, author, genre });
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="book-form">
      <div className="form-group">
        <label htmlFor="book-title">Название книги *</label>
        <input
          id="book-title"
          type="text"
          value={draft.title}
          required
          onChange={(e) => setDraft({ ...draft, title: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="book-author">Автор *</label>
        <input
          id="book-author"
          type="text"
          value={draft.author}
          required
          onChange={(e) => setDraft({ ...draft, author: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="book-genre">Жанр *</label>
        <input
          id="book-genre"
          type="text"
          value={draft.genre}
          required
          onChange={(e) => setDraft({ ...draft, genre: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="book-status">Статус чтения</label>
        <select
          id="book-status"
          value={draft.status}
          onChange={(e) => setDraft({ ...draft, status: e.target.value as BookDraft['status'] })}
        >
          <option value="to_read">Хочу прочитать</option>
          <option value="reading">Читаю сейчас</option>
          <option value="completed">Прочитано</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="book-rating">Оценка (1-5 ⭐)</label>
        <select
          id="book-rating"
          value={draft.rating}
          onChange={(e) => setDraft({ ...draft, rating: Number(e.target.value) })}
        >
          <option value={0}>Без оценки</option>
          <option value={1}>1 — Ужасно</option>
          <option value={2}>2 — Плохо</option>
          <option value={3}>3 — Нормально</option>
          <option value={4}>4 — Хорошо</option>
          <option value={5}>5 — Шедевр</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="book-notes">Личные заметки и впечатления</label>
        <textarea
          id="book-notes"
          value={draft.notes}
          rows={4}
          onChange={(e) => setDraft({ ...draft, notes: e.target.value })}
        />
      </div>

      {error && <p className="error-alert" role="alert">{error}</p>}

      <div className="form-actions">
        <button type="submit" className="btn-save">Сохранить</button>
        <button type="button" className="btn-cancel" onClick={props.onCancel}>Отмена</button>
      </div>
    </form>
  );
}
