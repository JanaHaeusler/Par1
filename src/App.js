import styled from 'styled-components/macro'
import useFormData from './hooks/useFormData'
import SaveGameForm from './components/SaveGameForm'
import GameCard from './components/GameCard'


function App() {

  const { gameProfile, setGameProfile, savedGameProfiles, setSavedGameProfiles } = useFormData()
 
  return (
    <AppWrapper>
      <SaveGameForm gameProfile={gameProfile} setGameProfile={setGameProfile} savedGameProfiles={savedGameProfiles} setSavedGameProfiles={setSavedGameProfiles} />
      <GameCardListWrapper>
        {savedGameProfiles.map(({location, date, players, winner, shots, _id}) => 
          <GameCard key={_id} location={location} date={date} players={players} winner={winner} shots={shots}/>
        )}
      </GameCardListWrapper>

    </AppWrapper>
  );
}

export default App;


const AppWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
`
const GameCardListWrapper = styled.div`
  display: grid;
  gap: 10px;
`