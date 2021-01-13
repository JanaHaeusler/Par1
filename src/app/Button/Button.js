import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const ButtonWrapper = styled.button`
  height: 34px;
  width: 85px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 2px 2px 8px var(--secondary-medium-transparent);
  border-radius: 5px;
  border-style: none;
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
  <ButtonWrapper {...props}>
    {iconComponent}
    {text}
  </ButtonWrapper>
)

Button.propTypes = {
  main: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  iconComponent: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button
