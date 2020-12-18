import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import loadLocally from '../lib/loadLocally'
import saveLocally from '../lib/saveLocally'
import {
    validateScoreIsInRange } from '../app/validators.services'

const STORAGE_KEY = 'inputsScoresEdit'

export default function useFormScoresEdit({
    targetProfile,
    editGameProfile,
    updateVisibleForm }) {
    
    const history = useHistory()

    const [inputsScores, setInputsScores] = useState(loadLocally(STORAGE_KEY) ?? targetProfile)
    
    const validInputs = {}

    const isSaveButtonShownScores = Object.values(validInputs).every(isValid => isValid)
    
    const [dirtyInputs, setDirtyInputs] = useState({
       
    })

    useEffect(() => saveLocally(STORAGE_KEY, inputsScores), [inputsScores])
    useEffect(() => setInputsScores(targetProfile), [targetProfile])

    return {
        inputsScores, 
        isSaveButtonShownScores,
        updateDirtyInputsScores,
        handleChangeScores,
        showErrorMessageScores,
        handleSubmitScores,
        handleCancelScores 
    }

    function handleChangeScores(inputName, inputValue) {
        const inputNameSplitted = inputName.split('-')
        const holeName =  inputNameSplitted[0]
        const playerName = inputNameSplitted[1]
        setInputsScores({
            ...inputsScores,
            scores: {
                ...inputsScores.scores, 
                [playerName]: {
                    ...inputsScores.scores[playerName], 
                    [holeName]: inputValue
                }
            }
        })
    }

    function updateDirtyInputsScores() {

    }

    function showErrorMessageScores(inputName) {
        const errorMessageLocation = `Please fill in location`
        const errorMessageDate = `Please choose a date`
        const errorMessagePlayers = `Please fill in at least one player`
        const errorMessageWinner = `Please fill in at least one winner`
        const errorMessageShots = `Please fill in a number between 18 and 126`

        if (inputName === 'location') {
            return dirtyInputs[inputName] && !validInputs[inputName] && errorMessageLocation
        }
        if (inputName === 'date') {
            return dirtyInputs[inputName] && !validInputs[inputName] && errorMessageDate
        }
        if (inputName === 'players') {
            return dirtyInputs[inputName] && !validInputs[inputName] && errorMessagePlayers
        }
        if (inputName === 'winner' ) {
            return dirtyInputs[inputName] && !validInputs[inputName] && errorMessageWinner
        }
        if (inputName === 'shots') {
            return dirtyInputs[inputName] && !validInputs[inputName] && errorMessageShots
        }
    }

    function handleSubmitScores(event) {
        event.preventDefault()
        editGameProfile(inputsScores)
        resetForm() 
        updateVisibleForm('keyInfos')
        showOverviewPage()
    }

    function handleCancelScores() {
        resetForm()
        showOverviewPage()
    }

    function resetForm() {
        setInputsScores(null)
        setDirtyInputs({})
    }

    function showOverviewPage() {
        history.push('/')
    }
}