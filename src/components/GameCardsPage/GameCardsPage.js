import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import GameCardsList from './GameCardsList'

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
    margin:10px 0;
    text-align: center;
    text-transform: uppercase;
    color: var(--text-light);
`

