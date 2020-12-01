import styled from 'styled-components/macro'
import useGameData from './hooks/useGameData'
import SaveGameForm from './components/SaveGameForm'
import GameCardsList from './components/GameCardsList'

function App() {

  const { 
    targetProfile, 
    savedGameProfiles, 
    isEditFormShown, 
    addGameProfile, 
    deleteGameProfile, 
    editGameProfile, 
    prepareEditModus, 
    cancelEditModus } = useGameData()
  

  return (
    <AppWrapper>
      {isEditFormShown ? 
        <SaveGameForm 
            onSubmit={addGameProfile} 
            isEditFormShown={isEditFormShown} 
            targetProfile={targetProfile} 
            editGameProfile={editGameProfile}
            cancelEditModus={cancelEditModus}/>
      : 
      <SaveGameFormWrapper>
        <SaveGameForm onSubmit={addGameProfile} />
        <GameCardsList 
            savedGameProfiles={savedGameProfiles} 
            onDelete={deleteGameProfile} 
            onEdit={prepareEditModus}/>
      </SaveGameFormWrapper>
      }
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  padding: 10px;
  margin: 5px auto;
  max-width: 600px;
`
const SaveGameFormWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
`