import React , { useState }from 'react';
import { Card, Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/PlayerCard.css';

const PlayerCard = ({ player, updateScoreAndThrows, updateLegs, score, throws, legs, isLowestScore }) => {
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
    <Card className={`player-card ${isLowestScore ? 'lowest-score' : ''}`}>
        <Card.Body>
            <Card.Title className={`player-card ${isLowestScore ? 'greenAndItalic' : ''}`}>{player.name}</Card.Title>
            <ListGroup variant="flush">
                <ListGroup.Item>Score: {player.score}</ListGroup.Item>
                <ListGroup.Item>Throws: {player.throws}</ListGroup.Item>
                <ListGroup.Item>Legs: {player.legs}</ListGroup.Item>
            </ListGroup>
            <Card.Text>
                <input type="number" value={inputScore} onChange={e => setInputScore(e.target.value)} placeholder="Enter score" />
            </Card.Text>
                <Button variant="success" onClick={handleSubmit}>Submit</Button>
        </Card.Body>
    </Card>
)};

export default PlayerCard;