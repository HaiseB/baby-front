import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbBootstrap() {
    return <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/Users">User list</Breadcrumb.Item>
        <Breadcrumb.Item active>User Details</Breadcrumb.Item>
    </Breadcrumb>
}

export default BreadcrumbBootstrap;
