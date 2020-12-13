import PropTypes from 'prop-types'
import { useEffect } from 'react'
import CreateForm from '../CreateForm'
import scrollUp from '../../lib/scrollUp'

CreatePage.propTypes = {
    formInputs: PropTypes.object.isRequired,
    scoreCardInputs: PropTypes.object.isRequired,
    targetProfile: PropTypes.object.isRequired,
    newGameProfile: PropTypes.object.isRequired,
    savedGameProfiles:PropTypes.object.isRequired, 
    isSaveButtonShown: PropTypes.bool.isRequired,
    isEditFormShown: PropTypes.bool.isRequired,
    isScoreCardShown: PropTypes.bool.isRequired,
    updateDirtyInputs: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleChangeScoreInputs: PropTypes.func.isRequired,
    showErrorMessage: PropTypes.func.isRequired,
    createScoreCard: PropTypes.func.isRequired,
    handleGameInfoSubmit: PropTypes.func.isRequired,
    handleScoreCardSubmit: PropTypes.func.isRequired,
    handleCancelEditModus: PropTypes.func.isRequired,
}

export default function CreatePage({
    formInputs, 
    scoreCardInputs,
    targetProfile,
    newGameProfile,
    savedGameProfiles,
    isSaveButtonShown,
    isEditFormShown,
    isScoreCardShown,
    updateDirtyInputs,
    handleChange,
    handleChangeScoreInputs,
    showErrorMessage,
    createScoreCard,
    handleGameInfoSubmit,
    handleScoreCardSubmit,
    handleCancelEditModus}) {
   
    useEffect(() => scrollUp(), [])
    return (
        isEditFormShown ? 
            <CreateForm 
                formInputs={formInputs}
                scoreCardInputs={scoreCardInputs}
                targetProfile={targetProfile}
                newGameProfile={newGameProfile}
                savedGameProfiles={savedGameProfiles}
                isSaveButtonShown={isSaveButtonShown}
                isEditFormShown={isEditFormShown}
                isScoreCardShown={isScoreCardShown}
                updateDirtyInputs={updateDirtyInputs}
                handleChange={handleChange}
                handleChangeScoreInputs={handleChangeScoreInputs}
                showErrorMessage={showErrorMessage}
                createScoreCard={createScoreCard}
                handleGameInfoSubmit={handleGameInfoSubmit}
                handleScoreCardSubmit={handleScoreCardSubmit}
                handleCancelEditModus={handleCancelEditModus}/>
        : 
            <CreateForm 
                formInputs={formInputs}
                scoreCardInputs={scoreCardInputs}
                targetProfile={targetProfile}
                newGameProfile={newGameProfile}
                savedGameProfiles={savedGameProfiles}
                isSaveButtonShown={isSaveButtonShown}
                isScoreCardShown={isScoreCardShown}
                updateDirtyInputs={updateDirtyInputs}
                handleChange={handleChange}
                handleChangeScoreInputs={handleChangeScoreInputs}
                showErrorMessage={showErrorMessage}
                createScoreCard={createScoreCard}
                handleGameInfoSubmit={handleGameInfoSubmit}
                handleScoreCardSubmit={handleScoreCardSubmit}/>
    )
}