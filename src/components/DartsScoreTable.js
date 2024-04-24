import React, { useState } from 'react';
import PlayerRow from './PlayerRow';

const DartsScoreTable = () => {
    const [players, setPlayers] = useState([
        { id: 1, score: 301, throws: 0, legs: 0 },
        { id: 2, score: 301, throws: 0, legs: 0 },
    ]);

    const updateScoreAndThrows = (playerId, newScore, newThrows) => {
        setPlayers(prevPlayers => {
            const updatedPlayers = prevPlayers.map(player =>
                player.id === playerId ? { ...player, score: newScore, throws: newThrows } : player
            );
            return updatedPlayers;
        });
    };

    const updateLegs = (playerId, newLegs) => {
        setPlayers(players.map(player =>
            player.id === playerId ? { ...player, legs: newLegs, throws: 0, score: 301 } : player
        ));
    };

    const newGame = () => {
        if (window.confirm('Are you sure you want to start a new game?')) {
            setPlayers(players.map(player => ({ ...player, score: 301, throws: 0, legs: 0 })));
        }
    };

    return (
        <>
            <button onClick={newGame}>New Game</button>
            <table>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Legs</th>
                        <th>Score</th>
                        <th>Throws</th>
                        <th>Input Score</th>
                        <th>Submit</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => (
                        <PlayerRow
                            key={player.id}
                            player={player}
                            score={player.score}
                            throws={player.throws}
                            legs={player.legs}
                            updateScoreAndThrows={updateScoreAndThrows}
                            updateLegs={updateLegs}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default DartsScoreTable;