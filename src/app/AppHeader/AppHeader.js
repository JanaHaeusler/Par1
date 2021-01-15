import styled from 'styled-components/macro'
import Pennant from './Pennant'

export default function AppHeader({ className }) {
  return (
    <Header className={className}>
      <PennantWrapper>
        <Pennant />
      </PennantWrapper>
    </Header>
  )
}

const Header = styled.header`
  position: relative;
  height: 50px;
  max-width: 1240px;
  margin: 0 auto;
  box-shadow: var(--shadow-dark);
  border-radius: 0 0 25px 3px;
  background: var(--primary-gradient);
`
const PennantWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 28px;
`
