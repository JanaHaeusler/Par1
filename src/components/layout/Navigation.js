import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import {PlusIcon, HomeIcon} from '../Icons'

Navigation.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default function Navigation({handleClick}) {
    return (
            <NavBar>
                <NavLinkStyled exact to="/" onClick={handleClick} data-testid="button-home-page">
                    <HomeIcon />
                </NavLinkStyled>
                <NavLinkStyled to="/saveGame" onClick={handleClick} data-testid="button-form-page">
                    <PlusIcon />
                </NavLinkStyled>
            </NavBar>
    )
}

const NavBar = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`
const NavLinkStyled = styled(NavLink)`
    width: 25px;
    fill: var(--text-light);
    opacity: 40%;
    
    &.active {
        opacity: 100%;
    }
`