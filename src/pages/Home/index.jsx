import React from 'react'
import Header from '../../components/Header'
import styles from './Home.module.css';
import CurriculoRQ from '../../assets/CurriculoRQ.pdf';
const Home = () => {
  return (
    <div className={styles.home}>
      <Header/>
      <section className={styles.container}>
        <div className={styles.apresentacao}>
         <h1 className={styles.h1Container}>Ricardo Queiroz</h1>
         <h2 className={styles.h2Container}>Desenvolvedor <span>Front-end</span></h2>
         <a href={CurriculoRQ} target="_blank" rel="noopener noreferrer" className={styles.btnContainer}>
            Meu Currículo
          </a>
        </div>
          <div className={styles.circle}>
            <div className={styles.conimg}>
              
            </div>
          </div>
      </section>
    </div>
  )
}

export default Home
