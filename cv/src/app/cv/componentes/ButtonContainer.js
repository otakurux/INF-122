
import React from 'react';
import Button from './Button';
import Download from "../images/icon5.svg";
import styles from "../style/ButtonContainer.module.css";

const Button_Container = () => {

    return (
        <div className={styles.buttons_primari}>
            <div className={styles.buttons}>
                <Button src={Download} span={"Download CV"} />
                <Button span={"Contact me"} />
            </div>
        </div>
    );
}

export default Button_Container;
