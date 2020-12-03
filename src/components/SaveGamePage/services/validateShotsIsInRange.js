import validateIsNotEmpty from './validateIsNotEmpty'

export default function validateShotsIsInRange(shots) {
    return validateIsNotEmpty(shots) && shots >= 18 && shots <= 126
}