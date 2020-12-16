import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../Button'
import { v4 as uuid } from 'uuid'
import { CancelIconDark, CheckIconLight } from '../Icons/Icons'

Form.propTypes = {
    inputsKeyInfos: PropTypes.object.isRequired,
    inputsScores: PropTypes.object.isRequired,
    isSaveButtonShown: PropTypes.bool,
    isScoreCardShown: PropTypes.bool.isRequired,
    updateDirtyInputsKeyInfos: PropTypes.func.isRequired,
    handleChangeKeyInfos: PropTypes.func.isRequired,
    handleChangeScores: PropTypes.func.isRequired,
    showErrorMessage: PropTypes.func.isRequired,
    handleSubmitKeyInfos: PropTypes.func.isRequired,
    handleSubmitScores: PropTypes.func.isRequired,
    handleCancel: PropTypes.func,
}

export default function Form({
    inputsKeyInfos, 
    inputsScores,
    isSaveButtonShown,
    isScoreCardShown,
    updateDirtyInputsKeyInfos,
    handleChangeKeyInfos,
    handleChangeScores,
    showErrorMessage,
    handleSubmitKeyInfos,
    handleSubmitScores,
    handleCancel}) {

    return (
        <FormsWrapper>
            {!isScoreCardShown ?
            <FormKeyInfos noValidate onSubmit={handleSubmitKeyInfos} data-testid="form">
                <Headline>Info</Headline>
                <KeyInfos>
                    <label>
                        Location
                    <input 
                        type="text" 
                        name="location"
                        id="location"
                        placeholder="Type location ..."
                        value={inputsKeyInfos.location}
                        onChange={(event) => handleChangeKeyInfos(event.target.name, event.target.value)}
                        onBlur={() => updateDirtyInputsKeyInfos('location')}
                    />
                    </label>
                    <Note>{showErrorMessage('location')}</Note>
                    
                    <label>
                        Date
                    <input 
                        type="date" 
                        name="date"
                        id="date"
                        value={inputsKeyInfos.date}
                        onChange={(event) => handleChangeKeyInfos(event.target.name, event.target.value)}
                        onBlur={() => updateDirtyInputsKeyInfos('date')}
                    />
                    </label>
                    <Note>{showErrorMessage('date')}</Note>

                    <label>
                        Player(s)
                    <input 
                        type="text" 
                        name="players"
                        id="players"
                        placeholder="John, Jane"
                        value={inputsKeyInfos.players}
                        onChange={(event) => handleChangeKeyInfos(event.target.name, event.target.value)}
                        onBlur={() => updateDirtyInputsKeyInfos('players')}
                    />
                    </label>
                    <Note>{showErrorMessage('players')}</Note>
                    
                    <label>
                        Winner(s)
                    <input 
                        type="text" 
                        name="winner"
                        id="winner"
                        placeholder="Jane"
                        value={inputsKeyInfos.winner}
                        onChange={(event) => handleChangeKeyInfos(event.target.name, event.target.value)}
                        onBlur={() => updateDirtyInputsKeyInfos('winner')}
                    />
                    </label>
                    <Note>{showErrorMessage('winner')}</Note>

                    <label>
                        Total Shots Winner(s)
                    <input 
                        type="number"
                        name="shots"
                        id="shots"
                        placeholder="38"
                        value={inputsKeyInfos.shots}
                        onChange={(event) => handleChangeKeyInfos(event.target.name, event.target.value)}
                        onBlur={() => updateDirtyInputsKeyInfos('shots')}
                    />
                    </label>
                    <Note>{showErrorMessage('shots')}</Note>
                </KeyInfos>
                <ButtonWrapper>
                    <Button type="button" onClick={handleCancel} iconComponent={<CancelIconDark/>} text="Cancel" data-testid="button-cancel"/>
                    <Button main disabled={!isSaveButtonShown} iconComponent={<CheckIconLight/>} text="Save" data-testid="button-save"/>
                </ButtonWrapper>
                <Note>*Please do not clear your browsers cache, in order to permanently save your game details</Note>
            </FormKeyInfos>

            : 

            Object.keys(inputsScores).length !== 0 &&

            <FormScores onSubmit={handleSubmitScores}>
                <Headline>Score</Headline>
                <ScoreOverview>
                    <Legend>
                        <span>Holes</span>
                        {new Array(18).fill().map((_, index) => {
                            const newId = uuid()
                            return <span key={newId}>{index + 1}</span>
                            })
                        }
                    </Legend> 
                    <ScoresAllPlayers>
                        {inputsScores.players.map((player) => {
                            const newId = uuid()
                            const playerName = player    
                                return (
                                    <ScoreSinglePlayer key={newId} >
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
                                                            name={holeName + '-' + playerName}
                                                            id={holeName + '-' + playerName}
                                                            value={inputsScores.scores[playerName][holeName]}
                                                            onChange={(event) => {handleChangeScores(event.target.name, event.target.value)}}
                                                            // onBlur={() => updateDirtyInputs()}
                                                            />
                                                        </label>
                                                    </SingleScoreInput>
                                                    )                         
                                            })
                                        }
                                    </ScoreSinglePlayer>
                                )
                        })}
                    </ScoresAllPlayers> 
                </ScoreOverview> 
                <ButtonWrapper>
                    <Button type="button" onClick={handleCancel} iconComponent={<CancelIconDark/>} text="Cancel" data-testid="button-cancel"/>
                    <Button main iconComponent={<CheckIconLight/>} text="Save" data-testid="button-save"/>
                </ButtonWrapper>
            </FormScores>
            }
        </FormsWrapper>
    )
}

const FormsWrapper = styled.div`
    margin: 10px 20px;
    padding: 10px;
    border-radius: 25px;
    box-shadow: 0 0 10px var(--primary-medium);
    background-color: var(--text-light);
    color: var(--text-dark);
    font-size: 1rem;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    
    input[type=number] {
        -moz-appearance: textfield;
    }

    Button {
        margin-top: 15px;
        margin-bottom: 5px;
    }
`
const FormKeyInfos = styled.form`
    display: grid;
    place-items: center;
`
const Headline = styled.h3`
    text-align: center;
    text-transform: uppercase;
`
const KeyInfos = styled.fieldset`
    margin: 0;
    padding: 0;
    border: none;
    display: grid;
    width: 100%;

    label {
        margin-top: 10px;
        margin-bottom: 5px;
        font-family: 'Raleway', sans-serif;
    }

    input {
        display: block;
        margin-top: 3px;
        padding: 5px;
        width: 100%;
        border-style: none;
        border-bottom: 1px solid var(--primary-dark);
        color: var(--primary-dark);
        font-family: 'Montserrat', sans-serif;
    }
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 10px;
    width: 100%;
`
const Note = styled.span`
    margin-top: 5px;
    font-size: 0.7rem;
    color: var(--text-dark);
    
    :last-child {
        margin-bottom: 10px;
    }
`
const FormScores = styled.form`
    display: grid;
    place-items: center;

    span {
        font-family: 'Raleway', sans-serif;
    }
`
const ScoreOverview = styled.section`
    margin: 20px auto;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 20px;
    width: 90%;
`
const Legend = styled.div`
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
const ScoresAllPlayers = styled.div`
    display: flex;
    overflow-y: auto;
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
        display: none;
    }
`
const ScoreSinglePlayer = styled.div`
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