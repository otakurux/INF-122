import React from "react";
import Image from "next/image";
// import IconLink from "./IconLink";
import BussinessMan from "../images/bussiness_man.png"
import IssimaPage from "../images/issima_page.png"
import Kitchen from "../images/kitchen.jpeg"
import MobileApp from "../images/mobile_app.png"
import PicturesWall from "../images/pictures_wall.jpeg"
import styles from "../style/Galeria.module.css";

const Galeria = () => {
    return (
        <div class={styles.imagenes_container}>
            <Image src={BussinessMan} />
            <Image src={IssimaPage} />
            <Image src={Kitchen} />
            <Image src={MobileApp} />
            <Image src={PicturesWall} />
            <Image src={PicturesWall} />
        </div>
    )
}

export default Galeria;