import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'

ScoreCard.propTypes = {
    formInputs: PropTypes.object.isRequired,
    updateDirtyInputs: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    showErrorMessage: PropTypes.func.isRequired,
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
                <TableWrapper>
                    
                
                    
                    <TableLegend>
                        <span>Holes</span>
                        <HoleLegendWrapper>
                            {new Array(18).fill().map(() => {
                                    const newId = uuid()
                                    incrementNumber(holeNumber)
                                    return <span key={newId}>{holeNumber}</span>
                                })
                            }
                        </HoleLegendWrapper>
                    </TableLegend> 
                    <PlayerWrapper>
                        {players.map((player) => {
                            const newId = uuid()
                            const playerName = player
                            incrementNumber(inputNumber)

                            return (
                                <Player  key={newId} >
                                    <span>{playerName}</span>
                                    <HoleWrapperAll>
                                        {new Array(18).fill().map(() => {
                                        const newId = uuid()
                                        
                                        return <HoleWrapper key={newId} >
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
                                            </HoleWrapper>
                                        })
                                        }
                                    </HoleWrapperAll>
                                </Player>
                            )
                            })
                        }
                        
                    </PlayerWrapper> 
                    </TableWrapper> 
        </ScoreCardWrapper>
    )

    function incrementNumber(variable) {
        console.log(variable)
        variable < 18 && variable === holeNumber ? holeNumber++ : inputNumber++
    }
}


const ScoreCardWrapper = styled.div`
    
    /* margin: 0;
    padding: 0;
    display: grid;
    width: 100%;
    border: none; */
   

`
const Headline = styled.h3`
   text-align: center;
   text-transform: uppercase;
`




const TableWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
`
const TableLegend = styled.div`
    display: grid;
    grid-template-rows: 1fr 18fr;
    


    
`
const HoleLegendWrapper = styled.div`
    display: grid;
    gap: 10px;
`

const PlayerWrapper= styled.div`
    display: flex;
    /* grid-template-columns: 2fr;
    grid-auto-columns: 1fr; */
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
    display: none;
    }
`
const Player = styled.div`
    display: grid;
    min-width: 80px;
`






const HoleWrapperAll = styled.div`
    display: grid;
    gap: 10px;
`


const HoleWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    grid-template-rows: 1fr;
    gap: 3px;
    border-bottom: 1px solid var(--primary-dark);

    span {
        /* margin-top: 5px; */
        text-align: center;
        /* font-size: 0.7rem; */
        /* color: var(--text-dark); */
    }

    label {
        width: 300%;
    }

    input {
        padding: 0;
        width: 100%;
        border-style: none;
        color: var(--primary-dark);
        font-family: 'Montserrat', sans-serif;
    }
`