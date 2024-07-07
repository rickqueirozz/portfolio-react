import React from 'react'
import Header from '../../components/Header'
import styles from './Home.module.css';
const Home = () => {
  return (
    <div>
      <Header/>
      <section className={styles.container}>
        <div className={styles.apresentacao}>
         <h1 className={styles.h1Container}>Ricardo Queiroz</h1>
         <h2 className={styles.h2Container}>Desenvolvedor Front-end</h2>
         <button className={styles.btnContainer}>Saiba mais</button>
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
