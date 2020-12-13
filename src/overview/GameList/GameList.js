import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Game from '../Game'

GameList.propTypes = {
    savedGameProfiles: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDetails: PropTypes.func.isRequired,
    showCreatePage: PropTypes.func.isRequired,
    showDetailsPage: PropTypes.func.isRequired,
}

export default function GameList({savedGameProfiles, onDelete, onEdit, onDetails, showCreatePage, showDetailsPage}) {

  return(
    <GameListWrapper>
        {savedGameProfiles.allIds.map((id) => {
          const {location, date, players, winner, shots, _id} = savedGameProfiles.byId[id]
          const playersString = players.join(', ')
          return <Game 
                    key={_id} 
                    id={_id} 
                    onDelete={onDelete} 
                    onEdit={onEdit} 
                    location={location} 
                    date={date} 
                    players={playersString} 
                    winner={winner} 
                    shots={shots}
                    showCreatePage={showCreatePage}
                    showDetailsPage={showDetailsPage}
                    onDetails={onDetails}/>
        })}
    </GameListWrapper>
  )
}

const GameListWrapper = styled.div`
  display: grid;
  gap: 20px;
`