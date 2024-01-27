import React from "react";
import Card from "./Card";
import styles from "../style/Info.module.css";

const Info = () => {
    return (
        <div class={styles.info_container}>
            <Card title={"1"} text={"hours of work experience"}/>
            <Card title={"1+"} text={"Completed projects"}/>
            <Card title={"1+"} text={"Satisfied customers"}/>
        </div>
    )
}

export default Info;