import styled from 'styled-components/macro'
import useGameData from './hooks/useGameData'
import SaveGameForm from './components/SaveGameForm'
import GameCardsList from './components/GameCardsList'

function App() {


  const { addGameProfile, savedGameProfiles, deleteGameProfile, prepareEditModus, targetProfile, editGameProfile, isEditFormShown, cancelEditModus } = useGameData()
  

  return (
    <AppWrapper>
      {isEditFormShown ? 
      <EditFormWrapper>
        <SaveGameForm onSubmit={addGameProfile} isEditFormShown={isEditFormShown} targetProfile={targetProfile} editGameProfile={editGameProfile} cancelEditModus={cancelEditModus}/>
      </EditFormWrapper>
      : 
      <MainWrapper>
        <SaveGameForm onSubmit={addGameProfile} />
        <GameCardsList savedGameProfiles={savedGameProfiles} onDelete={deleteGameProfile} onEdit={prepareEditModus}/>
      </MainWrapper>
      }
      
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  padding: 10px;
`
const MainWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
`
const EditFormWrapper = styled.div`
display: grid;
justify-items: center;
`


