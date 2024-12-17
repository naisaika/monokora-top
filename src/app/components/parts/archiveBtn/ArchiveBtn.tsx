import Link from 'next/link'
import styles from './ArchiveBtn.module.scss'
import Image from 'next/image';

interface archiveBtnProps {
    link: string;
    linkText: string;
}

export const ArchiveBtn = ({link, linkText}:archiveBtnProps) => {
  return (
    <Link href={link} className={styles.listLink}>
        <span>{linkText}</span>
        <Image src="/assets/img/icon/arrow.png" alt="矢印アイコン" width={16} height={16} priority/>
    </Link>
  )
}
