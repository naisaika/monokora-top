import Image from 'next/image'
import styles from './Header.module.scss'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <Link href="https://www.factorx.jp" target="_blank" rel="noopener noreferrer">
            <Image src="https://www.factorx.jp/event/assets/img/logo.svg" alt="logo画像" width={120} height={44} priority className={styles.logoImg}/>
          </Link>
        </div>
    </header>
  )
}