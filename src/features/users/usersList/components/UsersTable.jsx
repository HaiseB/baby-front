import React from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import TableRowPlaceholder from '../../../../ui/TableRowPlaceholder';

function UsersTable({ users, loading }) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Teams</th>
                </tr>
            </thead>
            <tbody>
                {loading ? (
                    <TableRowPlaceholder numberOfRows={3} />
                ) : (
                    users.map(user => (
                        <tr key={user.id}>
                            <td><Link to={`/user/${user.id}`}>{user.id}</Link></td>
                            <td><Link to={`/user/${user.id}`}>{user.name}</Link></td>
                            <td><Link to={`/user/${user.id}`}>{user.Teams}</Link></td>
                        </tr>
                    ))
                )}
            </tbody>
        </Table>
    );
}

export default UsersTable;
