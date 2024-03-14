import React from 'react';
import Table from 'react-bootstrap/Table';
import TableRowPlaceholder from '../../../../ui/TableRowPlaceholder';

function UsersTable({ users, loading }) {
    return <Table striped bordered hover>
        <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Teams</th>
            </tr>
        </thead>
        <tbody>
            {loading ? <TableRowPlaceholder numberOfRows={3} /> : (users.map((user, index) => (
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.Teams}</td>
                </tr>
            )))}
        </tbody>
    </Table>
}

export default UsersTable;
