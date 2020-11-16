import styled from 'styled-components/macro'

export default function Button() {
    return (
        <ButtonStyled>&#10003; Save</ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    padding: 7px;
    border-style: none;
    border-radius: 5px;
    background-color: #F5D87A;
    height: 50px;
    width: 100px;
    font-size: 1rem;
`