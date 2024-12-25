
import styles from '../styles/Button.module.css';

function Button({ text, esButtonClick, functionClick }) {
    return (
        <button className={esButtonClick ? styles.buttonClick : styles.buttonReboot}
            onClick={functionClick}>
            {text}
        </button>
    )
}

export default Button;
