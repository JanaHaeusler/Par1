import { useState, useEffect } from 'react'
import saveLocally from '../lib/saveLocally'
import loadLocally from '../lib/loadLocally'
import { validateIsNotEmpty, validateIsCorrectDate, validateShotsIsInRange } from './validators.services'

const STORAGE_KEY = 'formInputs'

export default function useForm({
    isEditFormShown, 
    targetProfile, 
    addGameProfile, 
    editGameProfile, 
    cancelEditModus,
    showOverviewPage}) {

    const [formInputs, setFormInputs] = useState(
        // loadLocally(STORAGE_KEY) ?? 
    {
        location: '',
        date: '',
        players: '',
        winner: '',
        shots: '',
        scores: {},
    })
    

    // useEffect(() => saveLocally(STORAGE_KEY, formInputs), [formInputs])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setInitialEditInputValues(), [isEditFormShown])

    const validInputs = {
        location: validateIsNotEmpty(formInputs.location),
        date: validateIsCorrectDate(formInputs.date),
        players: validateIsNotEmpty(formInputs.players),
        winner: validateIsNotEmpty(formInputs.winner),
        shots: validateShotsIsInRange(formInputs.shots),
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

    return {
        formInputs, 
        isSaveButtonShown,
        isScoreCardShown,
        updateDirtyInputs,
        handleChange,
        handleChangeScoreInputs,
        showErrorMessage,
        createScoreCard,
        handleGameInfoSubmit,
        handleScoreCardSubmit,
        handleCancelEditModus,
        resetForm,
    }

    function handleChange(inputName, inputValue) {
        setFormInputs({
            ...formInputs,
            [inputName]: inputValue
        })
    }

    function handleChangeScoreInputs(inputName, inputValue) {
        const inputNameSplitted = inputName.split(/(\d+)/)
        const holeName =  inputNameSplitted[0] + inputNameSplitted[1]
        const playerName = inputNameSplitted[2]
        
        
        console.log('HANDLE CHANGE SCORE INPUTS - NAME', inputName)
        console.log('HANDLE CHANGE SCORE INPUTS - VALUE', inputValue)
        console.log('INPUT NAME SPLITTED', inputNameSplitted)
        console.log('HOLE NAME', holeName)
        console.log('PLAYER NAME', playerName)
        

        // setScoreCardInputs(

        // )


        // setFormInputs({
        //     ...formInputs,
        //     scores: {
        //         ...formInputs.scores,
        //         [playerName]: { ...formInputs.scores[playerName], [holeName]: inputValue }
        //     }
        // })
    }

    function updateDirtyInputs(input) {
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

    function createScoreCard() {
        setIsScoreCardShown(true)
    }
     
    function handleGameInfoSubmit(event) {
        event.preventDefault()
        trimInputs(formInputs)
        isEditFormShown ? editGameProfile(formInputs) : addGameProfile(formInputs)
        setIsScoreCardShown(true)
    }

    function handleScoreCardSubmit(event) {
        event.preventDefault()
        trimInputs(formInputs)
        isEditFormShown ? editGameProfile(formInputs) : addGameProfile(formInputs)
        resetForm()
        showOverviewPage()
    }

    function trimInputs() {
        setFormInputs({
            ...formInputs,
            location: formInputs.location.trim(),
            players: formInputs.players.trim(),
            winner: formInputs.winner.trim(),
            shots: formInputs.shots.trim(),
        })
    }

    function setInitialEditInputValues() {
        isEditFormShown &&
        setFormInputs({
            location: targetProfile.location,
            date: targetProfile.date,
            players: targetProfile.players,
            winner: targetProfile.winner,
            shots: targetProfile.shots,
            _id: targetProfile._id,
        }) 
    }

    function handleCancelEditModus() {
        resetForm()
        showOverviewPage()
    }

    function resetForm() {
        setFormInputs({
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
        isEditFormShown && cancelEditModus()
    }
}