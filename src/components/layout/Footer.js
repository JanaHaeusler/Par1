import styled from 'styled-components/macro'

const FooterStyled = styled.footer`
  height: 50px;
  box-shadow: 0 0 10px var(--primary-dark);
  border-radius: 25px 25px 0 0 ;
  background: var(--secondary-dark);
`
const Footer = (props) => <FooterStyled {...props} />

export default Footer