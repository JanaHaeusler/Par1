import useFormData from './hooks/useFormData'
import SaveGameForm from './components/SaveGameForm'
import GameCard from './components/GameCard'
import styled from 'styled-components/macro'

function App() {

  const { savedGameProfiles } = useFormData()  
  
  
  return (
    <AppWrapper>
      <SaveGameForm/>
      <GameCardListWrapper>
        {savedGameProfiles.map(({location, date, players, winner, shots}) => 
          (<GameCard location={location} date={date} players={players} winner={winner} shots={shots}/>)
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
`