import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import SinglePlayerScore from '../SinglePlayerScore'

ScoreCard.propTypes = {
    formInputs: PropTypes.object.isRequired,
    targetProfile: PropTypes.object.isRequired,
    savedGameProfiles: PropTypes.object.isRequired,
    updateDirtyInputs: PropTypes.func.isRequired,
    handleChangeScoreInputs: PropTypes.func.isRequired,
}

export default function ScoreCard({
    formInputs, 
    savedGameProfiles,
    targetProfile,
    updateDirtyInputs,
    handleChangeScoreInputs, 
    className}) {

        const players = targetProfile.players.allNames
    

        console.log({targetProfile})

        const [scoreCardInputs, setScoreCardInputs] = useState({})

        function handleChangeScoreCard(inputName, inputValue) {
            const inputNameSplitted = inputName.split(/(\d+)/)
            const holeName =  inputNameSplitted[0] + inputNameSplitted[1]
            const playerName = inputNameSplitted[2]
            
            setScoreCardInputs({
                ...scoreCardInputs,
                [playerName]: { ...scoreCardInputs[playerName], [holeName]: inputValue }
            })
        

        }

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
                                            scoreCardInputs={scoreCardInputs}
                                            targetProfile={targetProfile}
                                            formInputs={formInputs}
                                            handleChangeScoreCard={handleChangeScoreCard}
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