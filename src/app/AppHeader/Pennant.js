import styled from 'styled-components/macro'
import { LogoIcon } from '../Icons/Icons'

export default function Pennant() {
  return (
    <PennantWrapper>
      <Logo />
    </PennantWrapper>
  )
}

const PennantWrapper = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  box-shadow: var(--shadow-dark);
  border-radius: 0 0 50px 50px;
  background-color: var(--white);
`
const Logo = styled(LogoIcon)`
  width: 30px;
  margin-top: 10px;
  fill: var(--primary);
`
