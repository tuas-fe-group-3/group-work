import React, { useState } from 'react';

const PlayerRow = ({ player, updateScore }) => {
    const [score, setScore] = useState(301);
    const [throws, setThrows] = useState(0);
    const [legs, setLegs] = useState(0);
    const [inputScore, setInputScore] = useState('');

    const handleSubmit = () => {
        const newScore = score - inputScore;
        if (newScore === 0) {
            alert(`Player ${player} wins the leg!`);
            setLegs(legs + 1);
            setScore(301);
        } else if (newScore < 0) {
            alert(`Invalid score! Player ${player} cannot go below 0.`);
        } else {
            setScore(newScore);
        }
        setThrows(throws + 1);
        setInputScore('');
    };

    return (
        <tr>
            <td>{`Player ${player}`}</td>
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