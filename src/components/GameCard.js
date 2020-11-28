import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import {useState} from 'react'
import {ReactComponent as Bin} from '../assets/bin-icon.svg'
import {ReactComponent as Pen} from '../assets/pencil-icon.svg'
import ButtonPrimary from './Buttons/ButtonPrimary'
import ButtonSecondary from './Buttons/ButtonSecondary'

GameCard.propTypes = {
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    winner: PropTypes.string.isRequired,
    shots: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default function GameCard({location, date, players, winner, shots, id, onDelete, onEdit}) {
 
    const [isSetToDelete, setIsSetToDelete] = useState(false)

    return(
        <Card>
            {!isSetToDelete && (
                <SavedGameContent>
                    <Location>{location}</Location>
                    <Date>{date}</Date>
                    <PlayerWrapper>
                        <Headline>Player(s)</Headline>
                        <span>{players}</span>
                    </PlayerWrapper>
                    <WinnerWrapper>
                        <Headline>Winner(s)</Headline>
                        <span>{winner}</span>
                    </WinnerWrapper>
                    <ShotsWrapper>
                        <Headline>Total Shots</Headline>
                        <span>{shots}</span>
                    </ShotsWrapper>
                    <ButtonWrapper>
                        <ButtonDeleteFirst onClick={() => setIsSetToDelete(true)}><BinIcon/></ButtonDeleteFirst>
                        <ButtonEdit onClick={() => onEdit(id)}><PenIcon/></ButtonEdit>
                    </ButtonWrapper>
                </SavedGameContent>
            )}
            {isSetToDelete && (
                <DeleteField>
                    <span>Do you want to delete this gamecard?</span>
                    <ButtonDeleteSecond onClick={() => onDelete(id)}><BinIcon/>Delete</ButtonDeleteSecond>
                    <ButtonCancel onClick={() => setIsSetToDelete(false)}> X Cancel</ButtonCancel>
                </DeleteField>
            )}
        </Card>
    )
}

const Card = styled.section`
    padding: 10px;
    box-shadow: 0 0 10px var(--primary-medium);
    border-radius: 10px;
    background-color: var(--primary-medium);
    font-size: 0.9rem;
`
const SavedGameContent = styled.div`
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
`
const Date = styled.div`
    grid-column-start: 1;
    grid-row-start: 1;
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
const Headline = styled.h4`
    margin: 0;
    font-weight: 550;
`
const ButtonWrapper = styled.div`
    grid-column-start: 3;
    grid-row: 1 / 5;
    justify-self: end;
`
const ButtonDeleteFirst = styled.button`
    display: flex;
    margin: 5px;
    padding: 0;
    width: 30px;
    border: none;
    background: none;
`
const BinIcon = styled(Bin)`
    margin-right: 3px;
`
const ButtonEdit = styled.button`
    display: flex;
    margin: 20px 5px 5px 5px;
    padding: 0;
    width: 30px;
    border: none;
    background: none;
`
const PenIcon = styled(Pen)`
    margin-right: 3px;
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
const ButtonDeleteSecond = styled(ButtonSecondary)`
    grid-column-start: 1;
    grid-row-start: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ButtonCancel = styled(ButtonPrimary)`
    grid-column-start: 2;
    grid-row-start: 2;
`