import styles from './FirstViewLoading.module.scss';
import { LoadingAnime } from './loadingAnime/LoadingAnime';

export const FirstViewLoading = () => {
  return (
    <section className={styles.loadingSection}>
      <LoadingAnime/>
    </section>
  )
}
