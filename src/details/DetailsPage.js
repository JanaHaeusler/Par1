import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { v4 as uuid } from 'uuid'
import { BackIconDark } from '../app/Icons/Icons'

DetailsPage.propTypes = {
    targetProfile: PropTypes.object.isRequired,
}

export default function DetailsPage({targetProfile}) {
    
    const history = useHistory()
    const {location, date, playersString, winner, shots} = targetProfile
    const players = playersString

    return (
        <GameDetailsCard>
            <GameKeyInfos> 
                <Location>{location}</Location>
                <Date>{date}</Date>
                <Players>
                    <h4>Player(s)</h4>
                    <span>{players}</span>
                </Players>
                <Winner>
                    <h4>Winner(s)</h4>
                    <span>{winner}</span>
                </Winner>
                <Shots>
                    <h4>Total Shots</h4>
                    <span>{shots}</span>
                </Shots>
            </GameKeyInfos>
            <GameScores>
                    <LegendHoles>
                        <span>Holes</span>
                        {new Array(18).fill().map((_, index) => {
                            const newId = uuid()
                            return <span key={newId}>{index + 1}</span>
                            })
                        }
                    </LegendHoles> 
                    <ScoresAllPlayers>
                        {targetProfile.playersArray?.map((player) => {
                            const newId = uuid()
                            const playerName = player     
                                return (
                                    <ScoresSinglePlayer key={newId}>
                                        <span>{playerName}</span>
                                        {new Array(18).fill().map((_, index) => {
                                            const newId = uuid()
                                            const fieldNumber = index + 1
                                            const holeName = 'hole' + fieldNumber
                                            return( 
                                                <SingleScore key={newId} >
                                                    {targetProfile.scores[playerName][holeName]}
                                                </SingleScore>
                                                )                         
                                            })
                                        }
                                    </ScoresSinglePlayer>
                                )
                        })}
                    </ScoresAllPlayers> 
                </GameScores> 
            <ButtonWrapper>
                <ButtonBackIcon onClick={() => history.push('/')} data-testid="button-back"><BackIconDark/></ButtonBackIcon>
            </ButtonWrapper>
        </GameDetailsCard>
    )
}
    
const GameDetailsCard = styled.section`
    margin: 0 20px;
`
const GameKeyInfos = styled.div`
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
const Players = styled.div`
    grid-column: 1 / 4;
    grid-row-start: 3;
`
const Winner = styled.div`
    grid-column-start: 1;
    grid-row-start: 4;
`
const Shots = styled.div`
    grid-column-start: 2;
    grid-row-start: 4;
`
const GameScores = styled.section`
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
const ScoresAllPlayers = styled.div`
    display: flex;
    overflow-y: auto;
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
        display: none;
    }
`
const ScoresSinglePlayer = styled.div`
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