import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import classNames from 'classnames';

const navItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Projets', to: '/projects' },
  { label: 'À propos', to: '/about' },
  { label: 'Contact', to: '/#contact' }
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            PORTFOLIO ABDEL MOUNIM
          </motion.span>
        </Link>
        <button className="navbar__burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span />
          <span />
        </button>
        <nav className={classNames('navbar__nav', { 'is-open': open })}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => classNames('navbar__link', { active: isActive })}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="Basculer le thème">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
}
