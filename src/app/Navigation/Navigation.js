import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import {PlusIcon, HomeIcon} from '../Icons/Icons'

export default function Navigation() {
    return (
            <NavBar>
                <NavLinkStyled exact to="/" data-testid="button-home-page">
                    <HomeIcon />
                </NavLinkStyled>
                <NavLinkStyled to="/create" data-testid="button-form-page">
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
    width: 28px;
    height: 28px;
    fill: var(--text-light);
    opacity: 40%;
    
    &.active {
        opacity: 100%;
    }
`