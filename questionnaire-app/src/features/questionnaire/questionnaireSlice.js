import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    { id: 1, text: "Вам нравится программировать?", options: ["Да", "Нет"], answer: null },
    { id: 2, text: "Хотели бы вы работать в IT?", options: ["Да", "Нет"], answer: null },
    { id: 3, text: "Любите ли вы учиться новому?", options: ["Да", "Нет"], answer: null }
  ],
  result: null,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload;
      const question = state.questions.find(q => q.id === questionId);
      if (question) {
        question.answer = answer;
      }
    },
    submitAnswers: (state) => {
      const yesCount = state.questions.filter(q => q.answer === "Да").length;
      state.result = yesCount >= 2 ? "Вы отлично подходите для IT!" : "Может быть, стоит попробовать другое направление.";
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
