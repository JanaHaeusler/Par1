import {useState, useEffect} from 'react'
import saveLocally from '../lib/saveLocally'
import loadLocally from '../lib/loadLocally'
import validateIsNotEmpty from '../components/SaveGamePage/services/validateIsNotEmpty'
import validateIsCorrectDate from '../components/SaveGamePage/services/validateIsCorrectDate'
import validateShotsIsInRange from '../components/SaveGamePage/services/validateShotsIsInRange'

const STORAGE_KEY = 'formInputs'

export default function useForm({
    isEditFormShown, 
    targetProfile, 
    addGameProfile, 
    editGameProfile, 
    cancelEditModus,
    showGameCardsPage}) {

    const [formInputs, setFormInputs] = useState(loadLocally(STORAGE_KEY) ?? {
        location: '',
        date: '',
        players: '',
        winner: '',
        shots: '',
    })

    useEffect(() => saveLocally(STORAGE_KEY, formInputs), [formInputs])

    useEffect(() => setInitialEditInputValues(), [isEditFormShown])

    const validInputs = {
        location: validateIsNotEmpty(formInputs.location),
        date: validateIsCorrectDate(formInputs.date),
        players: validateIsNotEmpty(formInputs.players),
        winner: validateIsNotEmpty(formInputs.winner),
        shots: validateShotsIsInRange(formInputs.shots),
    }

    const showSaveButton = Object.values(validInputs).every(isValid => isValid)

    const [dirtyInputs, setDirtyInputs] = useState({
        location: false,
        date: false,
        players: false,
        winner: false,
        shots: false,
    })

    return {
        formInputs, 
        showSaveButton,
        updateDirtyInputs,
        handleChange,
        showErrorMessage,
        handleSubmit,
        handleCancelEditModus,
        resetForm,
    }

    function handleChange(event) {
        setFormInputs({
            ...formInputs,
            [event.target.name]: event.target.value
        })
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
    
    function handleSubmit(event) {
        event.preventDefault()
        trimInputs(formInputs)
        isEditFormShown ? editGameProfile(formInputs) : addGameProfile(formInputs)
        resetForm()
        showGameCardsPage()
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
        showGameCardsPage()
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