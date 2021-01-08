import PropTypes from 'prop-types'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../../app/Button'
import {
  BinIconDark,
  CancelIconLight,
  DetailsIconDark,
  PencilIconDark,
} from '../../app/Icons/Icons'

Game.propTypes = {
  savedGameProfile: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDetails: PropTypes.func.isRequired,
}

export default function Game({
  savedGameProfile,
  onDelete,
  onEdit,
  onDetails,
}) {
  const history = useHistory()

  const [isSetToDelete, setIsSetToDelete] = useState(false)
  const { location, date, playersString, winner, shots, _id } = savedGameProfile
  const playerNames = playersString

  return (
    <Card>
      {isSetToDelete || (
        <>
          <SavedGameContent>
            <Location>{location}</Location>
            <Date>{date}</Date>
            <PlayerWrapper>
              <h4>Player(s)</h4>
              <span>{playerNames}</span>
            </PlayerWrapper>
            <WinnerWrapper>
              <h4>Winner(s)</h4>
              <span>{winner}</span>
            </WinnerWrapper>
            <ShotsWrapper>
              <h4>Total Shots</h4>
              <span>{shots}</span>
            </ShotsWrapper>
          </SavedGameContent>
          <ButtonWrapper>
            <ButtonDeleteIcon
              onClick={() => setIsSetToDelete(true)}
              data-testid="button-set-delete"
            >
              <BinIconDark />
            </ButtonDeleteIcon>
            <ButtonEditIcon
              onClick={() => handleEdit(_id)}
              data-testid="button-edit"
            >
              <PencilIconDark />
            </ButtonEditIcon>
            <ButtonDetailsIcon
              onClick={() => handleDetails(_id)}
              data-testid="button-details"
            >
              <DetailsIconDark />
            </ButtonDetailsIcon>
          </ButtonWrapper>
        </>
      )}
      {isSetToDelete && (
        <DeleteField>
          <span>Do you want to delete this game?</span>
          <ButtonDelete
            onClick={() => onDelete(_id)}
            iconComponent={<BinIconDark />}
            text="Delete"
            data-testid="button-delete"
          />
          <ButtonCancel
            main
            onClick={() => setIsSetToDelete(false)}
            iconComponent={<CancelIconLight />}
            text="Cancel"
            data-testid="button-cancel"
          />
        </DeleteField>
      )}
    </Card>
  )

  function handleEdit(id) {
    history.push('/edit')
    onEdit(id)
  }

  function handleDetails(id) {
    history.push('/details')
    onDetails(id)
  }
}

const Card = styled.section`
  margin: 0 20px;
`
const SavedGameContent = styled.div`
  padding: 10px;
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  border-radius: 25px 25px 0 0;
  background-color: var(--light);
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
const ButtonWrapper = styled.div`
  padding: 5px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  width: 100%;
  border-radius: 0 0 25px 25px;
  background: var(--light-transparent);
`
const ButtonDeleteIcon = styled.button`
  margin: 5px;
  padding: 0;
  display: flex;
  border: none;
  background: none;
`
const ButtonEditIcon = styled.button`
  margin: 5px;
  padding: 0;
  display: flex;
  border: none;
  background: none;
`
const ButtonDetailsIcon = styled.button`
  margin: 5px;
  padding: 0;
  display: flex;
  border: none;
  background: none;
`
const DeleteField = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px 20px;
  place-items: center;
  border-radius: 25px;
  background-color: var(--light);

  span {
    grid-column: 1 / 3;
    text-align: center;
    color: var(--primary);
    font-weight: 800;
  }
`
const ButtonDelete = styled(Button)`
  grid-column-start: 1;
  grid-row-start: 2;
`
const ButtonCancel = styled(Button)`
  grid-column-start: 2;
  grid-row-start: 2;
`
