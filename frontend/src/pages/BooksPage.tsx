import { useState } from 'react';
import { Link } from 'react-router';
import { BookCard } from '../components/BookCard';
import type { Book, ReadingStatus } from '../types/book';

type BooksPageProps = {
  books: Book[];
};

export function BooksPage({ books }: BooksPageProps) {
  // Локальное состояние выбранного фильтра
  const [filterStatus, setFilterStatus] = useState<ReadingStatus | 'all'>('all');

  // Отфильтрованный массив без изменения исходного состояния
  const visibleBooks = books.filter(
    (book) => filterStatus === 'all' || book.status === filterStatus
  );

  return (
    <section className="books-section">
      <div className="page-header">
        <h2>Мои книги</h2>
        <Link to="/books/new" className="btn-add">Добавить книгу</Link>
      </div>

      {/* Панель фильтра */}
      <div className="filter-panel">
        <label htmlFor="status-filter">Фильтр по статусу: </label>
        <select
          id="status-filter"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as ReadingStatus | 'all')}
        >
          <option value="all">Все книги</option>
          <option value="to_read">Хочу прочитать</option>
          <option value="reading">Читаю сейчас</option>
          <option value="completed">Прочитано</option>
        </select>
        {filterStatus !== 'all' && (
          <button className="btn-reset" onClick={() => setFilterStatus('all')}>
            Сбросить фильтр
          </button>
        )}
      </div>

      {/* Два пустых состояния */}
      {books.length === 0 ? (
        <div className="empty-state">
          <p>На полке пока нет книг.</p>
          <p className="hint">Нажмите «Добавить книгу», чтобы внести первое произведение.</p>
        </div>
      ) : visibleBooks.length === 0 ? (
        <div className="empty-state">
          <p>Нет книг с выбранным статусом.</p>
          <button className="back-link" onClick={() => setFilterStatus('all')}>
            Показать все книги
          </button>
        </div>
      ) : (
        <div className="book-list">
          {visibleBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </section>
  );
}
