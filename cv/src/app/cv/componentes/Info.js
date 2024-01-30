
import React from "react";
import Card from "./Card";
import styles from "../style/Info.module.css";

const Info = () => {
  const cards = [
    { title: "1", text: "hours of work experience" },
    { title: "1+", text: "Completed projects" },
    { title: "1+", text: "Satisfied customers" },
  ];

  const generateCard = () => {
    return cards.map((card, index) => (
      <Card
        key={index}
        title={card.title}
        text={card.text}
      />
    ));
  };

  return (
    <div className={styles.info_container}> {/* Fix: Use className */}
      {generateCard()}
    </div>
  );
};

export default Info;
