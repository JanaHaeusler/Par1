import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'

SinglePlayerScore.propTypes = {
    playerName: PropTypes.string.isRequired,
    formInputs: PropTypes.object.isRequired,
    updateDirtyInputs: PropTypes.func.isRequired,
    handleChangeScoreInputs: PropTypes.func.isRequired,
}

export default function SinglePlayerScore({playerName, formInputs, updateDirtyInputs, handleChangeScoreInputs}) {
console.log('FORMINPUTS SINGLE PLAYER SCORE ankommend', formInputs)
    return (
        <ScoreColumn>
            <span>{playerName}</span>
            {new Array(18).fill().map((_, index) => {
                const newId = uuid()
                const inputNumber = index + 1
                const holeName = 'hole' + inputNumber
                return( 
                    <SingleScoreInput key={newId} >
                        <label>
                            <input 
                            type="number" 
                            name={holeName + playerName}
                            id={holeName + playerName}
                            placeholder="38"
                            value={formInputs.scores[playerName][holeName]}
                            onChange={(event) => {   
                                console.log(' EVENT TARGET NAME', event.target.name)     
                                console.log(' EVENT TARGET VALUE', event.target.value)     
                                handleChangeScoreInputs(event.target.name, event.target.value)
                            }
                            }
                            // onBlur={() => updateDirtyInputs('location')}
                            />
                        </label>
                    </SingleScoreInput>
                    )                         
                })
            }
        </ScoreColumn>
    )
}

const ScoreColumn = styled.div`
    margin: 0 2px;
    padding-left: 1px;
    display: grid;
    grid-template-rows: repeat(19, 35px);
    align-items: center;
    min-width: 80px;
`
const SingleScoreInput = styled.div`
    display: grid;
    gap: 10px;
    
    input {
        padding: 0;
        width: 100%;
        height: 100%;
        border-style: none;
        border-radius: 3px;
        background-color: var(--separator);
        color: var(--primary-dark);
        font-family: 'Montserrat', sans-serif;
    }
`