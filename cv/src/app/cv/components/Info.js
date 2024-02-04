
import Card from "./Card";
import styles from "../style/Info.module.css";

const Info = ({ cards }) => {

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
