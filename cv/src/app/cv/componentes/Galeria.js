import React from "react";
import IconLink from "./IconLink";
import BussinessMan from "../images/bussiness_man.png";
import IssimaPage from "../images/issima_page.png";
import Kitchen from "../images/kitchen.jpeg";
import MobileApp from "../images/mobile_app.png";
import PicturesWall from "../images/pictures_wall.jpeg";
import styles from "../style/Galeria.module.css";

const Galeria = () => {
  const images = [
    { image: BussinessMan, href: "", target: "_blank" },
    { image: IssimaPage, href: "", target: "_blank" },
    { image: Kitchen, href: "", target: "_blank" },
    { image: MobileApp, href: "", target: "_blank" },
    { image: PicturesWall, href: "", target: "_blank" },
    { image: PicturesWall, href: "", target: "_blank" },
  ];

  const generarIconLink = () => {
    return images.map((image, index) => (
      <IconLink
        key={index}
        src={image.image}
        href={image.href}
        target={image.target}
      />
    ));
  };

  return (
    <div className={styles.imagenes_container}>
      {generarIconLink()}
    </div>
  );
};

export default Galeria;
