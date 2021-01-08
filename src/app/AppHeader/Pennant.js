import styled from 'styled-components/macro'
import { LogoIcon } from '../Icons/Icons'

export default function Pennant() {
  return (
    <PennantWrapper>
      <LogoIconStyled />
    </PennantWrapper>
  )
}

const PennantWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60px;
  height: 60px;
  box-shadow: 0 0 5px var(--secondary-medium);
  border-radius: 0 0 50px 50px;
  background-color: var(--light);
`
const LogoIconStyled = styled(LogoIcon)`
  margin-top: 10px;
  width: 30px;
  fill: var(--primary);
`
