
import styles from '../styles/Accountant.module.css';

function Accountant({ nroClicks, show}) {
    return show ? <div className={styles.accountant}> {nroClicks} </div> : null;
}

export default Accountant;
