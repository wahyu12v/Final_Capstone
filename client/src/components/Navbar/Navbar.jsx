import { useState } from 'react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Navbar({ page }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <div className="nav__header">
        <div className="logo nav__logo">
          <Link to={'/'}>PANTAS</Link>
        </div>
        <div
          className="nav__menu__btn"
          id="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>{menuOpen ? <RiCloseLine /> : <RiMenuLine />}</span>
        </div>
      </div>
      <ul className={'nav__links' + (menuOpen ? ' open' : '')} id="nav-links">
        {page.map((item) =>
          item.navigate ? (
            <li key={item.link}>
              <Link to={item.link} onClick={() => setMenuOpen(!menuOpen)}>
                {item.title}
              </Link>
            </li>
          ) : (
            <li key={item.link}>
              <a href={item.link} onClick={() => setMenuOpen(!menuOpen)}>
                {item.title}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
