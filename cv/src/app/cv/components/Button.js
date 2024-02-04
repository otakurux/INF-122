
import React from "react";
import Image from "next/image";
import styles from "../style/Button.module.css"

const Button = ({ onclick, span, src }) => {
    return (
        <button className={styles.button} onClick={onclick} >
            <div className={styles.buttonContainer}>
                <p className={styles.text}>{span} <Image src={src} /></p>
            </div>
        </button>
    )
}

export default Button;