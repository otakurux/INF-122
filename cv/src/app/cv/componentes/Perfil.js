
import React from "react";

import styles from "../style/Perfil.module.css";
import Image from "next/image";

import Icon1 from "../images/icon1.svg"
import Icon2 from "../images/icon2.svg"
import Icon3 from "../images/icon3.svg"
import Icon4 from "../images/icon4.svg"

import IconLink from "./IconLink";

const Perfil = ({ fotoPerfil, name, cargo }) => {
    const icons = [
        { src: Icon1, href: "https://github.com/otakurux", target: "_blank" },
        { src: Icon2, href: "https://github.com/otakurux", target: "_blank" },
        { src: Icon3, href: "https://www.linkedin.com/in/deivid-enrique-mamani-trujillo-8b53012b1/", target: "_blank" },
        { src: Icon4, href: "https://www.youtube.com/", target: "_blank" },
    ];

    const generateIconLinks = () => {
        return icons.map((icon, index) => (
            <IconLink
                key={index}
                src={icon.src}
                href={icon.href}
                target={icon.target}
            />
        ));
    };

    return (
        <div class={styles.perfil_container}>
            <div className={styles.foto_Container}>
                <div class={styles.foto_perfil}>
                    <Image src={fotoPerfil} />
                </div>
            </div>
            <div class={styles.perfil_info}>
                <h1 class={styles.title}>{name}</h1>
                <p class={styles.subtitle}>{cargo}</p>
                <div class={styles.redes_sociales}>
                    {generateIconLinks()}
                </div>
            </div>
        </div>
    )
}

export default Perfil;