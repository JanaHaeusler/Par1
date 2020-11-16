import styled from 'styled-components/macro'

export default function SaveGameForm() {
    return (
        <FormWrapper>
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
        
        
        </FormWrapper>
    )
}

const FormWrapper = styled.form`
    padding: 0 10px 10px 10px;
    display: grid;
    border-radius: 10px;
    box-shadow: 0 0 10px lightgrey;

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
