import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import GameList from '../GameList'

OverviewPage.propTypes = {
  savedGameProfiles: PropTypes.object.isRequired,
  deleteGameProfile: PropTypes.func.isRequired,
  prepareEditPage: PropTypes.func.isRequired,
  prepareDetailsPage: PropTypes.func.isRequired,
}

export default function OverviewPage({
  savedGameProfiles,
  deleteGameProfile,
  prepareEditPage,
  prepareDetailsPage,
}) {
  return (
    <>
      <Headline>Your Games</Headline>
      <GameList
        savedGameProfiles={savedGameProfiles}
        onDelete={deleteGameProfile}
        onEdit={prepareEditPage}
        onDetails={prepareDetailsPage}
      />
    </>
  )
}

const Headline = styled.h1`
  margin: 0 0 15px 0;
  text-align: center;
  text-transform: uppercase;
  color: var(--light);

  &::after {
    margin: 8px auto 30px;
    display: block;
    width: 120px;
    height: 2px;
    content: '';
    background-color: var(--light);
    align-content: center;
  }
`
