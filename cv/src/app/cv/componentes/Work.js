import React from "react";
import IconLink from "./IconLink";
import styles from "../style/Work.module.css";

const Work = () => {
    const works = [
        {span: "", href: "",}
    ]
    return (
        <div class={styles.work}>
            <div class={styles.work_container} id={styles.text2}>
                <div class={styles.icon_text} >
                    <IconLink span={"Portfolio"} href={""}/>
                </div>
            </div>
            <div class={styles.work_container}>
                <div class={styles.icon_text}>
                    <IconLink span={"Skills"} href={""}/>
                </div>
            </div>
        </div>
    )
}

export default Work;