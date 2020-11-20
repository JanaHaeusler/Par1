import styled from 'styled-components/macro'
import useFormData from './hooks/useFormData'
import SaveGameForm from './components/SaveGameForm'
import GameCardsList from './components/GameCardsList'

function App() {

  const { addGameProfile, savedGameProfiles } = useFormData()
 
  return (
    <AppWrapper>
      <SaveGameForm onSubmit={addGameProfile} />
      <GameCardsList savedGameProfiles={savedGameProfiles} />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
`
