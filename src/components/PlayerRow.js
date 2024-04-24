import React, { useState } from 'react';

const PlayerRow = ({ player, updateScoreAndThrows, updateLegs, score, throws, legs }) => {
    const [inputScore, setInputScore] = useState('');

    const handleSubmit = () => {
        const newScore = score - parseInt(inputScore, 10);
        if (newScore === 0) {
            alert(`Player ${player.id} wins the leg!`);
            updateLegs(player.id, legs + 1);
        } else if (newScore < 0) {
            updateScoreAndThrows(player.id, score, throws + 1)
            alert(`Invalid score! Player ${player.id} cannot go below 0.`);
        } else {
            updateScoreAndThrows(player.id, newScore, throws + 1)
        }
        setInputScore('');
    };

    return (
        <tr>
            <td>{`Player ${player.id}`}</td>
            <td>{legs}</td>
            <td>{score}</td>
            <td>{throws}</td>
            <td>
                <input type="number" value={inputScore} onChange={e => setInputScore(e.target.value)} placeholder="Enter score" />
            </td>
            <td>
                <button onClick={handleSubmit}>Submit</button>
            </td>
        </tr>
    );
};

export default PlayerRow;