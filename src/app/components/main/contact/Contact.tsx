import classNames from "classnames"
import styles from './Contact.module.scss'
import Image from "next/image"
import { NAVI_LISTS } from "@/data/constants/constants"
import Link from "next/link"

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
            <div className={styles.contactContents}>
                <svg 
                    width="978" 
                    height="1017" 
                    viewBox="-15 -15 1008 1047"
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.contactBg__middle}
                >
                    <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M503.689 40.1168C599.379 31.2878 698.137 -27.7119 785.223 18.4645C874.225 65.6563 927.548 175.294 958.976 281.525C988.715 382.049 977.481 490.349 955.314 593.395C934.747 689.002 898.333 780.18 836.869 849.158C778.181 915.019 698.147 942.488 619.555 970.199C539.934 998.274 459.341 1027.78 377.289 1011.21C289.754 993.524 208.583 945.434 145.064 874.358C78.1665 799.502 27.8678 705.349 10.0677 600.297C-8.23031 492.306 0.191648 377.151 44.247 279.356C87.3372 183.704 164.267 112.459 249.925 67.8547C328.851 26.7567 417.24 48.0932 503.689 40.1168Z" 
                        fill="#24456B" 
                        stroke="#54779F"
                        strokeLinecap="round"
                        strokeWidth="15" 
                        className={styles.animatedPath}
                    >
                    </path>
                </svg>
                <div className={styles.contactContents__section}>
                    <div className={styles.contactContents__container}>
                        <h3 className={styles.contactContents__title}>メールでお問い合わせ</h3>
                        <div className={styles.contactContents__detail}>
                            <Link href="https://www.factorx.jp/inquire" target="_blank" className={styles.contactContents__link}>
                                <span>お問い合わせはこちら</span>
                                <Image 
                                    src="/assets/img/icon/arrow.png" 
                                    alt="矢印アイコン" 
                                    width={20} 
                                    height={20} 
                                    priority
                                    className={styles.contactContents__icon}
                                />
                            </Link>
                            <p className={styles.contactContents__text}>3営業日以内にご返信いたします。</p>
                        </div>
                    </div>
                    <div className={styles.contactContents__container}>
                        <h3 className={styles.contactContents__title}>お電話でお問い合わせ</h3>
                        <div className={styles.contactContents__detail}>
                            <div className={styles.contactContents__tel}>
                                <Image 
                                src="/assets/img/contact/tel.png" 
                                alt="電話アイコン" 
                                width={32} 
                                height={32} 
                                priority
                                className={styles.contactContents__telIcon}
                                />
                                <p className={styles.contactContents__telnumber}>0569-21-5539</p>
                            </div>
                            <p className={styles.contactContents__text2}>平日9:00～17:00（土・日除く）</p>
                        </div>
                    </div>
                </div>  
            </div>
            <Link href="https://www.factorx.jp" className={styles.link}>
                <span>Factor Xトップへ</span>
                <Image 
                    src="/assets/img/icon/arrow.png" 
                    alt="矢印アイコン" 
                    width={20} 
                    height={20} 
                    priority
                    className={styles.linkIcon}
                />
            </Link>
        </div>
    </section>
  )
}
