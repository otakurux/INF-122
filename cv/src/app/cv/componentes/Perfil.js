
import React from "react";

import styles from "../style/Perfil.module.css";
import Image from "next/image";

import IconLink from "./IconLink";

const Perfil = ({ fotoPerfil, name, cargo, icons }) => {
    const generateIconLinks = () => {
        if (icons === undefined || icons === null) {
            console.log("icons es undefined o null");
            return;
        }
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