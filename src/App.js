import styled from 'styled-components/macro'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import useGameData from './hooks/useGameData'
import SaveGameForm from './components/SaveGameForm'
import GameCardsList from './components/GameCardsList'
import {Plus, Home} from './components/Icons'

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
      <HeaderWrapper>
        <Header/>
      </HeaderWrapper>
      <MainWrapper>
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
      </MainWrapper>
      <FooterWrapper>
        <PlusIcon/>
        <HomeIcon/>
      </FooterWrapper>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  max-width: 600px;
`
const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100vw;
  max-width: 1240px;
  z-index: 10;
`
const MainWrapper = styled.main`
  padding: 10px;
  margin: 60px auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
const SaveGameFormWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
`
const FooterWrapper = styled(Footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  max-width: 1240px;
`
const PlusIcon = styled(Plus)`
  stroke: var(--text-light);
`
const HomeIcon = styled(Home)`
  fill: var(--text-light);
`