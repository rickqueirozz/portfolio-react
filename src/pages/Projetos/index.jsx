import React from 'react'
import styles from './Projetos.module.css';
import Header from '../../components/Header';
import { FaGithub } from "react-icons/fa";
import CryptoHub from '../../assets/CryptoHub.png';
const Projetos = () => {
  return (
    <div className={styles.projetos}>
      <Header/>
        <div className={styles.projetosTitle}>
          <h1>Projetos</h1>
        </div>
        <div className={styles.projetosBoxContainer}>
          <div className={styles.projetosBox}>
            <div className={styles.projetosBoxContent}>
              <h2>CryptoHub</h2>
              <img src={CryptoHub} alt="" />
              <p>O projeto consiste na criação de um site de rastreamento de preços de criptomoedas utilizando React JS.</p>
            </div>
            <div className={styles.projetoLink}>
                <FaGithub className={styles.projetoLinkSvg}/>
                <a href="https://cryptohub-five.vercel.app/" className={styles.projetoLinkA}>Ver Projeto</a>
            </div>
          </div>
          <div className={styles.projetosBox}>
            <div className={styles.projetosBoxContent}>
              <h2>Projeto1</h2>
              <img src={CryptoHub} alt="" />
              <p>O projeto consiste na criação de um site de rastreamento de preços de criptomoedas utilizando React JS.</p>
            </div>
            <div className={styles.projetoLink}>
                <FaGithub className={styles.projetoLinkSvg}/>
                <a href="https://cryptohub-five.vercel.app/" className={styles.projetoLinkA}>Ver Projeto</a>
            </div>
          </div>
          <div className={styles.projetosBox}>
            <div className={styles.projetosBoxContent}>
              <h2>Projeto1</h2>
              <img src={CryptoHub} alt="" />
              <p>O projeto consiste na criação de um site de rastreamento de preços de criptomoedas utilizando React JS.</p>
            </div>
            <div className={styles.projetoLink}>
                <FaGithub className={styles.projetoLinkSvg}/>
                <a href="https://cryptohub-five.vercel.app/" className={styles.projetoLinkA}>Ver Projeto</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projetos
