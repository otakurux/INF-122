
import IconLink from "./IconLink";
import styles from "../style/Work.module.css";

const Work = ({ portfolio, skills }) => {
    return (
        <div class={styles.work}>
            <div class={styles.workContainer} id={styles.text2}>
                <div class={styles.iconText} >
                    <IconLink span={"Portfolio"} href={portfolio} />
                </div>
            </div>
            <div class={styles.workContainer}>
                <div class={styles.iconText}>
                    <IconLink span={"Skills"} href={skills}/>
                </div>
            </div>
        </div>
    )
}

export default Work;