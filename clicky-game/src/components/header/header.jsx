import React from 'react';

const Header = ({ restartGame }) => (
  <div className="grid-header-container">
    <div className="justify-left"> Can You Match The Numbers?</div>
    <div className="justify-center game-status-text"></div>
    <div className="justify-end">
      <button onClick={restartGame} className="restart-button">Restart Game</button>
    </div>
  </div>
);

export default Header;