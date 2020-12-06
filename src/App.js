import styled from 'styled-components/macro'
import {Switch, Route, useHistory} from 'react-router-dom'
import useGameData from './hooks/useGameData'
import useForm from './hooks/useForm'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Navigation from './components/layout/Navigation'
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
  
    const {
        formInputs, 
        showSaveButton,
        updateDirtyInputs,
        handleChange,
        showErrorMessage,
        handleSubmit,
        handleCancelEditModus,
        resetForm } = useForm({
                              targetProfile,
                              isEditFormShown,
                              addGameProfile,
                              editGameProfile,
                              cancelEditModus,
                              showGameCardsPage})

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
                showSaveGamePage={showSaveGamePage}
            />
          </Route>
          <Route path="/saveGame">
            <SaveGamePage 
                formInputs={formInputs}
                showSaveButton={showSaveButton}
                isEditFormShown={isEditFormShown}
                updateDirtyInputs={updateDirtyInputs}
                handleChange={handleChange}
                showErrorMessage={showErrorMessage}
                handleSubmit={handleSubmit}
                handleCancelEditModus={handleCancelEditModus}
            />
          </Route>
          <Route path="/*">
            <GameCardsPage 
                savedGameProfiles={savedGameProfiles} 
                deleteGameProfile={deleteGameProfile} 
                prepareEditModus={prepareEditModus}
                showSaveGamePage={showSaveGamePage}
            />
          </Route>
        </Switch> 
      </MainWrapper>
      <FooterWrapper>
        <Navigation handleClick={resetForm}/>
      </FooterWrapper>
    </AppWrapper>
  )

  function showGameCardsPage() {
    history.push('/')
  }

  function showSaveGamePage() {
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
  width: 100vw;
  max-width: 1240px;
  z-index: 10;
`
const MainWrapper = styled.main`
  padding: 70px 10px 60px 10px;
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  max-width: 1240px;
`