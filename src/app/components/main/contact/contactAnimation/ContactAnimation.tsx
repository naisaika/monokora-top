"use client";

import { useEffect } from "react";
import styles from './ContactAnimation.module.scss'
import Image from "next/image";
import Link from "next/link";

export const ContactAnimation = () => {

    useEffect(() => {
        const path = document.querySelector("#motionPath") as SVGPathElement | null;
        const icon = document.querySelector(`.${styles.rotatingIcon}`) as HTMLElement | null;
        const icon2 = document.querySelector(`.${styles.rotatingIcon2}`) as HTMLElement | null;
      
        if (path) {
          const totalLength = path.getTotalLength();
          const scale = 0.94;
          const rotationSpeed = 0.5; // 回転速度（1秒あたりの回転角度）
      
          const animateIcon = (
            iconElement: HTMLElement | null,
            offsetMultiplier: number,
            reverseRotation: boolean
          ) => {
            if (!iconElement) return;
      
            let start = 0; // 初期位置
            let lastTime = performance.now(); // 初期タイムスタンプ
      
            const animate = (currentTime: number) => {
              const deltaTime = (currentTime - lastTime) / 1000; // 秒単位の経過時間
              lastTime = currentTime;
      
              const progress = (start % totalLength) / totalLength; // 0～1の進行度
              const point = path.getPointAtLength(progress * totalLength); // 軌道上のポイントを取得
              const offsetX = 25 * offsetMultiplier;
      
              // 軌道を縮小
              const scaledX = point.x * scale + offsetX;
              const scaledY = point.y * scale;
      
              // 回転角度を計算（進む方向を逆転させる場合は符号を変える）
              const rotation = start * rotationSpeed * (reverseRotation ? -1 : 1);
      
              // アニメーション実行
              iconElement.style.transform = `translate(${scaledX}px, ${scaledY}px) rotate(${rotation}deg)`;
      
              // アニメーション速度を調整
              start += deltaTime * 40;
      
              requestAnimationFrame(animate); // 次のフレームをリクエスト
            };
      
            requestAnimationFrame(animate); // 初回の呼び出し
          };
      
          // 各アイコンに対してアニメーションを適用
          animateIcon(icon, 1, false); // 正方向
          animateIcon(icon2, 0, true); // 逆方向
        }
      }, []);

  return (
    <div className={styles.contactContents}>
    <svg 
        width="978" 
        height="1017" 
        viewBox="-10 -10 1008 1087"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={styles.contactBg__middle}
    >
        <path 
            id="motionPath"
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M503.689 40.1168C599.379 31.2878 698.137 -27.7119 785.223 18.4645C874.225 65.6563 927.548 175.294 958.976 281.525C988.715 382.049 977.481 490.349 955.314 593.395C934.747 689.002 898.333 780.18 836.869 849.158C778.181 915.019 698.147 942.488 619.555 970.199C539.934 998.274 459.341 1027.78 377.289 1011.21C289.754 993.524 208.583 945.434 145.064 874.358C78.1665 799.502 27.8678 705.349 10.0677 600.297C-8.23031 492.306 0.191648 377.151 44.247 279.356C87.3372 183.704 164.267 112.459 249.925 67.8547C328.851 26.7567 417.24 48.0932 503.689 40.1168Z" 
            fill="#24456B" 
            strokeLinecap="round"
            strokeWidth="15" 
        >
        </path>
    </svg>
    <div className={styles.rotateIconContainer}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
    
            viewBox="0 0 512 512"
            className={styles.rotatingIcon}
        >
            <path className={styles.iconPath} 
                d="M502.325,307.303l-39.006-30.805c-6.215-4.908-9.665-12.429-9.668-20.348c0-0.084,0-0.168,0-0.252
                c-0.014-7.936,3.44-15.478,9.667-20.396l39.007-30.806c8.933-7.055,12.093-19.185,7.737-29.701l-17.134-41.366
                c-4.356-10.516-15.167-16.86-26.472-15.532l-49.366,5.8c-7.881,0.926-15.656-1.966-21.258-7.586
                c-0.059-0.06-0.118-0.119-0.177-0.178c-5.597-5.602-8.476-13.36-7.552-21.225l5.799-49.363
                c1.328-11.305-5.015-22.116-15.531-26.472L337.004,1.939c-10.516-4.356-22.646-1.196-29.701,7.736l-30.805,39.005
                c-4.908,6.215-12.43,9.665-20.349,9.668c-0.084,0-0.168,0-0.252,0c-7.935,0.014-15.477-3.44-20.395-9.667L204.697,9.675
                c-7.055-8.933-19.185-12.092-29.702-7.736L133.63,19.072c-10.516,4.356-16.86,15.167-15.532,26.473l5.799,49.366
                c0.926,7.881-1.964,15.656-7.585,21.257c-0.059,0.059-0.118,0.118-0.178,0.178c-5.602,5.598-13.36,8.477-21.226,7.552
                l-49.363-5.799c-11.305-1.328-22.116,5.015-26.472,15.531L1.939,174.996c-4.356,10.516-1.196,22.646,7.736,29.701l39.006,30.805
                c6.215,4.908,9.665,12.429,9.668,20.348c0,0.084,0,0.167,0,0.251c0.014,7.935-3.44,15.477-9.667,20.395L9.675,307.303
                c-8.933,7.055-12.092,19.185-7.736,29.701l17.134,41.365c4.356,10.516,15.168,16.86,26.472,15.532l49.366-5.799
                c7.882-0.926,15.656,1.965,21.258,7.586c0.059,0.059,0.118,0.119,0.178,0.178c5.597,5.603,8.476,13.36,7.552,21.226l-5.799,49.364
                c-1.328,11.305,5.015,22.116,15.532,26.472l41.366,17.134c10.516,4.356,22.646,1.196,29.701-7.736l30.804-39.005
                c4.908-6.215,12.43-9.665,20.348-9.669c0.084,0,0.168,0,0.251,0c7.936-0.014,15.478,3.44,20.396,9.667l30.806,39.007
                c7.055,8.933,19.185,12.093,29.701,7.736l41.366-17.134c10.516-4.356,16.86-15.168,15.532-26.472l-5.8-49.366
                c-0.926-7.881,1.965-15.656,7.586-21.257c0.059-0.059,0.119-0.119,0.178-0.178c5.602-5.597,13.36-8.476,21.225-7.552l49.364,5.799
                c11.305,1.328,22.117-5.015,26.472-15.531l17.134-41.365C514.418,326.488,511.258,314.358,502.325,307.303z M281.292,329.698
                c-39.68,16.436-85.172-2.407-101.607-42.087c-16.436-39.68,2.407-85.171,42.087-101.608c39.68-16.436,85.172,2.407,101.608,42.088
                C339.815,267.771,320.972,313.262,281.292,329.698z"
                fill="#54779F" 
            >
            </path>
        </svg>
    </div>
    <div className={styles.rotateIconContainer}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
    
            viewBox="0 0 512 512"
            className={styles.rotatingIcon2}
        >
            <path className={styles.iconPath2} 
                d="M502.325,307.303l-39.006-30.805c-6.215-4.908-9.665-12.429-9.668-20.348c0-0.084,0-0.168,0-0.252
                c-0.014-7.936,3.44-15.478,9.667-20.396l39.007-30.806c8.933-7.055,12.093-19.185,7.737-29.701l-17.134-41.366
                c-4.356-10.516-15.167-16.86-26.472-15.532l-49.366,5.8c-7.881,0.926-15.656-1.966-21.258-7.586
                c-0.059-0.06-0.118-0.119-0.177-0.178c-5.597-5.602-8.476-13.36-7.552-21.225l5.799-49.363
                c1.328-11.305-5.015-22.116-15.531-26.472L337.004,1.939c-10.516-4.356-22.646-1.196-29.701,7.736l-30.805,39.005
                c-4.908,6.215-12.43,9.665-20.349,9.668c-0.084,0-0.168,0-0.252,0c-7.935,0.014-15.477-3.44-20.395-9.667L204.697,9.675
                c-7.055-8.933-19.185-12.092-29.702-7.736L133.63,19.072c-10.516,4.356-16.86,15.167-15.532,26.473l5.799,49.366
                c0.926,7.881-1.964,15.656-7.585,21.257c-0.059,0.059-0.118,0.118-0.178,0.178c-5.602,5.598-13.36,8.477-21.226,7.552
                l-49.363-5.799c-11.305-1.328-22.116,5.015-26.472,15.531L1.939,174.996c-4.356,10.516-1.196,22.646,7.736,29.701l39.006,30.805
                c6.215,4.908,9.665,12.429,9.668,20.348c0,0.084,0,0.167,0,0.251c0.014,7.935-3.44,15.477-9.667,20.395L9.675,307.303
                c-8.933,7.055-12.092,19.185-7.736,29.701l17.134,41.365c4.356,10.516,15.168,16.86,26.472,15.532l49.366-5.799
                c7.882-0.926,15.656,1.965,21.258,7.586c0.059,0.059,0.118,0.119,0.178,0.178c5.597,5.603,8.476,13.36,7.552,21.226l-5.799,49.364
                c-1.328,11.305,5.015,22.116,15.532,26.472l41.366,17.134c10.516,4.356,22.646,1.196,29.701-7.736l30.804-39.005
                c4.908-6.215,12.43-9.665,20.348-9.669c0.084,0,0.168,0,0.251,0c7.936-0.014,15.478,3.44,20.396,9.667l30.806,39.007
                c7.055,8.933,19.185,12.093,29.701,7.736l41.366-17.134c10.516-4.356,16.86-15.168,15.532-26.472l-5.8-49.366
                c-0.926-7.881,1.965-15.656,7.586-21.257c0.059-0.059,0.119-0.119,0.178-0.178c5.602-5.597,13.36-8.476,21.225-7.552l49.364,5.799
                c11.305,1.328,22.117-5.015,26.472-15.531l17.134-41.365C514.418,326.488,511.258,314.358,502.325,307.303z M281.292,329.698
                c-39.68,16.436-85.172-2.407-101.607-42.087c-16.436-39.68,2.407-85.171,42.087-101.608c39.68-16.436,85.172,2.407,101.608,42.088
                C339.815,267.771,320.972,313.262,281.292,329.698z"
                fill="#54779F" 
            >
            </path>
        </svg>
    </div>
    <div className={styles.contactContents__section}>
        <div className={styles.contactContents__container}>
            <h3 className={styles.contactContents__title}>メールでお問い合わせ</h3>
            <div className={styles.contactContents__detail}>
                <Link href="https://www.factorx.jp/inquire" target="_blank" className={styles.contactContents__link}>
                    <span>お問い合わせはこちら</span>
                    <Image 
                        src="https://www.factorx.jp/event/assets/img/icon/arrow.png" 
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
                    src="https://www.factorx.jp/event/assets/img/contact/tel.png" 
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
  )
}
