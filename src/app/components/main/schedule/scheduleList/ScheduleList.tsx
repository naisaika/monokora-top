"use client";

import { ArchiveBtn } from '@/app/components/parts/archiveBtn/ArchiveBtn'
import styles from './ScheduleList.module.scss'
import { EVENT_LISTS } from '@/data/constants/constants'
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

export const ScheduleList = () => {
    const [fadeInClass, setFadeInClass] = useState<string>("");

    const { ref, inView } = useInView({
        rootMargin: "0px",
        threshold: 0.5,
        triggerOnce: true
    });

    useEffect(() => {
        if (inView) {
            setFadeInClass(styles.fadeIn);
        }
    }, [inView]);

  return (
    <ul className={classNames(styles.scheduleList, fadeInClass)} ref={ref}>
    {EVENT_LISTS.map((list) => (
      <li key={list.id} className={styles.scheduleList__item}>
        <div className={styles.scheduleList__container}>
          <div className={styles.scheduleList__date}>
            <p className={styles.dateText}>{list.date}</p>
          </div>
          <div className={styles.scheduleList__detail}>
            <p className={styles.scheduleList__title}>
              <span className={styles.mainTitle}>{list.title}</span>
              <span className={styles.subTitle}>{list.subtitle}</span>
            </p>
            <div className={styles.scheduleList__status}>
              <span className={styles.status}>{list.status}</span>
              {list.link? (
                <ArchiveBtn link={list.link} linkText={list.linktext}/>
              ): <span className={styles.noLinkText}>{list.linktext}</span>
              }
            </div>
          </div>
        </div>
        {list.id === 0 && <div className={styles.listLine}></div>}
      </li>
    ))}
  </ul>
  )
}
