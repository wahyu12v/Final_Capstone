import { useEffect, useState } from 'react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './navbar.module.css';

export default function Navbar({ page }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
      <Link to="#konten" className={styles['skip-link']}>
        Skip To Content
      </Link>
      <nav className={styles.nav__landing}>
        <div className={styles.nav__header}>
          <div className={`${styles.logo} ${styles.nav__logo}`}>
            <Link to={'/'}>PANTAS</Link>
          </div>
          <div
            className={styles.nav__menu__btn}
            id="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span>{menuOpen ? <RiCloseLine /> : <RiMenuLine />}</span>
          </div>
        </div>
        <ul
          className={
            `${styles.nav__links}` + (menuOpen ? ` ${styles.open}` : '')
          }
          id="nav-links"
        >
          {page.map((item) => (
            <li key={item.link}>
              <NavLink to={item.link} onClick={() => setMenuOpen(!menuOpen)}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
