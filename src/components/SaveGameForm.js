import styled from 'styled-components/macro'
import { v4 as uuid } from 'uuid'
import Button from './Button'
import PropTypes from 'prop-types'

SaveGameForm.propTypes = {
    gameProfile: PropTypes.object,
    setGameProfile: PropTypes.func,
    savedGameProfiles: PropTypes.array,
    setSavedGameProfiles: PropTypes.func,
  }

export default function SaveGameForm({gameProfile, setGameProfile, savedGameProfiles, setSavedGameProfiles}) {
   
    return (
        <FormWrapper onSubmit={handleSubmit}>
            <InputWrapper>
                <label htmlFor="location">
                    Location
                </label>
                <input 
                    type="text" 
                    name="location"
                    id="location"
                    placeholder="Type location ..."
                    value={gameProfile.location}
                    onChange={handleChange}
                />
                <label htmlFor="date">
                    Date
                </label>
                <input 
                    type="date" 
                    name="date"
                    id="date"
                    value={gameProfile.date}
                    onChange={handleChange}
                />
                <label htmlFor="players">
                    Player(s)
                </label>
                <input 
                    type="text" 
                    name="players"
                    id="players"
                    placeholder="John, Jane"
                    value={gameProfile.players}
                    onChange={handleChange}
                />
                <label htmlFor="winner">
                    Winner(s)
                </label>
                <input 
                    type="text" 
                    name="winner"
                    id="winner"
                    placeholder="Jane"
                    value={gameProfile.winner}
                    onChange={handleChange}
                />
                <label htmlFor="shots">
                    Total Shots Winner(s)
                </label>
                <input 
                    type="text"
                    name="shots"
                    id="shots"
                    placeholder="38"
                    value={gameProfile.shots}
                    onChange={handleChange}
                />
            </InputWrapper>
            <Button>&#10003; Save</Button>
        </FormWrapper>
    )


    function handleChange(event) {
        setGameProfile({
            ...gameProfile,
            [event.target.name]: event.target.value,
            _id: uuid()
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setSavedGameProfiles([
            gameProfile,
            ...savedGameProfiles
        ])
        const form = event.target
        setGameProfile({
            location: '',
            date: '',
            players: '',
            winner: '',
            shots:'',
        })
        form.elements.location.focus()
    }

}

const FormWrapper = styled.form`
    padding: 0 10px 10px 10px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    box-shadow: 0 0 10px whitesmoke;
    background-color: var(--primary-medium);
    color: var(--text-light);
    font-size: 1rem;

    Button {
        margin-top: 15px;
        margin-bottom: 5px;
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

`
