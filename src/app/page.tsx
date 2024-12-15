import { Main } from "./components/main/Main";
import styles from "./page.module.css";
import { Header } from "./components/header/Header";

export default function Home() {
  return (
    <>
      <Header/>
 
        <Main/>

      <footer className={styles.footer}>
       
      </footer>
    </>
  );
}
