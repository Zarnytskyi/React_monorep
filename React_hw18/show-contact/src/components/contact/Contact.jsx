import React from "react";
import styles from "./Contact.module.css";

import snapchatLogo from "../../assets/instagram.jpg";
import facebookLogo from "../../assets/facebook.jpg";

const Contacts = () => {
  return (
    <section className={styles.contactsSection}>
      <div className={styles.infoBlock}>
        <h1 className={styles.title}>Контакты</h1>
        <ul className={styles.contactList}>
          <li>Телефон: +38 (050) 123-45-67</li>
          <li>Email: example@mail.com</li>
        </ul>

        <form className={styles.contactForm}>
          <input
            type="email"
            placeholder="Введите вашу почту"
            className={styles.inputField}
          />
          <input
            type="text"
            placeholder="Введите ваше имя"
            className={styles.inputField}
          />
          <input
            type="text"
            placeholder="Ваше сообщение"
            className={styles.inputField}
          />
          <button type="submit" className={styles.submitButton}>
            Отправить
          </button>
        </form>
      </div>

      <div className={styles.socialBlock}>
        <p>Найдите нас на:</p>
        <div className={styles.socialLinks}>
          <a href="https://www.snapchat.com" target="_blank" rel="noreferrer">
            <img src={snapchatLogo} alt="Snapchat" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src={facebookLogo} alt="Facebook" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
