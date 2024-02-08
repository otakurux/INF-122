
import React from 'react';
import styles from "./Main.module.css";

// components
import Profile from './components/Profile';
import Info from './components/Info';
import ButtonContainer from './components/ButtonContainer';
import Work from './components/Work';
import Galleria from './components/Gallery';

// profile
import photoProfile from "./images/perfil_picture.jpeg";

import Icon1 from "./images/icon1.svg";
import Icon2 from "./images/icon2.svg";
import Icon3 from "./images/icon3.svg";
import Icon4 from "./images/icon4.svg";

const icons = [
  { key: 1, src: Icon1, href: "https://github.com/otakurux", target: "_blank" },
  { key: 2, src: Icon2, href: "https://github.com/otakurux", target: "_blank" },
  { key: 3, src: Icon3, href: "https://www.linkedin.com/in/deivid-enrique-mamani-trujillo-8b53012b1/", target: "_blank" },
  { key: 4, src: Icon4, href: "https://www.youtube.com/", target: "_blank" },
];


// info
const cards = [
  { key: 1, title: "1", text: "hours of work experience" },
  { key: 2, title: "1+", text: "Completed projects" },
  { key: 3, title: "1+", text: "Satisfied customers" },
];


// work
const portfolio = "./components/ButtonContainer";
const skills = "./components/ButtonContainer";

// gallery
import BussinessMan from "./images/bussiness_man.png";
import IssimaPage from "./images/issima_page.png";
import Kitchen from "./images/kitchen.jpeg";
import MobileApp from "./images/mobile_app.png";
import PicturesWall from "./images/pictures_wall.jpeg";

const images = [
  { key: 1, image: BussinessMan, href: "", target: "_blank" },
  { key: 2, image: IssimaPage, href: "", target: "_blank" },
  { key: 3, image: Kitchen, href: "", target: "_blank" },
  { key: 4, image: MobileApp, href: "", target: "_blank" },
  { key: 5, image: PicturesWall, href: "", target: "_blank" },
  { key: 6, image: PicturesWall, href: "", target: "_blank" },
];


function Main() {
  return (
    <div className={styles.app}>
      <div className={styles.section}>
        <Profile
          photoProfile={photoProfile}
          name={"Deivid Enrique Mamani Trujillo"}
          cargo={"junior-basic"}
          icons={icons}
        />
      </div>
      <div className={styles.section}>
        <Info
          cards={cards}
        />
      </div>
      <div className={styles.section}>
        <ButtonContainer />
      </div>
      <div className={styles.section}>
        <Work
          portfolio={portfolio}
          skills={skills}
        />
      </div>
      <div className={styles.section}>
        <Galleria
          images={images}
        />
      </div>
    </div>
  );
}

export default Main;
