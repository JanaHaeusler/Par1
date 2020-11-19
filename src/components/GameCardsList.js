import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import GameCard from './GameCard'

GameCardsList.propTypes = {
    savedGameProfiles: PropTypes.array,
  }

export default function GameCardsList({savedGameProfiles}) {

    return(
    <GameCardsWrapper>
        {savedGameProfiles.map(({location, date, players, winner, shots, _id}) => 
          <GameCard key={_id} location={location} date={date} players={players} winner={winner} shots={shots}/>
        )}
    </GameCardsWrapper>
    )
}

const GameCardsWrapper = styled.div`
  display: grid;
  gap: 10px;
`