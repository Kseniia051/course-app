import { Link } from 'react-router';

export function NewBookPage() {
  return (
    <section>
      <h1>Добавление новой книги</h1>
      <div className="stub-message">
        <p>⚠️ <strong>Информационное сообщение:</strong> Форма добавления, валидация полей и интерактивное сохранение будут реализованы в Лабораторной работе №3.</p>
      </div>
      <Link to="/books" className="back-link">← Отмена и возврат к списку</Link>
    </section>
  );
}
