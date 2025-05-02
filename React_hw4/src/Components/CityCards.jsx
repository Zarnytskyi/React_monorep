import styles from '../style/CityCards.module.css';

const CityCards = ({ city }) => {
  return (
    <div className={styles.card}>
      <img src={city.imageUrl} alt={city.name} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{city.name}</h2>
        <p className={styles.description}>{city.description}</p>
        <ul className={styles.facts}>
          {city.facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CityCards;
