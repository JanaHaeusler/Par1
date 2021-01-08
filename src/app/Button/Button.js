import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const ButtonStyled = styled.button`
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 85px;
  height: 34px;
  border-style: none;
  border-radius: 5px;
  box-shadow: 2px 2px 8px var(--secondary-medium-transparent);
  background-color: ${(props) =>
    props.main ? 'var(--primary)' : 'var(--light)'};
  color: ${(props) => (props.main ? 'var(--light)' : 'var(--primary)')};
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  font-weight: 550;

  &:disabled {
    opacity: 50%;
  }
`
const Button = ({ iconComponent, text, ...props }) => (
  <ButtonStyled {...props}>
    {iconComponent}
    {text}
  </ButtonStyled>
)

Button.propTypes = {
  main: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  iconComponent: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button
