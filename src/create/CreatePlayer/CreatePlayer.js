import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'


CreatePlayer.propTypes = {
    formInputs: PropTypes.object.isRequired,
    updateDirtyInputs: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    changeStatus: PropTypes.func.isRequired,
}

export default function CreatePlayer({formInputs, updateDirtyInputs, handleChange, changeStatus}) {

    const [numberPlayers, setNumberPlayers] = useState(['player1'])
console.log(numberPlayers)
    return ( 
        <CreatePlayerWrapper>
            <span>Who is playing?</span>
            {numberPlayers.map((player) => {
                const newId = uuid()
                return (
                <label key={newId}>
                    <input 
                        type="text"
                        name={player}
                        id={player}
                        placeholder={'Type player name here'}
                        value={formInputs.shots}
                        onChange={(event) => handleChange(event.target.name, event.target.value)}
                        onBlur={() => updateDirtyInputs('shots')}
                    />
                </label>
                )
            })}

            <button onClick={addPlayer}>
                Add Player
            </button>

            <button onClick={changeStatus}>
                Next
            </button>

        </CreatePlayerWrapper>
    )

    function addPlayer() {
        const number = numberPlayers.length
        setNumberPlayers([
            ...numberPlayers, 'player' + number
        ])
    }
}


const CreatePlayerWrapper = styled.form`
    margin: 10px 20px;
    padding: 0 10px 10px 10px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    box-shadow: 0 0 10px var(--primary-medium);
    background-color: var(--text-light);
    color: var(--text-dark);
    font-size: 1rem;

    Button {
        margin-top: 15px;
        margin-bottom: 5px;
    }
`