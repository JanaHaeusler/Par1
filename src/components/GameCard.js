import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import {useState} from 'react'
import {ReactComponent as BinIcon} from '../assets/bin-icon.svg'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'

GameCard.propTypes = {
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    winner: PropTypes.string.isRequired,
    shots: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default function GameCard({location, date, players, winner, shots, id, onDelete}) {
 
    const [isSetToDelete, setIsSetToDelete] = useState(false)

    return(
        <Card>
            {isSetToDelete === false && (
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
                    <ButtonDeleteBin onClick={() => setIsSetToDelete(true)}/>
                </SavedGameContent>
            )}
            {isSetToDelete && (
                <DeleteField>
                    <span>Do you want to delete this gamecard?</span>
                    <ButtonDelete onClick={() => onDelete(id)}><BinIcons/>Delete</ButtonDelete>
                    <ButtonCancel onClick={() => setIsSetToDelete(false)}> &times; Cancel</ButtonCancel>
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
    justify-items: left;
`
const DeleteField = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px 20px;
    place-items: center;
    
    span{
        grid-column: 1/3;
        text-align: center;
        color: var(--secondary-dark);
        font-weight: 800; 
    }
`
const Date = styled.div`
    grid-column: 1;
    grid-row-start: 1;
`
const Location = styled.div`
    grid-column: 1 / 3;
    grid-row-start: 2; 
    text-transform: uppercase;
`
const PlayerWrapper = styled.div`
    grid-column: 1/4;
    grid-row-start: 3;
`
const WinnerWrapper = styled.div`
    grid-column: 1;
    grid-row-start: 4;
`
const ShotsWrapper = styled.div`
    grid-column: 2;
    grid-row-start: 4;
`
const Headline = styled.h4`
    margin: 0;
    font-weight: 550;
`
const ButtonDeleteBin = styled(BinIcon)`
    margin: 5px;
    grid-column: 3;
    grid-row: 1/3;
    justify-self: end;
    align-self: start;
`
const ButtonDelete = styled(ButtonSecondary)`
    grid-column: 1;
    grid-row: 2;
    display: flex;
    align-items: center;
`
const ButtonCancel = styled(ButtonPrimary)`
    grid-column: 2;
    grid-row: 2;
`
const BinIcons = styled(BinIcon)`
    margin-right: 10px;
`
