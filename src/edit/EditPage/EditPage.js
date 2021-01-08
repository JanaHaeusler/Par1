import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import FormKeyInfos from '../../app/Form/FormKeyInfos'
import FormScores from '../../app/Form/FormScores'
import scrollUp from '../../lib/scrollUp'
import useFormKeyInfosEdit from '../useFormKeyInfosEdit'
import useFormScoresEdit from '../useFormScoresEdit'

EditPage.propTypes = {
  targetProfile: PropTypes.object.isRequired,
  updateTargetProfile: PropTypes.func.isRequired,
  editGameProfile: PropTypes.func.isRequired,
}

export default function EditPage({
  targetProfile,
  updateTargetProfile,
  editGameProfile,
}) {
  useEffect(() => scrollUp(), [])

  const {
    inputsKeyInfos,
    isSaveButtonShownKeyInfos,
    updateDirtyInputsKeyInfos,
    handleChangeKeyInfos,
    showErrorMessageKeyInfos,
    handleSubmitKeyInfos,
    handleCancelKeyInfos,
  } = useFormKeyInfosEdit({
    targetProfile,
    updateTargetProfile,
    updateVisibleForm,
  })

  const {
    inputsScores,
    isSaveButtonShownScores,
    updateDirtyInputsScores,
    handleChangeScores,
    showErrorMessageScores,
    handleSubmitScores,
    handleCancelScores,
  } = useFormScoresEdit({
    targetProfile,
    editGameProfile,
    updateVisibleForm,
  })

  const [visibleForm, setVisibleForm] = useState('keyInfos')

  return (
    <>
      {visibleForm === 'keyInfos' && (
        <FormKeyInfos
          formInputs={inputsKeyInfos}
          isSaveButtonShown={isSaveButtonShownKeyInfos}
          updateDirtyInputs={updateDirtyInputsKeyInfos}
          handleChange={handleChangeKeyInfos}
          showErrorMessage={showErrorMessageKeyInfos}
          handleSubmit={handleSubmitKeyInfos}
          handleCancel={handleCancelKeyInfos}
        />
      )}
      {visibleForm === 'scores' && Object.keys(targetProfile).length !== 0 && (
        <FormScores
          formInputs={inputsScores}
          isSaveButtonShown={isSaveButtonShownScores}
          updateDirtyInputs={updateDirtyInputsScores}
          handleChange={handleChangeScores}
          showErrorMessage={showErrorMessageScores}
          handleSubmit={handleSubmitScores}
          handleCancel={handleCancelScores}
        />
      )}
    </>
  )

  function updateVisibleForm(formName) {
    setVisibleForm(formName)
  }
}
