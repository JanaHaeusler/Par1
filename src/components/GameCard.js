import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

GameCard.propTypes = {
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    winner: PropTypes.string.isRequired,
    shots: PropTypes.string.isRequired,
  }

export default function GameCard({location, date, players, winner, shots}) {
 return(
    <CardWrapper>
        <Location>{location}</Location>
        <Date>{date}</Date>
       
            <HeadlinePlayers>Player(s)</HeadlinePlayers>
            <DataPlayers>{players}</DataPlayers>
      
            <HeadlineWinner>Winner(s)</HeadlineWinner>
            <DataWinner>{winner}</DataWinner>
        
       
            <HeadlineShots>Total Shots</HeadlineShots>
            <DataShots>{shots}</DataShots>
    </CardWrapper>
 )
}

const CardWrapper = styled.div`
    padding: 10px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 10px;
    column-gap: 10px;
    justify-items: center;
    box-shadow: 0 0 10px var(--primary-medium);
    border-radius: 10px;
    background-color: var(--primary);
    font-size: 0.9rem;
    text-align: center;
    

    h4 {
        margin: 0;
        font-weight: 550;
    }
`
const Location = styled.div`
    grid-column: 1 / 3;
    justify-self: start;
`
const Date = styled.div`
    justify-self: end;
`
const HeadlinePlayers = styled.h4`
    place-items: center;
`
const DataPlayers = styled.span`
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    place-items: center;
`
const HeadlineWinner = styled.h4`
    place-items: center;
`
const DataWinner = styled.span`
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    place-items: center;
`
const HeadlineShots = styled.h4`
    place-items: center;
`
const DataShots = styled.span`
    place-items: center;
`
