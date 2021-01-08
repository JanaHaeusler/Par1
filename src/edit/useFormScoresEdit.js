import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { validateScoreIsInRange } from '../app/validators.services'
import { saveLocally, loadLocally, removeLocally } from '../lib/localStorage'

const STORAGE_KEY = 'inputsScoresEdit'

export default function useFormScoresEdit({
  targetProfile,
  editGameProfile,
  updateVisibleForm,
}) {
  const history = useHistory()

  const [inputsScores, setInputsScores] = useState(
    loadLocally(STORAGE_KEY) ?? targetProfile
  )

  const validInputs =
    inputsScores.playersArray && prepareInputValidation(inputsScores)
  const hasAllValidInputs = validInputs && condenseValidInputs()

  const isSaveButtonShownScores = hasAllValidInputs

  const [dirtyInputs, setDirtyInputs] = useState({})
  const hasAllDirtyInputs = dirtyInputs && condenseDirtyInputs()

  useEffect(() => saveLocally(STORAGE_KEY, inputsScores), [inputsScores])

  useEffect(() => {
    setInputsScores(targetProfile)
    prepareInputValidation(targetProfile)
    prepareDirtyInputs(targetProfile)
  }, [targetProfile])

  return {
    inputsScores,
    isSaveButtonShownScores,
    updateDirtyInputsScores,
    handleChangeScores,
    showErrorMessageScores,
    handleSubmitScores,
    handleCancelScores,
  }

  function handleChangeScores(inputName, inputValue) {
    const inputNameSplitted = inputName.split('-')
    const holeName = inputNameSplitted[0]
    const playerName = inputNameSplitted[1]
    setInputsScores({
      ...inputsScores,
      scores: {
        ...inputsScores.scores,
        [playerName]: {
          ...inputsScores.scores[playerName],
          [holeName]: inputValue,
        },
      },
    })
  }

  function prepareInputValidation(inputsScores) {
    const preparedInputs = inputsScores.playersArray?.reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: {
          hole1: validateScoreIsInRange(inputsScores.scores[cur].hole1),
          hole2: validateScoreIsInRange(inputsScores.scores[cur].hole2),
          hole3: validateScoreIsInRange(inputsScores.scores[cur].hole3),
          hole4: validateScoreIsInRange(inputsScores.scores[cur].hole4),
          hole5: validateScoreIsInRange(inputsScores.scores[cur].hole5),
          hole6: validateScoreIsInRange(inputsScores.scores[cur].hole6),
          hole7: validateScoreIsInRange(inputsScores.scores[cur].hole7),
          hole8: validateScoreIsInRange(inputsScores.scores[cur].hole8),
          hole9: validateScoreIsInRange(inputsScores.scores[cur].hole9),
          hole10: validateScoreIsInRange(inputsScores.scores[cur].hole10),
          hole11: validateScoreIsInRange(inputsScores.scores[cur].hole11),
          hole12: validateScoreIsInRange(inputsScores.scores[cur].hole12),
          hole13: validateScoreIsInRange(inputsScores.scores[cur].hole13),
          hole14: validateScoreIsInRange(inputsScores.scores[cur].hole14),
          hole15: validateScoreIsInRange(inputsScores.scores[cur].hole15),
          hole16: validateScoreIsInRange(inputsScores.scores[cur].hole16),
          hole17: validateScoreIsInRange(inputsScores.scores[cur].hole17),
          hole18: validateScoreIsInRange(inputsScores.scores[cur].hole18),
        },
      }),
      {}
    )
    return preparedInputs
  }

  function condenseValidInputs() {
    const allValidInputs = Object.values(validInputs)
      .map((singlePlayerInputs) => Object.values(singlePlayerInputs))
      .reduce((acc, cur) => [...acc, ...cur], [])

    return allValidInputs.every((isValid) => isValid)
  }

  function prepareDirtyInputs(newGameProfile) {
    const dirtyInputs = newGameProfile.playersArray?.reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: {
          hole1: false,
          hole2: false,
          hole3: false,
          hole4: false,
          hole5: false,
          hole6: false,
          hole7: false,
          hole8: false,
          hole9: false,
          hole10: false,
          hole11: false,
          hole12: false,
          hole13: false,
          hole14: false,
          hole15: false,
          hole16: false,
          hole17: false,
          hole18: false,
        },
      }),
      {}
    )
    setDirtyInputs(dirtyInputs)
  }

  function updateDirtyInputsScores(inputName) {
    const inputNameSplitted = inputName.split('-')
    const holeName = inputNameSplitted[0]
    const playerName = inputNameSplitted[1]
    setDirtyInputs({
      ...dirtyInputs,
      [playerName]: {
        ...dirtyInputs[playerName],
        [holeName]: true,
      },
    })
  }

  function condenseDirtyInputs() {
    const allDirtyInputs = Object.values(dirtyInputs)
      .map((singlePlayerValues) => Object.values(singlePlayerValues))
      .reduce((acc, cur) => [...acc, ...cur], [])

    return allDirtyInputs.every((isValid) => isValid)
  }

  function showErrorMessageScores() {
    const errorMessage = `Please fill in numbers between 1 and 7`
    return hasAllDirtyInputs && !hasAllValidInputs && errorMessage
  }

  function handleSubmitScores(event) {
    event.preventDefault()
    editGameProfile(inputsScores)
    resetDirtyInputs()
    removeLocally(STORAGE_KEY)
    updateVisibleForm('keyInfos')
    showOverviewPage()
  }

  function handleCancelScores() {
    resetDirtyInputs()
    removeLocally(STORAGE_KEY)
    showOverviewPage()
  }

  function resetDirtyInputs() {
    setDirtyInputs({})
  }

  function showOverviewPage() {
    history.push('/')
  }
}
