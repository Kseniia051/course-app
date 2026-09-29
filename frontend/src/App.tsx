import './App.css'

const appTitle: string = 'Личная библиотека';

export default function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>{appTitle}</h1>
        <p className="app-description">Ваша персональная книжная полка с отметками о чтении, оценками и заметками.</p>
      </header>

      <section aria-labelledby="books-title" className="books-section">
        <h2 id="books-title">Мои книги</h2>
        <div className="empty-state">
          <p>На полке пока нет книг.</p>
          <p className="hint">Форма добавления, статусы чтения и фильтры по жанрам появятся в следующих лабораторных работах.</p>
        </div>
      </section>
    </main>
  )
}
