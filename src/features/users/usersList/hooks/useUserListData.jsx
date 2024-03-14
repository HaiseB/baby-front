import { useState, useEffect } from 'react';
import axios from 'axios';

const useUsersListData = () => {
    const [UsersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://127.0.0.1:8000/api/users?page=1');
                setUsersData(response.data['hydra:member']);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchUsers();

        return () => {
        };
    }, []);

    return { UsersData, loading, error };
};

export default useUsersListData;
