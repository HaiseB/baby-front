import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BreadcrumbBootstrap from '../../ui/Breadcrumb';
import useUserData from '../../features/users/hooks/useUserData';
import ToastDismissable from '../../ui/ToastDismissable';

function UserPage() {
    const { id } = useParams();
    const { userData, loading, error } = useUserData(id);

    if (loading) {
        return <div>Loading...</div>;
    }

    return <div>
        <BreadcrumbBootstrap parent="Users" item="User details" />
        {error ? (
            <ToastDismissable status="error" message={error.message} />
        ) : null}
        {userData && (
            <div>
                <p>ID : {userData.id}</p>
                <p>Name : {userData.name}</p>
            </div>
        )}
        {/** ToDo form */}
        {/** ToDo games */}
        {/** ToDo teams */}
        {/** ToDo goals */}
    </div>
}

export default UserPage;
