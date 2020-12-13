import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useState } from 'react'
import GameList from '../GameList'
import GameDetails from '../GameDetails'

OverviewPage.propTypes = {
    savedGameProfiles: PropTypes.object.isRequired,
    targetProfile: PropTypes.object.isRequired,
    deleteGameProfile: PropTypes.func.isRequired,
    prepareEditModus: PropTypes.func.isRequired,
    prepareGameDetails: PropTypes.func.isRequired,
    showCreatePage: PropTypes.func.isRequired,
    showOverviewPage: PropTypes.func.isRequired,
}

export default function OverviewPage({savedGameProfiles, targetProfile, deleteGameProfile, prepareEditModus, prepareGameDetails, showCreatePage, showOverviewPage}) {

const [isGameDetailsShown, setIsGameDetailsShown] = useState(false)

    return (
        
        !isGameDetailsShown ? 
            <>
                <Headline>Your Games</Headline>
                <GameList 
                    savedGameProfiles={savedGameProfiles} 
                    onDelete={deleteGameProfile} 
                    onEdit={prepareEditModus}
                    onDetails={onDetails}
                    showCreatePage={showCreatePage}/>
            </>
            :
            <GameDetails
                targetProfile={targetProfile}
                showOverviewPage={showOverviewPage}
            />
        
    )

    function onDetails(targetId) {
        setIsGameDetailsShown(true)
        prepareGameDetails(targetId)
    }
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

