import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


const Welcome = ({ onStartGame }) => {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [game, setGame] = useState('301');

    const startGame = () => {
        onStartGame(player1, player2, game);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-6">
                <h1>Welcome to Darts!</h1>
                    <div className="form-group mb-3">
                        <label htmlFor="player1">Type first player name</label>
                        <input type="text" className="form-control" id="player1" placeholder="Player 1 name" value={player1} onChange={e => setPlayer1(e.target.value)} />
                    </div>
                    <div className="form-group  mb-3">
                        <label htmlFor="player2">Type second player name</label>
                        <input type="text" className="form-control" id="player2" placeholder="Player 2 name" value={player2} onChange={e => setPlayer2(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="game">Select the Game</label>
                        <select className="form-control" id="game" value={game} onChange={e => setGame(e.target.value)}>
                            <option value="301">301</option>
                            <option value="501">501</option>
                        </select>
                    </div>
                    <Button onClick={startGame}>Start Game</Button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;