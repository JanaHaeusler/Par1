import styled from 'styled-components/macro'
import { Logo } from '../Icons'

export default function Header() {

  return (
    <HeaderStyled>
      <PennantStyled>
        <LogoStyled/>
      </PennantStyled>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  height: 50px;
  box-shadow: 0 0 10px var(--primary-dark);
  border-radius: 0 0 25px 3px;
  background: var(--secondary-dark);
`
const PennantStyled = styled.div`
  position: absolute;
  top: 0;
  left: 28px;
  width: 60px;
  height: 60px;
  display: flex; 
  justify-content: center;
  box-shadow: 0 0 10px var(--primary-dark);
  border-radius: 0 0 50px 50px;
  background-color: var(--text-light);
`
const LogoStyled = styled(Logo)`
  margin-top: 10px;
  width: 30px;
  fill: var(--secondary-dark);
`