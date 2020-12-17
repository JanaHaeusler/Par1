import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
    validateIsCorrectDate, 
    validateIsNotEmpty, 
    validateShotsIsInRange } from '../app/validators.services'

export default function useFormEdit({
    targetProfile,
    editGameProfile,
    updateTargetProfile }) {
    
    const history = useHistory()

    const [inputsKeyInfos, setInputsKeyInfos] = useState(targetProfile)
    const [inputsScores, setInputsScores] = useState({})
    
    const validInputs = {
        location: validateIsNotEmpty(inputsKeyInfos.location),
        date: validateIsCorrectDate(inputsKeyInfos.date),
        playersString: validateIsNotEmpty(inputsKeyInfos.playersString),
        winner: validateIsNotEmpty(inputsKeyInfos.winner),
        shots: validateShotsIsInRange(inputsKeyInfos.shots),
    }
    const isSaveButtonShown = Object.values(validInputs).every(isValid => isValid)
    
    const [isScoreCardShown, setIsScoreCardShown] = useState(false)
    
    const [dirtyInputs, setDirtyInputs] = useState({
        location: false,
        date: false,
        playersString: false,
        winner: false,
        shots: false,
    })

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

    function showErrorMessage(inputName) {
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
        if (inputName === 'playersString') {
            return dirtyInputs[inputName] && !validInputs[inputName] && errorMessagePlayers
        }
        if (inputName === 'winner' ) {
            return dirtyInputs[inputName] && !validInputs[inputName] && errorMessageWinner
        }
        if (inputName === 'shots') {
            return dirtyInputs[inputName] && !validInputs[inputName] && errorMessageShots
        }
    }

    function handleSubmitKeyInfos(event) {
        event.preventDefault()
        updateTargetProfile(inputsKeyInfos)
        resetFormKeyInfos()
        setIsScoreCardShown(true)
    }

    function handleSubmitScores(event) {
        event.preventDefault()
        editGameProfile(inputsScores)
        resetFormScores() 
        setIsScoreCardShown(false)
        showOverviewPage()
    }

    function handleCancel() {
        resetFormKeyInfos()
        resetFormScores()
        showOverviewPage()
    }

    function resetFormKeyInfos() {
        setInputsKeyInfos({
            location: '',
            date: '',
            playersString: '',
            winner: '',
            shots:'',
        })
        setDirtyInputs({
            location: false,
            date: false,
            playersString: false,
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