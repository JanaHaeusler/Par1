import PropTypes from 'prop-types'
import { useEffect } from 'react'
import SaveGameForm from './SaveGameForm'
import setContentToViewPortTop from '../../lib/setContentToViewPortTop'

SaveGamePage.propTypes = {
    addGameProfile: PropTypes.func.isRequired,
    isEditFormShown: PropTypes.bool,
    targetProfile: PropTypes.object,
    editGameProfile: PropTypes.func,
    cancelEditModus: PropTypes.func,
    showGameCardsPage: PropTypes.func.isRequired,
}

export default function SaveGamePage({
    addGameProfile, 
    isEditFormShown, 
    targetProfile, 
    editGameProfile, 
    cancelEditModus,
    showGameCardsPage}) {
   
    useEffect(() => setContentToViewPortTop(), [])

    return (
        isEditFormShown ? 
            <SaveGameForm 
                onSubmit={addGameProfile} 
                isEditFormShown={isEditFormShown} 
                targetProfile={targetProfile} 
                editGameProfile={editGameProfile}
                cancelEditModus={cancelEditModus}
                showGameCardsPage={showGameCardsPage}/>
        : 
            <SaveGameForm 
                onSubmit={addGameProfile} 
                showGameCardsPage={showGameCardsPage}/>
    )
}
