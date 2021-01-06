import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Game from '../Game'

GameList.propTypes = {
    savedGameProfiles: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDetails: PropTypes.func.isRequired,
}

export default function GameList({
  savedGameProfiles, 
  onDelete, 
  onEdit, 
  onDetails }) {

  return(
    <GameListWrapper>
        {savedGameProfiles.allIds.map((id) => {
          const savedGameProfile = savedGameProfiles.byId[id]
          const _id = savedGameProfile._id
          return <Game 
                    key={_id} 
                    savedGameProfile={savedGameProfile}
                    onDelete={onDelete} 
                    onEdit={onEdit} 
                    onDetails={onDetails}/>
        })}
    </GameListWrapper>
  )
}

const GameListWrapper = styled.div`
  display: grid;
  gap: 20px;
`