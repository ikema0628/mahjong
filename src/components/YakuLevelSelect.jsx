import React from 'react';

function YakuLevelSelect({ setStep }) {
  const handleShokyuClick = () => {
    setStep(4);
  };

  const handleJokyuClick = () => {
    setStep(5); // ステップを5に更新
  };

  return (
    <div>
      <h1>麻雀クイズ</h1>
      <h2>★★★</h2>
      <div className="button-container">
  <button onClick={handleShokyuClick} className="easy-button">初級</button>
  <button onClick={handleJokyuClick} className="hard-button">上級</button>
</div>
    </div>
  );
}

export default YakuLevelSelect;












