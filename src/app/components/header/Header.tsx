import Image from 'next/image'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.wrapper}>
        <div className={styles.headerContainer}>
            <Image src="/assets/img/logo.svg" alt="logo画像" width={120} height={44} priority className={styles.logoImg}/>
        </div>
    </header>
  )
}