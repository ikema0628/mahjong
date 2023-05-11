import React, { useState } from 'react';
import Top from './components/Top';
import QType from './components/QType';
import YakuLevelSelect from './components/YakuLevelSelect';
import YakuShokyu from './components/YakuShokyu';
import YakuJokyu from './components/YakuJokyu';

function App() {
  const [step, setStep] = useState(1); // ステップを管理するstate
  const [questionIndex, setQuestionIndex] = useState(0); // 現在の問題番号を管理するstate

  // ステップに応じて表示するコンポーネントを切り替える関数
  const renderStep = () => {
    switch (step) {
      case 1:
        return <Top setStep={setStep} />;
      case 2:
        return <QType setStep={setStep} />;
      case 3:
        return <YakuLevelSelect setStep={setStep} />;
      case 4:
        return <YakuShokyu setStep={setStep} setQuestionIndex={setQuestionIndex} />;
      case 5:
        return <YakuJokyu setStep={setStep} questionIndex={questionIndex} />;
      default:
        return <Top setStep={setStep} />;
    }
  };

  return <div className="App">{renderStep()}</div>;
}

export default App;







