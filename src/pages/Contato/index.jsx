import React from 'react'
import styles from './Contato.module.css'
import Header from '../../components/Header'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contato = () => {
  return (
    <div className={styles.Contato}>
    <Header/>
    <section className={styles.sectionContato}>
      <div className={styles.title}>
        <h1 className={styles.titleH1} >Contato</h1>
      <div className={styles.conteudo}>
          <div className={styles.conteudoLinks}>
            <div className={styles.conteudoIcons}>
              <a href='https://github.com/rickqueirozz'><FaGithub /></a>
              <a href='https://www.linkedin.com/in/ricardo-queiroz-826656231/'><FaLinkedin/></a>
            </div>
            <div className={styles.conteudoContatos}>
              <p>rick-queiroz@live.com</p>
              <p>+55 11 9 7586 2144</p>
              <p>São Paulo | SP</p>
            </div>
          </div>
      </div>
      </div>
    </section>
    </div>
  )
}

export default Contato
