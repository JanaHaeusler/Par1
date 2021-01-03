import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import AppFooter from './app/AppFooter'
import AppHeader from './app/AppHeader'
import CreatePage from './create/CreatePage'
import useGameData from './app/useGameData'
import DetailsPage from './details/DetailsPage'
import EditPage from './edit/EditPage'
import OverviewPage from './overview/OverviewPage'

function App() {

  const { 
      newGameProfile,
      targetProfile, 
      savedGameProfiles, 
      createGameProfile,
      addGameProfile, 
      deleteGameProfile, 
      editGameProfile, 
      prepareEditPage, 
      prepareDetailsPage,
      updateTargetProfile } = useGameData()
  
  return (
    <AppWrapper>
      <HeaderStyled/>
      <MainWrapper>
        <Switch>  
          <Route exact path="/">
            <OverviewPage 
                savedGameProfiles={savedGameProfiles} 
                deleteGameProfile={deleteGameProfile} 
                prepareEditPage={prepareEditPage}
                prepareDetailsPage={prepareDetailsPage}
            />
          </Route>
          <Route path="/create">
            <CreatePage 
                newGameProfile={newGameProfile}
                createGameProfile={createGameProfile}
                addGameProfile={addGameProfile}
            />
          </Route>
          <Route path="/details">
            <DetailsPage 
                targetProfile={targetProfile}
            />
          </Route>
          <Route path="/edit">
            <EditPage 
                targetProfile={targetProfile}
                updateTargetProfile={updateTargetProfile}
                editGameProfile={editGameProfile}
            />
          </Route>
          <Route path="/*">
            <OverviewPage 
                savedGameProfiles={savedGameProfiles} 
                deleteGameProfile={deleteGameProfile} 
                prepareEditPage={prepareEditPage}
                prepareDetailsPage={prepareDetailsPage}
            />
          </Route>
        </Switch> 
      </MainWrapper>
      <FooterStyled/>
    </AppWrapper>
  )
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