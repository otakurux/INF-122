
import React from 'react';
import styles from "./Main.module.css";

import Perfil from './componentes/Perfil';
import Info from './componentes/Info';
import ButtonContainer from './componentes/ButtonContainer';
import Work from './componentes/Work';
import Galeria from './componentes/Galeria';
import fotoPerfil from "./images/perfil_picture.jpeg";


function Main() {
  return (
    <div className="App">
      <div className={styles.section}>
        <Perfil
          fotoPerfil={fotoPerfil}
          name={"Deivid Enrique Mamani Trujillo"}
          cargo={"junio-basic"}
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
