import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BreadcrumbBootstrap from '../ui/Breadcrumb';
import useUserData from '../features/users/hooks/useUserData';

function UserPage() {
    const { id } = useParams();
    const { userData, loading, error } = useUserData(id);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <BreadcrumbBootstrap />
            {userData && (
                <div>
                    <p>ID : {userData.id}</p>
                    <p>Name : {userData.name}</p>
                </div>
            )}
        </div>
    );
}

export default UserPage;
