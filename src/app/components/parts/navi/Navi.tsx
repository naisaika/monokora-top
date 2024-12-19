"use client";

import { NAVI_LISTS } from '@/data/constants/constants'
import Image from 'next/image'
import styles from './Navi.module.scss'
import { useEffect } from 'react';
import Link from 'next/link';

export const Navi = () => {

  useEffect(() => {

    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach((scrollLink) => {
      scrollLink.addEventListener("click", (e) => {
        e.preventDefault();
        
        const hrefLink = scrollLink.getAttribute("href");
        if (!hrefLink) return;  
  
        const targetContent = document.getElementById(hrefLink.replace("#", ""));
        if (!targetContent) return; 
  
        const rectTop = targetContent.getBoundingClientRect().top;
        const positionY = window.scrollY;
        const target = rectTop + positionY;
        window.scrollTo({
          top: target,
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <nav className={styles.naviSection}>
        <ul className={styles.naviList}>
            {NAVI_LISTS.map((list) => (
                <li key={list.id} className={styles.naviList__item}>
                  <Link href={`#${list.link}`} className={styles.naviList__link}>
                    <Image src={list.img} alt="アイコン画像" width={24} height={24} priority/>
                    <p className={styles.naviList__text}>{list.text}</p>
                  </Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}
