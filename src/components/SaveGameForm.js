
    import styled from 'styled-components/macro'
    import PropTypes from 'prop-types'
    import {useState} from 'react'
    import saveLocally from '../lib/saveLocally'
    import loadlocally from '../lib/loadLocally'
    import Button from './Button'
    
    SaveGameForm.propTypes = {
        onSubmit: PropTypes.func.isRequired
    }
    
    export default function SaveGameForm({onSubmit}) {
       
        const [formInput, setFormInput] = useState(loadlocally('formInput') ?? {
            location: '',
            date: '',
            players: '',
            winner: '',
            shots:'',
        })
    
        const [inputErrors, setInputErrors] = useState({
            location: '',
            date: '',
            players: '',
            winner: '',
            shots:'',
        })
    
        const [errorMessage, setErrorMessage] = useState('')
    
        saveLocally('formInput', formInput)
    
        return (
            <FormWrapper noValidate onSubmit={handleSubmit}>
                <InputWrapper>
                    <label htmlFor="location">
                        Location
                    </label>
                    <input 
                        type="text" 
                        name="location"
                        id="location"
                        placeholder="Type location ..."
                        value={formInput.location}
                        onChange={handleChange}
                        onBlur={(event) => validateInputsNotEmpty(event)}
                    />
                    <span>{inputErrors.location}</span>
                    <label htmlFor="date">
                        Date
                    </label>
                    <input 
                        type="date" 
                        name="date"
                        id="date"
                        value={formInput.date}
                        onChange={handleChange}
                        onBlur={(event) => validateInputsNotEmpty(event)}
                    />
                     <span>{inputErrors.date}</span>
                    <label htmlFor="players">
                        Player(s)
                    </label>
                    <input 
                        type="text" 
                        name="players"
                        id="players"
                        placeholder="John, Jane"
                        value={formInput.players}
                        onChange={handleChange}
                        onBlur={(event) => validateInputsNotEmpty(event)}
                    />
                     <span>{inputErrors.players}</span>
                    <label htmlFor="winner">
                        Winner(s)
                    </label>
                    <input 
                        type="text" 
                        name="winner"
                        id="winner"
                        placeholder="Jane"
                        value={formInput.winner}
                        onChange={handleChange}
                        onBlur={(event) => validateInputsNotEmpty(event)}
                    />
                     <span>{inputErrors.winner}</span>
                    <label htmlFor="shots">
                        Total Shots Winner(s)
                    </label>
                    <input 
                        type="number"
                        name="shots"
                        id="shots"
                        placeholder="38"
                        value={formInput.shots}
                        onChange={handleChange}
                        onBlur={(event) => validateIsInNumberRange(event.target.value)}
                    />
                     <span>{inputErrors.shots}</span>
                </InputWrapper>
                <ErrorMessage>{errorMessage}</ErrorMessage>
                <Button>&#10003; Save</Button>
                <span>*Please do not clear your browsers cache, in order to permanently save your game details</span>
            </FormWrapper>
        )
    
        function handleChange(event) {
            setFormInput({
                ...formInput,
                [event.target.name]: event.target.value
            })
        }
       
        function handleSubmit(event) {
            event.preventDefault()
            const validation = validateFormOnSubmit(formInput)
            if (validation.isValid) {
                trimInputs(formInput)
                onSubmit(formInput)
                setFormInput({
                    location: '',
                    date: '',
                    players: '',
                    winner: '',
                    shots:'',
                })
                setErrorMessage('')
            } 
            else {
                setInputErrors({
                    location: '',
                    date: '',
                    players: '',
                    winner: '',
                    shots:'',
                })
                setErrorMessage(validation.message)
            }
        }
    
        function validateInputsNotEmpty(event) {
            if (event.target.value.trim() === '') {
                const error = `Please fill in ${event.target.name}`
                setInputErrors({
                    ...inputErrors,
                    [event.target.name]: error,
                })
                return false
            } else {
                setInputErrors({
                    ...inputErrors,
                    [event.target.name]: ''
                })
                return true
            }
        }

        function validateIsInNumberRange(shotInput) {
            if (shotInput < 18) {
                const error = `Please fill in a number greater than 17`
                setInputErrors({
                    ...inputErrors,
                    shots: error,
                })
                return false
            } else if (shotInput > 126) {
                const error = `Please fill in a number less than 127`
                setInputErrors({
                    ...inputErrors,
                    shots: error,
                })
                return false
            } else {
                setInputErrors({
                    ...inputErrors,
                    shots: ''
                })
                return true
            }
        }

        function validateFormOnSubmit(formInput) {
            const filledInputs = validateInputsOnSubmit(formInput)
            const validNumber = validateShotsOnSubmit(formInput)
            const errorMessage = filledInputs.isValid ? (validNumber.isValid ? {isValid: true} : validNumber) : filledInputs
            return  errorMessage
        }
        
        function validateInputsOnSubmit({location, date, players, winner, shots}) {
           const allInputsFilled = location.trim().length > 0 && date.trim().length > 0 && players.trim().length > 0 && winner.trim().length > 0 && shots.trim() > 0
           if (allInputsFilled) {
                return {isValid: true}
            } else {
                return {isValid: false, message: 'Please fill out all input fields.'}
            }
        }

        function validateShotsOnSubmit({shots}) {
            const number = shots > 17 && shots < 127
            if (number) {
                return {isValid: true}
            } else {
                return {isValid: false, message: 'Shots must be a number between 18 and 127'}
            }
        }

        function trimInputs() {
            setFormInput({
                ...formInput,
                location: formInput.location.trim(),
                players: formInput.players.trim(),
                winner: formInput.winner.trim(),
                shots: formInput.shots.trim(),
            })
        }
    }
    
    const FormWrapper = styled.form`
        padding: 0 10px 10px 10px;
        display: grid;
        place-items: center;
        border-radius: 10px;
        box-shadow: 0 0 10px var(--primary-medium);
        background-color: var(--primary-medium);
        color: var(--text-light);
        font-size: 1rem;
    
        Button {
            margin-top: 15px;
            margin-bottom: 5px;
        }
    
        span {
            margin-top: 5px;
            font-size: 0.7rem;
            color: var(--text-dark);
        }
    `
    const ErrorMessage = styled.span`
        margin-top: 5px;
        font-size: 0.7rem;
        color: var(--warning);
    `
    const InputWrapper = styled.fieldset`
        margin: 0;
        padding: 0;
        border: none;
        display: grid;
        width: 100%;
    
        label {
            margin-top: 10px;
            margin-bottom: 5px;
            font-family: 'Raleway', sans-serif;
        }
    
        input {
            padding: 5px;
            border-style: none;
            border-radius: 5px;
            color: var(--primary-dark);
            font-family: 'Montserrat', sans-serif;
        }
    
        span {
            margin-top: 5px;
            font-size: 0.7rem;
            color: var(--text-dark);
        }
    `
    