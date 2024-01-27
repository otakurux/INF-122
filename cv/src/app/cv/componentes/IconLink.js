import React from "react";
import styles from "../style/IconLink.module.css";

const IconLink = ({ span, src, alt, className, href, target }) => {
    return (
        <a href={href} target={target} className={styles.link}>
            {span}
            {/* <Image
                src={src}
                alt={alt}
            /> */}
            <img
                className={styles.className}
                src={src}
                alt={alt}
            />
        </a>
    );
};

export default IconLink;
