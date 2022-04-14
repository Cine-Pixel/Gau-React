const Question = ({ question, handler }) => {
  return (
    <div>
      <p>{question["question"]}</p>
      {[...question["incorrect_answers"], question["correct_answer"]].map(
        (ans) => (
          <input
            type="button"
            data-correct={ans === question["correct_answer"]}
            value={ans}
            onClick={handler}
          />
        )
      )}
    </div>
  );
};

export default Question;
