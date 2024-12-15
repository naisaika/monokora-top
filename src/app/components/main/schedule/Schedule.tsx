import Image from 'next/image'
import styles from './Schedule.module.scss'
import { NAVI_LISTS, EVENT_LISTS } from '@/data/constants/constants'
import classNames from 'classnames'
import Link from 'next/link'

const title = NAVI_LISTS[1]

export const Schedule = () => {
  return (
    <section className={styles.scheduleSection}>
      <svg 
        width="1440" 
        height="252" 
        viewBox="0 0 1440 252" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={styles.scheduleBg}
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M0 108L60 144C120 180 240 252 360 252C480 252 600 180 720 138C840 96 960 84 1080 90C1200 96 1320 120 1380 132L1440 144V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V108Z" fill="#24456B"/>
      </svg>
      <div className={classNames(styles.wrapper, styles.scheduleContainer)}>
        <div className={styles.titleContainer}>
          <div>
            <h2 className={styles.sectionTitle}>
              {title.img2 && 
                <Image src={title.img2} alt="アイコン画像" width={40} height={40} priority/>
              }
              <span className={styles.sectionTitle__text}>{title.text}</span>
            </h2>
            <p className={styles.sectionText}>
              モノコラの開催日をお知らせしています。<br/>
              皆様のご参加をお待ちしております。
            </p>
          </div>
          <Image src="/assets/img/schedule/schedule-img.png" alt="イベント予定画像" width={447} height={345} priority/>
        </div>
        <ul className={styles.scheduleList}>
          {EVENT_LISTS.map((list) => (
            <li key={list.id} className={styles.scheduleList__item}>
              <div className={styles.scheduleList__date}>
                <p>{list.date}</p>
              </div>
              <div className={styles.scheduleList__detail}>
                <p>
                  <span>{list.title}</span>
                  <span>{list.subtitle}</span>
                </p>
                <div>
                  <span>{list.status}</span>
                  {list.link && <Link href={list.link}>{list.linktext}</Link>}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
