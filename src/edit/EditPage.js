import PropTypes from 'prop-types'
import { useEffect } from 'react'
import scrollUp from '../lib/scrollUp'
import Form from '../app/Form'

EditPage.propTypes = {
    inputsKeyInfos: PropTypes.object.isRequired,
    inputsScores: PropTypes.object.isRequired,
    isSaveButtonShown: PropTypes.bool,
    isScoreCardShown: PropTypes.bool.isRequired,
    updateDirtyInputsKeyInfos: PropTypes.func.isRequired,
    handleChangeKeyInfos: PropTypes.func.isRequired,
    handleChangeScores: PropTypes.func.isRequired,
    showErrorMessage: PropTypes.func.isRequired,
    handleSubmitKeyInfos: PropTypes.func.isRequired,
    handleSubmitScores: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
}

export default function EditPage({
    inputsKeyInfos, 
    inputsScores,
    isSaveButtonShown,
    isScoreCardShown,
    updateDirtyInputsKeyInfos,
    handleChangeKeyInfos,
    handleChangeScores,
    showErrorMessage,
    handleSubmitKeyInfos,
    handleSubmitScores,
    handleCancel }) {
   
    useEffect(() => scrollUp(), [])
    
    return (
            <Form 
                inputsKeyInfos={inputsKeyInfos} 
                inputsScores={inputsScores}
                isSaveButtonShown={isSaveButtonShown}
                isScoreCardShown={isScoreCardShown}
                updateDirtyInputsKeyInfos={updateDirtyInputsKeyInfos}
                handleChangeKeyInfos={handleChangeKeyInfos}
                handleChangeScores={handleChangeScores}
                showErrorMessage={showErrorMessage}
                handleSubmitKeyInfos={handleSubmitKeyInfos}
                handleSubmitScores={handleSubmitScores}
                handleCancel={handleCancel}
            />
    )
}