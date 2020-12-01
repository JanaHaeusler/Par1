import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const ButtonStyled = styled.button`
    padding: 7px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80px;
    height: 34px;
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
const ButtonPrimary = (props) => <ButtonStyled {...props} />

ButtonPrimary.propTypes = {
    children: PropTypes.array.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export default ButtonPrimary