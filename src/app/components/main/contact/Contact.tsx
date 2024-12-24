import classNames from "classnames"
import styles from './Contact.module.scss'
import Image from "next/image"
import { NAVI_LISTS } from "@/data/constants/constants"
import Link from "next/link"
import { ContactAnimation } from "./contactAnimation/ContactAnimation";

const title = NAVI_LISTS[3]

export const Contact = () => {

  return (
    <section className={styles.contactSection} id="contact">
        <svg 
            width="1440" 
            height="191" 
            viewBox="0 0 1440 191" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={styles.contactBg__top}
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M0 125.344L61.7143 119.375C123.429 107.438 236.571 89.5312 360 113.406C483.429 131.312 596.571 191 720 191C843.429 185.031 956.571 119.375 1080 89.5312C1203.43 65.6562 1316.57 83.5625 1378.29 89.5312L1440 101.469V0H1378.29C1316.57 0 1203.43 0 1080 0C956.571 0 843.429 0 720 0C596.571 0 483.429 0 360 0C236.571 0 123.429 0 61.7143 0H0V125.344Z" fill="#24456B"/>
        </svg>
        <div className={classNames(styles.wrapper, styles.contactContainer)}>
            <h2 className={styles.sectionTitle}>
              {title.img2 && 
                <Image src={title.img2} alt="アイコン画像" width={40} height={40} priority/>
              }
                <span className={styles.sectionTitle__text}>{title.text}</span>
            </h2>
            <p className={styles.sectionText}>
                モノコラへのご意見・ご質問などがありましたら以下よりお気軽にお問い合わせください。
            </p>
            <ContactAnimation/>
            <Link href="https://www.factorx.jp" target="_blank" rel="noopener noreferrer" className={styles.link}>
                <span>Factor Xトップへ</span>
                <Image 
                    src="https://www.factorx.jp/event/assets/img/icon/arrow.png" 
                    alt="矢印アイコン" 
                    width={20} 
                    height={20} 
                    priority
                    className={styles.linkIcon}
                />
            </Link>
        </div>
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
    </section>
  )
}
