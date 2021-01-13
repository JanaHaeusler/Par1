import styled from 'styled-components/macro'
import Navigation from '../Navigation'

export default function AppFooter({ className }) {
  return (
    <Footer className={className}>
      <Navigation />
    </Footer>
  )
}

const Footer = styled.footer`
  height: 50px;
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 0 5px var(--secondary-medium);
  border-radius: 25px 25px 0 0;
  background: var(--primary-gradient);
`
