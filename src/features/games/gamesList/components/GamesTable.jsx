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
                        <td>
                            {Object.values(game.usersAndScoresRecap.teamAPlayers).map((user, i) => {
                                return (<span key={i}>{ i != 0 ? <span> / </span> : null } <Link to={`/user/${user.id}`}>{user.name}</Link></span>)
                            })}
                        </td>
                        <td><Link to={`/game/${game.id}`}>{game.usersAndScoresRecap.teamAScore}</Link></td>
                        <td>
                            {Object.values(game.usersAndScoresRecap.teamBPlayers).map((user, i) => {
                                return (<span key={i}>{ i != 0 ? <span> / </span> : null } <Link to={`/user/${user.id}`}>{user.name}</Link></span>)
                            })}
                        </td>
                        <td><Link to={`/game/${game.id}`}>{game.usersAndScoresRecap.teamBScore}</Link></td>
                        <td><Link to={`/game/${game.id}`}>{game.isOver ? 'True' : 'False'}</Link></td>
                        <td><Link to={`/game/${game.id}`}>{game.scheduled_at}</Link></td>
                    </tr>
                ))
            )}
        </tbody>
    </Table>
}

export default GamesTable;
