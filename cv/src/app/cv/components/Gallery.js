
import React from "react";
import IconLink from "./IconLink";
import styles from "../style/Gallery.module.css";

const Gallery = ({ images }) => {
  const generateIconLink = () => {
    return images.map((image) => (
      <IconLink
        key={image.key}
        src={image.image}
        href={image.href}
        target={image.target}
      />
    ));
  };

  return (
    <div className={styles.imagesContainer}>
      {generateIconLink()}
    </div>
  );
};

export default Gallery;
