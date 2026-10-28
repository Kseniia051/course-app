import { NavLink, Outlet } from 'react-router';

export function AppLayout() {
  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1 style={{ margin: 0 }}>Личная библиотека</h1>
          <p className="app-description">Ваша персональная книжная полка с отметками о чтении, оценками и заметками.</p>
        </div>
        <nav aria-label="Основная навигация">
          <NavLink to="/books" end>Мои книги</NavLink>
          <NavLink to="/books/new">Добавить</NavLink>
        </nav>
      </header>
      
      {/* Обязательное плашка-пояснение по методичке */}
      <div className="storage-warning">
        ⚠️ <strong>Внимание:</strong> Данные хранятся в оперативной памяти приложения. После обновления страницы (F5) восстановится демонстрационный набор книг.
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
