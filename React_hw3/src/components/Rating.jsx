import React, { useState } from 'react';
import '../style.css';

const ratingList = [
  "https://www.clipartmax.com/middle/m2i8H7A0A0Z5A0K9_5-star-rating-png/",
  'https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png',
  'https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png',
  'https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png'
];


const Rating = () => {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div className="rating">
      <img
        src={ratingList[ratingValue]}
        alt="Rating"
        className="img"
      />
            <div className="btn">
        <button onClick={() => setRatingValue(3)}>Плохо</button>
        <button onClick={() => setRatingValue(2)}>Приемлемо</button>
        <button onClick={() => setRatingValue(1)}>Хорошо</button>
        <button onClick={() => setRatingValue(0)}>Отлично</button>
        <p>Вы выбрали: {ratingValue}</p>
      </div>
    </div>
  );
};

export default Rating;
