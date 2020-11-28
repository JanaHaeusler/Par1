import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import GameCard from './GameCard'

GameCardsList.propTypes = {
    savedGameProfiles: PropTypes.array,
}

export default function GameCardsList({savedGameProfiles, onDelete, onEdit}) {

    return(
    <GameCardsWrapper>
        {savedGameProfiles.allIds.map((id) => {
          const {location, date, players, winner, shots, _id} = savedGameProfiles.byId[id]
          return <GameCard key={_id} id={_id} onDelete={onDelete} onEdit={onEdit} location={location} date={date} players={players} winner={winner} shots={shots}/>
        })}
    </GameCardsWrapper>
    )
}

const GameCardsWrapper = styled.div`
  display: grid;
  gap: 10px;
`