import React from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import TableRowPlaceholder from '../../../../ui/TableRowPlaceholder';

function GamesTable({ games, loading }) {
    return <Table striped bordered hover>
        <thead>
            <tr>
                <th>id</th>
            </tr>
        </thead>
        <tbody>
            {loading ? (
                <TableRowPlaceholder numberOfRows={1} />
            ) : (
                games.map(game => (
                    <tr key={game.id}>
                        <td><Link to={`/game/${game.id}`}>{game.id}</Link></td>
                    </tr>
                ))
            )}
        </tbody>
    </Table>
}

export default GamesTable;
