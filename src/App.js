import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import AppFooter from './app/AppFooter'
import AppHeader from './app/AppHeader'
import useGameData from './app/useGameData'
import CreatePage from './create/CreatePage'
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
    updateTargetProfile,
  } = useGameData()

  return (
    <AppWrapper>
      <Header />
      <Main>
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
            <DetailsPage targetProfile={targetProfile} />
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
      </Main>
      <Footer />
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 600px;
  margin: 0 auto;
`
const Header = styled(AppHeader)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`
const Main = styled.main`
  padding: 70px 10px 60px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
const Footer = styled(AppFooter)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`
