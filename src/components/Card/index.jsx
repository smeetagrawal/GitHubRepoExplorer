import PropTypes from "prop-types";
import styles from "./index.module.css";

const Card = (props) => {
  const { imageUrl, title, description, id } = props;

  return (
    <div className={styles.card} id={id}>
      <div className={styles.cardContent}>
        <img
          src={imageUrl}
          className={styles.cardImage}
          alt="Organization repository"
        />
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
};

export default Card;
