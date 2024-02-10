"use client"

import Pikachu from "./components/pikachu";
import styles from "./page.module.css";

const page = () => {
    return (
        <div className={styles.main}>
            <Pikachu />
        </div>
    )
}

export default page;