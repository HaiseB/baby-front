import React from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import TableRowPlaceholder from '../../../../ui/TableRowPlaceholder';

function TeamsTable({ teams, loading }) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Users</th>
                    <th>Number of matches</th>
                </tr>
            </thead>
            <tbody>
                {loading ? (
                    <TableRowPlaceholder numberOfRows={4} />
                ) : (
                    teams.map(team => (
                        <tr key={team.id}>
                            <td><Link to={`/team/${team.id}`}>{team.id}</Link></td>
                            <td><Link to={`/team/${team.id}`}>{team.name}</Link></td>
                            <td><Link to={`/team/${team.id}`}>{Object.values(team.usernames).map((username, i) => {
                                return <span key={i}>{ i != 0 ? <span> / </span> : null } {username}</span>
                            })}</Link></td>
                            <td><Link to={`/team/${team.id}`}>{team.games.length}</Link></td>
                        </tr>
                    ))
                )}
            </tbody>
        </Table>
    );
}

export default TeamsTable;
