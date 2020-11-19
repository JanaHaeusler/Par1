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
    <Card>
        <Location>{location}</Location>
        <Date>{date}</Date>
       
            <Headline>Player(s)</Headline>
            <DataPlayers>{players}</DataPlayers>
      
            <Headline>Winner(s)</Headline>
            <DataWinner>{winner}</DataWinner>
        
       
            <Headline>Total Shots</Headline>
            <DataShots>{shots}</DataShots>
    </Card>
 )
}

const Card = styled.section`
    padding: 10px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    justify-items: center;
    box-shadow: 0 0 10px var(--primary-medium);
    border-radius: 10px;
    background-color: var(--primary);
    font-size: 0.9rem;
    text-align: center;
    
`
const Location = styled.div`
    grid-column: 1 / 3;
    justify-self: start;
`
const Date = styled.div`
    justify-self: end;
`
const Headline = styled.h4`
    margin: 0;
    place-items: center;
    font-weight: 550;
   
`
const DataPlayers = styled.span`
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    place-items: center;
`
const DataWinner = styled.span`
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    place-items: center;
`
const DataShots = styled.span`
    place-items: center;
`
