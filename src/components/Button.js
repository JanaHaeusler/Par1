import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Button.propTypes = {
    children: PropTypes.string.isRequired,
  }

export default function Button({children}) {
    return (
        <ButtonStyled>{children}</ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    padding: 7px;
    border-style: none;
    border-radius: 5px;
    box-shadow: 3px 3px 10px var(--primary-dark);
    background-color: var(--secondary-dark);
    color: var(--text-light);
    font-size: 1rem;
`