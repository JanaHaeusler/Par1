import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import GameCard from './GameCard'

GameCardsList.propTypes = {
    savedGameProfiles: PropTypes.array,
}

export default function GameCardsList({savedGameProfiles, onDelete}) {

    return(
    <GameCardsWrapper>
        {savedGameProfiles.map(({location, date, players, winner, shots, _id}) => 
          <GameCard key={_id} id={_id} onDelete={onDelete} location={location} date={date} players={players} winner={winner} shots={shots}/>
        )}
    </GameCardsWrapper>
    )
}

const GameCardsWrapper = styled.div`
  display: grid;
  gap: 10px;
`