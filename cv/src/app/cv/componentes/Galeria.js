
import React from "react";

import IconLink from "./IconLink";
import BussinessMan from "../images/bussiness_man.png"
import IssimaPage from "../images/issima_page.png"
import Kitchen from "../images/kitchen.jpeg"
import MobileApp from "../images/mobile_app.png"
import PicturesWall from "../images/pictures_wall.jpeg"
import styles from "../style/Galeria.module.css";

const Galeria = () => {
    return (
        <div class={styles.imagenes_container}>
            <IconLink src={BussinessMan}/>
            <IconLink src={IssimaPage}/>
            <IconLink src={Kitchen}/>
            <IconLink src={MobileApp}/>
            <IconLink src={PicturesWall}/>
            <IconLink src={PicturesWall}/>
        </div>
    )
}

export default Galeria;