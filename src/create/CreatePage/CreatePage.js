import PropTypes from 'prop-types'
import { useEffect } from 'react'
import scrollUp from '../../lib/scrollUp'
import CreateForm from '../CreateForm'

CreatePage.propTypes = {
    formInputs: PropTypes.object.isRequired,
    scoreCardInputs: PropTypes.object.isRequired,
    isSaveButtonShown: PropTypes.bool.isRequired,
    isEditFormShown: PropTypes.bool.isRequired,
    isScoreCardShown: PropTypes.bool.isRequired,
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
    scoreCardInputs,
    isSaveButtonShown,
    isEditFormShown,
    isScoreCardShown,
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
                scoreCardInputs={scoreCardInputs}
                isSaveButtonShown={isSaveButtonShown}
                isEditFormShown={isEditFormShown}
                isScoreCardShown={isScoreCardShown}
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
                scoreCardInputs={scoreCardInputs}
                isSaveButtonShown={isSaveButtonShown}
                isEditFormShown={isEditFormShown}
                isScoreCardShown={isScoreCardShown}
                updateDirtyInputs={updateDirtyInputs}
                handleChange={handleChange}
                handleChangeScoreInputs={handleChangeScoreInputs}
                showErrorMessage={showErrorMessage}
                handleGameInfoSubmit={handleGameInfoSubmit}
                handleScoreCardSubmit={handleScoreCardSubmit}
                handleCancelEditModus={handleCancelEditModus}/>
    )
}