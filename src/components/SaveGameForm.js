import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import useForm from '../hooks/useForm'
import {ReactComponent as Check} from '../assets/check-icon.svg'
import {ReactComponent as Cancel} from '../assets/cancel-icon.svg'
import ButtonPrimary from './Buttons/ButtonPrimary'
import ButtonSecondary from './Buttons/ButtonSecondary'

SaveGameForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isEditFormShown: PropTypes.bool.isRequired,
    targetProfile: PropTypes.object,
    editGameProfile: PropTypes.func,
    cancelEditModus: PropTypes.func
}

export default function SaveGameForm({
    onSubmit, 
    isEditFormShown, 
    targetProfile, 
    editGameProfile, 
    cancelEditModus}) {

    const {
        formInputs, 
        showSaveButton,
        updateDirtyInputs,
        handleChange,
        showErrorMessage,
        handleSubmit,
        handleCancelEditModus} = useForm({
            onSubmit,
            isEditFormShown,
            targetProfile,
            editGameProfile,
            cancelEditModus})

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
                    onBlur={() => updateDirtyInputs('location')}
                />
                </label>
                <span>{showErrorMessage('location')}</span>
                
                <label>
                    Date
                <input 
                    type="date" 
                    name="date"
                    id="date"
                    value={formInputs.date}
                    onChange={handleChange}
                    onBlur={() => updateDirtyInputs('date')}
                />
                </label>
                <span>{showErrorMessage('date')}</span>

                <label>
                    Player(s)
                <input 
                    type="text" 
                    name="players"
                    id="players"
                    placeholder="John, Jane"
                    value={formInputs.players}
                    onChange={handleChange}
                    onBlur={() => updateDirtyInputs('players')}
                />
                </label>
                <span>{showErrorMessage('players')}</span>
                
                <label>
                    Winner(s)
                <input 
                    type="text" 
                    name="winner"
                    id="winner"
                    placeholder="Jane"
                    value={formInputs.winner}
                    onChange={handleChange}
                    onBlur={() => updateDirtyInputs('winner')}
                />
                </label>
                <span>{showErrorMessage('winner')}</span>

                <label>
                    Total Shots Winner(s)
                <input 
                    type="number"
                    name="shots"
                    id="shots"
                    placeholder="38"
                    value={formInputs.shots}
                    onChange={handleChange}
                    onBlur={() => updateDirtyInputs('shots')}
                />
                </label>
                <span>{showErrorMessage('shots')}</span>

            </InputWrapper>
            <ButtonWrapper>
                <ButtonSave disabled={!showSaveButton}><CheckIcon/>Save</ButtonSave>
                {isEditFormShown && <ButtonCancel onClick={handleCancelEditModus}><CancelIcon/>Cancel</ButtonCancel>}
            </ButtonWrapper>
            <span>*Please do not clear your browsers cache, in order to permanently save your game details</span>
        </FormWrapper>
    )
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
const ButtonWrapper = styled.div`
    display: flex;
`
const ButtonSave = styled(ButtonPrimary)`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const CheckIcon = styled(Check)`
    margin-right: 3px;
    width: 24%;
`
const ButtonCancel = styled(ButtonSecondary)`
    margin-left: 20px;
    display: flex;
    align-items: center;
`
const CancelIcon = styled(Cancel)`
    margin-right: 3px;
`