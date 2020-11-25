    import styled from 'styled-components/macro'
    import PropTypes from 'prop-types'
    import {useState, useEffect} from 'react'
    import saveLocally from '../lib/saveLocally'
    import loadlocally from '../lib/loadLocally'
    import Button from './Button'
    
    SaveGameForm.propTypes = {
        onSubmit: PropTypes.func.isRequired
    }
    
    export default function SaveGameForm({onSubmit}) {
       
        const [formInputs, setFormInput] = useState(loadlocally('formInput') ?? {
            location: '',
            date: '',
            players: '',
            winner: '',
            shots: '',
        })
    
        const [inputErrors, setInputErrors] = useState({
            location: '',
            date: '',
            players: '',
            winner: '',
            shots: '',
        })

        const [formIsValid, setFormIsValid] = useState(false)

        useEffect(() => setFormIsValid(validateForm(formInputs)), [formInputs])
            
        saveLocally('formInput', formInputs)
    
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
                        value={formInputs.location}
                        onChange={handleChange}
                        onBlur={() => validateLocation(formInputs.location)}
                    />
                    <span>{inputErrors.location}</span>
                    <label htmlFor="date">
                        Date
                    </label>
                    <input 
                        type="date" 
                        name="date"
                        id="date"
                        value={formInputs.date}
                        onChange={handleChange}
                        onBlur={() => validateDate(formInputs.date)}
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
                        value={formInputs.players}
                        onChange={handleChange}
                        onBlur={() => validatePlayers(formInputs.players)}
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
                        value={formInputs.winner}
                        onChange={handleChange}
                        onBlur={() => validateWinner(formInputs.winner)}
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
                        value={formInputs.shots}
                        onChange={handleChange}
                        onBlur={(event) => validateShots(event.target.value)}
                    />
                     <span>{inputErrors.shots}</span>
                </InputWrapper>
                <Button disabled={!formIsValid}>&#10003; Save</Button>
                <span>*Please do not clear your browsers cache, in order to permanently save your game details</span>
            </FormWrapper>
        )
    
        function handleChange(event) {
            setFormInput({
                ...formInputs,
                [event.target.name]: event.target.value
            })
        }
       
        function handleSubmit(event) {
            event.preventDefault()
            trimInputs(formInputs)
            onSubmit(formInputs)
            setFormInput({
                location: '',
                date: '',
                players: '',
                winner: '',
                shots:'',
            })
        }

        function trimInputs() {
            setFormInput({
                ...formInputs,
                location: formInputs.location.trim(),
                players: formInputs.players.trim(),
                winner: formInputs.winner.trim(),
                shots: formInputs.shots.trim(),
            })
        }

        function validateForm(formInputs) {
            if (
                validateLocation(formInputs.location) &&
                validateDate(formInputs.date) &&
                validatePlayers(formInputs.Players) &&
                validateWinner(formInputs.Winner) &&
                validateShots(formInputs.shots)
            ) {
                return true
            } else {
                return false
            }
        }
    
        function validateLocation(location) {
            if (location?.trim() === '') {
                const error = `Please fill in location`
                setInputErrors({
                    ...inputErrors,
                    location: error,
                })
                return false
            } else {
                setInputErrors({
                    ...inputErrors,
                    location: ''
                })
                return true
            }
        }
        // ^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$

        function validateDate(date) {
            const regEx = /^\d{4}-\d{2}-\d{2}$/;
            if (date?.trim() === '') {
                const error = `Please choose a date`
                setInputErrors({
                    ...inputErrors,
                    date: error,
                })
                return false
            } else if (!date.match(regEx)) {
                const error = `Please fill in date in the correct format`
                setInputErrors({
                    ...inputErrors,
                    date: error,
                })
                return true
            } else {
                setInputErrors({
                    ...inputErrors,
                    date: ''
                })
                return true
            }
        }

        function validatePlayers(players) {
            if (players?.trim() === '') {
                const error = `Please fill in at least one player`
                setInputErrors({
                    ...inputErrors,
                    players: error,
                })
                return false
            } else {
                setInputErrors({
                    ...inputErrors,
                    players: ''
                })
                return true
            }
        }

        function validateWinner(winner) {
            if (winner?.trim() === '') {
                const error = `Please fill in at least one winner`
                setInputErrors({
                    ...inputErrors,
                    winner: error,
                })
                return false
            } else {
                setInputErrors({
                    ...inputErrors,
                    winner: ''
                })
                return true
            }
        }
        
        function validateShots(shotInput) {
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
    