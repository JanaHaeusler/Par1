import styled from 'styled-components/macro';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import {Plus, Home} from '../Icons'

Navigation.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default function Navigation({handleClick}) {
    return (
            <NavBar>
                <NavLink exact to="/" onClick={handleClick}>
                    <HomeIcon />
                </NavLink>
                <NavLink to="/saveGame" onClick={handleClick}>
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