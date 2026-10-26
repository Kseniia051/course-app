import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <section className="error-page">
      <h1>404 — Страница не найдена</h1>
      <p>Запрошенный адрес не существует на сайте личной библиотеки.</p>
      <Link to="/books" className="back-link">На главную страницу библиотеки</Link>
    </section>
  );
}
