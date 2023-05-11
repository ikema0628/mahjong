import React from "react";
import '../index.css';

function Result({ correctCount, questionCount, restartQuiz }) {
  return (
    <div className="result-section">
      <p className="result-message">
        正解数　{correctCount} / {questionCount}
      </p>
      <button className="restart-button" onClick={restartQuiz}>
      Retry
      </button>
    </div>
  );
}

function Score({ correctCount, questionCount, restartQuiz, showResult }) {
  return (
    <>
      {showResult ? (
        <Result
          correctCount={correctCount}
          questionCount={questionCount}
          restartQuiz={restartQuiz}
        />
      ) : null}
    </>
  );
}

export default Score;




