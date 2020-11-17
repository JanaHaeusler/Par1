import styled from 'styled-components/macro'
import Button from './Button'

export default function SaveGameForm() {
    return (
        <FormWrapper>
            <InputWrapper>
                <label htmlFor="location">
                    Location:
                </label>
                <input 
                    type="text" 
                    name="location"
                    placeholder="Type location ..."
                />
                <label htmlFor="date">
                    Date:
                </label>
                <input 
                    type="date" 
                    name="date"
                />
                <label htmlFor="players">
                    Player(s):
                </label>
                <input 
                    type="text" 
                    name="players"
                    placeholder="John, Jane"
                />
                <label htmlFor="winner">
                    Winner(s):
                </label>
                <input 
                    type="text" 
                    name="winner"
                    placeholder="Jane"
                />
                <label htmlFor="shots">
                    Total Shots Winner(s):
                </label>
                <input 
                    type="text"
                    name="shots"
                    placeholder="38"
                />
            </InputWrapper>
            <Button>&#10003; Save</Button>
        </FormWrapper>
    )
}

const FormWrapper = styled.form`
    padding: 0 10px 10px 10px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    box-shadow: 0 0 10px lightgrey;
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
    }

    input {
        border-style: none;
        border: 1px solid lightgrey;
        border-radius: 5px;
        padding: 5px;
       
    }
`
