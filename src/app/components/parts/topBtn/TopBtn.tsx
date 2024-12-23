import Image from "next/image"
import styles from './TopBtn.module.scss'

export const TopBtn = () => {

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button type="button" className={styles.scrollTop} onClick={handleScrollTop}>
        <Image src="/assets/img/icon/arrow-top.png" alt="戻るアイコン" width={24} height={24} priority/>
        <span>TOP</span>
    </button>
  )
}
