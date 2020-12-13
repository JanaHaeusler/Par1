import styled from 'styled-components/macro'
import {Switch, Route, useHistory} from 'react-router-dom'
import useGameData from './create/useGameData'
import useForm from './create/useForm'
import AppHeader from './app/AppHeader'
import AppFooter from './app/AppFooter'
import CreatePage from './create/CreatePage'
import OverviewPage from './overview/OverviewPage'

function App() {

  const { 
      targetProfile, 
      savedGameProfiles, 
      isEditFormShown, 
      newGameProfile,
      createGameProfile,
      addGameProfile, 
      deleteGameProfile, 
      editGameProfile, 
      prepareEditModus, 
      cancelEditModus } = useGameData()
  
    const {
        formInputs, 
        scoreCardInputs,
        isSaveButtonShown,
        isScoreCardShown,
        updateDirtyInputs,
        handleChange,
        handleChangeScoreInputs,
        showErrorMessage,
        createScoreCard,
        handleGameInfoSubmit,
        handleScoreCardSubmit,
        handleCancelEditModus,
        resetForm } = useForm({
                              targetProfile,
                              isEditFormShown,
                              newGameProfile,
                              createGameProfile,
                              addGameProfile,
                              editGameProfile,
                              cancelEditModus,
                              showOverviewPage})

  const history = useHistory()

  return (
    <AppWrapper>
      <HeaderStyled/>
      <MainWrapper>
        <Switch>  
          <Route exact path="/">
            <OverviewPage 
                savedGameProfiles={savedGameProfiles} 
                deleteGameProfile={deleteGameProfile} 
                prepareEditModus={prepareEditModus}
                showCreatePage={showCreatePage}
            />
          </Route>
          <Route path="/create">
            <CreatePage 
                formInputs={formInputs}
                scoreCardInputs={scoreCardInputs}
                targetProfile={targetProfile}
                newGameProfile={newGameProfile}
                savedGameProfiles={savedGameProfiles} 
                isSaveButtonShown={isSaveButtonShown}
                isEditFormShown={isEditFormShown}
                isScoreCardShown={isScoreCardShown}
                updateDirtyInputs={updateDirtyInputs}
                handleChange={handleChange}
                handleChangeScoreInputs={handleChangeScoreInputs}
                showErrorMessage={showErrorMessage}
                createScoreCard={createScoreCard}
                handleGameInfoSubmit={handleGameInfoSubmit}
                handleScoreCardSubmit={handleScoreCardSubmit}
                handleCancelEditModus={handleCancelEditModus}
            />
          </Route>
          <Route path="/*">
            <OverviewPage 
                savedGameProfiles={savedGameProfiles} 
                deleteGameProfile={deleteGameProfile} 
                prepareEditModus={prepareEditModus}
                showCreatePage={showCreatePage}
            />
          </Route>
        </Switch> 
      </MainWrapper>
      <FooterStyled handleClick={resetForm}/>
    </AppWrapper>
  )

  function showOverviewPage() {
    history.push('/')
  }

  function showCreatePage() {
    history.push('/create')
  }
}

export default App;

const AppWrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  max-width: 600px;
`
const HeaderStyled = styled(AppHeader)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`
const MainWrapper = styled.main`
  padding: 70px 10px 60px 10px;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`
const FooterStyled = styled(AppFooter)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`