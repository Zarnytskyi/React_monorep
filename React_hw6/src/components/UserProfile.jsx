import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from '../styles/UserProfile.module.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const usersPerPage = 1;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUser(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>Пользователь не найден</p>;
  }

  const totalUsers = user.length;
  const startIndex = (pageNumber - 1) * usersPerPage;
  const users = user.slice(startIndex, startIndex + usersPerPage);

  const handleNext = () => {
    if (pageNumber * usersPerPage < totalUsers) {
      setPageNumber(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (pageNumber > 1) {
      setPageNumber(prev => prev - 1);
    }
  };

  return (
    <div className={style.body}>
  <h2 className={style.title}>Профиль пользователя</h2>
  {users.map((el) => (
    <div key={el.id} className={style.userCard}>
      <p><strong>Имя:</strong> {el.name}</p>
      <p><strong>Email:</strong> {el.email}</p>
      <p><strong>Телефон:</strong> {el.phone}</p>
    </div>
  ))}
  <div className={style.buttons}>
    <button onClick={handlePrev} disabled={pageNumber === 1}>Назад</button>
    <button onClick={handleNext} disabled={pageNumber * usersPerPage >= totalUsers}>Далее</button>
  </div>
</div>

  );
};

export default UserProfile;
