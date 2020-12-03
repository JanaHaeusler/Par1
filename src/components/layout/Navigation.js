import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import {Plus, Home} from '../Icons'

export default function Navigation() {
    return (
            <NavBar>
                <NavLink exact to="/">
                    <HomeIcon />
                </NavLink>
                <NavLink to="/saveGame">
                    <PlusIcon />
                </NavLink>
            </NavBar>
    )
}

const NavBar = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

    .active {
        stroke: red;
    }
`
const PlusIcon = styled(Plus)`
    stroke: var(--text-light);
`
const HomeIcon = styled(Home)`
    fill: var(--text-light);
`