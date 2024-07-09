import styles from './Footer.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.icon}>
          <a href='https://github.com/rickqueirozz'><FaGithub /></a>
        </div>
        <div className={styles.icon}>
          <a href='https://www.linkedin.com/in/ricardo-queiroz-826656231/'><FaLinkedin/></a>

        </div>
      </div>
        
    </footer>
  )
}

export default Footer
