import React from "react";

function YSMeaning({ selectedAnswer, meanings, handleMeaningClick }) {
  const getMeaning = (meaningKey) => {
    const meaningObj = meanings.find((meaning) => meaning.text === meaningKey);
    return meaningObj ? meaningObj.meaning : null;
  };

  return (
    <div>
      <ul>
        <li onClick={() => handleMeaningClick("鳴き")}>
          <strong>鳴き：</strong>{" "}
          {selectedAnswer === "鳴き" && getMeaning("鳴き")}
        </li>
        <li onClick={() => handleMeaningClick("面前")}>
          <strong>面前：</strong>{" "}
          {selectedAnswer === "面前" && getMeaning("面前")}
        </li>
        <li onClick={() => handleMeaningClick("聴牌")}>
          <strong>聴牌：</strong>{" "}
          {selectedAnswer === "聴牌" && getMeaning("聴牌")}
        </li>
      </ul>
    </div>
  );
}

export default YSMeaning;







