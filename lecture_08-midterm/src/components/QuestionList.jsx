import { useContext, useState } from "react";
import { Context } from "../contexts/Context";
import { TYPES } from "../reducers/reducer";
import Question from "./Question";

const QuestionList = () => {
  const { state, dispatch } = useContext(Context);
  const [currentQuestion, setQurrentQuestion] = useState(0);

  const handleAnswer = (e) => {
    e.preventDefault();
    setQurrentQuestion(currentQuestion + 1);
    console.log(e.target.dataset.correct);
    if (e.target.dataset.correct === "true") {
      dispatch({ type: TYPES.INCREMET_SCORE });
    }
  };

  const questions = state.questions.map((question) => (
    <Question question={question} handler={handleAnswer} />
  ));

  return (
    <>
      {currentQuestion < state.questions.length ? (
        questions[currentQuestion]
      ) : (
        <h1>Score - {state.score}</h1>
      )}
    </>
  );
};

export default QuestionList;
