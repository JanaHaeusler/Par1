import PropTypes from 'prop-types'
import GameDetails from '../GameDetails'

DetailsPage.propTypes = {
    targetProfile: PropTypes.object.isRequired,
}

export default function DetailsPage({targetProfile}) {

    return (
        <GameDetails
        targetProfile={targetProfile}
        />
    )
}