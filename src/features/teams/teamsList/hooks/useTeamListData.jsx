import { useState, useEffect } from 'react';
import axios from 'axios';

const useTeamsListData = () => {
    const [TeamsData, setTeamsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get('https://127.0.0.1:8000/api/teams?page=1');
                setTeamsData(response.data['hydra:member']);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchTeams();

        return () => {
        };
    }, []);

    return { TeamsData, loading, error };
};

export default useTeamsListData;
