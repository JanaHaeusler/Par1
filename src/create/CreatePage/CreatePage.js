import PropTypes from 'prop-types'
import { useEffect } from 'react'
import CreateForm from '../CreateForm'
import scrollUp from '../../lib/scrollUp'

CreatePage.propTypes = {
    formInputs: PropTypes.object.isRequired,
    isSaveButtonShown: PropTypes.bool.isRequired,
    isEditFormShown: PropTypes.bool.isRequired,
    updateDirtyInputs: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleChangeScoreInputs: PropTypes.func.isRequired,
    showErrorMessage: PropTypes.func.isRequired,
    handleGameInfoSubmit: PropTypes.func.isRequired,
    handleScoreCardSubmit: PropTypes.func.isRequired,
    handleCancelEditModus: PropTypes.func.isRequired,
}

export default function CreatePage({
    formInputs, 
    isSaveButtonShown,
    isEditFormShown,
    updateDirtyInputs,
    handleChange,
    handleChangeScoreInputs,
    showErrorMessage,
    handleGameInfoSubmit,
    handleScoreCardSubmit,
    handleCancelEditModus}) {
   
    useEffect(() => scrollUp(), [])

    return (
        isEditFormShown ? 
            <CreateForm 
                formInputs={formInputs}
                isSaveButtonShown={isSaveButtonShown}
                isEditFormShown={isEditFormShown}
                updateDirtyInputs={updateDirtyInputs}
                handleChange={handleChange}
                handleChangeScoreInputs={handleChangeScoreInputs}
                showErrorMessage={showErrorMessage}
                handleGameInfoSubmit={handleGameInfoSubmit}
                handleScoreCardSubmit={handleScoreCardSubmit}
                handleCancelEditModus={handleCancelEditModus}/>
        : 
            <CreateForm 
                formInputs={formInputs}
                isSaveButtonShown={isSaveButtonShown}
                updateDirtyInputs={updateDirtyInputs}
                handleChange={handleChange}
                handleChangeScoreInputs={handleChangeScoreInputs}
                showErrorMessage={showErrorMessage}
                handleGameInfoSubmit={handleGameInfoSubmit}
                handleScoreCardSubmit={handleScoreCardSubmit}/>
    )
}