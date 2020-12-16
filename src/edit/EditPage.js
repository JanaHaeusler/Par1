import PropTypes from 'prop-types'
import { useEffect } from 'react'
import Form from '../app/Form'
import scrollUp from '../lib/scrollUp'
import useFormEdit from './useFormEdit'

EditPage.propTypes = {
    targetProfile: PropTypes.object.isRequired,
    editGameProfile: PropTypes.func.isRequired,
    updateTargetProfile: PropTypes.func.isRequired,
}

export default function EditPage({
    targetProfile,
    editGameProfile,
    updateTargetProfile }) {
   
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
        handleCancel } = useFormEdit({
                            targetProfile,
                            editGameProfile,
                            updateTargetProfile })
    
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