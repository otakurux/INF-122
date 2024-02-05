
import Button from './Button';
import Download from "../images/icon5.svg";
import styles from "../style/ButtonContainer.module.css";

const Button_Container = () => {

    return (
        <div className={styles.buttonsContainer}>
            <div className={styles.buttons}>
                <div className={styles.buttonPrimary}>
                    <Button src={Download} span={"Download CV"} />
                </div>
                <div className={styles.buttonSecondary}>
                    <Button span={"Contact me"} />
                </div>
            </div>
        </div>
    );
}

export default Button_Container;
