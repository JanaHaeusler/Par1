import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const ButtonStyled = styled.button`
    padding: 7px;
    width: 80px;
    height: 34px;
    border-style: none;
    border-radius: 5px;
    box-shadow: 3px 3px 10px var(--primary-dark);
    background-color: var(--text-light);
    color: var(--secondary-dark);
    font-size: 1rem;

    &:disabled {
        opacity: 50%;
    }
`
const ButtonSecondary = (props) => <ButtonStyled {...props} />

ButtonSecondary.propTypes = {
    children: PropTypes.array.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export default ButtonSecondary