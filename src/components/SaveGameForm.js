import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import saveLocally from '../lib/saveLocally'
import loadlocally from '../lib/loadLocally'
import Button from './Button'

SaveGameForm.propTypes = {
    onSave: PropTypes.func.isRequired
}

export default function SaveGameForm({onSave}) {
   
    const {register, handleSubmit, errors} = useForm({
        mode: "onChange",
        shouldFocusError: true,
      })
      
    const [formInput, setFormInput] = useState(loadlocally('formInput') ?? {
        location: '',
        date: '',
        players: '',
        winner: '',
        shots:'',
    })

    saveLocally('formInput', formInput)

    return (
        <FormWrapper noValidate onSubmit={handleSubmit(onSubmit)}>
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
                    ref={register({required: "Location is required", minLenght: 1})}
                />
                {errors.location && <span>{errors.location.message}</span>}
                <label htmlFor="date">
                    Date
                </label>
                <input 
                    type="date" 
                    name="date"
                    id="date"
                    value={formInput.date}
                    onChange={handleChange}
                    ref={register({required: "Date is required"})}
                />
                {errors.date && <span>{errors.date.message}</span>}
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
                    ref={register({required: "At least one player is required", minLenght: 1})}
                />
                {errors.players && <span>{errors.players.message}</span>}
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
                    ref={register({required: "Winner is required", minLenght: 1})}
                />
                {errors.winner && <span>{errors.winner.message}</span>}
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
                    ref={register(
                        {required: "Pleaser insert a number", 
                        min: {value: 18, message: "Pleaser insert a number greater than 17"}, 
                        max:{value: 126, message: "Pleaser insert a number lower than 127"}
                        }
                    )}
                />
                {errors.shots && <span>{errors.shots.message}</span>}
            </InputWrapper>
            <Button>&#10003; Save</Button>
            <span>*Please do not clear your browsers cache, in order to permanently save your game details</span>
        </FormWrapper>
    )

    function handleChange(event) {
        setFormInput({
            ...formInput,
            [event.target.name]: event.target.value,
        })
    }

    function onSubmit(formData) {
        onSave(formData)
        setFormInput({
                location: '',
                date: '',
                players: '',
                winner: '',
                shots:'',
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
