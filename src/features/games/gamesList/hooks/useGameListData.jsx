import { useState, useMemo } from 'react';
import axios from 'axios';

const useGamesListData = () => {
    const [GamesData, setGamesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useMemo(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get('https://127.0.0.1:8000/api/games?page=1');
                setGamesData(response.data['hydra:member']);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchGames();

        return () => {
        };
    }, []);

    return { GamesData, loading, error };
};

export default useGamesListData;
