import React, { useState } from 'react';

const PlayerRow = ({ player, updateScoreAndThrows, updateLegs, score, throws, legs }) => {
    const [inputScore, setInputScore] = useState('');



    return (
        <tr>
            <td>{`Player ${player.id}`}</td>
            <td>{legs}</td>
            <td>{score}</td>
            <td>{throws}</td>
            <td>
                <input type="number" value={inputScore} onChange={e => setInputScore(e.target.value)} placeholder="Enter score" />
            </td>
        </tr>
    );
};

export default PlayerRow;