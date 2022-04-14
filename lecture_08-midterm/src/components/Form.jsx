import { useContext } from "react";
import { Context } from "../contexts/Context";
import { TYPES } from "../reducers/reducer";

const Form = () => {
  const { state, dispatch } = useContext(Context);

  const getQuestions = async (e) => {
    e.preventDefault();
    dispatch({ type: TYPES.RESET });
    fetch(
      `https://opentdb.com/api.php?amount=${state.questionNumber}&category=${state.category}`
    )
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: TYPES.SET_QUESTIONS, payload: data["results"] })
      )
      .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    dispatch({ type: TYPES.SET_CATEGORY, payload: e.target.value });
  };

  return (
    <div>
      <input
        type="number"
        value={state.questionNumber}
        onChange={(e) =>
          dispatch({
            type: TYPES.SET_QUESTION_NUMBER,
            payload: e.target.value,
          })
        }
      />
      <br />
      <select onChange={handleChange}>
        <option value="20">Mythology</option>
        <option value="24">Politics</option>
      </select>
      <br />
      <button onClick={getQuestions}>Start</button>
    </div>
  );
};

export default Form;
