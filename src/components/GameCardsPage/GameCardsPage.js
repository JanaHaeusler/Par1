import PropTypes from 'prop-types'
import GameCardsList from './GameCardsList'
import setContentToViewPortTop from '../../lib/setContentToViewPortTop'

GameCardsPage.propTypes = {
    savedGameProfiles: PropTypes.object.isRequired,
    deleteGameProfile: PropTypes.func.isRequired,
    prepareEditModus: PropTypes.func.isRequired,
    switchToSavedGamePage: PropTypes.func.isRequired,
}

export default function GameCardsPage({savedGameProfiles, deleteGameProfile, prepareEditModus, switchToSavedGamePage}) {
    
    setContentToViewPortTop()

    return (
        <GameCardsList 
            savedGameProfiles={savedGameProfiles} 
            onDelete={deleteGameProfile} 
            onEdit={prepareEditModus}
            switchToSavedGamePage={switchToSavedGamePage}/>
    )
}