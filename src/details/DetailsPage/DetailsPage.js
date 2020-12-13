import PropTypes from 'prop-types'
import GameDetails from '../GameDetails'

DetailsPage.propTypes = {
    targetProfile: PropTypes.object.isRequired,
    showOverviewPage: PropTypes.func.isRequired,
}

export default function DetailsPage({targetProfile, showOverviewPage}) {

    return (
        <GameDetails
        targetProfile={targetProfile}
        showOverviewPage={showOverviewPage}
        />
    )
}