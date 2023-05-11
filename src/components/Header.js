import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import hamburger from '../img/hamburger.png';
import closeIcon from '../img/close.png';
import '../styles/Header.scss';

function Header() {
  const [navVisible, setNavVisible] = useState(false);

  const showNav = () => {
    setNavVisible(true);
  };

  const hideNav = () => {
    setNavVisible(false);
  };

  return (
    <header className="header">
      {!navVisible && (
        <button onClick={showNav}>
          <img src={hamburger} alt="show navigation" />
        </button>
      )}
      {navVisible && (
        <nav>
          <div class="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cast">Cast</NavLink>
            <NavLink to="/crew">Crew</NavLink>
            <NavLink to="/notes">Director's Notes</NavLink>
          </div>

          <button onClick={hideNav}>
            <img src={closeIcon} alt="hide navigation" />
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
