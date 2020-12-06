import PropTypes from 'prop-types'
import { useEffect } from 'react'
import SaveGameForm from './SaveGameForm'
import setContentToViewPortTop from '../../lib/setContentToViewPortTop'

SaveGamePage.propTypes = {
    formInputs: PropTypes.object.isRequired,
    showSaveButton: PropTypes.bool.isRequired,
    isEditFormShown: PropTypes.bool,
    updateDirtyInputs: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    showErrorMessage: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleCancelEditModus: PropTypes.func,
}

export default function SaveGamePage({
    formInputs, 
    showSaveButton,
    isEditFormShown,
    updateDirtyInputs,
    handleChange,
    showErrorMessage,
    handleSubmit,
    handleCancelEditModus}) {
   
    useEffect(() => setContentToViewPortTop(), [])

    return (
        isEditFormShown ? 
            <SaveGameForm 
                formInputs={formInputs}
                showSaveButton={showSaveButton}
                isEditFormShown={isEditFormShown}
                updateDirtyInputs={updateDirtyInputs}
                handleChange={handleChange}
                showErrorMessage={showErrorMessage}
                handleSubmit={handleSubmit}
                handleCancelEditModus={handleCancelEditModus}/>
        : 
            <SaveGameForm 
                formInputs={formInputs}
                showSaveButton={showSaveButton}
                updateDirtyInputs={updateDirtyInputs}
                handleChange={handleChange}
                showErrorMessage={showErrorMessage}
                handleSubmit={handleSubmit}/>
    )
}
