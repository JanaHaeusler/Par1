import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import {useState} from 'react'
import {BinIconDark, CancelIconLight, DetailsIconDark, PencilIconDark} from '../../app/Icons/Icons'
import Button from '../../app/Button'

Game.propTypes = {
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    winner: PropTypes.string.isRequired,
    shots: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDetails: PropTypes.func.isRequired,
    showCreatePage: PropTypes.func.isRequired,
    showDetailsPage: PropTypes.func.isRequired,
}

export default function Game({location, date, players, winner, shots, id, onDelete, onEdit, onDetails, showCreatePage, showDetailsPage}) {
 
    const [isSetToDelete, setIsSetToDelete] = useState(false)

    return(
        <Card>
            {isSetToDelete || (
               <> 
                    <SavedGameContent>
                        <Location>{location}</Location>
                        <Date>{date}</Date>
                        <PlayerWrapper>
                            <h4>Player(s)</h4>
                            <span>{players}</span>
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
                            <ButtonDeleteIcon onClick={() => setIsSetToDelete(true)} data-testid="button-set-delete"><BinIconDark/></ButtonDeleteIcon>
                            <ButtonEditIcon onClick={() => handleEdit(id)} data-testid="button-edit"><PencilIconDark/></ButtonEditIcon>
                            <ButtonDetailsIcon onClick={() => handleDetails(id)} data-testid="button-info"><DetailsIconDark/></ButtonDetailsIcon>
                    </ButtonWrapper>
                </>
            )}
            {isSetToDelete && (
                <DeleteField>
                    <span>Do you want to delete this game?</span>
                    <ButtonDelete onClick={() => onDelete(id)} iconComponent={<BinIconDark/>} text="Delete" data-testid="button-delete"/>
                    <ButtonCancel main onClick={() => setIsSetToDelete(false)} iconComponent={<CancelIconLight/>} text="Cancel" data-testid="button-cancel"/>
                </DeleteField>
            )}
        </Card>
    )

    function handleEdit(id) {
        showCreatePage()
        onEdit(id)
    }

    function handleDetails(id) {
        showDetailsPage()
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
const ButtonWrapper = styled.div`
    padding: 5px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    width: 100%;
    border-radius: 0 0 25px 25px;
    background: var(--text-light-transparent);
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
    background-color: var(--text-light);
        
    span{
        grid-column: 1 / 3;
        text-align: center;
        color: var(--secondary-dark);
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