import React , { useState }from 'react';
import { Card, Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/PlayerCard.css';

const PlayerCard = ({ player, updateScoreAndThrows, updateLegs, score, throws, legs, isLowestScore, maxLegs, hasTurn }) => {
    const [inputScore, setInputScore] = useState('');

    const handleSubmit = () => {
        const newScore = score - parseInt(inputScore, 10);
        if (isNaN(newScore) || inputScore > 180) {
            alert('Please input a valid score')
        } else if (newScore === 0) {
            if (maxLegs === 1) {
                alert(`${player.name} wins the set!`);
            } else {
                alert(`Player ${player.id} wins the leg!`);
                updateLegs(player.id, legs + 1);
            }
        } else if (newScore < 0) {
            updateScoreAndThrows(player.id, score, throws + 1)
            alert(`${player.name} bust!`);
        } else {
            updateScoreAndThrows(player.id, newScore, throws + 1)
        }
        setInputScore('');
    };
    return (
    <Card className={`player-card ${hasTurn ? 'lowest-score' : ''}`}>
        <Card.Body>
            <Card.Title className={`player-card ${hasTurn ? 'greenAndItalic' : ''}`}>{player.name}</Card.Title>
            <ListGroup variant="flush">
                <ListGroup.Item>Score: {player.score}</ListGroup.Item>
                <ListGroup.Item>Turns: {player.throws}</ListGroup.Item>
                <ListGroup.Item>Legs: {player.legs} / {maxLegs}</ListGroup.Item>
            </ListGroup>
            <Card.Text>
                <input type="number" value={inputScore} onChange={e => setInputScore(e.target.value)} placeholder="Enter score (0 - 180)" />
            </Card.Text>
                <Button variant="success" onClick={handleSubmit}>Submit</Button>
        </Card.Body>
    </Card>
)};

export default PlayerCard;