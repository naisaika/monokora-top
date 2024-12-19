import React from 'react'
import { FirstViewLoading } from '../firstViewLoading/FirstViewLoading'
import styles from './Main.module.scss'
import { Top } from './top/Top'
import { About } from './about/About'
import { Schedule } from './schedule/Schedule'
import { Archive } from './archive/Archive'
import { Contact } from './contact/Contact'
import { Footer } from '../footer/Footer'

export const Main = () => {
  return (
    <main className={styles.main}>
        <FirstViewLoading/>
        <Top/>
        <About/>
        <Schedule/>
        <Archive/>
        <Contact/>
        <Footer/>
    </main>
  )
}
