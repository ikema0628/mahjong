import React, { useState } from "react";
import Answer from "./Answer";
import chiitoitsu from "../images/chiitoitsu.jpg";
import yakuhai from "../images/yakuhai.jpg";
import tanyaochu from "../images/tanyaochu.jpg";
import pinfu from "../images/pinfu.jpg";
import honitsu from "../images/honitsu.jpg";
import chinitsu from "../images/chinitsu.jpg";
import toitoi from "../images/toitoi.jpg";
import ipeko from "../images/ipeko.jpg";
import sananko from "../images/sananko.jpg";
import ippatu from "../images/ippatu.jpg";
import richi from "../images/richi.webp";

const YakuShokyuData = [
  {
    question: "立直の条件は？",
    answers: [
      "同じ種類の牌を3つ集める、鳴き✖️",
      "聴牌時に「リーチ」と宣言し、1000点棒を出す、鳴き✖️",
      "メンツは数字の並び、アタマは役牌以外、両面待ち、鳴き◎"
    ],
    correctAnswer: "聴牌時に「リーチ」と宣言し、1000点棒を出す、鳴き✖️",
    hint: "鳴き：他の人が捨てた牌をもらって、自分の面子を揃えること（順子・刻子・槓子）",
    hint2: "聴牌(テンパイ)：アガリに必要な牌が残り1枚となった状態",
    hint3: "両面待ち(リャンメン)：聴牌時に塔子の両端が待ちとなっている状態",
    detailImage: richi,
    image: tanyaochu
  },
  {
    question: "役牌（風牌・元牌）の条件は？",
    answers: [
      "役牌いずれかがを３枚以上集める、鳴き◎",
      "同じ種類の牌を3つ集める、鳴き✖️",
      "他家からのロン和了で得点を獲得する、鳴き✖️"],
    correctAnswer: "役牌いずれかがを３枚以上集める、鳴き◎",
    hint: "鳴き：他の人が捨てた牌をもらって、自分の面子を揃えること（順子・刻子・槓子）",
    detailImage:richi,
    image:tanyaochu
  },
  {
    question: "門前清自摸和の条件は？",
    answers: [
      "メンツは数字の並び、アタマは役牌以外、両面待ち、鳴き◎",
      "自分でツモった牌でアガる、鳴き✖️",
      "ツモでアガる、鳴き◎" ],
    correctAnswer: "自分でツモった牌でアガる、鳴き✖️",
    hint: "鳴き：他の人が捨てた牌をもらって、自分の面子を揃えること（順子・刻子・槓子）",
    detailImage:richi,
    image:tanyaochu
  },
  {
    question: "断么九の条件は？",
    answers: [
      "萬子・筒子・索子１種類と字牌だけでつくる、鳴き◎",
      "同じ種類の牌を3つ集める、鳴き✖️",
      "数字の２〜８のみでつくる、鳴き◎"    ],
    correctAnswer: "数字の２〜８のみでつくる、鳴き◎",
    hint: "鳴き：他の人が捨てた牌をもらって、自分の面子を揃えること（順子・刻子・槓子）",
    detailImage:richi,
    image:tanyaochu
  },
  {
    question: "平和の条件は？",
    answers: [
      "アタマやメンツは役牌不可、メンツは順子、両面待ち、鳴き✖️",
      "同じ種類の牌を3つ集める、鳴き✖️",
      "他家からのロン和了で得点を獲得する、鳴き◎" ],
    correctAnswer: "アタマやメンツは役牌不可、メンツは順子、両面待ち、鳴き✖️",
    hint: "鳴き：他の人が捨てた牌をもらって、自分の面子を揃えること（順子・刻子・槓子）",
    image:pinfu,
    detailImage:richi
  },
  {
    question: "混一色の条件は？",
    answers: [
      "萬子・筒子・索子１種類と字牌だけでつくる、鳴き◎",
      "同じ種類の牌を3つ集める、鳴き✖️",
      "他家からのロン和了で得点を獲得する、鳴き◎"],
    correctAnswer: "萬子・筒子・索子１種類と字牌だけでつくる、鳴き◎",
    hint: "鳴き：他の人が捨てた牌をもらって、自分の面子を揃えること（順子・刻子・槓子）",
    image:honitsu,
    detailImage:richi
  },
  {
    question: "清一色の条件は？",
    answers: [
      "同じ種類の牌を3つ集める、鳴き✖️",
      "萬子・筒子・索子で同じ数字の順子をつくる、鳴き◎",
      "萬子・筒子・索子１種類だけでつくる、鳴き◎"    ],
    correctAnswer: "萬子・筒子・索子１種類だけでつくる、鳴き◎",
    hint: "鳴き：他の人が捨てた牌をもらって、自分の面子を揃えること（順子・刻子・槓子）",
    image:chinitsu,
    detailImage:richi
  },
  {
    question: "七対子の条件は？",
    answers: [
      "メンツは数字の並び、アタマは役牌以外、両面待ち、鳴き✖️",
      "同じ牌を２枚ずつ揃える、鳴き✖️",
      "萬子・筒子・索子１種類と字牌だけでつくる、鳴き✖️" ],
    correctAnswer: "同じ牌を２枚ずつ揃える、鳴き✖️",
    hint: "鳴き：他の人が捨てた牌をもらって、自分の面子を揃えること（順子・刻子・槓子）",
    image:chiitoitsu,
    detailImage:richi
  },
  {
    question: "対々和の条件は？",
    answers: [
      "面子を全て刻子で揃える、鳴き◎" ,
      "自分でツモった牌でアガる、鳴き✖️",
      "同じ種類の牌で１２３・４５６・７８９をつくる、鳴き◎"  ],
    correctAnswer: "面子を全て刻子で揃える、鳴き◎",
    hint: "鳴き：他の人が捨てた牌をもらって、自分の面子を揃えること（順子・刻子・槓子）",
    image:toitoi,
    detailImage:richi
  },
  {
    question: "一盃口の条件は？",
    answers: [
      "同じ種類の牌を3つ集める、鳴き✖️",
      "同種・同順で順子を２組つくる、鳴き✖️",
      "同じ種類の牌で１２３・４５６・７８９をつくる、鳴き◎" ],
    correctAnswer: "同種・同順で順子を２組つくる、鳴き✖️",
    hint: "鳴き：他の人が捨てた牌をもらって、自分の面子を揃えること（順子・刻子・槓子）",
    image:ipeko,
    detailImage:richi
  },
  {
    question: "三暗刻の条件は？",
    answers: [
      "メンツは数字の並び、アタマは役牌以外、両面待ち、鳴き◎",
      "ツモのみで同じ牌３枚を３つ揃える、残り１組は鳴き◎",
      "他家からのロン和了で得点を獲得する、鳴き✖️" ],
    correctAnswer: "ツモのみで同じ牌３枚を３つ揃える、残り１組は鳴き◎",
    hint: "鳴き：他の人が捨てた牌をもらって、自分の面子を揃えること（順子・刻子・槓子）",
    image:sananko,
    detailImage:richi
  },
  {
    question: "一発の条件は？",
    answers: [
      "３回カンしてアガる",
      "１・９に絡んだ牌、字牌だけでつくる",
      "リーチ後、１巡目にアガる"    ],
    correctAnswer: "リーチ後、１巡目にアガる",
    hint: "鳴き：他の人が捨てた牌をもらって、自分の面子を揃えること（順子・刻子・槓子）",
    image:ippatu,
    detailImage:richi
  },
];

const YakuShokyu = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showHint, setShowHint] = useState(false); // ヒントの表示状態を管理するstate
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const handleShowDetail = () => {
    setShowDetail(true);
  };

  const currentQuestion = YakuShokyuData[currentQuestionIndex];

  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
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
        showHint={showHint}
        currentQuestion={currentQuestion}
        setShowHint={setShowHint}
        showDetail={showDetail}
        setShowDetail={setShowDetail}
        handleShowDetail={handleShowDetail}
      />
    </div>
  );
}

export default YakuShokyu;



