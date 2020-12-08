import PropTypes from 'prop-types'
import { useEffect } from 'react'
import CreateForm from '../CreateForm'
import scrollUp from '../../lib/scrollUp'

CreatePage.propTypes = {
    formInputs: PropTypes.object.isRequired,
    showSaveButton: PropTypes.bool.isRequired,
    isEditFormShown: PropTypes.bool.isRequired,
    updateDirtyInputs: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    showErrorMessage: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleCancelEditModus: PropTypes.func.isRequired,
}

export default function CreatePage({
    formInputs, 
    showSaveButton,
    isEditFormShown,
    updateDirtyInputs,
    handleChange,
    showErrorMessage,
    handleSubmit,
    handleCancelEditModus}) {
   
    useEffect(() => scrollUp(), [])

    return (
        isEditFormShown ? 
            <CreateForm 
                formInputs={formInputs}
                showSaveButton={showSaveButton}
                isEditFormShown={isEditFormShown}
                updateDirtyInputs={updateDirtyInputs}
                handleChange={handleChange}
                showErrorMessage={showErrorMessage}
                handleSubmit={handleSubmit}
                handleCancelEditModus={handleCancelEditModus}/>
        : 
            <CreateForm 
                formInputs={formInputs}
                showSaveButton={showSaveButton}
                updateDirtyInputs={updateDirtyInputs}
                handleChange={handleChange}
                showErrorMessage={showErrorMessage}
                handleSubmit={handleSubmit}/>
    )
}
