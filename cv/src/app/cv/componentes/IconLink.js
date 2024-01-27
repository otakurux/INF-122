import React from "react";
import styles from "../style/IconLink.module.css";
import Image from "next/image";

const IconLink = ({ span, src, alt, href, target }) => {
    return (
        <a href={href} target={target} className={styles.link}>
            {span}
            <Image
                src={src}
                alt={alt}
            />
        </a>
    );
};

export default IconLink;
