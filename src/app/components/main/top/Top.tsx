"use client";

import Image from 'next/image'
import { Navi } from '../../parts/navi/Navi'
import styles from './Top.module.scss'
import classNames from 'classnames'
import { MenuBtn } from '../../parts/menuBtn/MenuBtn'
import { useEffect, useRef, useState } from 'react'
import { useInView } from "react-intersection-observer"

export const Top = () => {

    const { ref, inView } = useInView({
        rootMargin: "0px",
        triggerOnce: true
    });

    const [showMenuBtn, setShowMenuBtn] = useState(false);
    const naviRef = useRef(null);

    const [fadeInClass, setFadeInClass] = useState<string>("");

    useEffect(() => {
        if (inView) {
            setFadeInClass(styles.fadeIn);
        }
    }, [inView]);

    useEffect(() =>{

        const naviElement = naviRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isVisible = entry.isIntersecting;
                setShowMenuBtn(!isVisible);
            },
            { threshold: 0.5}
        );

        if(naviElement) {
            observer.observe(naviElement);
        }

        return() => {
            if(naviElement) {
                observer.unobserve(naviElement)
            }
        }
    }, [])

  return (
    <section className={styles.topSection}>
        <svg 
            width="1440" 
            height="144" 
            viewBox="0 0 1440 144" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={styles.topBg}
        >
            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M0 72L60 84C120 96 240 120 360 114C480 108 600 72 720 72C840 72 960 108 1080 126C1200 144 1320 144 1380 144H1440V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V72Z" 
                fill="#24456B"
            />
        </svg>
        <div ref={naviRef}>
            <Navi/>
        </div>
        <div className={classNames(styles.wrapper, styles.topContainer)}>
            <div className={classNames(styles.titleSection, fadeInClass)} ref={ref}>
                <p className={styles.subTitle}>
                    <Image src="/assets/img/top/top-logo.png" alt="logo画像" width={132} height={36} priority className={styles.subTitle__logo}/>
                    <span className={styles.subTitle__text}>企業交流会</span>
                </p>
                <h1 className={styles.title}>
                    <div className={styles.titleContainer}>
                        <div className={styles.title__strong}>
                            <span className={styles.title__pink}>モ</span>
                            <span className={styles.title__blue}>ノ</span>
                        </div>
                        <span className={styles.title__text}>づくり</span>
                    </div>
                    <div className={styles.titleContainer}>
                        <div className={styles.title__strong}>
                            <span className={styles.title__blue}>コ</span>
                            <span className={styles.title__blue}>ラ</span>
                        </div>
                        <span className={styles.title__text}>ボ</span>
                    </div>
                    <div className={styles.title}>
                        <span className={styles.title__text}>フォーラム</span>
                    </div>
                </h1>
            </div>
            <Image 
                src="/assets/img/top/top-img.png" 
                alt="トップ画像" 
                width={480} 
                height={520} 
                priority 
                className={styles.topImg}
            />
        </div>
        <MenuBtn showMenuBtn={showMenuBtn}/>
        <svg 
            width="1440" 
            height="288" 
            viewBox="0 0 1440 288" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={styles.topBg}
            preserveAspectRatio="none"
        >
            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M0 0L60 30C120 60 240 120 360 138C480 156 600 132 720 150C840 168 960 228 1080 222C1200 216 1320 144 1380 108L1440 72V288H1380C1320 288 1200 288 1080 288C960 288 840 288 720 288C600 288 480 288 360 288C240 288 120 288 60 288H0V0Z" 
                fill="#24456B"
            />
        </svg>
    </section>
  )
}
