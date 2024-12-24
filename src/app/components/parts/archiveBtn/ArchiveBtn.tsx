import Link from 'next/link'
import styles from './ArchiveBtn.module.scss'
import Image from 'next/image';

interface archiveBtnProps {
    link: string;
    linkText: string;
}

export const ArchiveBtn = ({link, linkText}:archiveBtnProps) => {
  return (
    <Link href={link} target="_blank" className={styles.listLink}>
        <span>{linkText}</span>
        <Image src="https://www.factorx.jp/event/assets/img/icon/arrow.png" alt="矢印アイコン" width={16} height={16} priority/>
    </Link>
  )
}
