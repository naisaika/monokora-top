import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <svg 
        width="1429" 
        height="245" 
        viewBox="0 0 1429 245" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={styles.footerBg}
        
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M0 72L59.5417 79C119.083 87 238.167 101 357.25 79C476.333 58 595.417 0 714.5 0C833.583 0 952.667 58 1071.75 72C1190.83 87 1309.92 58 1369.46 43L1429 29V245H1369.46C1309.92 245 1190.83 245 1071.75 245C952.667 245 833.583 245 714.5 245C595.417 245 476.333 245 357.25 245C238.167 245 119.083 245 59.5417 245H0V72Z" fill="#24456B"/>
        </svg>
        <small className={styles.footer__text}>&copy;2025 Factor X</small>
    </footer>
  )
}
