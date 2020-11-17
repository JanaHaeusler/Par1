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
        <Players>
            <h4>Player(s)</h4>
            <span>{players}</span>
        </Players>
        <Winner>
            <h4>Winner(s)</h4>
            <span>{winner}</span>
        </Winner>
        <Shots>
            <h4>Total Shots</h4>
            <span>{shots}</span>
        </Shots>
    </CardWrapper>
 )
}

const CardWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 3fr;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 20px;
    column-gap: 10px;
    justify-items: center;
    border-radius: 10px;
    box-shadow: 0 0 10px lightgrey;
    font-size: 1rem;
    padding: 10px;

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
const Players = styled.div`
    display: grid;
    place-items: center;
`
const Winner = styled.div`
    display: grid;
    place-items: center;
`
const Shots = styled.div`
    display: grid;
    place-items: center;
`
