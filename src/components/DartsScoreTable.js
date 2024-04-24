import React, { useState } from 'react';
import PlayerRow from './PlayerRow';

const DartsScoreTable = () => {
    const [players, setPlayers] = useState([1, 2]);

    const newGame = () => {
        if (window.confirm('Are you sure you want to start a new game?')) {
            setPlayers([1, 2]);
        }
    };

    return (
        <>
            <h2>Darts 301 Score Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Legs</th>
                        <th>Score</th>
                        <th>Throws</th>
                        <th>Input Score</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => (
                        <PlayerRow key={player} player={player} />
                    ))}
                </tbody>
            </table>
            <button onClick={newGame}>New Game</button>
        </>
    );
};

export default DartsScoreTable;