import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbBootstrap({ parent, item }) {
    return <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href={`/${parent}`}>{parent}</Breadcrumb.Item>
        <Breadcrumb.Item active>{item}</Breadcrumb.Item>
    </Breadcrumb>
}

export default BreadcrumbBootstrap;
