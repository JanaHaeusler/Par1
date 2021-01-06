import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import FormKeyInfos from '../../app/Form/FormKeyInfos'
import FormScores from '../../app/Form/FormScores'
import scrollUp from '../../lib/scrollUp'
import useFormKeyInfosCreate from '../useFormKeyInfosCreate'
import useFormScoresCreate from '../useFormScoresCreate'

CreatePage.propTypes = {
    newGameProfile: PropTypes.object.isRequired,
    createGameProfile: PropTypes.func.isRequired,
    addGameProfile: PropTypes.func.isRequired,
}

export default function CreatePage({
    newGameProfile,
    createGameProfile,
    addGameProfile }) {
   
    useEffect(() => scrollUp(), [])

    const {
        inputsKeyInfos, 
        isSaveButtonShownKeyInfos,
        updateDirtyInputsKeyInfos,
        handleChangeKeyInfos,
        showErrorMessageKeyInfos,
        handleSubmitKeyInfos,
        handleCancelKeyInfos } = useFormKeyInfosCreate({
                                        createGameProfile,
                                        updateVisibleForm })
    
    const {
        inputsScores, 
        isSaveButtonShownScores,
        updateDirtyInputsScores,
        handleChangeScores,
        showErrorMessageScores,
        handleSubmitScores,
        handleCancelScores } = useFormScoresCreate({
                                        newGameProfile,
                                        addGameProfile,
                                        updateVisibleForm })

    const [visibleForm, setVisibleForm] = useState('keyInfos')

    return (
        <>
            {   visibleForm === 'keyInfos' &&
                <FormKeyInfos 
                    formInputs={inputsKeyInfos} 
                    isSaveButtonShown={isSaveButtonShownKeyInfos}
                    updateDirtyInputs={updateDirtyInputsKeyInfos}
                    handleChange={handleChangeKeyInfos}
                    showErrorMessage={showErrorMessageKeyInfos}
                    handleSubmit={handleSubmitKeyInfos}
                    handleCancel={handleCancelKeyInfos}
                />
            }
            {   visibleForm === 'scores' && Object.keys(newGameProfile).length !== 0 &&
                <FormScores 
                    formInputs={inputsScores}
                    isSaveButtonShown={isSaveButtonShownScores}
                    updateDirtyInputs={updateDirtyInputsScores}
                    handleChange={handleChangeScores}
                    showErrorMessage={showErrorMessageScores}
                    handleSubmit={handleSubmitScores}
                    handleCancel={handleCancelScores}
                />
            }
        </>
    )

    function updateVisibleForm(formName) {
        setVisibleForm(formName)
    }
}