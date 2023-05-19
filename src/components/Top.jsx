import React from 'react';
import azaraSvg from '../images/azara.svg';
import '../index.css';

function Top({ setStep }) {
  const handleStartClick = () => {
    setStep(2); // ステップを2に更新
  };

  return (
    <div>
      <h1>麻雀クイズ</h1>
      <img src={azaraSvg} alt="Azara" className="responsive-image" />
      <button onClick={handleStartClick} className="start-button">Start</button>
    </div>
  );
}

export default Top;










