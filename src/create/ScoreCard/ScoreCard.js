import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'

ScoreCard.propTypes = {
    formInputs: PropTypes.object.isRequired,
    updateDirtyInputs: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default function ScoreCard({
    formInputs, 
    updateDirtyInputs,
    handleChange}) {

    const players = ['Jane', 'John', 'Hans', 'Non', 'Next']
    let holeNumber = 0
    let inputNumber = 0

    return (
        <ScoreCardWrapper>
            <Headline>Score</Headline>
                <ScoreOverview>
                    <LegendHoles>
                        <span>Holes</span>
                        {new Array(18).fill().map(() => {
                            const newId = uuid()
                            incrementNumber(holeNumber)
                            return <span key={newId}>{holeNumber}</span>
                            })
                        }
                    </LegendHoles> 
                    <PlayerScores>
                        {players.map((player) => {
                            const newId = uuid()
                            const playerName = player
                                return (
                                    <PlayerColumn key={newId}>
                                        <span>{playerName}</span>
                                        {new Array(18).fill().map(() => {
                                            const newId = uuid()
                                            incrementNumber(inputNumber)
                                            return <PlayerScoreInput key={newId} >
                                                    <label>
                                                        <input 
                                                        type="number" 
                                                        name={'hole' + inputNumber + playerName}
                                                        id={'hole' + inputNumber + playerName}
                                                        value={formInputs.location}
                                                        onChange={(event) => handleChange(event.target.name, event.target.value)}
                                                        onBlur={() => updateDirtyInputs('location')}
                                                        />
                                                    </label>
                                                </PlayerScoreInput>
                                            })
                                        }
                                    </PlayerColumn>
                                )
                            })
                        }
                    </PlayerScores> 
                </ScoreOverview> 
        </ScoreCardWrapper>
    )

    function incrementNumber(variable) {
        if (variable === 18) {
            inputNumber = 0
            variable === holeNumber ? holeNumber++ : inputNumber++
        }
        variable === holeNumber ? holeNumber++ : inputNumber++
    }
}

const ScoreCardWrapper = styled.div`
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

    span {
        width: 100%;
        text-align: center;
    }
`
const PlayerScores = styled.div`
    display: flex;
    overflow-y: auto;
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
        display: none;
    }
`
const PlayerColumn = styled.div`
    margin: 0 2px;
    padding-left: 1px;
    display: grid;
    grid-template-rows: repeat(19, 35px);
    align-items: center;
    min-width: 80px;
`
const PlayerScoreInput = styled.div`
    display: grid;
    gap: 10px;
    
    input {
        padding: 0;
        width: 100%;
        height: 100%;
        border-style: none;
        border-radius: 3px;
        color: var(--primary-dark);
        font-family: 'Montserrat', sans-serif;
    }

    input:nth-of-type(6n+1) {
        background-color: var(--separator);
    }
`