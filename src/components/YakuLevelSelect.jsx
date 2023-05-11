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
      <h1>Mahjong Quiz</h1>
      <h2>Select the level</h2>
      <div className="button-container">
  <button onClick={handleShokyuClick} className="easy-button">easy</button>
  <button onClick={handleJokyuClick} className="hard-button">hard</button>
</div>
    </div>
  );
}

export default YakuLevelSelect;












