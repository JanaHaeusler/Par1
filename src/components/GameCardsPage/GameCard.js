import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import {useState} from 'react'
import {Bin, Pencil, Cross} from '../Icons'
import ButtonPrimary from '../buttons/ButtonPrimary'
import ButtonSecondary from '../buttons/ButtonSecondary'

GameCard.propTypes = {
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    winner: PropTypes.string.isRequired,
    shots: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    showSaveGamePage: PropTypes.func.isRequired,
}

export default function GameCard({location, date, players, winner, shots, id, onDelete, onEdit, showSaveGamePage}) {
 
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
                            <ButtonDeleteIcon onClick={() => setIsSetToDelete(true)} data-testid="button-delete-icon"><BinIcon/></ButtonDeleteIcon>
                            <ButtonEditIcon onClick={() => handleEdit(id)} data-testid="button-edit-icon"><PenIcon/></ButtonEditIcon>
                    </ButtonWrapper>
                </>
            )}
            {isSetToDelete && (
                <DeleteField>
                    <span>Do you want to delete this gamecard?</span>
                    <ButtonDelete onClick={() => onDelete(id)} data-testid="button-delete"><BinIcon/>Delete</ButtonDelete>
                    <ButtonCancel onClick={() => setIsSetToDelete(false)} data-testid="button-cancel"><CancelIcon/>Cancel</ButtonCancel>
                </DeleteField>
            )}
        </Card>
    )

    function handleEdit(id) {
        showSaveGamePage()
        onEdit(id)
    }
}

const Card = styled.section`
    margin: 0 20px;
    padding: 10px;
    box-shadow: 0 0 10px var(--primary-medium);
    border-radius: 10px;
    background-color: var(--text-light);
    font-size: 0.9rem;
`
const SavedGameContent = styled.div`
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: 1fr 1fr;
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
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    width: 100%;
`
const ButtonDeleteIcon = styled.button`
    display: flex;
    margin: 5px;
    padding: 0;
    width: 30px;
    border: none;
    background: none;
`
const BinIcon = styled(Bin)`
    margin-right: 3px;
    fill: var(--secondary-dark);
`
const ButtonEditIcon = styled.button`
    display: flex;
    margin: 20px 5px 5px 5px;
    padding: 0;
    width: 30px;
    border: none;
    background: none;
`
const PenIcon = styled(Pencil)`
    margin-right: 3px;
    fill: var(--secondary-dark);
`
const DeleteField = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px 20px;
    place-items: center;
        
    span{
        grid-column: 1 / 3;
        text-align: center;
        color: var(--secondary-dark);
        font-weight: 800; 
    }
`
const ButtonDelete = styled(ButtonSecondary)`
    grid-column-start: 1;
    grid-row-start: 2;
`
const ButtonCancel = styled(ButtonPrimary)`
    grid-column-start: 2;
    grid-row-start: 2;
`
const CancelIcon = styled(Cross)`
    margin-right: 3px;
    fill: var(--text-light);
`