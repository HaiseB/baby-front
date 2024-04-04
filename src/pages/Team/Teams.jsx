import React from 'react';
import useTeamsListData from '../../features/teams/teamsList/hooks/useTeamListData';
import ToastDismissable from '../../ui/ToastDismissable';
import TeamsTable from '../../features/teams/teamsList/components/teamsTable';

const Teams = () => {
    const { TeamsData, loading, error } = useTeamsListData();

    return <div>
        <h1>Teams</h1>
        {error ? (
            <ToastDismissable status="error" message={error.message} />
        ) : null}
        {Array.isArray(TeamsData) ? (
            <TeamsTable teams={TeamsData} loading={loading} />
        ) : (
            <ToastDismissable status="error" message="Teams data is not an array." />
        )}
    </div>;
};

export default Teams;