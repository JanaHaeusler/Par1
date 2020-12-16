import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { v4 as uuid } from 'uuid'
import { BackIconDark } from '../../app/Icons/Icons'

DetailsPage.propTypes = {
    targetProfile: PropTypes.object.isRequired,
}

export default function DetailsPage({targetProfile}) {
    
    const history = useHistory()
    const {location, date, players, winner, shots} = targetProfile
    const playersString = players.join(', ')

    return (
        <GameDetailsWrapper>
            <GameDetailsContent> 
                <Location>{location}</Location>
                <Date>{date}</Date>
                <PlayerWrapper>
                    <h4>Player(s)</h4>
                    <span>{playersString}</span>
                </PlayerWrapper>
                <WinnerWrapper>
                    <h4>Winner(s)</h4>
                    <span>{winner}</span>
                </WinnerWrapper>
                <ShotsWrapper>
                    <h4>Total Shots</h4>
                    <span>{shots}</span>
                </ShotsWrapper>
            </GameDetailsContent>
            <ScoreOverview>
                    <LegendHoles>
                        <span>Holes</span>
                        {new Array(18).fill().map((_, index) => {
                            const newId = uuid()
                            return <span key={newId}>{index + 1}</span>
                            })
                        }
                    </LegendHoles> 
                    <AllPlayerScores>
                        {targetProfile.players.map((player) => {
                            const newId = uuid()
                            const playerName = player     
                                return (
                                    <SinglePlayerScores key={newId}>
                                        <span>{playerName}</span>
                                        {new Array(18).fill().map((_, index) => {
                                            const newId = uuid()
                                            const inputNumber = index + 1
                                            const holeName = 'hole' + inputNumber
                                            return( 
                                                <SingleScore key={newId} >
                                                    {targetProfile.scores[playerName][holeName]}
                                                </SingleScore>
                                                )                         
                                            })
                                        }
                                    </SinglePlayerScores>
                                )
                        })}
                    </AllPlayerScores> 
                </ScoreOverview> 
            <ButtonWrapper>
                <ButtonBackIcon onClick={() => history.push('/')} data-testid="button-back"><BackIconDark/></ButtonBackIcon>
            </ButtonWrapper>
        </GameDetailsWrapper>
    )
}
    
const GameDetailsWrapper = styled.section`
    margin: 0 20px;
`
const GameDetailsContent = styled.div`
    padding: 20px;
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    box-shadow: 0 0 10px var(--box-shadow-green);
    border-radius: 25px 25px 0 0;
    background-color: var(--text-light);
    font-size: 0.9rem;
`
const Date = styled.div`
    grid-column-start: 2;
    grid-row-start: 1;
    justify-self: end;
`
const Location = styled.div`
    grid-column: 1 / 3;
    grid-row-start: 2; 
    text-transform: uppercase;
`
const PlayerWrapper = styled.div`
    grid-column: 1 / 4;
    grid-row-start: 3;
`
const WinnerWrapper = styled.div`
    grid-column-start: 1;
    grid-row-start: 4;
`
const ShotsWrapper = styled.div`
    grid-column-start: 2;
    grid-row-start: 4;
`
const ScoreOverview = styled.section`
    margin: 0 auto;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 20px;
    background-color: var(--text-light);
`
const LegendHoles = styled.div`
    padding-right: 20px;
    display: grid;
    grid-template-rows: repeat(19, 35px);
    align-items: center;
    border-right: 1px solid var(--separator);

    span {
        width: 100%;
        text-align: center;
    }
`
const AllPlayerScores = styled.div`
    display: flex;
    overflow-y: auto;
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
        display: none;
    }
`
const SinglePlayerScores = styled.div`
    margin: 0 2px;
    padding-left: 1px;
    display: grid;
    grid-template-rows: repeat(19, 35px);
    align-items: center;
    min-width: 80px;
`
const SingleScore = styled.div`
    display: grid;
    gap: 10px;
`
const ButtonWrapper = styled.div`
    padding: 5px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    width: 100%;
    border-radius: 0 0 25px 25px;
    background: var(--text-light-transparent);
`
const ButtonBackIcon = styled.button`
    margin: 5px;
    padding: 0;
    display: flex;
    border: none;
    background: none;
`