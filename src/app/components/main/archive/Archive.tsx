import { NAVI_LISTS } from "@/data/constants/constants"
import styles from './Archive.module.scss'
import classNames from "classnames"
import Image from "next/image"
import { ArchiveFilter } from "./archiveFilter/ArchiveFilter"

const title = NAVI_LISTS[2]

export const Archive = () => {
  return (
    <section className={styles.archiveSection}>
        <div className={classNames(styles.wrapper, styles.archiveContainer)}>
            <div className={styles.titleContainer}>
                <h2 className={styles.sectionTitle}>
                    <Image src={title.img} alt="アイコン画像" width={40} height={40} priority/>
                    <span className={styles.sectionTitle__text}>{title.text}</span>
                </h2>
                <p className={styles.sectionText}>開催終了したモノコラの特設サイトをご覧いただけます。</p>
            </div>
        </div>
        <ArchiveFilter/>
    </section>
  )
}
