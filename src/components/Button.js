import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const ButtonStyled = styled.button`
    padding: 7px;
    border-style: none;
    border-radius: 5px;
    box-shadow: 3px 3px 10px var(--primary-dark);
    background-color: var(--secondary-dark);
    color: var(--text-light);
    font-size: 1rem;

    &:disabled {
        opacity: 50%;
    }
`
const Button = (props) => <ButtonStyled {...props} />

Button.propTypes = {
    children: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}

export default Button