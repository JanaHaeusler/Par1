import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import SinglePlayerScore from '../SinglePlayerScore'

ScoreCard.propTypes = {
    formInputs: PropTypes.object.isRequired,
    updateDirtyInputs: PropTypes.func.isRequired,
    handleChangeScoreInputs: PropTypes.func.isRequired,
}

export default function ScoreCard({
    formInputs, 
    updateDirtyInputs,
    handleChangeScoreInputs, 
    className}) {

    const players = formInputs.players.split(',').map((player) => player.trim()).filter(player => player)
console.log('players Array', players)
    return (
        <FormScoreCard className={className}>
            <Headline>Score</Headline>
                <ScoreOverview>
                    <LegendHoles>
                        <span>Holes</span>
                        {new Array(18).fill().map((_, index) => {
                            const newId = uuid()
                            return <span key={newId}>{index + 1}</span>
                            })
                        }
                    </LegendHoles> 
                    <AllPlayerScores>
                        {players.map((player) => {
                            const newId = uuid()
                            console.log(player)
                            const playerName = player      //brauchen wir toString() oder join() hier, um es in einen string zu verwandeln?
                            console.log({playerName})
                                return <SinglePlayerScore 
                                            key={newId} 
                                            playerName={playerName}
                                            formInputs={formInputs}
                                            updateDirtyInputs={updateDirtyInputs}
                                            handleChangeScoreInputs={handleChangeScoreInputs}
                                            />
                            })
                        }
                    </AllPlayerScores> 
                </ScoreOverview> 
        </FormScoreCard>
    )
}

const FormScoreCard = styled.form`
    span {
        font-family: 'Raleway', sans-serif;
    }
`
const Headline = styled.h3`
   text-align: center;
   text-transform: uppercase;
`
const ScoreOverview = styled.section`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 20px;
    width: 90%;
`
const LegendHoles = styled.div`
    padding-right: 20px;
    display: grid;
    grid-template-rows: repeat(19, 35px);
    align-items: center;
    border-right: 1px solid var(--separator);

    /* span:nth-child(1) {
        align-items: end;
    } */

    span {
        width: 100%;
        text-align: center;
    }
`
const AllPlayerScores = styled.div`
    display: flex;
    overflow-y: auto;
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
        display: none;
    }
`