
import styles from "./page.module.css";
import Main from "./cv/Main";

export default function Home() {
  return (
    <div className={styles.main}>
      <h1>Estas en el main</h1>
      <Main />
    </div>
  );
}
