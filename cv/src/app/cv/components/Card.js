
import styles from "../style/Card.module.css";

const Card = ({ title, text }) => {
    return (
        <div class={styles.cardContainer}>
            <p className={styles.text}>{title}</p>
            <div class={styles.cardDescription}>
                <p class={styles.text}>{text}</p>
            </div>
        </div>
    )
}

export default Card;