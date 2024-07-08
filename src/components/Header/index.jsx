import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Ricardo Queiroz</h1>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/sobre" className={styles.link}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/projetos" className={styles.link}>
              Projetos
            </Link>
          </li>
          <li>
            <Link to="/contato" className={styles.link}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
