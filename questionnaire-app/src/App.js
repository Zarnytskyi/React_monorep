import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitAnswers } from "./features/questionnaire/questionnaireSlice";
import Question from "./components/Question";
import Result from "./components/Result";

export default function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questions);

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Анкета</h1>
      {questions.map((q) => (
        <Question key={q.id} id={q.id} />
      ))}
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          marginTop: "15px",
          backgroundColor: "#2196f3",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Отправить
      </button>
      <Result />
    </div>
  );
}
