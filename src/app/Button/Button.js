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
    background-color: ${(props) => props.main ?
        'var(--secondary-dark)' : 'var(--text-light)'};
    color: ${(props) => props.main ?
        'var(--text-light)' : 'var(--secondary-dark)'};
    font-size: 1rem;

    &:disabled {
        opacity: 50%;
    }
`
const Button= ({iconComponent, text, ...props}) => <ButtonStyled {...props}>
    {iconComponent}
    {text}
</ButtonStyled>

Button.propTypes = {
    main: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    iconComponent: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
}

export default Button