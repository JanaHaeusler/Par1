import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  validateIsCorrectDate,
  validateIsNotEmpty,
  validateShotsIsInRange,
} from '../app/validators.services'
import { saveLocally, loadLocally, removeLocally } from '../lib/localStorage'

const STORAGE_KEY = 'inputsKeyInfosEdit'

export default function useFormKeyInfosEdit({
  targetProfile,
  updateTargetProfile,
  updateVisibleForm,
}) {
  const history = useHistory()

  const [inputsKeyInfos, setInputsKeyInfos] = useState(
    loadLocally(STORAGE_KEY) ?? {
      location: targetProfile.location,
      date: targetProfile.date,
      players: targetProfile.playersString,
      winner: targetProfile.winner,
      shots: targetProfile.shots,
    }
  )

  const validInputs = {
    location: validateIsNotEmpty(inputsKeyInfos.location),
    date: validateIsCorrectDate(inputsKeyInfos.date),
    players: validateIsNotEmpty(inputsKeyInfos.players),
    winner: validateIsNotEmpty(inputsKeyInfos.winner),
    shots: validateShotsIsInRange(inputsKeyInfos.shots),
  }

  const isSaveButtonShownKeyInfos = Object.values(validInputs).every(
    (isValid) => isValid
  )

  const [dirtyInputs, setDirtyInputs] = useState({
    location: false,
    date: false,
    players: false,
    winner: false,
    shots: false,
  })

  useEffect(() => saveLocally(STORAGE_KEY, inputsKeyInfos), [inputsKeyInfos])

  return {
    inputsKeyInfos,
    isSaveButtonShownKeyInfos,
    updateDirtyInputsKeyInfos,
    handleChangeKeyInfos,
    showErrorMessageKeyInfos,
    handleSubmitKeyInfos,
    handleCancelKeyInfos,
    changeDisabledToTrue,
  }

  function handleChangeKeyInfos(inputName, inputValue) {
    setInputsKeyInfos({
      ...inputsKeyInfos,
      [inputName]: inputValue,
    })
  }

  function updateDirtyInputsKeyInfos(inputName) {
    setDirtyInputs({
      ...dirtyInputs,
      [inputName]: true,
    })
  }

  function showErrorMessageKeyInfos(inputName) {
    const errorMessageLocation = `Please fill in location`
    const errorMessageDate = `Please choose a date`
    const errorMessagePlayers = `Please fill in at least one player`
    const errorMessageWinner = `Please fill in at least one winner`
    const errorMessageShots = `Please fill in a number between 18 and 126`

    if (inputName === 'location') {
      return (
        dirtyInputs[inputName] &&
        !validInputs[inputName] &&
        errorMessageLocation
      )
    }
    if (inputName === 'date') {
      return (
        dirtyInputs[inputName] && !validInputs[inputName] && errorMessageDate
      )
    }
    if (inputName === 'players') {
      return (
        dirtyInputs[inputName] && !validInputs[inputName] && errorMessagePlayers
      )
    }
    if (inputName === 'winner') {
      return (
        dirtyInputs[inputName] && !validInputs[inputName] && errorMessageWinner
      )
    }
    if (inputName === 'shots') {
      return (
        dirtyInputs[inputName] && !validInputs[inputName] && errorMessageShots
      )
    }
  }

  function handleSubmitKeyInfos(event) {
    event.preventDefault()
    updateTargetProfile(inputsKeyInfos, targetProfile)
    resetDirtyInputs()
    removeLocally(STORAGE_KEY)
    updateVisibleForm('scores')
  }

  function handleCancelKeyInfos() {
    resetDirtyInputs()
    removeLocally(STORAGE_KEY)
    showOverviewPage()
  }

  function resetDirtyInputs() {
    setDirtyInputs({
      location: false,
      date: false,
      players: false,
      winner: false,
      shots: false,
    })
  }

  function showOverviewPage() {
    history.push('/')
  }

  function changeDisabledToTrue() {
    return true
  }
}
