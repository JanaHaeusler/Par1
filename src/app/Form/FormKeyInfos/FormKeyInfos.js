import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../../Button'
import { CancelIconDark, CheckIconLight } from '../../Icons/Icons'

FormKeyInfos.propTypes = {
  formInputs: PropTypes.object.isRequired,
  isSaveButtonShown: PropTypes.bool.isRequired,
  updateDirtyInputs: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  showErrorMessage: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
}

export default function FormKeyInfos({
  formInputs,
  isSaveButtonShown,
  updateDirtyInputs,
  handleChange,
  showErrorMessage,
  handleSubmit,
  handleCancel,
}) {
  return (
    <Form noValidate onSubmit={handleSubmit} data-testid="form">
      <h3>Info</h3>
      <KeyInfos>
        <label>
          Location
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Type location ..."
            value={formInputs.location}
            onChange={(event) =>
              handleChange(event.target.name, event.target.value)
            }
            onBlur={() => updateDirtyInputs('location')}
          />
        </label>
        <Note>{showErrorMessage('location')}</Note>

        <label>
          Date
          <input
            type="date"
            name="date"
            id="date"
            value={formInputs.date}
            onChange={(event) =>
              handleChange(event.target.name, event.target.value)
            }
            onBlur={() => updateDirtyInputs('date')}
          />
        </label>
        <Note>{showErrorMessage('date')}</Note>

        <label>
          Player(s)
          <input
            type="text"
            name="players"
            id="players"
            placeholder="John, Jane"
            value={formInputs.players}
            onChange={(event) =>
              handleChange(event.target.name, event.target.value)
            }
            onBlur={() => updateDirtyInputs('players')}
          />
        </label>
        <Note>{showErrorMessage('players')}</Note>

        <label>
          Winner(s)
          <input
            type="text"
            name="winner"
            id="winner"
            placeholder="Jane"
            value={formInputs.winner}
            onChange={(event) =>
              handleChange(event.target.name, event.target.value)
            }
            onBlur={() => updateDirtyInputs('winner')}
          />
        </label>
        <Note>{showErrorMessage('winner')}</Note>

        <label>
          Total Shots Winner(s)
          <input
            type="number"
            name="shots"
            id="shots"
            placeholder="38"
            value={formInputs.shots}
            onChange={(event) =>
              handleChange(event.target.name, event.target.value)
            }
            onBlur={() => updateDirtyInputs('shots')}
          />
        </label>
        <Note>{showErrorMessage('shots')}</Note>
      </KeyInfos>
      <ButtonWrapper>
        <Button
          type="button"
          onClick={handleCancel}
          iconComponent={<CancelIconDark />}
          text="Cancel"
          data-testid="button-cancel"
        />
        <Button
          main
          disabled={!isSaveButtonShown}
          iconComponent={<CheckIconLight />}
          text="Save"
          data-testid="button-save"
        />
      </ButtonWrapper>
      <Note>
        *Please do not clear your browsers cache, in order to permanently save
        your game details
      </Note>
    </Form>
  )
}

const Form = styled.form`
  margin: 10px 20px;
  padding: 10px;
  display: grid;
  place-items: center;
  border-radius: 25px;
  background-color: var(--light);
  font-size: 1rem;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  Button {
    margin-top: 15px;
    margin-bottom: 5px;
  }
`
const KeyInfos = styled.fieldset`
  margin: 0;
  padding: 0;
  border: none;
  display: grid;
  width: 100%;

  label {
    margin-top: 10px;
    margin-bottom: 5px;
  }

  input {
    display: block;
    margin-top: 3px;
    padding: 5px;
    width: 100%;
    border-style: none;
    border-bottom: 1px solid var(--secondary-medium);
    color: var(--secondary-medium);
    font-family: 'Montserrat', sans-serif;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
  width: 100%;
`
const Note = styled.span`
  margin-top: 5px;
  font-size: 0.7rem;

  :last-child {
    margin-bottom: 10px;
  }
`
