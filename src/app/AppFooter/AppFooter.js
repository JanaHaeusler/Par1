import styled from 'styled-components/macro'
import Navigation from '../Navigation'

export default function AppFooter({className}) {

  return (
    <FooterStyled className={className}>
      <Navigation/>
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
  background: var(--gradient-dark);
`