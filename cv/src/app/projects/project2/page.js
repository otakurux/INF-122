
"use client"

import styles from './page.module.css';
import Button from './components/Button';
import Accountant from './components/Accountant';

import { useState } from 'react';

function App() {
  const [nroClicks, setNroClicks] = useState(0);
  const [show, setShow] = useState(true);

  const onClick = () => {
    setNroClicks(nroClicks + 1);
    console.log("click");
  }

  const onReboot = () => {
    setNroClicks(0);
    console.log("Reboot");
  }

  const onSubtractThree = () => {
    setNroClicks(nroClicks - 3);
    console.log("Reboot");
  }

  const onSubtractOne = () => {
    setNroClicks(nroClicks - 1);
    console.log("Reboot");
  }

  const onAddThree = () => {
    setNroClicks(nroClicks + 3);
    console.log("Reboot");
  }

  const onAddOne = () => {
    setNroClicks(nroClicks + 1);
    console.log("Reboot");
  }

  const onShow = () => {
    setShow(!show);
  }

  return (
    <div className={styles.main}>
      <div className={styles.containerMain}>
        <Accountant nroClicks={nroClicks} show={show} />
        <div className={styles.buttonsContainer}>
          <div className={styles.buttonsOnClick}>
            <div className={styles.container}></div>
            <Button
              text="-3"
              esButtonClick={true}
              functionClick={onSubtractThree}
            />
            <Button
              text="+3"
              esButtonClick={true}
              functionClick={onAddThree}
            />
            <Button
              text="-1"
              esButtonClick={true}
              functionClick={onSubtractOne}
            />
            <Button
              text="+1"
              esButtonClick={true}
              functionClick={onAddOne}
            />
          </div>
          <div className={styles.buttonsOnClick}>
            <Button
              text="reboot"
              esButtonClick={false}
              functionClick={onReboot}
            />
            <Button
              text="show"
              esButtonClick={false}
              functionClick={onShow}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


// react challenges