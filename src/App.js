import React, { useState } from 'react';
import DartsScoreTable from './components/DartsScoreTable';
import Welcome from './components/Welcome';
import './styles/DartsScoreTable.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [game, setGame] = useState('301');

  const startGame = (player1, player2, game) => {
    setPlayer1(player1);
    setPlayer2(player2);
    setGame(game);
    setGameStarted(true);
  };

  const resetGame = () => {
    setGameStarted(false);
    setPlayer1('');
    setPlayer2('');
    setGame('301');
  };

  return (
    <div className="App">
      {gameStarted ? (
        <DartsScoreTable player1={player1} player2={player2} game={game} onResetGame={resetGame}/>
      ) : (
        <Welcome onStartGame={startGame} />
      )}
    </div>
  );
}

export default App;
