import React from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import TableRowPlaceholder from '../../../../ui/TableRowPlaceholder';

function GamesTable({ games, loading }) {
    return <Table striped bordered hover>
        <thead>
            <tr>
                <th>id</th>
                <th>Team A</th>
                <th>Team A Score</th>
                <th>Team B</th>
                <th>Team B Score</th>
                <th>Is over</th>
                <th>Scheduled at</th>
            </tr>
        </thead>
        <tbody>
            {loading ? (
                <TableRowPlaceholder numberOfRows={7} />
            ) : (
                games.map(game => (
                    <tr key={game.id}>
                        <td><Link to={`/game/${game.id}`}>{game.id}</Link></td>
                        <td><Link to={`/game/${game.id}`}>Team A</Link></td>
                        <td><Link to={`/game/${game.id}`}>Team A score</Link></td>
                        <td><Link to={`/game/${game.id}`}>Team B</Link></td>
                        <td><Link to={`/game/${game.id}`}>Team B score</Link></td>
                        <td><Link to={`/game/${game.id}`}>{game.is_over ? "true" : "false" }</Link></td>
                        <td><Link to={`/game/${game.id}`}>{game.scheduled_at}</Link></td>
                    </tr>
                ))
            )}
        </tbody>
    </Table>
}

export default GamesTable;
