import { useState, useEffect } from 'react';
import axios from 'axios';

const useUserData = (id) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`https://127.0.0.1:8000/api/users/${id}`);
                setUserData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchUserData();

        return () => {
        };
    }, [id]);

    return { userData, loading, error };
};

export default useUserData;
