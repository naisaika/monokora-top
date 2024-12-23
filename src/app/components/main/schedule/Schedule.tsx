import Image from 'next/image'
import styles from './Schedule.module.scss'
import { NAVI_LISTS } from '@/data/constants/constants'
import classNames from 'classnames'
import { ScheduleList } from './scheduleList/ScheduleList'

const title = NAVI_LISTS[1]

export const Schedule = () => {
  return (
    <section className={styles.scheduleSection} id="schedule">
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
          <div className={styles.titleImgContainer}>
            <Image 
              src="/assets/img/schedule/schedule-img.png" 
              alt="イベント予定画像" 
              width={447} 
              height={345} 
              priority
              className={styles.titleImg}
            />
          </div>
        </div>
        <ScheduleList/>
      </div>
      <svg 
        width="1439" 
        height="218" 
        viewBox="0 0 1439 218" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={styles.scheduleBg}
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M0 37.6401L59.9576 49.6641C119.915 61.6881 239.83 85.7361 359.746 109.784C479.661 133.832 599.576 157.88 719.491 127.82C839.407 97.7601 959.322 13.5921 1079.24 1.5681C1199.15 -10.4559 1319.07 49.6641 1379.03 79.7241L1438.98 109.784V218H1379.03C1319.07 218 1199.15 218 1079.24 218C959.322 218 839.407 218 719.491 218C599.576 218 479.661 218 359.746 218C239.83 218 119.915 218 59.9576 218H0V37.6401Z" fill="#24456B"/>
      </svg>
    </section>
  )
}
