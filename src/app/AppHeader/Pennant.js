import styled from 'styled-components/macro'
import { LogoIcon } from '../assets/Icons/Icons'

export default function Pennant() {

  return (
      <PennantStyled>
        <LogoIconStyled/>
      </PennantStyled>
  )
}

const PennantStyled = styled.div`
  display: flex; 
  justify-content: center;
  width: 60px;
  height: 60px;
  box-shadow: 0 0 10px var(--primary-dark);
  border-radius: 0 0 50px 50px;
  background-color: var(--text-light);
`
const LogoIconStyled = styled(LogoIcon)`
  margin-top: 10px;
  width: 30px;
  fill: var(--secondary-dark);
`