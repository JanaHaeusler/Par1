import PropTypes from 'prop-types'
import { useEffect } from 'react'
import Form from '../../app/Form'
import scrollUp from '../../lib/scrollUp'
import useFormCreate from '../useFormCreate'

CreatePage.propTypes = {
    targetProfile: PropTypes.object.isRequired,
    createGameProfile: PropTypes.func.isRequired,
    addGameProfile: PropTypes.func.isRequired,
}

export default function CreatePage({
    targetProfile,
    createGameProfile,
    addGameProfile }) {
   
    useEffect(() => scrollUp(), [])

    const {
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
        handleCancel } = useFormCreate({
                            targetProfile,
                            createGameProfile,
                            addGameProfile })
    
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