import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE } from '../config.js';

const links = [
  ['/', 'Főoldal'],
  ['/bemutatkozas', 'Bemutatkozás'],
  ['/roplabda', 'Röplabda'],
  ['/macskak', 'Macskák'],
  ['/galeria', 'Galéria'],
  ['/podcast', 'Podcast'],
  ['/kapcsolat', 'Kapcsolat'],
];

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header className='site-header'>
        <div className='wrap header-inner'>
          <span className='brand'>🏐 {SITE.name} 🐱</span>
          <nav>
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === '/'}>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className='wrap'>
        <Outlet />
      </main>
      <footer className='site-footer'>
        <div className='wrap'>
          © {new Date().getFullYear()} {SITE.name} – egyetemi gyakorlati
          feladathoz készült honlap
        </div>
      </footer>
    </>
  );
}
