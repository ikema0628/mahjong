import React from "react";
import Score from "./Score";

const Answer = (props) => {
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
    YakuShokyuData,
    showResult,
  } = props;

  const handleAnswerClick = (event) => {
    setSelectedAnswer(event.target.value);
    setShowAnswer(true);
    if (event.target.value === correctAnswer) {
      setCorrectCount(correctCount + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setSelectedAnswer(null);
    if (currentQuestionIndex < YakuShokyuData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
    if (selectedAnswer === correctAnswer) {
      setCorrectCount(correctCount + 1);
    }
    if (currentQuestionIndex === YakuShokyuData.length - 1 && selectedAnswer === correctAnswer) {
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
          questionCount={YakuShokyuData.length}
          restartQuiz={() => window.location.reload()}
          showResult={true}
        />
      ) : (
        <>
          {answers.map((answer, index) => (
            <div key={index} className="answer-item">
              <input
                type="radio"
                id={`answer-${index}`}
                name="answer"
                value={answer}
                disabled={showAnswer}
                onChange={handleAnswerClick}
                checked={selectedAnswer === answer}
              />
              <label htmlFor={`answer-${index}`}>
                {answer}
              </label>
            </div>
          ))}
          {showAnswer && (
            <div>
              {selectedAnswer === correctAnswer ? (
                <p className="answer-message correct">正解！</p>
              ) : (
                <p className="answer-message wrong">不正解...</p>
              )}
              <p>正解は「{correctAnswer}」です。</p>
              {currentQuestionIndex === YakuShokyuData.length - 1 ? (
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
                  {currentQuestionCount} / {YakuShokyuData.length}
                </p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Answer;
