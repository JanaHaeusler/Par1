import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import GameCardsList from './components/GameCardsPage/GameCardsList'

GameCardsPage.propTypes = {
    savedGameProfiles: PropTypes.object.isRequired,
    deleteGameProfile: PropTypes.func.isRequired,
    prepareEditModus: PropTypes.func.isRequired,
    showSaveGamePage: PropTypes.func.isRequired,
}

export default function GameCardsPage({savedGameProfiles, deleteGameProfile, prepareEditModus, showSaveGamePage}) {

    return (
        <>
            <Headline>Your Games</Headline>
            <GameCardsList 
                savedGameProfiles={savedGameProfiles} 
                onDelete={deleteGameProfile} 
                onEdit={prepareEditModus}
                showSaveGamePage={showSaveGamePage}/>
        </>
    )
}

const Headline = styled.h1`
    margin: 0 0 15px 0;
    text-align: center;
    text-transform: uppercase;
    color: var(--text-light);

    &::after {
        margin: 8px auto 30px; 
        display: block;
        width: 120px;
        height: 2px;
        content: '';
        background-color: var(--text-light);
        align-content: center;
    }
`

