import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import { Button } from 'react-bootstrap';

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

    // Find the lowest score among players
    const lowestScore = Math.min(...players.map(player => player.score));
    const allScoresEqual = players.every(player => player.score === players[0].score);
    
    return (
        <>

            <div id="cards">
                {players.map(player => (
                    <PlayerCard
                    key={player.id}
                    player={player}
                    score={player.score}
                    throws={player.throws}
                    legs={player.legs}
                    updateScoreAndThrows={updateScoreAndThrows}
                    updateLegs={updateLegs}
                    isLowestScore={player.score === lowestScore && !allScoresEqual}
                    />
                ))}
            </div>
            <div id="button-container">
                <Button onClick={newGame}>New Game</Button>
            </div>
        </>
    );
};

export default DartsScoreTable;