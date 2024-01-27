import React from "react";

import styles from "../style/Perfil.module.css";
import Image from "next/image";

import Icon1 from "../images/icon1.svg"
import Icon2 from "../images/icon2.svg"
import Icon3 from "../images/icon3.svg"
import Icon4 from "../images/icon4.svg"

const Perfil = ({fotoPerfil, name, cargo}) => {
    const generateIconLinks = () => {
        const icons = [
            { src: Icon1, href: "https://github.com/", target: "_blank", className: "icon" },
            { src: Icon2, href: "https://github.com/", target: "_blank", className: "icon" },
            { src: Icon3, href: "https://github.com/", target: "_blank", className: "icon" },
            { src: Icon4, href: "https://github.com/", target: "_blank", className: "icon" },
        ];

        return icons.map((icon, index) => (
            <Image
                key={index}
                src={icon.src}
                href={icon.href}
                target={icon.target}
                className={icon.className}
            />
        ));
    };
    return (
        <div class={styles.perfil_container}>
            <div class={styles.foto_perfil}>
                <Image src={fotoPerfil} />
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