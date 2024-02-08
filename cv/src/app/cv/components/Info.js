
import Card from "./Card";
import styles from "../style/Info.module.css";

const Info = ({ cards }) => {

  const generateCard = () => {
    return cards.map((card) => (
      <div key={card.key} className={styles.cardContainer}>
        <Card
          key={card.key}
          title={card.title}
          text={card.text}
        />
      </div>
    ));
  };

  return (
    <div className={styles.infoContainer}> {/* Fix: Use className */}
      {generateCard()}
    </div>
  );
};

export default Info;
