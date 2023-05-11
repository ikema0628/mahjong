import React from "react";
import YakuJokyu from "./YakuJokyu";
import Score from "./Score";

const AnswerYakuJokyu = (props) => {
  const {
    answers,
    correctAnswer,
    selectedAnswer,
    showAnswer,
    setShowAnswer,
    setSelectedAnswer,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    currentQuestionCount,
    correctCount,
    setCorrectCount,
    setShowResult,
    YakuJokyuData,
    showResult
  } = props;

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setShowAnswer(true);
    if (answer === correctAnswer) {
      setCorrectCount(correctCount + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setSelectedAnswer(null);
    if (currentQuestionIndex < YakuJokyuData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
    if (selectedAnswer === correctAnswer) {
      setCorrectCount(correctCount + 1);
    }
    if (currentQuestionIndex === YakuJokyuData.length - 1 && selectedAnswer === correctAnswer) {
      setShowResult(true);
    }
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  return (
    <div className="answer-section">
      {showResult ? (
        <Score
          correctCount={correctCount}
          questionCount={YakuJokyuData.length}
          restartQuiz={() => window.location.reload()}
          showResult={true}
        />
      ) : (
        <>
          {answers.map((answer, index) => (
            <button
              key={index}
              className={`${
                showAnswer && answer === correctAnswer ? "correct-answer selected" : ""
              } ${
                showAnswer && answer !== correctAnswer && selectedAnswer === answer
                  ? "wrong-answer selected"
                  : ""
              } ${selectedAnswer === answer ? "selected" : ""} ${
                showAnswer && answer === correctAnswer ? "correct-answer" : ""
              }`}
              disabled={showAnswer}
              onClick={() => handleAnswerClick(answer)}
            >
              {answer}
            </button>
          ))}
          {showAnswer && (
            <div>
              {selectedAnswer === correctAnswer ? (
                <p className="answer-message correct">正解！</p>
              ) : (
                <p className="answer-message wrong">不正解...</p>
              )}
              <p>正解は「{correctAnswer}」です。</p>
              {currentQuestionIndex === YakuJokyuData.length - 1 ? (
                <button className="next-question" onClick={handleShowResult}>
                  結果
                </button>
              ) : (
                <button className="next-question" onClick={handleNextQuestion}>
                  次の問題へ
                </button>
              )}
              {!showResult && (
                <p className="answer-count">
                {currentQuestionCount} / {YakuJokyuData.length}
                </p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AnswerYakuJokyu;
