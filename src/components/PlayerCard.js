import React , { useState }from 'react';
import { Card } from 'react-bootstrap';
import '../styles/PlayerCard.css';

const PlayerCard = ({ player, updateScoreAndThrows, updateLegs, score, throws, legs, className }) => {
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
    <Card className={className}>
        <Card.Body>
            <Card.Title>Player {player.id}</Card.Title>
            <Card.Text>
                Score: {player.score}
                <br />
                Throws: {player.throws}
                <br />
                Legs: {player.legs}
                <br />
                <input type="number" value={inputScore} onChange={e => setInputScore(e.target.value)} placeholder="Enter score" />
                <button onClick={handleSubmit}>Submit</button>
            </Card.Text>
        </Card.Body>
    </Card>
)};

export default PlayerCard;