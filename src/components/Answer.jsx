import React from "react";
import Score from "./Score";
import hint from "../images/hint.svg";

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
    showHint,
    setShowHint,
    showDetail,
    setShowDetail,
    handleShowDetail,
  } = props;

  const [showQuestion, setShowQuestion] = React.useState(true);


  const handleToggleHint = () => {
    props.setShowHint((prevShowHint) => !prevShowHint);
  };

  const currentQuestion = props.currentQuestion;


  const handleAnswerClick = (event) => {
    setSelectedAnswer(event.target.value);
    setShowAnswer(true);
    setShowHint(false); // ヒントボタンを非表示にする
    if (event.target.value === correctAnswer) {
      setCorrectCount(correctCount + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setSelectedAnswer(null);
    setShowHint(false); // ヒントを非表示にする
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
    setShowQuestion(false);
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
              <label htmlFor={`answer-${index}`}>{answer}</label>
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
  <>
                  <div className="detail-container">
                    <button className="detail-button" onClick={handleShowDetail}>
                      詳細
                    </button>
                    {showDetail && (
                      <div className="detail-content">
                        {currentQuestion.detailimage && (
                          <img
                            src={currentQuestion.detailimage}
                            alt=""
                            className="detail-button"
                          />
                        )}
                      </div>
                    )}
                    <button className="next-question" onClick={handleShowResult}>
                      結果
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <button className="detail-button" onClick={handleShowDetail}>
                    詳細
                  </button>

                  <button className="next-question" onClick={handleNextQuestion}>
                    次の問題へ
                  </button>
                </>
              )}

              {!showResult && (
                <p className="answer-count">
                  {currentQuestionCount} / {YakuShokyuData.length}
                </p>
              )}
            </div>
          )}
          <div className="hint-container">
            <button className="hint-button" onClick={handleToggleHint}>
              <img src={hint} alt="Hint Icon" className="hint-icon" />
            </button>
            {showHint && (
              <div className="hint-content">
                <p>{currentQuestion.hint}</p>
                <p>{currentQuestion.hint2}</p>
                <p>{currentQuestion.hint3}</p>
                {currentQuestion.image && (
                  <img src={currentQuestion.image} alt="" className="image-button" />
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Answer;

