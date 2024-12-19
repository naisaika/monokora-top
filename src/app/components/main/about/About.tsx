import Image from 'next/image'
import styles from './About.module.scss'
import { NAVI_LISTS } from '@/data/constants/constants'
import classNames from 'classnames'

const title = NAVI_LISTS[0]

export const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
        <div className={classNames(styles.wrapper, styles.aboutContainer)}>
            <div className={styles.imgContainer__top}>
                <Image 
                    src="/assets/img/about/about-img__top.png" 
                    alt="イメージ画像（上）" 
                    width={417} 
                    height={315} 
                    priority
                    className={styles.img__top}
                />
            </div>
            <h2 className={styles.sectionTitle}>
                <Image src={title.img} alt="アイコン画像" width={40} height={40} priority/>
                <span className={styles.sectionTitle__text}>{title.text}</span>
            </h2>
            <div className={styles.aboutTextContainer}>
                <Image 
                    src="/assets/img/about/about-bg.png" 
                    alt="テキスト背景" 
                    width={892} 
                    height={744} 
                    priority
                    className={styles.aboutBg}
                />                
                <Image 
                    src="/assets/img/about/about-bg2.png" 
                    alt="テキスト背景" 
                    width={800} 
                    height={780} 
                    priority
                    className={styles.aboutBg2}
                />
                <p className={styles.aboutText}>
                    モノコラとは、工場・製造業の総合マッチングプラットフォーム Factor Xが主催する製造業界に特化した企業交流会です。<br />
                    製造業の企業、製造業に関わる企業数百社が集い、企業様における課題を解決するために参加企業のものづくりの技術、IT技術その他あらゆる技術/サービスの出会いの場となっております。<br/>
                    また、業界ならではの課題やお困りごとをテーマにした講演会も同時開催。<br />
                    小さな町工場から大企業までどなたでもお気軽に参加可能です。<br />
                    皆様にとって有意義な時間を過ごしていただける会となることを目指しています。
                </p>
            </div>
            <div className={styles.imgContainer__bottom}>
                <Image 
                    src="/assets/img/about/about-img__bottom.png" 
                    alt="イメージ画像（下）" 
                    width={417} 
                    height={315} 
                    priority
                    className={styles.img__bottom}
                />
            </div>
        </div>
    </section>
  )
}
