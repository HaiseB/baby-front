import GameForm from '../../features/games/form/gameForm';
import BreadcrumbBootstrap from '../../ui/Breadcrumb';

function CreateGame() {
    return <div>
        <BreadcrumbBootstrap parent="Games" item="Create a new game" />
        <GameForm />
    </div>
}

export default CreateGame;
