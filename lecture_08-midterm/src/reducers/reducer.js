export const TYPES = {
  SET_QUESTION_NUMBER: "SET_QUESTION_NUMBER",
  SET_QUESTIONS: "SET_QUESTIONS",
  SET_CATEGORY: "SET_CATEOGORY",
  INCREMET_SCORE: "INCREMENT_SCORE",
  RESET: "RESET",
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.SET_QUESTION_NUMBER:
      return { ...state, questionNumber: action.payload };
    case TYPES.SET_QUESTIONS:
      return { ...state, questions: action.payload };
    case TYPES.SET_CATEGORY:
      return { ...state, category: action.payload };
    case TYPES.INCREMET_SCORE:
      return { ...state, score: state.score + 1 };
    case TYPES.RESET:
      return { questions: [], questionNumber: 0, score: 0 };
    default:
      return state;
  }
};

export default reducer;
