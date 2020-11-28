import styled from 'styled-components/macro'
import useGameData from './hooks/useGameData'
import SaveGameForm from './components/SaveGameForm'
import GameCardsList from './components/GameCardsList'

function App() {

  const { addGameProfile, savedGameProfiles, deleteGameProfile } = useGameData()
 
  return (
    <AppWrapper>
      <SaveGameForm onSubmit={addGameProfile} />
      <GameCardsList savedGameProfiles={savedGameProfiles} onDelete={deleteGameProfile}/>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
`
