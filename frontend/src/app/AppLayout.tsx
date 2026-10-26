import { NavLink, Outlet } from 'react-router';

export function AppLayout() {
  return (
    <div className="app">
      <header className="app-header">
        <p className="app-title">📚 Личная Библиотека</p>
        <nav aria-label="Основная навигация">
          <NavLink to="/books" end>Мои книги</NavLink>
          <NavLink to="/books/new">Добавить</NavLink>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}
