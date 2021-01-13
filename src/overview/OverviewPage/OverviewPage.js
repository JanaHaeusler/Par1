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
  color: var(--light);

  &::after {
    height: 2px;
    width: 120px;
    margin: 8px auto 30px;
    display: block;
    align-content: center;
    background-color: var(--light);
    content: '';
  }
`
