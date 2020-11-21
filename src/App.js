import styled from 'styled-components/macro'
import useGameData from './hooks/useGameData'
import SaveGameForm from './components/SaveGameForm'
import GameCardsList from './components/GameCardsList'

function App() {

  const { addGameProfile, savedGameProfiles } = useGameData()
 
  return (
    <AppWrapper>
      <SaveGameForm onSave={addGameProfile} />
      <GameCardsList savedGameProfiles={savedGameProfiles} />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
`
