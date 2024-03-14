import React from 'react';
import useUsersListData from '../features/users/usersList/hooks/useUserListData';
import ToastDismissable from '../ui/ToastDismissable';
import UsersTable from '../features/users/usersList/components/UsersTable';

const Users = () => {
    const { UsersData, loading, error } = useUsersListData();

    return <div>
        <h1>Users</h1>
        {error ? (
            <ToastDismissable status="error" message={error.message} />
        ) : null}
        {Array.isArray(UsersData) ? (
            <UsersTable users={UsersData} loading={loading} />
        ) : (
            <ToastDismissable status="error" message="Users data is not an array." />
        )}
    </div>;
};

export default Users;
