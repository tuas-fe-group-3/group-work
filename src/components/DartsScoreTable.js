import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import { Button } from 'react-bootstrap';

const DartsScoreTable = ({ player1, player2, game, onResetGame }) => {
    const [players, setPlayers] = useState([
        { id: 1, name: player1, score: game, throws: 0, legs: 0 },
        { id: 2, name: player2, score: game, throws: 0, legs: 0 },
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
            player.id === playerId ? { ...player, legs: newLegs, throws: 0, score: game } : player
        ));
    };

    const newGame = () => {
        if (window.confirm('Are you sure you want to start a new game?')) {
            setPlayers(players.map(player => ({ ...player, score: game, throws: 0, legs: 0 })));
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
                <Button variant="warning" onClick={newGame}>Restart the same game</Button>
                <Button variant="danger" onClick={onResetGame}>Start New Game</Button>
            </div>
        </>
    );
};

export default DartsScoreTable;