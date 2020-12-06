import styled from 'styled-components/macro'
import Pennant from './Pennant'

export default function Header() {

  return (
    <HeaderStyled>
      <PennantStyled>
        <Pennant/>
      </PennantStyled>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  margin: 0 auto;
  position: relative;
  height: 50px;
  max-width: 1240px;
  box-shadow: 0 0 10px var(--primary-dark);
  border-radius: 0 0 25px 3px;
  background: var(--secondary-dark);
`
const PennantStyled = styled.div`
  position: absolute;
  top: 0;
  left: 28px;
`