import React, { useState } from "react";
import Answer from "./Answer";

const YakuShokyuData = [  {
  question: "立直の条件は？",
  answers: [
    "リーチ宣告して1000点棒を支払ったうえでアガる、鳴き✖️",
    "面前での聴牌時に、ロンをする、鳴き◎",
    "ツモアガリのみが可能であること、鳴き◎"    ],
  correctAnswer: "リーチ宣告して1000点棒を支払ったうえでアガる、鳴き✖️"
  },
  {
    question: "役牌（風牌・元牌）の条件は？",
    answers: [
      "役牌いずれかがを３枚以上集める、鳴き◎",
      "同じ種類の牌を3つ集める、鳴き✖️",
      "他家からのロン和了で得点を獲得する、鳴き✖️"],
    correctAnswer: "役牌いずれかがを３枚以上集める、鳴き◎"
  },
  {
    question: "門前清自摸和の条件は？",
    answers: [
      "メンツは数字の並び、アタマは役牌以外、両面待ち、鳴き◎",
      "自分でツモった牌でアガる、鳴き✖️",
      "ツモでアガる、鳴き◎" ],
    correctAnswer: "自分でツモった牌でアガる、鳴き✖️"
  },
  {
    question: "断么九の条件は？",
    answers: [
      "萬子・筒子・索子１種類と字牌だけでつくる、鳴き◎",
      "同じ種類の牌を3つ集める、鳴き✖️",
      "数字の２〜８のみでつくる、鳴き◎"    ],
    correctAnswer: "数字の２〜８のみでつくる、鳴き◎"
  },
  {
    question: "平和の条件は？",
    answers: [
      "アタマやメンツは役牌不可、メンツは順子、両面待ち、鳴き✖️",
      "同じ種類の牌を3つ集める、鳴き✖️",
      "他家からのロン和了で得点を獲得する、鳴き◎" ],
    correctAnswer: "アタマやメンツは役牌不可、メンツは順子、両面待ち、鳴き✖️"
  },
  {
    question: "混一色の条件は？",
    answers: [
      "萬子・筒子・索子１種類と字牌だけでつくる、鳴き◎",
      "同じ種類の牌を3つ集める、鳴き✖️",
      "他家からのロン和了で得点を獲得する、鳴き◎"],
    correctAnswer: "萬子・筒子・索子１種類と字牌だけでつくる、鳴き◎"
  },
  {
    question: "清一色の条件は？",
    answers: [
      "同じ種類の牌を3つ集める、鳴き✖️",
      "萬子・筒子・索子で同じ数字の順子をつくる、鳴き◎",
      "萬子・筒子・索子１種類だけでつくる、鳴き◎"    ],
    correctAnswer: "萬子・筒子・索子１種類だけでつくる、鳴き◎"
  },
  {
    question: "七対子の条件は？",
    answers: [
      "メンツは数字の並び、アタマは役牌以外、両面待ち、鳴き✖️",
      "同じ牌を２枚ずつ揃える、鳴き✖️",
      "萬子・筒子・索子１種類と字牌だけでつくる、鳴き✖️" ],
    correctAnswer: "同じ牌を２枚ずつ揃える、鳴き✖️"
  },
  {
    question: "対々和の条件は？",
    answers: [
      "面子を全て刻子で揃える、鳴き◎" ,
      "自分でツモった牌でアガる、鳴き✖️",
      "同じ種類の牌で１２３・４５６・７８９をつくる、鳴き◎"  ],
    correctAnswer: "面子を全て刻子で揃える、鳴き◎"
  },
  {
    question: "一盃口の条件は？",
    answers: [
      "同じ種類の牌を3つ集める、鳴き✖️",
      "同種・同順で順子を２組つくる、鳴き✖️",
      "同じ種類の牌で１２３・４５６・７８９をつくる、鳴き◎" ],
    correctAnswer: "同種・同順で順子を２組つくる、鳴き✖️"
  },
  {
    question: "三暗刻の条件は？",
    answers: [
      "メンツは数字の並び、アタマは役牌以外、両面待ち、鳴き◎",
      "ツモのみで同じ牌３枚を３つ揃える、残り１組は鳴き◎",
      "他家からのロン和了で得点を獲得する、鳴き✖️" ],
    correctAnswer: "ツモのみで同じ牌３枚を３つ揃える、残り１組は鳴き◎"
  },
  {
    question: "一発の条件は？",
    answers: [
      "３回カンしてアガる",
      "１・９に絡んだ牌、字牌だけでつくる",
      "リーチ後、１巡目にアガる"    ],
    correctAnswer: "リーチ後、１巡目にアガる"
  },
];

function YakuShokyu() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const currentQuestion = YakuShokyuData[currentQuestionIndex];


  return (
    <div>
      <h1>{currentQuestion.question}</h1>
      <Answer
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        correctAnswer={currentQuestion.correctAnswer}
        answers={currentQuestion.answers}
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        currentQuestionCount={currentQuestionIndex + 1}
        correctCount={correctCount}
        setCorrectCount={setCorrectCount}
        setShowResult={setShowResult}
        showResult={showResult}
        YakuShokyuData={YakuShokyuData}
      />
    </div>
  );
}

export default YakuShokyu;





