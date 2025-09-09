import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../features/questionnaire/questionnaireSlice";
import styles from "./Question.module.css";

export default function Question({ id }) {
  const dispatch = useDispatch();
  const question = useSelector((state) =>
    state.questionnaire.questions.find((q) => q.id === id)
  );

  const handleAnswer = (answer) => {
    dispatch(answerQuestion({ questionId: id, answer }));
  };

  return (
    <div className={styles.questionBox}>
      <h3>{question.text}</h3>
      <div className={styles.options}>
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className={question.answer === option ? styles.active : ""}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
