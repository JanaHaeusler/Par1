import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { PlusIcon, HomeIcon } from '../Icons/Icons'
import removeLocally from '../../lib/removeLocally'

export default function Navigation() {
  return (
    <NavBar>
      <NavLinkStyled
        exact
        to="/"
        onClick={emptyLocalStorage}
        data-testid="button-home-page"
      >
        <HomeIcon />
      </NavLinkStyled>
      <NavLinkStyled
        to="/create"
        onClick={emptyLocalStorage}
        data-testid="button-form-page"
      >
        <PlusIcon />
      </NavLinkStyled>
    </NavBar>
  )

  function emptyLocalStorage() {
    removeLocally('inputsKeyInfosCreate')
    removeLocally('inputsScoresCreate')
    removeLocally('inputsKeyInfosEdit')
    removeLocally('inputsScoresEdit')
  }
}

const NavBar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`
const NavLinkStyled = styled(NavLink)`
  width: 28px;
  height: 28px;
  fill: var(--light);
  opacity: 40%;

  &.active {
    opacity: 100%;
  }
`
