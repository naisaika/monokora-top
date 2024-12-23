// "use client";

// import { useEffect } from 'react'
import { FirstViewLoading } from '../firstViewLoading/FirstViewLoading'
import styles from './Main.module.scss'
import { Top } from './top/Top'
import { About } from './about/About'
import { Schedule } from './schedule/Schedule'
import { Archive } from './archive/Archive'
import { Contact } from './contact/Contact'

export const Main = () => {

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <main className={styles.main}>
        <FirstViewLoading/>
        <Top/>
        <About/>
        <Schedule/>
        <Archive/>
        <Contact/>
    </main>
  )
}
