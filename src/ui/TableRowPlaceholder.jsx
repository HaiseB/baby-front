import React from 'react';
import { Placeholder } from 'react-bootstrap';

function TableRowPlaceholder({ numberOfRows }) {
    const cells = Array.from({ length: numberOfRows }, (_, index) => (
        <td key={index}>
            <Placeholder animation="glow">
                <Placeholder xs={ index < 1 ? 6 : 12} />
            </Placeholder>
        </td>
    ));

    return <tr>{cells}</tr>;
}

export default TableRowPlaceholder;
