"use client";

import { useState } from 'react';
import { Navi } from '../../parts/navi/Navi'
import styles from './MenuBtn.module.scss'
import classNames from 'classnames';

interface showMenuBtnPorps {
  showMenuBtn: boolean;
}

export const MenuBtn = ({showMenuBtn}: showMenuBtnPorps) => {

  const [clickCloseBtn, setClickCloseBtn] = useState(true);
  const [clickMenuBtn, setClickMenuBtn] = useState(false);

  const handleCloseBtn = () => {
    setClickCloseBtn(true);
    setClickMenuBtn(false);
  }

  const handleMenuBtn = () => {
    setClickMenuBtn(!clickMenuBtn);
    setClickCloseBtn(!clickCloseBtn)
  }

  return (
    <div className={classNames(styles.menuBtnSection, { [styles.hidden]: !showMenuBtn })}>
        <div className={styles.menuBtnContainer}>
          <button type="button" className={styles.menuBtn} onClick={() => handleMenuBtn()}>
            <span className={styles.menuBtn__text}>Menu</span>
          </button>
        </div>
        <div className={classNames(styles.slideNaviContainer, { [styles.hidden]: clickCloseBtn })}>
          <span 
            className={styles.closeBtn} 
            aria-label='close-button' 
            onClick={() => handleCloseBtn()}
          >
          </span>
          <Navi onLinkClick={handleCloseBtn} />
        </div>
    </div>
  )
}
