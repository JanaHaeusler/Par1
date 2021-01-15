import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { v4 as uuid } from 'uuid'
import { BackIconPrimary } from '../app/Icons/Icons'

DetailsPage.propTypes = {
  targetProfile: PropTypes.object.isRequired,
}

export default function DetailsPage({ targetProfile }) {
  const history = useHistory()
  const {
    location,
    date,
    playersString,
    winner,
    shots,
    playersArray,
  } = targetProfile
  const players = playersString
  const hasOnePlayer = playersArray?.length < 2

  return (
    <DetailsPageWrapper>
      <AllGameDetails>
        <GameKeyInfos>
          <Date>{date}</Date>
          <Location>{location}</Location>
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
        <GameScores hasOnePlayer={hasOnePlayer}>
          <Legend>
            <span>Holes</span>
            {new Array(18).fill().map((_, index) => {
              const newId = uuid()
              return <span key={newId}>{index + 1}</span>
            })}
          </Legend>
          <ScoresAllPlayers>
            {targetProfile.playersArray?.map((player) => {
              const newId = uuid()
              const playerName = player
              return (
                <ScoreSinglePlayer key={newId}>
                  <span>{playerName}</span>
                  {new Array(18).fill().map((_, index) => {
                    const newId = uuid()
                    const fieldNumber = index + 1
                    const holeName = 'hole' + fieldNumber
                    return (
                      <span key={newId}>
                        {targetProfile.scores[playerName][holeName]}
                      </span>
                    )
                  })}
                </ScoreSinglePlayer>
              )
            })}
          </ScoresAllPlayers>
        </GameScores>
      </AllGameDetails>
      <ButtonBackIcon
        onClick={() => history.push('/')}
        data-testid="button-back"
      >
        <BackIconPrimary />
      </ButtonBackIcon>
    </DetailsPageWrapper>
  )
}

const DetailsPageWrapper = styled.div`
  margin: 0 20px;
`
const AllGameDetails = styled.div`
  border-radius: 25px 25px 0 0;
  background-color: var(--white);
  font-size: 1rem;
`
const GameKeyInfos = styled.section`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, auto);
  grid-gap: 10px;
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
  width: ${(props) => (props.hasOnePlayer ? '70%' : '90%')};
  margin: 0 auto;
  padding: 10px 20px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.hasOnePlayer ? '80px 80px' : '1fr 3fr'};
  gap: 20px;
`
const Legend = styled.div`
  padding-right: 20px;
  display: grid;
  grid-template-rows: repeat(19, 35px);
  border-right: var(--border-light);

  span {
    text-align: center;
    font-weight: 600;
  }

  span:first-child {
    font-family: 'Montserrat', sans-serif;
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
const ScoreSinglePlayer = styled.div`
  min-width: 80px;
  margin: 0 2px;
  display: grid;
  grid-template-rows: repeat(19, 35px);

  span:first-child {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }
`
const ButtonBackIcon = styled.button`
  width: 100%;
  padding: 5px 0;
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  border: none;
  border-radius: 0 0 25px 25px;
  background: var(--white-transparent);
`
