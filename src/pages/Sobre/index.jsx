import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './Sobre.module.css'


const Sobre = () => {
  return (
    <div className={styles.sobre}>
      <Header/>
      <section className={styles.sectionSobre}>
        <div className={styles.conteudo}>
          <h1>Sobre</h1>
          <p>Sou Engenheiro de Software em formação na Fiap, especializado em Front-End. Tenho experiência em HTML, CSS, <span>JavaScript</span> e <span>React</span>, com conhecimento adicional em Vue.js. Além disso, sou proficiente no uso do Figma para design de sites, permitindo a criação de interfaces visualmente atraentes e funcionais. Embora meu foco principal seja o desenvolvimento Front-End, também possuo conhecimento básico em Back-End, especialmente em Python e Java, com ênfase em programação orientada a objetos.
          <br/>
          Trabalhei em uma empresa chamada RS Servicos, onde desenvolvi um formulário dedicado à gestão da alimentação na empresa. Utilizei HTML, CSS e JavaScript para criar uma interface intuitiva e interativa, e integrei uma API para otimizar o armazenamento eficiente dos dados em um banco de dados.
          <br/>
          Sou comprometido com a aprendizagem contínua e busco sempre contribuir de forma significativa para as equipes em que trabalho, trazendo criatividade, habilidades de resolução de problemas e um foco na qualidade do código.</p>
        </div>
        <div className={styles.tecnologias}>
          <img src="https://skillicons.dev/icons?i=figma,html,css,javascript,react,vue,vercel,python,java,git,github&perline=3"/>
        </div>
      </section>
    </div>
  )
}

export default Sobre

