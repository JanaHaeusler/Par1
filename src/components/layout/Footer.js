import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Navigation from './Navigation'

Footer.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default function Footer({handleClick}) {

  return (
    <FooterStyled>
      <Navigation handleClick={handleClick}/>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  max-width: 1240px;
  box-shadow: 0 0 10px var(--primary-dark);
  border-radius: 25px 25px 0 0 ;
  background: var(--secondary-dark);
`