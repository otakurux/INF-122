"use client"
import styles from "./page.module.css";
import Main from "./cv/Main";

export default function Home() {
  return (
    <div className={styles.main}>
      <Main />
    </div>
  );
}
