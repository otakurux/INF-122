
import Card from "./Card";
import styles from "../style/Info.module.css";

const Info = ({ cards }) => {

  const generateCard = () => {
    return cards.map((card, index) => (
      <div className={styles.cardContainer}>
        <Card
          key={index}
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
