import React from 'react';
import Button from './Button';
import Descarga from "../images/icon5.svg";
import styles from "../style/ButtonContainer.module.css";

const Button_Container = () => {
    return (
        <div className={styles.buttons_primari}>
            <div className={styles.buttons}>
                <Button src={Descarga} span={"Download CV"} id={"button_one"} />
                <Button span={"Contact me"} id={"button_two"} />
            </div>
        </div>
    )
}

export default Button_Container;