import React from "react";
import Card from "./Card";
import styles from "../style/Info.module.css";

const Info = () => {
    return (
        <div class={styles.info_container}>
            <Card title={"7"} text={"Years of work experience"}/>
            <Card title={"50+"} text={"Completed projects"}/>
            <Card title={"20+"} text={"Satisfied customers"}/>
        </div>
    )
}

export default Info;