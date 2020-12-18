import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import loadLocally from '../lib/loadLocally'
import saveLocally from '../lib/saveLocally'
import { 
    validateIsCorrectDate, 
    validateIsNotEmpty, 
    validateShotsIsInRange } from '../app/validators.services'

const STORAGE_KEY = 'inputsKeyInfosCreate'

export default function useFormKeyInfosCreate({
    createGameProfile,
    updateVisibleForm }) {
    
    const history = useHistory()

    const [inputsKeyInfos, setInputsKeyInfos] = useState(loadLocally(STORAGE_KEY) ?? 
        {
            location: '',
            date: '',
            players: '',
            winner: '',
            shots: '',
        }
    )
    
    const validInputs = {
        location: validateIsNotEmpty(inputsKeyInfos.location),
        date: validateIsCorrectDate(inputsKeyInfos.date),
        players: validateIsNotEmpty(inputsKeyInfos.players),
        winner: validateIsNotEmpty(inputsKeyInfos.winner),
        shots: validateShotsIsInRange(inputsKeyInfos.shots),
    }
    const isSaveButtonShownKeyInfos = Object.values(validInputs).every(isValid => isValid)
    
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
    }

    function handleChangeKeyInfos(inputName, inputValue) {
        setInputsKeyInfos({
            ...inputsKeyInfos,
            [inputName]: inputValue
        })
    }

    function updateDirtyInputsKeyInfos(inputName) {
        setDirtyInputs({
            ...dirtyInputs,
            [inputName]: true
        })
    }

    function showErrorMessageKeyInfos(inputName) {
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

    function handleSubmitKeyInfos(event) {
        event.preventDefault()
        createGameProfile(inputsKeyInfos)
        resetForm()
        updateVisibleForm('scores')
    }

    function handleCancelKeyInfos() {
        resetForm()
        showOverviewPage()
    }

    function resetForm() {
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

    function showOverviewPage() {
        history.push('/')
    }
}