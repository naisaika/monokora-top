import { NAVI_LISTS } from '@/data/constants/constants'
import Image from 'next/image'
import styles from './Navi.module.scss'

export const Navi = () => {
  return (
    <nav className={styles.naviSection}>
        <ul className={styles.naviList}>
            {NAVI_LISTS.map((list) => (
                <li key={list.id} className={styles.naviList__item}>
                    <Image src={list.img} alt="アイコン画像" width={24} height={24} priority/>
                    <p className={styles.naviList__text}>{list.text}</p>
                </li>
            ))}
        </ul>
    </nav>
  )
}
