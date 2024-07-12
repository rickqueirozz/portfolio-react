import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import styles from './Home.module.css';
import Footer from '../../components/Footer';
const Home = () => {
  return (
    <div className={styles.home}>
      <Header/>
      <section className={styles.container}>
        <div className={styles.apresentacao}>
         <h1 className={styles.h1Container}>Ricardo Queiroz</h1>
         <h2 className={styles.h2Container}>Desenvolvedor Front-end</h2>
         <Link to="/sobre" className={styles.btnContainer}>Saiba mais</Link>
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
