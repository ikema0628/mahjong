import React from 'react';

function QType({ setStep }) {
  const handleYakuClick = () => {
    setStep(3); // ステップを3に更新
  };

  const handleYogoClick = () => {
    setStep(3); // ステップを3に更新
  };

  return (
    <div>
      <h1>麻雀クイズ</h1>
      <h2>★★★</h2>
      <div className="button-container">
      <button onClick={handleYakuClick} className="yaku-button">役</button>
      <button onClick={handleYogoClick} className="yogo-button">用語</button>
      </div>
    </div>
  );
}

export default QType;






