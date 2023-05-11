import React, { useState } from "react";
import AnswerYakuJokyu from "./AnswerYakuJokyu";

const YakuJokyuData = [
  {
    question: "三色同順の条件は？",
    answers: [
      "同じ種類の牌を3つ集める、鳴き✖️",
      "萬子・筒子・索子それぞれで同じ数字の順子をつくる、鳴き◎",
      "役牌いずれかを３枚以上集める、鳴き◎"   ],
    correctAnswer: "萬子・筒子・索子それぞれで同じ数字の順子をつくる、鳴き◎"
  },
  {
    question: "一気通貫の条件は？",
    answers: [
      "萬子・筒子・索子１種類と字牌だけでつくる、鳴き✖️",
      "１・９に絡んだ牌、字牌だけでつくる、鳴き◎",
      "同じ種類の牌で１２３・４５６・７８９をつくる、鳴き◎" ],
    correctAnswer: "同じ種類の牌で１２３・４５６・７８９をつくる、鳴き◎"
  },
  {
    question: "二盃口の条件は？",
    answers: [
      "萬子・筒子・索子１種類と字牌だけでつくる、鳴き◎",
      "同じ種類の牌を3つ集める、鳴き◎",
      "同種・同順の順子を４組つくる、鳴き✖️" ],
    correctAnswer: "同種・同順の順子を４組つくる、鳴き✖️"
  },
  {
    question: "混全帯么九の条件は？",
    answers: [
      "同じ種類の牌を3つ集める、鳴き✖️",
      "１・９に絡んだ牌、字牌だけでつくる、鳴き◎",
      "萬子・筒子・索子１種類だけでつくる、鳴き◎"    ],
    correctAnswer: "１・９に絡んだ牌、字牌だけでつくる、鳴き◎"
  },
  {
    question: "純全帯么九の条件は？",
    answers: [
      "１・９に絡んだ牌だけでつくる、鳴き◎",
      "自分で積もった牌でアガる、鳴き✖️",
      "同じ種類の牌で１２３・４５６・７８９をつくる、鳴き◎" ],
    correctAnswer: "１・９に絡んだ牌だけでつくる、鳴き◎"
  },
  {
    question: "小三元の条件は？",
    answers: [
      "アタマ以外、同じ牌を２枚揃える、鳴き◎",
      "自分で積もった牌でアガる、鳴き✖️",
      "白發中いずれかをアタマにして、残る風牌を３枚ずつ揃える、鳴き◎" ],
    correctAnswer: "白發中いずれかをアタマにして、残る風牌を３枚ずつ揃える、鳴き◎"
  },
  {
    question: "三色同刻の条件は？",
    answers: [
      "同じ牌３枚を３つ揃える、鳴き◎",
      "萬子・筒子・索子で同じ数字の順子を３組つくる、鳴き◎",
      "同じ種類の牌で１２３・４５６・７８９をつくる、鳴き◎" ],
    correctAnswer: "萬子・筒子・索子で同じ数字の順子を３組つくる、鳴き◎"
  },
  {
    question: "混老頭の条件は？",
    answers: [
      "萬子・筒子・索子１種類と字牌だけでつくる、鳴き◎",
      "同じ種類の牌を3つ集める、鳴き✖️",
      "１・９、字牌だけで七対子か対々和をつくる、鳴き◎" ],
    correctAnswer: "１・９、字牌だけで七対子か対々和をつくる、鳴き◎"
  },
  {
    question: "三槓子の条件は？",
    answers: [
      "３回カンしてアガる、鳴き◎",
      "１・９に絡んだ牌、字牌だけでつくる、鳴き✖️",
      "萬子・筒子・索子１種類だけでつくる、鳴き◎"    ],
    correctAnswer: "３回カンしてアガる、鳴き◎"
  },
  {
    question: "国士無双の条件は？",
    answers: [
      "１・９に絡んだ牌だけでつくる、鳴き✖️",
      "１・９・字牌を全種類揃え、いずれか１つをアタマにする、鳴き✖️",
      "同じ種類の牌で１２３・４５６・７８９をつくる、鳴き◎" ],
    correctAnswer: "１・９・字牌を全種類揃え、いずれか１つをアタマにする、鳴き✖️"
  },
  {
    question: "四暗刻の条件は？",
    answers: [
      "ツモで同じ牌３枚を４つ揃える、鳴き✖️",
      "ツモで同じ牌３枚を３つ揃える、鳴き✖️",
      "メンツは数字の並び、アタマは役牌以外、両面待ち、鳴き◎" ],
    correctAnswer: "ツモで同じ牌３枚を４つ揃える、鳴き✖️"
  },
  {
    question: "大三元の条件は？",
    answers: [
      "アタマ以外、同じ牌を２枚揃える、鳴き◎",
      "自分で積もった牌でアガる、鳴き✖️",
      "白發中を３枚ずつ揃える、鳴き◎" ],
    correctAnswer: "白發中を３枚ずつ揃える、鳴き◎"
  },
  {
    question: "小四喜の条件は？",
    answers: [
      "同じ牌３枚を４つ揃える、鳴き✖️",
      "萬子・筒子・索子で同じ数字の牌を３枚ずつ揃える、鳴き◎",
      "風牌でアタマ・残りを刻子で揃える、他は何でもいい、鳴き◎" ],
    correctAnswer: "風牌でアタマ・残りを刻子で揃える、他は何でもいい、鳴き◎"
  },
  {
    question: "大四喜の条件は？",
    answers: [
      "萬子・筒子・索子１種類と字牌だけでつくる、鳴き✖️",
      "同じ種類の牌を3つ集める、鳴き◎",
      "風牌全てを刻子で揃える、鳴き◎"
    ],
    correctAnswer: "風牌全てを刻子で揃える、鳴き◎"
  },
  {
    question: "九蓮宝燈の条件は？",
    answers: [
      "３回カンしてアガる、鳴き◎",
      "１・９に絡んだ牌、字牌だけでつくる、鳴き✖️",
      "１種で、１１１２３４５６７８９９９ + 同種の数牌をアタマにする、鳴き✖️"  ],
    correctAnswer: "１種で、１１１２３４５６７８９９９ + 同種の数牌をアタマにする、鳴き✖️"
  },
  {
    question: "緑一色の条件は？",
    answers: [
      "１・９に絡んだ牌だけでつくる、鳴き✖️",
      "索子２３４６８、發のみでつくる、鳴き◎",
      "同じ種類の牌で１２３・４５６・７８９をつくる、鳴き◎" ],
    correctAnswer: "索子２３４６８、發のみでつくる、鳴き◎"
  },
  {
    question: "字一色の条件は？",
    answers: [
      "１・９に絡んだ牌だけでつくる、鳴き✖️",
      "字牌のみでつくる、鳴き◎",
      "同じ種類の牌で１２３・４５６・７８９をつくる、鳴き◎" ],
    correctAnswer: "字牌のみでつくる、鳴き◎"
  },
  {
    question: "清老頭の条件は？",
    answers: [
      "同じ牌３枚を４つ揃える、鳴き✖️",
      "１・９だけで揃える、鳴き◎",
      "他家からのロン和了で得点を獲得する、鳴き✖️" ],
    correctAnswer: "１・９だけで揃える、鳴き◎"
  },
  {
    question: "天和の条件は？",
    answers: [
      "親が配牌時点でテンパイし、第一ツモでアガる、鳴き◎",
      "自分で積もった牌でアガる、鳴き◎",
      "親限定、最初１４枚の配牌でアガっている、鳴き✖️" ],
    correctAnswer: "親限定、最初１４枚の配牌でアガっている、鳴き✖️"
  },
  {
    question: "地和の条件は？",
    answers: [
      "子が最初のツモでアガる、鳴き✖️",
      "萬子・筒子・索子で同じ数字の牌を３枚ずつ揃える、鳴き✖️",
      "風牌でアタマ・３面子を揃える、他は何でもいい、鳴き◎" ],
    correctAnswer: "子が最初のツモでアガる、鳴き✖️"
  },
  {
    question: "四槓子の条件は？",
    answers: [
      "萬子・筒子・索子１種類と字牌だけでつくる、鳴き✖️",
      "槓子を４つ揃える、鳴き◎",
      "風牌それぞれ３枚揃える、他は何でもいい、鳴き◎" ],
    correctAnswer: "槓子を４つ揃える、鳴き◎"
  },
  {
    question: "ダブル立直の条件は？",
    answers: [
      "１巡目に鳴いて立直する",
      "誰も鳴いていない状態で、１巡目に立直する",
      "他家が鳴いた状態で、立直後に１巡目にアガる" ],
    correctAnswer: "誰も鳴いていない状態で、１巡目に立直する"
  },
  {
    question: "海底摸月の条件は？",
    answers: [
      "アタマ以外、同じ牌を２枚揃える、鳴き✖️",
      "局の最後にツモアガり、鳴き✖️",
      "局の最後にツモアガり、鳴き◎" ],
    correctAnswer: "局の最後にツモアガり、鳴き◎"
  },
  {
    question: "河底撈魚の条件は？",
    answers: [
      "子が最初のツモでアガる、鳴き◎",
      "局の最後にロンでアガる、鳴き◎",
      "風牌でアタマ・３面子を揃える、他は何でもいい、鳴き✖️" ],
    correctAnswer: "局の最後にロンでアガる、鳴き◎"
  },
  {
    question: "嶺上開花の条件は？",
    answers: [
      "萬子・筒子・索子１種類と字牌だけでつくる、鳴き◎",
      "槓子を４つ揃える、鳴き✖️",
      "槓を行い、不足した牌の補充でアガる、鳴き◎"
    ],
    correctAnswer: "槓を行い、不足した牌の補充でアガる、鳴き◎"
  },
  {
    question: "槍槓の条件は？",
    answers: [
      "他家が加槓した牌でアガる、鳴き◎",
      "槓子を４つ揃える、鳴き✖️",
      "リーチ後、槓子でアガる、鳴き◎"    ],
    correctAnswer: "他家が加槓した牌でアガる、鳴き◎"
  },
];

function YakuJokyu() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const currentQuestion = YakuJokyuData[currentQuestionIndex];

  return (
    <div>
      <h1>{currentQuestion.question}</h1>
      <AnswerYakuJokyu
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
        YakuJokyuData={YakuJokyuData}
      />
    </div>
  );
}

export default YakuJokyu;





