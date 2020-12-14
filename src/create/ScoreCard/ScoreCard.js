import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { v4 as uuid } from 'uuid'
import SinglePlayerScore from '../SinglePlayerScore'

ScoreCard.propTypes = {
    scoreCardInputs: PropTypes.object.isRequired,
    handleChangeScoreInputs: PropTypes.func.isRequired,
    updateDirtyInputs: PropTypes.func.isRequired,
    handleScoreCardSubmit: PropTypes.func.isRequired,
}

export default function ScoreCard({
    scoreCardInputs,
    handleChangeScoreInputs, 
    updateDirtyInputs,
    handleScoreCardSubmit,
    className}) {

    return (
        <FormScoreCard className={className} onSubmit={handleScoreCardSubmit}>
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
                        {scoreCardInputs.players.map((player) => {
                            const newId = uuid()
                            const playerName = player    
                                return <SinglePlayerScore 
                                            key={newId} 
                                            playerName={playerName}
                                            scoreCardInputs={scoreCardInputs}
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

const FormScoreCard = styled.div`
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
const AllPlayerScores = styled.div`
    display: flex;
    overflow-y: auto;
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
        display: none;
    }
`