import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li><a href='https://github.com/rickqueirozz'>Github</a></li>
        <li><a href='https://www.linkedin.com/in/ricardo-queiroz-826656231/'>Linkedin</a></li>
      </ul>
    </footer>
  )
}

export default Footer
