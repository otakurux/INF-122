
import styles from '../styles/Picture.module.css';

function Picture({ value, onClick }) {
    return (
        <button className={styles.picture} onClick={onClick}>
            {value}
        </button>
    );
}

export default Picture;