import styled from 'styled-components/macro'
import Button from './Button'
import PropTypes from 'prop-types'
import { useState } from 'react'

SaveGameForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function SaveGameForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    location: '',
    date: '',
    players: '',
    winner: '',
    shots: '',
  })

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputWrapper>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Type location ..."
          value={formData.location}
          onChange={handleChange}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
        />
        <label htmlFor="players">Player(s)</label>
        <input
          type="text"
          name="players"
          id="players"
          placeholder="John, Jane"
          value={formData.players}
          onChange={handleChange}
        />
        <label htmlFor="winner">Winner(s)</label>
        <input
          type="text"
          name="winner"
          id="winner"
          placeholder="Jane"
          value={formData.winner}
          onChange={handleChange}
        />
        <label htmlFor="shots">Total Shots Winner(s)</label>
        <input
          type="text"
          name="shots"
          id="shots"
          placeholder="38"
          value={formData.shots}
          onChange={handleChange}
        />
      </InputWrapper>
      <Button>&#10003; Save</Button>
    </FormWrapper>
  )

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit(formData)
    setFormData({
      location: '',
      date: '',
      players: '',
      winner: '',
      shots: '',
    })
    const form = event.target
    form.elements.location.focus()
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
