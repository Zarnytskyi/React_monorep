import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "../features/quote/quoteSlice";
import styles from "./Quote.module.css";

export default function Quote() {
  const dispatch = useDispatch();
  const { text, author, status, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  const handleNewQuote = () => {
    dispatch(fetchQuote());
  };

  return (
    <div className={styles.quoteBox}>
      {status === "loading" && <p>Загрузка...</p>}
      {status === "failed" && <p className={styles.error}>Ошибка: {error}</p>}
      {status === "succeeded" && (
        <>
          <p className={styles.text}>"{text}"</p>
          <p className={styles.author}>— {author}</p>
        </>
      )}
      <button onClick={handleNewQuote} className={styles.button}>
        Новая цитата
      </button>
    </div>
  );
}
