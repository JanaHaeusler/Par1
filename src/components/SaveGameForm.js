    import styled from 'styled-components/macro'
    import PropTypes from 'prop-types'
    import {useState, useEffect} from 'react'
    import saveLocally from '../lib/saveLocally'
    import loadLocally from '../lib/loadLocally'
    import ButtonPrimary from './ButtonPrimary'
    
    SaveGameForm.propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    const STORAGE_KEY = 'formInputs'
    
    export default function SaveGameForm({onSubmit}) {
       
        const [formInputs, setFormInput] = useState(loadLocally(STORAGE_KEY) ?? {
            location: '',
            date: '',
            players: '',
            winner: '',
            shots: '',
        })

        useEffect(() => saveLocally(STORAGE_KEY, formInputs), [formInputs])

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
    
        return (
            <FormWrapper noValidate onSubmit={handleSubmit}>
                <InputWrapper>
                    <label>
                        Location
                    <input 
                        type="text" 
                        name="location"
                        id="location"
                        placeholder="Type location ..."
                        value={formInputs.location}
                        onChange={handleChange}
                        onBlur={() => setDirtyInputs({
                            ...dirtyInputs,
                            location: true
                        })}
                    />
                    </label>
                    {dirtyInputs.location && !validInputs.location && <span>Please fill in location</span>}
                    
                    <label>
                        Date
                    <input 
                        type="date" 
                        name="date"
                        id="date"
                        value={formInputs.date}
                        onChange={handleChange}
                        onBlur={() => setDirtyInputs({
                            ...dirtyInputs,
                            date: true
                        })}
                    />
                    </label>
                    {dirtyInputs.date && !validInputs.date && <span>Please choose a date</span>}

                    <label>
                        Player(s)
                    <input 
                        type="text" 
                        name="players"
                        id="players"
                        placeholder="John, Jane"
                        value={formInputs.players}
                        onChange={handleChange}
                        onBlur={() => setDirtyInputs({
                            ...dirtyInputs,
                            players: true
                        })}
                    />
                    </label>
                     {dirtyInputs.players && !validInputs.players && <span>Please fill in at least one player</span>}
                    
                    <label>
                        Winner(s)
                    <input 
                        type="text" 
                        name="winner"
                        id="winner"
                        placeholder="Jane"
                        value={formInputs.winner}
                        onChange={handleChange}
                        onBlur={() => setDirtyInputs({
                            ...dirtyInputs,
                            winner: true
                        })}
                    />
                    </label>
                    {dirtyInputs.winner && !validInputs.winner && <span>Please fill in at least one winner</span>}
                    
                    <label>
                        Total Shots Winner(s)
                    <input 
                        type="number"
                        name="shots"
                        id="shots"
                        placeholder="38"
                        value={formInputs.shots}
                        onChange={handleChange}
                        onBlur={() => setDirtyInputs({
                            ...dirtyInputs,
                            shots: true
                        })}
                    />
                    </label>
                    {dirtyInputs.shots && !validInputs.shots && <span>Please fill in a number between 18 and 126</span>}
                </InputWrapper>
                <ButtonPrimary disabled={!showSaveButton}>&#10003; Save</ButtonPrimary>
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
            setDirtyInputs({
                location: false,
                date: false,
                players: false,
                winner: false,
                shots: false,  
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

        function validateIsNotEmpty(input) {
           return  (input?.trim() !== '')
        }
        
        function validateIsCorrectDate(date) {
            const regEx = /^\d{4}-\d{2}-\d{2}$/;
            return (date?.trim() !== '' && date.match(regEx))
        }
        
        function validateShotsIsInRange(shots) {
            return validateIsNotEmpty(shots) && shots >= 18 && shots <= 126
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
            display: block;
            margin-top: 3px;
            padding: 5px;
            width: 100%;
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