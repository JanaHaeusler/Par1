import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const ButtonStyled = styled.button`
  height: 34px;
  width: 85px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: var(--shadow-light);
  border-radius: 5px;
  border-style: none;
  background-color: ${(props) =>
    props.isMain ? 'var(--primary)' : 'var(--white)'};
  color: ${(props) => (props.isMain ? 'var(--white)' : 'var(--primary)')};
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  font-weight: 500;

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
  isMain: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  iconComponent: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button
