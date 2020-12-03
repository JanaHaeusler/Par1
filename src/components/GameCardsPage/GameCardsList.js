import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import GameCard from './GameCard'

GameCardsList.propTypes = {
    savedGameProfiles: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    switchToSavedGamePage: PropTypes.func.isRequired,
}

export default function GameCardsList({savedGameProfiles, onDelete, onEdit, switchToSavedGamePage}) {

  return(
    <GameCardsWrapper>
        {savedGameProfiles.allIds.map((id) => {
          const {location, date, players, winner, shots, _id} = savedGameProfiles.byId[id]
          return <GameCard 
                    key={_id} 
                    id={_id} 
                    onDelete={onDelete} 
                    onEdit={onEdit} 
                    location={location} 
                    date={date} 
                    players={players} 
                    winner={winner} 
                    shots={shots}
                    switchToSavedGamePage={switchToSavedGamePage}/>
        })}
    </GameCardsWrapper>
  )
}

const GameCardsWrapper = styled.div`
  display: grid;
  gap: 10px;
`