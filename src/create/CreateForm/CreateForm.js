import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import {CheckIconLight, CancelIconDark} from '../../app/assets/Icons/Icons'
import Button from '../../app/Button'

CreateForm.propTypes = {
    formInputs: PropTypes.object.isRequired,
    isSaveButtonShown: PropTypes.bool,
    isEditFormShown: PropTypes.bool,
    updateDirtyInputs: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    showErrorMessage: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleCancelEditModus: PropTypes.func,
}

export default function CreateForm({
    formInputs, 
    isSaveButtonShown,
    isEditFormShown,
    updateDirtyInputs,
    handleChange,
    showErrorMessage,
    handleSubmit,
    handleCancelEditModus}) {

    return (
        <FormWrapper noValidate onSubmit={handleSubmit} data-testid="form">
            <Fieldset>
                <label>
                    Location
                <input 
                    type="text" 
                    name="location"
                    id="location"
                    placeholder="Type location ..."
                    value={formInputs.location}
                    onChange={(event) => handleChange(event.target.name, event.target.value)}
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
                    onChange={(event) => handleChange(event.target.name, event.target.value)}
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
                    onChange={(event) => handleChange(event.target.name, event.target.value)}
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
                    onChange={(event) => handleChange(event.target.name, event.target.value)}
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
                    onChange={(event) => handleChange(event.target.name, event.target.value)}
                    onBlur={() => updateDirtyInputs('shots')}
                />
                </label>
                <span>{showErrorMessage('shots')}</span>

            </Fieldset>
            <ButtonWrapper>
                <Button main disabled={!isSaveButtonShown} iconComponent={<CheckIconLight/>} text="Save" data-testid="button-save"/>
                {isEditFormShown && <ButtonCancel type="button" onClick={handleCancelEditModus} iconComponent={<CancelIconDark/>} text="Cancel" data-testid="button-cancel"/>}
            </ButtonWrapper>
            <span>*Please do not clear your browsers cache, in order to permanently save your game details</span>
        </FormWrapper>
    )
}

const FormWrapper = styled.form`
    margin: 10px 20px;
    padding: 0 10px 10px 10px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    box-shadow: 0 0 10px var(--primary-medium);
    background-color: var(--text-light);
    color: var(--text-dark);
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
const Fieldset = styled.fieldset`
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
        border-bottom: 1px solid var(--primary-dark);
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
const ButtonCancel = styled(Button)`
    margin-left: 20px;
`