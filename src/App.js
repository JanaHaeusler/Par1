import styled from 'styled-components/macro'
import useFormData from './hooks/useFormData'
import SaveGameForm from './components/SaveGameForm'
import GameCardsList from './components/GameCardsList'


function App() {

  const { gameProfile, setGameProfile, savedGameProfiles, setSavedGameProfiles } = useFormData()
 
  return (
    <AppWrapper>
      <SaveGameForm gameProfile={gameProfile} setGameProfile={setGameProfile} savedGameProfiles={savedGameProfiles} setSavedGameProfiles={setSavedGameProfiles} />
      <GameCardsList savedGameProfiles={savedGameProfiles} />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
`
