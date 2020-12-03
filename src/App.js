import styled from 'styled-components/macro'
import {Switch, Route, useHistory} from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Navigation from './components/layout/Navigation'
import useGameData from './hooks/useGameData'
import SaveGamePage from './components/SaveGamePage/SaveGamePage'
import GameCardsPage from './components/GameCardsPage/GameCardsPage'


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

  const history = useHistory()

  return (
    <AppWrapper>
      <HeaderWrapper>
        <Header/>
      </HeaderWrapper>
      <MainWrapper>
        <Switch>  
          <Route exact path="/">
            <GameCardsPage 
                savedGameProfiles={savedGameProfiles} 
                deleteGameProfile={deleteGameProfile} 
                prepareEditModus={prepareEditModus}
                switchToSavedGamePage={switchToSavedGamePage}
            />
          </Route>
          <Route path="/saveGame">
            <SaveGamePage 
                addGameProfile={addGameProfile} 
                isEditFormShown={isEditFormShown} 
                targetProfile={targetProfile} 
                editGameProfile={editGameProfile}
                cancelEditModus={cancelEditModus}
                switchToGameCardsPage={switchToGameCardsPage}
            />
          </Route>
          <Route path="/*">
            <GameCardsPage 
                savedGameProfiles={savedGameProfiles} 
                deleteGameProfile={deleteGameProfile} 
                prepareEditModus={prepareEditModus}
                switchToSavedGamePage={switchToSavedGamePage}
            />
          </Route>
        </Switch> 
      </MainWrapper>
      <FooterWrapper>
        <Navigation/>
      </FooterWrapper>
    </AppWrapper>
  )

  function switchToGameCardsPage() {
    history.push('/')
  }

  function switchToSavedGamePage() {
    history.push('/saveGame')
  }
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