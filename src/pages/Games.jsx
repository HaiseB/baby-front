import React from 'react';
import useGamesListData from '../features/games/gamesList/hooks/useGameListData';
import ToastDismissable from '../ui/ToastDismissable';
import GamesTable from '../features/games/gamesList/components/GamesTable';

function Games() {
    const { GamesData, loading, error } = useGamesListData();

    return <div>
        <h1>Games</h1>
        {error ? (
            <ToastDismissable status="error" message={error.message} />
        ) : null}
        {Array.isArray(GamesData) ? (
            <GamesTable games={GamesData} loading={loading} />
        ) : (
            <ToastDismissable status="error" message="Games data is not an array." />
        )}
    </div>;
};

export default Games;
