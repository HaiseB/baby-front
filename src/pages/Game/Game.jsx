import React from 'react';
import { useParams } from 'react-router-dom';
import BreadcrumbBootstrap from '../../ui/Breadcrumb';
import useGameData from '../../features/games/hooks/useGameData';
import ToastDismissable from '../../ui/ToastDismissable';

function GamePage() {
    const { id } = useParams();
    const { gameData, loading, error } = useGameData(id);

    if (loading) {
        return <div>Loading...</div>;
    }

    return <div>
        <BreadcrumbBootstrap parent="Games" item="Game details" />
        {error ? (
            <ToastDismissable status="error" message={error.message} />
        ) : null}
        {gameData && (
            <div>
                <p>id : {gameData.id}</p>
            </div>
        )}
        {/** ToDo form */}
        {/** ToDo games */}
        {/** ToDo teams */}
        {/** ToDo goals */}
    </div>
}

export default GamePage;
