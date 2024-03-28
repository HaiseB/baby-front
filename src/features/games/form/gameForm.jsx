import React, { useState, useMemo } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function GameForm() {
    const [error, setError] = useState(null);

    const [teams, setTeams] = useState([]);
    const [users, setUsers] = useState([]);
    const [teamAUsers, setTeamAUsers] = useState([]);
    const [teamBUsers, setTeamBUsers] = useState([]);
    const [gameData, setGameData] = useState({
        roundNumber: 0,
        isOver: false,
        teams: [],
        goals: [],
        users: [],
        scheduledAt: new Date().toISOString().substring(0, 16),
    });

    useMemo(() => {
        axios.get('https://127.0.0.1:8000/api/teams')
            .then(response => {
                setTeams(response.data['hydra:member']);
            })
            .catch(error => {
                console.error('Error fetching teams:', error);
            });

        axios.get('https://127.0.0.1:8000/api/users')
            .then(response => {
                setUsers(response.data['hydra:member']);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'teamA-users') {
            setTeamAUsers(prevState => ({
                ...prevState,
                [name]: value
            }));
        } else if (name === 'teamB-users') {
            setTeamBUsers(prevState => ({
                ...prevState,
                [name]: value
            }));
        }

        setGameData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const apiUsersResource = [];

        Object.values(teamAUsers).forEach(id => {
            apiUsersResource.push('api/users/' + id)
        });

        Object.values(teamBUsers).forEach(id => {
            apiUsersResource.push('api/users/' + id)
        });

        setGameData(prevState => ({
            ...prevState,
            users: apiUsersResource
        }));

        axios.post('https://127.0.0.1:8000/api/games', gameData, {
            headers: {
                'Accept': "application/ld+json",
                'Content-Type': "application/ld+json",
            }
        })
            .then(response => {
                console.log('Game created successfully:', response.data);

                if ( response.data && response.data.users.length > 0) {
                    // TODO axios post for goals
                }
            })
            .catch(error => {
                setError(error);
            });
    };

    return (
        <>
            {error && (
                <Alert key='danger' variant='danger'>
                    Error creating game: {error.message}
                </Alert>
            )}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="roundNumber">
                    <Form.Label>Round Number:</Form.Label>
                    <Form.Control type="number" name="roundNumber" value={gameData.roundNumber} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group controlId="scheduledAt">
                    <Form.Label>Scheduled At:</Form.Label>
                    <Form.Control type="datetime-local" name="scheduledAt" value={gameData.scheduledAt} onChange={handleInputChange} />
                </Form.Group>

                <h2 className='mt-2'>Team A</h2>
                <div>
                    <div key={`inline-radio`} className="mb-3">
                        <Form.Check
                            inline
                            label="Duo"
                            name="teamA-mode-radio"
                            type="radio"
                            id={`teamA-mode-radio-1`}
                            onChange={handleInputChange}
                            value="duo"
                        />
                        <Form.Check
                            inline
                            label="Solo"
                            name="teamA-mode-radio"
                            type="radio"
                            id={`teamA-mode-radio-2`}
                            onChange={handleInputChange}
                            value="solo"
                            defaultChecked="true"
                        />
                    </div>
                    {gameData['teamA-mode-radio'] === 'duo' ? (
                        // Sélection de l'équipe pour le mode Duo
                        <Form.Group controlId="teamA-duo">
                            <Form.Label>Select Duo Team:</Form.Label>
                            <Form.Control as="select" value={gameData.teams[0]} onChange={handleInputChange}>
                                {teams.map(team => (
                                    <option key={team.id} value={team.id}>{team.name}</option>
                                ))}
                            </Form.Control>
                            {/* Générer les champs de buts pour chaque utilisateur */}
                            {/*gameData.teams[0].users.map((user, index) => (
                            <Form.Group controlId={`teamA-duo-goals-${index}`} key={`teamA-duo-goals-${index}`}>
                                <Form.Label>Number of Goals for {user.name}:</Form.Label>
                                <Form.Control type="number" name={`teamA-duo-goals-${index}`} value={gameData.goals[index]} onChange={handleInputChange} />
                            </Form.Group>
                        ))*/}
                        </Form.Group>
                    ) : (
                        // Sélection du joueur pour le mode Solo
                        <Form.Group controlId="teamA-solo">
                            <Form.Label>Select Solo Player:</Form.Label>
                            <Form.Control as="select" name="teamA-users" onChange={handleInputChange}>
                                <option key='default' value='default'>Choose a User</option>
                                {users.map(user => (
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                ))}
                            </Form.Control>
                            <Form.Group controlId="teamA-user-goals">
                                <Form.Label>Number of Goals:</Form.Label>
                                <Form.Control type="number" name="teamA-goals" value={gameData.goals[0]} onChange={handleInputChange} />
                            </Form.Group>
                        </Form.Group>
                    )}
                </div>

                <h2 className='mt-2'>Team B</h2>
                <div>
                    <div key={`inline-radio`} className="mb-3">
                        <Form.Check
                            inline
                            label="Duo"
                            name="teamB-mode-radio"
                            type="radio"
                            id={`teamB-mode-radio-1`}
                            onChange={handleInputChange}
                            value="duo"
                        />
                        <Form.Check
                            inline
                            label="Solo"
                            name="teamB-mode-radio"
                            type="radio"
                            id={`teamB-mode-radio-2`}
                            onChange={handleInputChange}
                            value="solo"
                            defaultChecked="true"
                        />
                    </div>
                    {gameData['teamB-mode-radio'] === 'duo' ? (
                        <Form.Group controlId="teamB-duo">
                            <Form.Label>Select Duo Team:</Form.Label>
                            <Form.Control as="select" value={gameData.teams[1]} onChange={handleInputChange}>
                                {teams.map(team => (
                                    <option key={team.id} value={team.id}>{team.name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    ) : (
                        <Form.Group controlId="teamB-solo">
                            <Form.Label>Select Solo Player:</Form.Label>
                            <Form.Control as="select" name="teamB-users" onChange={handleInputChange}>
                                <option key='default' value='default'>Choose a User</option>
                                {users.map(user => (
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                ))}
                            </Form.Control>
                            {/* Nombre de buts inscrits */}
                            <Form.Group controlId="teamB-goals">
                                <Form.Label>Number of Goals:</Form.Label>
                                <Form.Control type="number" name="teamB-goals" value={gameData.goals[1]} onChange={handleInputChange} />
                            </Form.Group>
                        </Form.Group>
                    )}
                </div>
                <Button variant="success" type="submit" className='mt-2'>Save</Button>
            </Form>
        </>
    );
}

export default GameForm;
