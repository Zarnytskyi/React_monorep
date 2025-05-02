import React, { useState } from 'react';
import styles from '../style/CitySelector.module.css'

const CitySelector = ({ updateCity }) => {
  const citiesData = [
    {
      name: "Токио",
      description: "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",
      imageUrl: "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",
      facts: [
        "Токио - самый населенный мегаполис в мире.",
        "Здесь расположена самая высокая башня в Японии - Токийская башня.",
        "В Токио проходят множество культурных событий и фестивалей."
      ]
    },
    {
      name: "Киото",
      description: "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами...",
      imageUrl: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663423488_24-mykaleidoscope-ru-p-kioto-stolitsa-yaponii-instagram-25.jpg",
      facts: [
        "В Киото насчитывается более 1600 буддийских храмов.",
        "Этот город был столицей Японии более тысячи лет."
      ]
    },
    {
      name: "Осака",
      description: "Город в центральной части острова Хонсю, известен своими современными достопримечательностями...",
      imageUrl: "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",
      facts: [
        "Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.",
        "Город является кулинарной столицей Японии."
      ]
    },
    {
      name: "Хоккайдо",
      description: "Самый северный остров Японии, известный своей природой, снежными фестивалями и культурой.",
      imageUrl: "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",
      facts: [
        "Хоккайдо — отличное место для зимних видов спорта.",
        "Летом остров привлекает туристов лавандовыми полями."
      ]
    },
    {
      name: "Нагоя",
      description: "Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.",
      imageUrl: "https://www.jalan.net/jalan/images/pict3L/Y1/Y329551/Y329551055.jpg",
      facts: [
        "Нагоя - центр автомобилестроения.",
        "Знаменит своим замком с позолоченными дельфинами."
      ]
    }
  ];

  const handleChange = (event) => {
    const selectedCity = citiesData.find(city => city.name === event.target.value);
    if(selectedCity){
      updateCity(selectedCity)
    }
  };

  return (
    <div className={styles.form}>
      <label className={styles.label}>Выберите город:</label>
      <select className={styles.select} onChange={handleChange} defaultValue=''>
        <option value='' disabled>Выберите город</option>
        {citiesData.map(city => (
          <option key={city.name} value={city.name}>{city.name}</option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
