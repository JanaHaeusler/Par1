import PropTypes from 'prop-types'
import SaveGameForm from './SaveGameForm'

SaveGamePage.propTypes = {
    addGameProfile: PropTypes.func.isRequired,
    isEditFormShown: PropTypes.bool,
    targetProfile: PropTypes.object,
    editGameProfile: PropTypes.func,
    cancelEditModus: PropTypes.func,
    switchToGameCardsPage: PropTypes.func.isRequired,
}

export default function SaveGamePage({
    addGameProfile, 
    isEditFormShown, 
    targetProfile, 
    editGameProfile, 
    cancelEditModus,
    switchToGameCardsPage}) {
   
    return(
        isEditFormShown ? 
            <SaveGameForm 
                onSubmit={addGameProfile} 
                isEditFormShown={isEditFormShown} 
                targetProfile={targetProfile} 
                editGameProfile={editGameProfile}
                cancelEditModus={cancelEditModus}
                switchToGameCardsPage={switchToGameCardsPage}/>
        : 
            <SaveGameForm 
                onSubmit={addGameProfile} 
                switchToGameCardsPage={switchToGameCardsPage}/>
    )
}
