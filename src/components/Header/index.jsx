import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti';
import { IoCloseSharp } from 'react-icons/io5';
import styles from './Header.module.css';


const Header = () => {
  const [open, setOpen] = useState(false);

  const toogleMenu = (()=>{
    setOpen(!open);
  });



  return (
    <header className={styles.header}>
      <h1>Ricardo Queiroz</h1>
      <button onClick={toogleMenu} className={styles.menuHamburguer}> 
        {open ? <IoCloseSharp/> :  <TiThMenu/>}
      </button>
      <nav className={open ? styles.show : styles.noShow}>
        <ul className= {styles.navLink}>
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
            <Link to="/projetos" className={styles.link} >
              Projetos
            </Link>
          </li>
          <li>
            <Link to="/contato" className={styles.link} >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
