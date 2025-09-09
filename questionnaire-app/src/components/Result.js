import React from "react";
import { useSelector } from "react-redux";
import styles from "./Result.module.css";

export default function Result() {
  const result = useSelector((state) => state.questionnaire.result);

  if (!result) return null;

  return (
    <div className={styles.resultBox}>
      <h2>Результат:</h2>
      <p>{result}</p>
    </div>
  );
}
