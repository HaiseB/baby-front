import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

export function ToastDismissable({ status, message }) {
    const [show, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!show);

    return <>
        <Toast show={show} onClose={toggleShowA}>
            <Toast.Header>
                <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                />
                <strong className="me-auto">{status}</strong>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    </>;
}

export default ToastDismissable;