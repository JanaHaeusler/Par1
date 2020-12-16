import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import loadLocally from '../lib/loadLocally'
import saveLocally from '../lib/saveLocally'
import {
    validateIsCorrectDate, 
    validateIsNotEmpty, 
    validateShotsIsInRange } from '../validators.services'

const STORAGE_KEY = 'inputsKeyInfos'

export default function useFormEdit({
    targetProfile,
    editGameProfile,
    updateTargetProfile }) {
    
    const history = useHistory()

    const [inputsKeyInfos, setInputsKeyInfos] = useState(loadLocally(STORAGE_KEY) ?? targetProfile)
    const [inputsScores, setInputsScores] = useState({})
    
    const validInputs = {
        location: validateIsNotEmpty(inputsKeyInfos.location),
        date: validateIsCorrectDate(inputsKeyInfos.date),
        players: validateIsNotEmpty(inputsKeyInfos.playersString),
        winner: validateIsNotEmpty(inputsKeyInfos.winner),
        shots: validateShotsIsInRange(inputsKeyInfos.shots),
    }
    const isSaveButtonShown = Object.values(validInputs).every(isValid => isValid)
    
    const [isScoreCardShown, setIsScoreCardShown] = useState(false)
    
    const [dirtyInputs, setDirtyInputs] = useState({
        location: false,
        date: false,
        players: false,
        winner: false,
        shots: false,
    })

    useEffect(() => saveLocally(STORAGE_KEY, inputsKeyInfos), [inputsKeyInfos])
    useEffect(() => setInputsScores(targetProfile), [targetProfile])

    return {
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
        handleCancel,
    }

    function handleChangeKeyInfos(inputName, inputValue) {
        setInputsKeyInfos({
            ...inputsKeyInfos,
            [inputName]: inputValue
        })
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

    function updateDirtyInputsKeyInfos(input) {
        setDirtyInputs({
            ...dirtyInputs,
            [input]: true
        })
    }

    function showErrorMessage(inputField) {
        const errorMessageLocation = `Please fill in location`
        const errorMessageDate = `Please choose a date`
        const errorMessagePlayersWinner = `Please fill in at least one ${inputField}`
        const errorMessageShots = `Please fill in a number between 18 and 126`

        if (inputField === 'location') {
            return dirtyInputs[inputField] && !validInputs[inputField] && errorMessageLocation
        }
        if (inputField === 'date') {
            return dirtyInputs[inputField] && !validInputs[inputField] && errorMessageDate
        }
        if (inputField === 'players' || inputField === 'winner' ) {
            return dirtyInputs[inputField] && !validInputs[inputField] && errorMessagePlayersWinner
        }
        if (inputField === 'shots') {
            return dirtyInputs[inputField] && !validInputs[inputField] && errorMessageShots
        }
    }

    function handleSubmitKeyInfos(event) {
        event.preventDefault()
        trimInputsKeyInfos(inputsKeyInfos)
        updateTargetProfile(inputsKeyInfos)
        resetFormKeyInfos()
        setIsScoreCardShown(true)
    }

    function handleSubmitScores(event) {
        event.preventDefault()
        // trimInputs(inputsScores)
        editGameProfile(inputsScores)
        resetFormScores() 
        setIsScoreCardShown(false)
        showOverviewPage()
    }

    function trimInputsKeyInfos() {
        setInputsKeyInfos({
            ...inputsKeyInfos,
            location: inputsKeyInfos.location.trim(),
            players: inputsKeyInfos.players.trim(),
            winner: inputsKeyInfos.winner.trim(),
            shots: inputsKeyInfos.shots.trim(),
        })
    }

    function handleCancel() {
        resetFormKeyInfos()
        showOverviewPage()
    }

    function resetFormKeyInfos() {
        setInputsKeyInfos({
            location: '',
            date: '',
            players: '',
            winner: '',
            shots:'',
        })
        setDirtyInputs({
            location: false,
            date: false,
            players: false,
            winner: false,
            shots: false,  
        })
    }

    function resetFormScores() {
        setInputsScores({})
    }

    function showOverviewPage() {
        history.push('/')
    }
}