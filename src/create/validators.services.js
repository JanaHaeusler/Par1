function validateIsNotEmpty(input) {
    return  (input?.trim() !== '')
}
 
function validateIsCorrectDate(date) {
    const regEx = /^\d{4}-\d{2}-\d{2}$/;
    return (date?.trim() !== '' && date?.match(regEx))
}

function validateShotsIsInRange(shots) {
    return validateIsNotEmpty(shots) && shots >= 18 && shots <= 126
}

export { validateIsNotEmpty, validateIsCorrectDate, validateShotsIsInRange }