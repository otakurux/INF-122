
import React from "react";

import styles from "../style/Profile.module.css";
import Image from "next/image";

import IconLink from "./IconLink";

const Profile = ({ photoProfile, name, cargo, icons }) => {
    const generateIconLinks = () => {
        if (icons === undefined || icons === null) {
            console.log("icons es undefined o null");
            return;
        }
        return icons.map((icon) => (
            <IconLink
                key={icon.key}
                src={icon.src}
                href={icon.href}
                target={icon.target}
            />
        ));
    };

    return (
        <div class={styles.profileContainer}>
            <div className={styles.photoContainer}>
                <div class={styles.photoProfile}>
                    <Image src={photoProfile} />
                </div>
            </div>
            <div class={styles.profileInfo}>
                <h1 class={styles.title}>{name}</h1>
                <p class={styles.subtitle}>{cargo}</p>
                <div class={styles.socialNetworks}>
                    {generateIconLinks()}
                </div>
            </div>
        </div>
    )
}

export default Profile;