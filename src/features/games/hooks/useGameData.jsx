import { useState, useMemo } from 'react';
import axios from 'axios';

const useGameData = (id) => {
    const [gameData, setGameData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useMemo(() => {
        const fetchGameData = async () => {
            try {
                const response = await axios.get(`https://127.0.0.1:8000/api/games/${id}`);
                setGameData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchGameData();

        return () => {
        };
    }, [id]);

    return { gameData, loading, error };
};

export default useGameData;
