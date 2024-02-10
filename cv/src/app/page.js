"use client"
import styles from "./page.module.css";
import Main from "./cv/Main";
import Pikachu from "./proyects/proy1/components/pikachu";

export default function Home() {
  return (
    <div className={styles.main}>
      <Main />
      <Pikachu />
    </div>
  );
}
