
import React from 'react';
import styles from "./Main.module.css";

import Perfil from './componentes/Perfil';
import Info from './componentes/Info';
import ButtonContainer from './componentes/ButtonContainer';
import Work from './componentes/Work';
import Galeria from './componentes/Galeria';


import fotoPerfil from "./images/perfil_picture.jpeg";

import Icon1 from "./images/icon1.svg";
import Icon2 from "./images/icon2.svg";
import Icon3 from "./images/icon3.svg";
import Icon4 from "./images/icon4.svg";


function Main() {



  const icons = [
    { src: Icon1, href: "https://github.com/otakurux", target: "_blank" },
    { src: Icon2, href: "https://github.com/otakurux", target: "_blank" },
    { src: Icon3, href: "https://www.linkedin.com/in/deivid-enrique-mamani-trujillo-8b53012b1/", target: "_blank" },
    { src: Icon4, href: "https://www.youtube.com/", target: "_blank" },
  ];

  return (
    <div className="App">
      <div className={styles.section}>
        <Perfil
          fotoPerfil={fotoPerfil}
          name={"Deivid Enrique Mamani Trujillo"}
          cargo={"junio-basic"}
          icons={icons}
        />
      </div>
      <div className={styles.section}>
        <Info />
      </div>
      <div className={styles.section}>
        <ButtonContainer />
      </div>
      <div className={styles.section}>
        <Work />
      </div>
      <div className={styles.section}>
        <Galeria />
      </div>
    </div>
  );
}

export default Main;
