import React from 'react';
import { Link } from 'react-scroll';
import './style.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          ❤️ <span>Família</span>
        </div>
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="inicio" smooth={true} duration={500} offset={-70}>
                Início
              </Link>
            </li>
            <li>
              <Link to="mae" smooth={true} duration={500} offset={-70}>
                Mãe
              </Link>
            </li>
            <li>
              <Link to="pai" smooth={true} duration={500} offset={-70}>
                Pai
              </Link>
            </li>
            <li>
              <Link to="galeria" smooth={true} duration={500} offset={-70}>
                Memórias
              </Link>
            </li>
            <li>
              <Link to="videos" smooth={true} duration={500} offset={-70}>
                Vídeos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;