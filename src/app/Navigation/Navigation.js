import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { PlusIcon, HomeIcon } from '../Icons/Icons'
import removeLocally from '../../lib/removeLocally'

export default function Navigation() {
  return (
    <NavBar>
      <NavigationLink
        exact
        to="/"
        onClick={emptyLocalStorage}
        data-testid="button-home-page"
      >
        <HomeIcon />
      </NavigationLink>
      <NavigationLink
        to="/create"
        onClick={emptyLocalStorage}
        data-testid="button-form-page"
      >
        <PlusIcon />
      </NavigationLink>
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const NavigationLink = styled(NavLink)`
  height: 28px;
  width: 28px;
  fill: var(--white);
  opacity: 40%;

  &.active {
    opacity: 100%;
  }
`
